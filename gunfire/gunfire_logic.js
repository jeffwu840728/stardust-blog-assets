const gunfireApp = (function () {
  "use strict";

  /**
   * Gun-Reb 專屬系統主模組 (單例模式)
   * 負責所有的資料渲染 (Data-Driven) 與 UI 互動初始化
   */
  const StardustGunReb = {
    /**
     * 初始化生命週期：依序執行各個模組的 DOM 渲染與事件綁定
     */
    init() {
      this.renderMatrixCards();
      this.renderHeroProfile();
      this.renderSkillCards();
      this.renderBlessingCards();
      this.renderAwakeningCards();
      this.renderLinkCards();
      this.renderAchievements(); // 渲染：高級成就圖鑑與過濾系統
      this.renderPatchLogs();
      this.initTabs();
      this.initHoloTips();
      this.initDragToScroll();

      // 找出這篇文章中所有 stardust 開頭的元素並加上顯現標籤
      document.querySelectorAll('[id^="stardust-"], [class^="stardust-"]').forEach((el) => {
        el.classList.add("stardust-render-ready");
      });

      console.log("SYS_LOG: [槍火重生] 渲染完畢，視覺屏障已解除。");
    },

    /**
     * 獲取對應的 CSS 變數主題色
     * @param {string} themeName - 主題標籤 (如: gold, cyan)
     * @returns {string} 對應的 CSS 變數，若無則回傳系統預設色
     */
    getThemeColor(themeName) {
      const themes = {
        gold: "var(--color-brand-gold)",
        cyan: "var(--color-brand-cyan)",
        green: "var(--color-brand-green-tier)",
        red: "var(--color-brand-red)",
        orange: "var(--color-brand-orange)",
      };
      return themes[themeName] || "var(--sys-accent-color)";
    },
    /**
     * [模組] 戰術矩陣懶人包渲染器 (Data-Driven)
     */
    renderMatrixCards() {
      const container = document.getElementById("stardust-Gun-Reb-matrix-container");
      if (!container) return;

      const dataItems = container.querySelectorAll(".stardust-Gun-Reb-matrix-item");
      if (dataItems.length === 0) return;

      // 建立替換用的網格層
      let htmlOutput = `<div class="stardust-Gun-Reb-matrix-grid">`;

      dataItems.forEach((item, index) => {
        // 1. 讀取配置與防呆機制
        const title = item.getAttribute("data-title") || "未命名核心";
        const icon = item.getAttribute("data-icon") || "fa-solid fa-microchip";
        const theme = item.getAttribute("data-theme") || "default";

        // 若沒有寫 num，自動產生兩位數流水號 (01, 02...)
        const watermarkNum = item.getAttribute("data-num") || String(index + 1).padStart(2, "0");
        const themeVar = this.getThemeColor(theme);

        // 2. 抓取語法糖內的純淨 HTML 結構
        const content = item.innerHTML.trim();

        // 3. 封裝賽博風卡片結構
        htmlOutput += `
          <div class="stardust-Gun-Reb-matrix-card" style="--theme-color: ${themeVar};">
            <div class="stardust-Gun-Reb-matrix-card-title">
              <i class="${icon}"></i>
              ${title}
            </div>
            <p class="stardust-Gun-Reb-matrix-card-desc">
              ${content}
            </p>
            <div class="stardust-Gun-Reb-matrix-watermark">${watermarkNum}</div>
          </div>
        `;
      });

      htmlOutput += `</div>`;

      // 覆寫並渲染，將語法糖轉換為真實 DOM
      container.innerHTML = htmlOutput;

      // 確保如有新增圖片能與全局 Lightbox 連動
      setTimeout(() => this.initLightbox(), 100);
    },
    /**
     * [模組] 全息英雄機密檔案卡渲染器 (Data-Driven 升級版)
     * 已支援自動從 STARDUST_ASSETS 讀取「立繪」與「天賦列表」
     */
    renderHeroProfile() {
      const container = document.getElementById("stardust-Gun-Reb-hero-profile-container");
      if (!container) return;

      const heroData = container.querySelector(".stardust-Gun-Reb-hero-data");
      if (!heroData) return;

      const name = heroData.getAttribute("data-hero-name") || "SYS_ERROR";
      const dbHero = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Heroes?.[name]) || null;

      // 取得立繪 (優先讀取資料庫)
      let rawImg = heroData.getAttribute("data-hero-img");
      if (dbHero?.Role?.[name]?.img) rawImg = dbHero.Role[name].img;
      const img = rawImg || `https://placehold.co/400x500/111/ffcc00?text=${name}`;

      const role = heroData.getAttribute("data-hero-role") || "未定";
      const prosRaw = heroData.getAttribute("data-pros") || "";
      const consRaw = heroData.getAttribute("data-cons") || "";
      const descHtml = heroData.querySelector(".stardust-Gun-Reb-hero-desc")?.innerHTML || "";

      // 渲染定位 HUD 與優缺點 (邏輯同前)
      let roleHtml = "";
      role.split("/").forEach((part, i) => {
        roleHtml += `${i === 0 ? '<span class="stardust-Gun-Reb-hp-hud-dot"></span>' : '<span class="stardust-Gun-Reb-hp-hud-slash">/</span>'}${part.trim()}`;
      });
      let prosHtml = "";
      prosRaw.split("|").forEach((p) => {
        if (p.trim()) prosHtml += `<li>${p.trim()}</li>`;
      });
      let consHtml = "";
      consRaw.split("|").forEach((c) => {
        if (c.trim()) consHtml += `<li>${c.trim()}</li>`;
      });

      // --- [核心修改：SEO 友善的天賦渲染] ---
      let talentsHtml = "";
      // 抓取 HTML 裡預留的 SEO H4 標籤
      const seoTalentItems = container.querySelectorAll(".stardust-Gun-Reb-talent-item");

      if (seoTalentItems.length > 0) {
        seoTalentItems.forEach((item) => {
          const title = item.querySelector("h4")?.textContent.trim() || "未知天賦";

          // 從資料庫匹配資料
          const dbData = dbHero?.talents?.[title] || {};
          const tFallbackImg = `https://placehold.co/100x100/111/00e5ff?text=${encodeURIComponent(title)}`;
          const tImg = dbData.img || tFallbackImg;
          const tDesc = dbData.desc || "SYS_NO_DATA // 暫無數據";

          talentsHtml += `
            <div class="stardust-Gun-Reb-hp-talent-card">
              <div class="stardust-Gun-Reb-hp-talent-icon">
                <img src="${tImg}" alt="${title}" loading="lazy" class="stardust-Gun-Reb-lightbox-trigger" onerror="this.src='${tFallbackImg}'" />
              </div>
              <div class="stardust-Gun-Reb-hp-talent-desc">
                <h4>${title}</h4> <p>${tDesc}</p>
              </div>
            </div>
          `;
        });
      }

      // 輸出最終結構 (略，同之前版本，確保 innerHTML 包含 talentsHtml)
      const finalHtml = `
          <div class="stardust-Gun-Reb-hp-card">
            <div class="stardust-Gun-Reb-hp-top-section">
              <div class="stardust-Gun-Reb-hp-image-container">
                <img src="${img}" alt="${name}" loading="lazy" class="stardust-Gun-Reb-lightbox-trigger" />
              </div>
              <div class="stardust-Gun-Reb-hp-info-panel">
                <div class="stardust-Gun-Reb-hp-intro-wrapper">
                  <div class="stardust-Gun-Reb-hp-name-row">
                    <h2>${name}</h2>
                    <div class="stardust-Gun-Reb-hp-role-hud">
                      <div class="stardust-Gun-Reb-hp-hud-label">Combat Role // 角色定位</div>
                      <div class="stardust-Gun-Reb-hp-hud-value">${roleHtml}</div>
                    </div>
                  </div>
                  <p class="stardust-Gun-Reb-hp-desc-text">${descHtml}</p>
                </div>
                <div class="stardust-Gun-Reb-hp-analysis-section">
                  <div class="stardust-Gun-Reb-hp-procon-card stardust-Gun-Reb-hp-tac-pros">
                    <div class="stardust-Gun-Reb-hp-procon-title"><i class="fa-solid fa-shield-halved"></i> 角色優勢</div>
                    <ul class="stardust-Gun-Reb-hp-procon-list">${prosHtml}</ul>
                  </div>
                  <div class="stardust-Gun-Reb-hp-procon-card stardust-Gun-Reb-hp-tac-cons">
                    <div class="stardust-Gun-Reb-hp-procon-title"><i class="fa-solid fa-triangle-exclamation"></i> 角色弱點</div>
                    <ul class="stardust-Gun-Reb-hp-procon-list">${consHtml}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="stardust-Gun-Reb-hp-bottom-section">
              <div class="stardust-Gun-Reb-hp-section-label">Character talents // 角色天賦</div>
              <div class="stardust-Gun-Reb-hp-talent-list">${talentsHtml}</div>
            </div>
          </div>
      `;
      container.innerHTML = finalHtml;
      setTimeout(() => this.initLightbox(), 100);
    },
    /**
     * [模組] 技能卡片渲染器
     */
    renderSkillCards() {
      const container = document.getElementById("stardust-Gun-Reb-skill-container");
      if (!container) return;
      const dataItems = container.querySelectorAll(".stardust-Gun-Reb-skill-item");
      if (dataItems.length === 0) return;

      // 1. [核心修復] 取得當前英雄名稱
      // 因為上一步的渲染已經覆寫了 HTML，我們改去抓剛產生的 <h2> 標籤內容
      const nameEl = document.querySelector(".stardust-Gun-Reb-hp-name-row h2");
      const heroName = nameEl ? nameEl.textContent.trim() : "SYS_ERROR";

      // 2. 獲取資料庫中的英雄物件
      const dbHero = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Heroes?.[heroName]) || null;

      let htmlOutput = "";
      dataItems.forEach((item) => {
        // [SEO 核心] 抓取 H4 作為查詢鍵值
        const h4Tag = item.querySelector("h4");
        const title = h4Tag ? h4Tag.textContent.trim() : item.getAttribute("data-title") || "SYS_ERROR";

        // 從資料庫讀取該技能資料
        const dbSkill = dbHero?.skills?.[title] || {};

        const theme = item.getAttribute("data-theme") || "default";
        const themeVar = this.getThemeColor(theme);
        const key = item.getAttribute("data-key") || "E";
        const typeText = item.getAttribute("data-type-text") || "技能 // SKILL";

        // 3. 圖片對接 (優先級：資料庫 > HTML舊資料 > 系統佔位圖)
        const rawImg = item.getAttribute("data-img");
        const dbImg = dbSkill.img;
        const fallbackImg = `https://placehold.co/100x100/111/ffcc00?text=${encodeURIComponent(title)}`;
        const finalImg = dbImg || (rawImg && rawImg.trim() !== "" ? rawImg : fallbackImg);

        // 狀態標籤
        const statsStr = item.getAttribute("data-stats") || "";
        let statsHtml = "";
        if (statsStr) {
          const statParts = statsStr.split("|");
          statParts.forEach((part) => {
            const [icon, text] = part.split(",");
            statsHtml += `<span class="stardust-Gun-Reb-stat-badge"><i class="fa-solid ${icon}"></i> ${text}</span>`;
          });
        }

        // 4. 基礎描述對接 (優先級：資料庫 > HTML舊資料)
        const rawDescHtml = item.querySelector(".stardust-Gun-Reb-s-desc")?.innerHTML || "";
        const descHtml = dbSkill.desc || rawDescHtml || "SYS_NO_DATA // 暫無基礎描述";

        // 實戰機制與細節 (因為是攻略特定內容，保留在 HTML 彈性編寫並直接讀取)
        const mechHtml = item.querySelector(".stardust-Gun-Reb-s-mech")?.innerHTML || "";
        const tacHtml = item.querySelector(".stardust-Gun-Reb-s-tac")?.innerHTML || "";

        let footerHtml = "";
        if (mechHtml || tacHtml) {
          footerHtml += `<div class="stardust-Gun-Reb-skill-footer">`;

          if (mechHtml) {
            footerHtml += `
              <div class="stardust-Gun-Reb-mechanic-box">
                <span class="stardust-Gun-Reb-mech-label">SYS.LOG // 機制說明</span>
                <ul class="stardust-Gun-Reb-mechanic-list">${mechHtml}</ul>
              </div>
            `;
          }

          if (tacHtml) {
            footerHtml += `
              <div class="stardust-Gun-Reb-skill-tactics">
                <div class="stardust-Gun-Reb-footer-title">
                  <i class="fa-solid fa-crosshairs"></i> 實戰細節
                </div>
                <p>${tacHtml}</p>
              </div>
            `;
          }
          footerHtml += `</div>`;
        }

        htmlOutput += `
          <div class="stardust-Gun-Reb-skill-card" style="--skill-theme: ${themeVar};">
            <div class="stardust-Gun-Reb-skill-icon-box">
              <div class="stardust-Gun-Reb-skill-keybind">${key}</div>
              <img src="${finalImg}" alt="${title}" loading="lazy" class="stardust-Gun-Reb-skill-image stardust-Gun-Reb-lightbox-trigger" onerror="this.src='${fallbackImg}'" />
            </div>
            <div class="stardust-Gun-Reb-skill-content">
              <div class="stardust-Gun-Reb-skill-header">
                <div class="stardust-Gun-Reb-skill-name">
                  <h4>${title}</h4> 
                  <span class="stardust-Gun-Reb-skill-type">${typeText}</span>
                </div>
                <div class="stardust-Gun-Reb-skill-stats">
                  ${statsHtml}
                </div>
              </div>
              <div class="stardust-Gun-Reb-skill-desc">${descHtml}</div>
              ${footerHtml}
            </div>
          </div>
        `;
      });

      container.innerHTML = htmlOutput;
      // 綁定動態生成的圖片點擊放大事件
      setTimeout(() => this.initLightbox(), 100);
    },

    /**
     * [模組] 靈佑卡片渲染器 (Data-Driven 升級版)
     * 從資料庫抓取圖片與全息提示 (data-tip)，並保留 HTML H4 以增強 SEO。
     */
    renderBlessingCards() {
      const container = document.getElementById("stardust-Gun-Reb-blessing-container");
      if (!container) return;
      const dataItems = container.querySelectorAll(".stardust-Gun-Reb-data-item");
      if (dataItems.length === 0) return;

      // 1. [核心對接] 取得當前英雄名稱 (從剛產生的 <h2> 抓取)
      const nameEl = document.querySelector(".stardust-Gun-Reb-hp-name-row h2");
      const heroName = nameEl ? nameEl.textContent.trim() : "SYS_ERROR";
      const dbHero = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Heroes?.[heroName]) || null;

      let htmlOutput = "";
      dataItems.forEach((item) => {
        // 2. [SEO 升級] 優先讀取 H4 標籤
        const h4Tag = item.querySelector("h4");
        const title = h4Tag ? h4Tag.textContent.trim() : item.getAttribute("data-title") || "SYS_ERROR";

        // 3. 從資料庫讀取該靈佑資料
        const dbBlessing = dbHero?.blessings?.[title] || {};

        // 4. 讀取內文：保留 HTML 內的詳盡實戰解說
        const descContainer = item.querySelector(".stardust-Gun-Reb-item-desc");
        let content = "";
        if (descContainer) {
          content = descContainer.innerHTML;
        } else {
          // 防呆機制：若無專屬 class，則複製 DOM 節點並手動刪除 H4 取得純內文
          const clone = item.cloneNode(true);
          const cloneH4 = clone.querySelector("h4");
          if (cloneH4) cloneH4.remove();
          content = clone.innerHTML.trim();
        }

        // 5. 資源對接 (圖片優先級：資料庫 > HTML > Fallback)
        const rawImg = item.getAttribute("data-img");
        const dbImg = dbBlessing.img;
        const fallbackImg = `https://placehold.co/150x150/111/ff8c00?text=${encodeURIComponent(title)}`;
        const finalImg = dbImg || (rawImg && rawImg.trim() !== "" ? rawImg : fallbackImg);

        // 6. 全息提示詞對接 (優先級：資料庫 desc > HTML data-tip)
        const rawTip = item.getAttribute("data-tip") || "";
        const finalTip = dbBlessing.desc || rawTip || "";

        const theme = item.getAttribute("data-theme") || "default";
        const themeVar = this.getThemeColor(theme);

        htmlOutput += `
          <div class="stardust-Gun-Reb-card" style="--stardust-Gun-Reb-card-theme: ${themeVar};">
            <div class="stardust-Gun-Reb-img-wrapper">
              <img src="${finalImg}" alt="${title}" loading="lazy" class="stardust-Gun-Reb-lightbox-trigger" onerror="this.src='${fallbackImg}'" />
            </div>
            <div class="stardust-Gun-Reb-content">
              <div class="stardust-Gun-Reb-header">
                <h4 class="stardust-Gun-Reb-title stardust-Gun-Reb-tooltip-target" data-tip="${finalTip}">${title}</h4>
              </div>
              <div class="stardust-Gun-Reb-desc">${content}</div>
            </div>
          </div>
        `;
      });

      container.innerHTML = htmlOutput;

      // 綁定全息提示框與燈箱事件
      setTimeout(() => {
        this.initLightbox();
        // 如果 initHoloTips 沒有在全域自動綁定，這確保動態生成的元件也能觸發
      }, 100);
    },
    /**
     * [模組] 覺醒/天賦卡片網格渲染器
     */
    renderAwakeningCards() {
      const grids = document.querySelectorAll(".stardust-Gun-Reb-wiki-grid");
      if (grids.length === 0) return;

      // 1. [核心對接] 取得當前英雄名稱 (從剛產生的 <h2> 抓取)
      const nameEl = document.querySelector(".stardust-Gun-Reb-hp-name-row h2");
      const heroName = nameEl ? nameEl.textContent.trim() : "SYS_ERROR";
      const dbHero = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Heroes?.[heroName]) || null;

      grids.forEach((grid) => {
        const items = grid.querySelectorAll(".stardust-Gun-Reb-wiki-item");
        if (items.length === 0) return;

        let htmlOutput = "";
        items.forEach((item) => {
          // 2. [SEO 升級] 優先讀取 H4 標籤
          const h4Tag = item.querySelector("h4");
          const title = h4Tag ? h4Tag.textContent.trim() : item.getAttribute("data-title") || "未命名覺醒";

          // 3. 從資料庫讀取該覺醒資料
          const dbAwakening = dbHero?.ascensions?.[title] || {};

          // 4. 資源對接 (圖片優先級：資料庫 > HTML > Fallback)
          const rawImg = item.getAttribute("data-img");
          const dbImg = dbAwakening.img;
          const fallbackImg = `https://placehold.co/100x100/111/00e5ff?text=${encodeURIComponent(title)}`;
          const finalImg = dbImg || (rawImg && rawImg.trim() !== "" ? rawImg : fallbackImg);

          // 5. 全息提示詞對接 (自動拼接 SYS_LOG 前綴)
          const rawTip = item.getAttribute("data-tip") || "";
          const finalTip = dbAwakening.desc ? `SYS_LOG: ${dbAwakening.desc}` : rawTip;

          const theme = item.getAttribute("data-theme") || "default";
          const tagText = item.getAttribute("data-tag-text") || "";
          const tagTheme = item.getAttribute("data-tag-theme") || "";

          // 6. 讀取內文機制與評價 (保留在 HTML 彈性編寫)
          const mechHtml = item.querySelector(".stardust-Gun-Reb-mech")?.innerHTML || "";
          const evalHtml = item.querySelector(".stardust-Gun-Reb-eval")?.innerHTML || "";

          const themeVar = this.getThemeColor(theme);

          let tagHtml = "";
          if (tagText) {
            const tagColorVar = tagTheme ? this.getThemeColor(tagTheme) : themeVar;
            tagHtml = `<span class="stardust-Gun-Reb-w-tag" style="--tag-color: ${tagColorVar}">${tagText}</span>`;
          }

          htmlOutput += `
            <div class="stardust-Gun-Reb-wiki-card" style="--stardust-Gun-Reb-card-theme: ${themeVar};">
              <div class="stardust-Gun-Reb-wiki-header">
                <div class="stardust-Gun-Reb-reactor">
                  <img src="${finalImg}" alt="${title}" loading="lazy" class="stardust-Gun-Reb-lightbox-trigger" onerror="this.src='${fallbackImg}'" />
                </div>
                <div class="stardust-Gun-Reb-wiki-title-group">
                  <h4 class="stardust-Gun-Reb-wiki-title stardust-Gun-Reb-tooltip-target" data-tip="${finalTip}">${title}</h4>
                  ${tagHtml}
                </div>
              </div>
              <div class="stardust-Gun-Reb-wiki-body">
                <p class="stardust-Gun-Reb-wiki-mech"><b>機制：</b>${mechHtml}</p>
                <div class="stardust-Gun-Reb-wiki-eval"><b>實戰評價：</b>${evalHtml}</div>
              </div>
            </div>
          `;
        });
        grid.innerHTML = htmlOutput;
      });

      // 確保燈箱系統與全息提示框成功綁定
      setTimeout(() => this.initLightbox(), 100);
    },

    /**
     * [模組] 連接/羈絆卡片渲染器 (拔除文字標籤，放大圖片，並支援密卷品質分色)
     */
    renderLinkCards() {
      const container = document.getElementById("stardust-Gun-Reb-link-container");
      if (!container) return;
      const dataItems = container.querySelectorAll(".stardust-Gun-Reb-link-item");
      if (dataItems.length === 0) return;

      const nameEl = document.querySelector(".stardust-Gun-Reb-hp-name-row h2");
      const heroName = nameEl ? nameEl.textContent.trim() : "SYS_ERROR";
      const dbHero = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Heroes?.[heroName]) || null;
      const dbGlobal = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Global) || null;

      // [升級] 同時獲取圖片與品質(Tier)
      const getDbItemInfo = (itemName) => {
        if (!itemName) return { img: null, tier: null };
        const cleanName = itemName.replace(/\s*Lv\.\d+/g, "").trim();

        if (dbHero?.ascensions?.[cleanName]) return { img: dbHero.ascensions[cleanName].img, tier: null };
        if (dbHero?.blessings?.[cleanName]) return { img: dbHero.blessings[cleanName].img, tier: null };
        // 抓取密卷時，把 tier 也抓出來
        if (dbGlobal?.scroll?.[cleanName]) return { img: dbGlobal.scroll[cleanName].img, tier: dbGlobal.scroll[cleanName].tier };
        if (dbGlobal?.weapon?.[cleanName]) return { img: dbGlobal.weapon[cleanName].img, tier: null };

        return { img: null, tier: null };
      };

      let htmlOutput = "";

      dataItems.forEach((item) => {
        const theme = item.getAttribute("data-theme") || "default";
        const type = item.getAttribute("data-type") || "blessing";
        const topName = item.getAttribute("data-top-name") || "";
        const h4Tag = item.querySelector("h4");
        const title = h4Tag ? h4Tag.textContent.trim() : item.getAttribute("data-title") || "未命名連接";
        const reqTitle = item.getAttribute("data-req-title") || "REQUIRED ITEMS";
        const reqItemsRaw = item.getAttribute("data-req-items") || "";
        const effectHtml = item.querySelector(".stardust-Gun-Reb-effect")?.innerHTML || "";

        const themeVar = this.getThemeColor(theme);
        const topClass = type === "unbound" ? "stardust-Gun-Reb-clk-top is-unbound" : "stardust-Gun-Reb-clk-top";

        // 頂部圖片 (拿掉文字標籤，只留圖片與名稱)
        const fallbackTopImg = `https://placehold.co/80x80/111/ff8c00?text=${encodeURIComponent(topName)}`;
        const { img: topImg } = getDbItemInfo(topName);
        const topImgUrl = topImg || fallbackTopImg;

        let topNameHtml = `<span class="stardust-Gun-Reb-b-name">${topName}</span>`;
        if (type !== "unbound" && topName) {
          topNameHtml = `
             <div class="stardust-Gun-Reb-clk-top-info">
               <img src="${topImgUrl}" class="stardust-Gun-Reb-clk-top-img" alt="${topName}" onerror="this.src='${fallbackTopImg}'" />
               <span class="stardust-Gun-Reb-b-name">${topName}</span>
             </div>
           `;
        }

        // 解析需求道具條件，並賦予專屬品質顏色
        let chipsHtml = "";
        if (reqItemsRaw) {
          const itemsArr = reqItemsRaw.split(",");
          itemsArr.forEach((i) => {
            const parts = i.trim().split("|");
            const itemName = parts[0];
            const itemType = parts[1] || "opt";
            const isReq = itemType === "req";
            const chipClass = isReq ? "stardust-Gun-Reb-req-chip is-req" : "stardust-Gun-Reb-req-chip is-opt";

            const fallbackChipImg = `https://placehold.co/60x60/111/00e5ff?text=${encodeURIComponent(itemName.substring(0, 2))}`;
            const { img: chipImg, tier: chipTier } = getDbItemInfo(itemName);
            const chipImgUrl = chipImg || fallbackChipImg;

            // [新增] 依據 Tier 配置顏色變數
            let tierStyle = "";
            if (chipTier) {
              const tierColors = {
                rare: "#b026ff", // 紫色
                legendary: "#ffcc00", // 金色
                normal: "#00e5ff", // 藍色
                cursed: "#ff3333", // 紅色
              };
              const color = tierColors[chipTier.toLowerCase()];
              if (color) tierStyle = `style="--chip-tier-color: ${color};"`;
            }

            chipsHtml += `
              <span class="${chipClass}" ${tierStyle}>
                <img src="${chipImgUrl}" class="stardust-Gun-Reb-req-chip-img" alt="${itemName}" onerror="this.src='${fallbackChipImg}'" />
                ${itemName}
              </span>
            `;
          });
        }

        htmlOutput += `
          <div class="stardust-Gun-Reb-link-card" style="--stardust-Gun-Reb-card-theme: ${themeVar};">
            <div class="${topClass}">
              ${topNameHtml}
            </div>
            <div class="stardust-Gun-Reb-clk-body">
              <div class="stardust-Gun-Reb-clk-header">
                <h4 class="stardust-Gun-Reb-clk-title">${title}</h4>
              </div>
              <div class="stardust-Gun-Reb-clk-effect"><p>${effectHtml}</p></div>
              <div class="stardust-Gun-Reb-clk-zone">
                <div class="stardust-Gun-Reb-s-title">${reqTitle}</div>
                <div class="stardust-Gun-Reb-s-chips">${chipsHtml}</div>
              </div>
            </div>
          </div>
        `;
      });

      container.innerHTML = htmlOutput;
    },

    /**
     * [模組] 相關成就圖鑑渲染 (Data-Driven 升級版 - 移除 Tooltip)
     * 從 Global.achievement 抓圖，並「完全保留」使用者的手寫攻略文字。
     */
    renderAchievements() {
      const container = document.getElementById("stardust-Gun-Reb-ach-container");
      if (!container) return;

      const items = container.querySelectorAll(".stardust-Gun-Reb-ach-item");
      if (items.length === 0) return;

      // 1. 取得全局成就資料庫
      const dbAch = (typeof STARDUST_ASSETS !== "undefined" && STARDUST_ASSETS.gunfire?.Global?.achievement) || {};

      let cardsHtml = `<div class="stardust-Gun-Reb-ach-grid-2col">`;

      items.forEach((item) => {
        // 2. [SEO 核心] 優先讀取 H4 作為關鍵字
        const h4Tag = item.querySelector("h4");
        const title = h4Tag ? h4Tag.textContent.trim() : "SYS_ERROR";

        // 3. 從資料庫獲取資料
        const dbData = dbAch[title] || {};

        // 使用中文標題作為 ID (確保 localStorage 與成就過濾器正常運作)
        const id = item.getAttribute("data-ach-id") || title;

        // 圖片對接：優先讀取資料庫 > 預設佔位圖
        const fallbackImg = `https://placehold.co/100x100/111/ffcc00?text=${encodeURIComponent(title)}`;
        const img = dbData.img || fallbackImg;

        // 4. [防呆防覆寫] 讀取原本在 HTML 內精心寫好的描述與攻略提示
        const descEl = item.querySelector(".stardust-Gun-Reb-ach-desc");
        const desc = descEl ? descEl.innerHTML : "";

        const guideEl = item.querySelector(".stardust-Gun-Reb-ach-guide");
        const guideText = guideEl ? guideEl.innerHTML : "";

        cardsHtml += `
           <div class="stardust-Gun-Reb-ach-wrapper">
             <label class="stardust-Gun-Reb-ach-card">
               <input type="checkbox" class="stardust-Gun-Reb-ach-checkbox" data-ach-id="${id}" />
               <div class="stardust-Gun-Reb-ach-bg"></div>
               <div class="stardust-Gun-Reb-ach-icon-box">
                 <img src="${img}" alt="${title}" loading="lazy" class="stardust-Gun-Reb-lightbox-trigger" onerror="this.src='${fallbackImg}'" />
               </div>
               <div class="stardust-Gun-Reb-ach-details">
                 <h4 class="stardust-Gun-Reb-ach-title">${title}</h4>
                 <div class="stardust-Gun-Reb-ach-desc">${desc}</div>
               </div>
               <div class="stardust-Gun-Reb-ach-status">
                 <i class="fa-solid fa-lock fa-lock"></i>
                 <i class="fa-solid fa-check fa-check"></i>
               </div>
             </label>
             ${
               guideText
                 ? `
             <div class="stardust-Gun-Reb-guide-panel">
               <div class="stardust-Gun-Reb-guide-header">
                 <i class="fa-solid fa-terminal"></i> STRATEGY_INTEL // 系統攻略提示
               </div>
               <p class="stardust-Gun-Reb-guide-content">${guideText}</p>
             </div>`
                 : ""
             }
           </div>
         `;
      });

      cardsHtml += `</div>`;
      container.innerHTML = cardsHtml;

      // 觸發燈箱初始化
      setTimeout(() => this.initLightbox(), 100);

      // 成就卡片渲染完畢後，綁定 localStorage 進度儲存與讀取系統
      this.syncAchievements();
    },

    /**
     * [模組] 系統終端機時間軸 (Data-Driven Patch Logs)
     */
    renderPatchLogs() {
      const container = document.getElementById("stardust-Gun-Reb-patch-container");
      if (!container) return;

      const items = container.querySelectorAll(".stardust-Gun-Reb-patch-item");
      if (items.length === 0) return;

      // 建立時間軸內部導引線容器
      let logsHtml = `<div class="stardust-Gun-Reb-patch-inner">`;

      items.forEach((item) => {
        // 抓取語法糖數據，若未填寫則給予預設值
        const version = item.getAttribute("data-version") || "v?.?.?";
        const date = item.getAttribute("data-date") || "YYYY.MM.DD";
        // 支援從 data-content 讀取，或直接讀取標籤內的 HTML，增加彈性
        const content = item.getAttribute("data-content") || item.innerHTML || "";

        // 封裝賽博風卡片結構
        logsHtml += `
          <div class="stardust-Gun-Reb-patch-entry">
            <div class="stardust-Gun-Reb-patch-node"></div>
            <div class="stardust-Gun-Reb-patch-card">
              <div class="stardust-Gun-Reb-patch-header">
                <span class="stardust-Gun-Reb-patch-version">${version}</span>
                <span class="stardust-Gun-Reb-patch-date">${date}</span>
              </div>
              <div class="stardust-Gun-Reb-patch-content">${content}</div>
            </div>
          </div>
        `;
      });

      logsHtml += `</div>`;
      container.innerHTML = logsHtml; // 覆寫並渲染
    },
    /**
     * [對接] 成就進度儲存與過濾器綁定 (實際生效版本)
     * 負責計算完成度進度條、同步 localStorage 以及頁籤過濾邏輯
     */
    syncAchievements() {
      const gameContainer = document.querySelector(".guide-container");
      const gameId = gameContainer?.getAttribute("data-game-id") || "default_game";
      const STORAGE_KEY = `ach_data_${gameId}`;

      let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      const checkboxes = document.querySelectorAll(".stardust-Gun-Reb-ach-checkbox");
      const wrappers = document.querySelectorAll(".stardust-Gun-Reb-ach-wrapper");

      // 核心計算引擎：更新進度條與篩選卡片顯示
      const updateProgressAndFilter = () => {
        const activeTab = document.querySelector(".stardust-Gun-Reb-ach-tab.active");
        const currentFilter = activeTab ? activeTab.getAttribute("data-filter") : "all";
        const titleText = activeTab ? activeTab.innerText.trim() : "全部";

        const titleEl = document.getElementById("stardust-Gun-Reb-ach-progress-title");
        if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-chart-line"></i> 圖鑑收集進度 (${titleText})`;

        let total = 0;
        let checkedCount = 0;

        wrappers.forEach((wrapper) => {
          const category = wrapper.getAttribute("data-category") || "";
          let showWrapper = false;

          if (currentFilter === "all") showWrapper = true;
          else if (currentFilter === "completed") showWrapper = !!wrapper.querySelector(".stardust-Gun-Reb-ach-checkbox:checked");
          else if (currentFilter === "uncompleted") showWrapper = !!wrapper.querySelector(".stardust-Gun-Reb-ach-checkbox:not(:checked)");
          else showWrapper = category.includes(currentFilter);

          wrapper.classList.toggle("is-hidden", !showWrapper);

          if (showWrapper) {
            const cards = wrapper.querySelectorAll(".stardust-Gun-Reb-ach-card");
            cards.forEach((card) => {
              const cb = card.querySelector(".stardust-Gun-Reb-ach-checkbox");
              if (currentFilter === "completed" && !cb.checked) {
                card.style.display = "none";
              } else if (currentFilter === "uncompleted" && cb.checked) {
                card.style.display = "none";
              } else {
                card.style.display = "";
                total++;
                if (cb.checked) checkedCount++;
              }
            });
          }
        });

        // 計算並渲染進度百分比
        const pct = total === 0 ? 0 : Math.round((checkedCount / total) * 100);
        const fill = document.getElementById("stardust-Gun-Reb-ach-progress-fill");
        const text = document.getElementById("stardust-Gun-Reb-ach-progress-text");
        if (fill) fill.style.width = `${pct}%`;
        if (text) text.innerText = `${checkedCount} / ${total} (${pct}%)`;
      };

      // 綁定勾選框事件，並存入 localStorage
      checkboxes.forEach((cb) => {
        const id = cb.getAttribute("data-ach-id");
        if (savedData[id]) cb.checked = true;

        cb.addEventListener("change", (e) => {
          savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
          if (e.target.checked) savedData[id] = true;
          else delete savedData[id];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
          updateProgressAndFilter();
        });
      });

      // 綁定過濾頁籤點擊事件
      const tabs = document.querySelectorAll(".stardust-Gun-Reb-ach-tab");
      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          tabs.forEach((t) => t.classList.remove("active"));
          e.currentTarget.classList.add("active");
          updateProgressAndFilter();
        });
      });

      // 「重置進度」按鈕防呆機制 (需點擊兩次確認，3秒內未確認則還原狀態)
      const clearBtn = document.getElementById("stardust-Gun-Reb-clear-ach-btn");
      let clearConfirmState = false;
      let clearTimer;
      if (clearBtn) {
        const newClearBtn = clearBtn.cloneNode(true);
        clearBtn.parentNode.replaceChild(newClearBtn, clearBtn);

        newClearBtn.addEventListener("click", (e) => {
          if (!clearConfirmState) {
            clearConfirmState = true;
            newClearBtn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> 確定重置？';
            newClearBtn.classList.add("is-confirming");
            clearTimer = setTimeout(() => {
              clearConfirmState = false;
              newClearBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> 重置';
              newClearBtn.classList.remove("is-confirming");
            }, 3000);
          } else {
            clearTimeout(clearTimer);
            clearConfirmState = false;
            newClearBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> 重置';
            newClearBtn.classList.remove("is-confirming");

            localStorage.removeItem(STORAGE_KEY);
            savedData = {};
            checkboxes.forEach((cb) => (cb.checked = false));
            updateProgressAndFilter();
          }
        });
      }

      // 初始化執行一次狀態計算
      updateProgressAndFilter();

      // 監聽跨分頁的資料同步
      window.addEventListener("storage", (e) => {
        if (e.key === STORAGE_KEY) {
          savedData = JSON.parse(e.newValue) || {};
          checkboxes.forEach((cb) => {
            const id = cb.getAttribute("data-ach-id");
            cb.checked = !!savedData[id];
          });
          updateProgressAndFilter();
        }
      });
    },

    /**
     * 初始化頁籤切換邏輯 (重置所有狀態並啟用指定目標)
     */
    initTabs() {
      const tabBtns = document.querySelectorAll(".stardust-Gun-Reb-tab-btn");
      if (tabBtns.length === 0) return;

      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".stardust-Gun-Reb-tab-btn").forEach((b) => b.classList.remove("active"));
          document.querySelectorAll(".stardust-Gun-Reb-tab-content").forEach((c) => {
            // 重置動畫，強制重新觸發 CSS transition/animation
            c.classList.remove("active");
            c.style.animation = "none";
            c.offsetHeight;
            c.style.animation = null;
          });
          btn.classList.add("active");
          const targetId = btn.getAttribute("data-target");
          if (targetId) {
            const targetContent = document.getElementById(targetId);
            if (targetContent) targetContent.classList.add("active");
          }
        });
      });
    },

    /**
     * 全息提示框 (Hologram Tooltip) 初始化
     * 全局監聽帶有 `data-tip` 屬性的元素，自動生成跟隨滑鼠的提示框
     */
    initHoloTips() {
      let tipBox = document.getElementById("stardust-Gun-Reb-hologram-tip");
      if (!tipBox) {
        tipBox = document.createElement("div");
        tipBox.id = "stardust-Gun-Reb-hologram-tip";
        document.body.appendChild(tipBox);
      }

      document.addEventListener("mouseover", (e) => {
        const target = e.target.closest("[data-tip]");
        if (!target) return;
        const text = target.getAttribute("data-tip");
        if (!text) return;

        // 繼承父卡片的主題色來渲染 Tooltip 光暈
        let themeColor = "var(--sys-accent-color)";
        const cardParent = target.closest(".stardust-Gun-Reb-card") || target.closest(".stardust-Gun-Reb-wiki-card") || target.closest(".stardust-Gun-Reb-link-card");
        if (cardParent) {
          themeColor = cardParent.style.getPropertyValue("--stardust-Gun-Reb-card-theme") || themeColor;
        }

        tipBox.style.borderColor = themeColor;
        tipBox.style.boxShadow = `0 0 15px color-mix(in srgb, ${themeColor} 40%, transparent)`;
        tipBox.textContent = text;
        tipBox.style.opacity = "1";
        tipBox.style.transform = "translateY(0)";

        // 取得滑鼠座標並計算位移量
        const rect = target.getBoundingClientRect();
        tipBox.style.left = `${rect.left + window.scrollX}px`;
        tipBox.style.top = `${rect.top + window.scrollY - 35}px`;
      });

      document.addEventListener("mouseout", (e) => {
        const target = e.target.closest("[data-tip]");
        if (!target) return;
        tipBox.style.opacity = "0";
        tipBox.style.transform = "translateY(10px)";
      });
    },

    /**
     * 圖片燈箱系統初始化
     * 為所有指定的觸發器圖片綁定點擊放大效果
     */
    initLightbox() {
      const lightboxModal = document.getElementById("combat-lightbox");
      const lightboxImg = document.getElementById("combat-lightbox-img");
      if (lightboxModal && lightboxImg) {
        document.querySelectorAll(".stardust-Gun-Reb-lightbox-trigger").forEach((img) => {
          img.style.cursor = "zoom-in";
          const newImg = img.cloneNode(true);
          // 使用 cloneNode 替換舊節點，避免重複綁定 EventListener 導致點擊觸發多次
          img.parentNode.replaceChild(newImg, img);
          newImg.addEventListener("click", (e) => {
            e.stopPropagation();
            lightboxImg.src = e.target.src;
            lightboxModal.classList.add("show");
          });
        });
      }
    },

    /**
     * 橫向滾動容器「滑鼠拖曳」功能初始化
     * 讓桌機版用戶可以像手機一樣按住並拖曳內容
     */
    initDragToScroll() {
      // 擴充選取器：加入 .gr-grid 與其他橫向卷軸容器，確保全域支援拖曳
      const carousels = document.querySelectorAll(".stardust-Gun-Reb-link-carousel, .stardust-Gun-Reb-ach-filter-tabs, .gr-grid, .carousel-container, .weapon-carousel");
      let isDown = false;
      let startX;
      let scrollLeft;
      let currentGrid = null;

      carousels.forEach((grid) => {
        grid.addEventListener("mousedown", (e) => {
          isDown = true;
          currentGrid = grid;
          startX = e.pageX - grid.offsetLeft;
          scrollLeft = grid.scrollLeft;
          window.getSelection().removeAllRanges(); // 防止拖曳時反白文字
        });
      });

      const endDrag = () => {
        if (!isDown) return;
        isDown = false;
        document.body.classList.remove("is-dragging-active");
        if (currentGrid) {
          currentGrid.style.cursor = "grab";
          setTimeout(() => {
            if (currentGrid) currentGrid.classList.remove("is-dragging");
            currentGrid = null;
          }, 0);
        }
      };

      window.addEventListener("mouseup", endDrag);
      window.addEventListener("mouseleave", endDrag);
      window.addEventListener("mousemove", (e) => {
        if (!isDown || !currentGrid) return;
        const x = e.pageX - currentGrid.offsetLeft;
        const walk = (x - startX) * 1.5; // 調整拖曳滑動的速度係數

        // 設定超過 5px 的移動才判定為拖曳，避免誤觸點擊
        if (Math.abs(x - startX) > 5) {
          currentGrid.classList.add("is-dragging");
          currentGrid.style.cursor = "grabbing";
          document.body.classList.add("is-dragging-active");
          window.getSelection().removeAllRanges();
        }

        if (currentGrid.classList.contains("is-dragging")) {
          e.preventDefault();
          currentGrid.scrollLeft = scrollLeft - walk;
        }
      });
    },
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    StardustGunReb.init();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      StardustGunReb.init();
    });
  }

  // 回傳模組介面 (可選)
  return StardustGunReb;
})(); // IIFE 結束
