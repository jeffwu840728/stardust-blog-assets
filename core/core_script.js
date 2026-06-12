/* ==========================================================================
   ★ 系統路由與動態資源載入器 (Asset Loader) ★
   ========================================================================== */

// ==========================================================================
// ★ 遊戲資源註冊表 (Game Resource Registry) ★
//
// 【如何擴充新的遊戲頁面？】
// 1. 在此註冊表新增一組 Key-Value。Key 為判定該遊戲是否加載的關鍵字。
//    匹配機制：若文章的標籤 (Tags)、Meta Keywords 或網頁 Title 包含此 Key 即可觸發載入。
// 2. 配置 styles (Array): 需要注入的專屬 CSS 檔案 URL (例如從 GitHub/CDN 載入的樣式)。
// 3. 配置 scripts (Array): 需要循序注入的專屬 JS 檔案 URL 陣列。
//    ※ 注意：注入器會依據陣列順序依序 Promise 鏈式載入，因此依賴關係（如資料庫在 logic 前）必須手動排序好。
// 4. 動態網址建議使用 rawcdn.githack.com 生產環境 CDN，具備快取且速度快。
// ==========================================================================
const GAME_REGISTRY = {
  "槍火重生": {
    styles: [
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_style.css"
    ],
    scripts: [
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_scrolls.js",
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_assets.js",
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_heroes.js",
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_logic.js"
    ]
  }
  /*
  // 明日方舟擴充範例：未來只需解除註解並確認網址即可，無需修改主載入器
  , "明日方舟": {
    styles: [
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/arknights/arknights_style.css"
    ],
    scripts: [
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/arknights/arknights_assets.js",
      "https://rawcdn.githack.com/jeffwu840728/stardust-blog-assets/main/arknights/arknights_logic.js"
    ]
  }
  */
};

function injectStyles(cssUrls) {
  cssUrls.forEach((url) => {
    const cacheBusterUrl = url.includes("?") ? `${url}&t=${new Date().getTime()}` : `${url}?t=${new Date().getTime()}`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cacheBusterUrl;
    document.head.appendChild(link);
  });
}

/**
 * 動態注入 <script> 標籤 (Promise 接力賽模式，確保 100% 循序執行)
 */
async function injectScripts(scriptUrls) {
  for (const url of scriptUrls) {
    await new Promise((resolve, reject) => {
      const cacheBusterUrl = url.includes("?") ? `${url}&t=${new Date().getTime()}` : `${url}?t=${new Date().getTime()}`;
      const script = document.createElement("script");
      script.src = cacheBusterUrl;

      script.onload = () => resolve(); // 這支載入完，才允許下一支載入
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));

      document.body.appendChild(script);
    });
  }
}

async function loadGameSpecificAssets() {
  let tags = Array.from(document.querySelectorAll('meta[property="article:tag"], meta[name="keywords"]')).flatMap((meta) => meta.content.split(",").map((s) => s.trim()));
  const labelLinks = Array.from(document.querySelectorAll('a.label-link, a[rel="tag"]')).map((a) => a.textContent.trim());
  tags = tags.concat(labelLinks);
  const pageTitle = document.title || "";

  // 遍歷註冊表進行遊戲資源匹配載入
  for (const [gameName, config] of Object.entries(GAME_REGISTRY)) {
    const isMatch = tags.includes(gameName) || pageTitle.includes(gameName);
    if (isMatch) {
      console.log(`SYS_LOG: [${gameName}] 協定確認，啟動動態載入...`);
      try {
        if (config.styles) injectStyles(config.styles);
        if (config.scripts) await injectScripts(config.scripts);
      } catch (error) {
        console.error(`SYS_ERROR: 載入 [${gameName}] 資源失敗:`, error);
        
        // 容錯降級處理：若外部 JS 載入失敗，強制移除防閃爍隱形斗篷，並給予文字提示，避免頁面大片空白
        document.querySelectorAll('[class^="stardust-"]').forEach((el) => {
          el.style.setProperty("display", "block", "important");
          el.style.opacity = "1";
        });
        
        const errorTip = document.createElement("div");
        errorTip.className = "stardust-load-error-tip";
        errorTip.style.cssText = "color: var(--color-brand-red, #ee3322); padding: 30px; text-align: center; font-weight: bold; font-family: 'Noto Sans TC', sans-serif; border: 1px dashed var(--color-border-primary); margin: 20px; border-radius: 8px; background: rgba(238, 51, 34, 0.05);";
        errorTip.innerHTML = "<i class='fa-solid fa-triangle-exclamation' style='margin-right:8px;'></i> 攻略互動模組載入失敗，請重整網頁或檢查網路連線。";
        const container = document.querySelector(".guide-container");
        if (container) {
          container.prepend(errorTip);
        }
      }
      break; // 匹配成功即停止
    }
  }
}

/* ==========================================================================
   ★ 啟動器與 UI 邏輯 ★
   ========================================================================== */
function initStardustCore() {
  loadGameSpecificAssets();

  const drawer = document.getElementById("my-left-drawer");
  const btn = document.getElementById("my-drawer-btn");
  let isDrawerOpen = false;

  document.addEventListener("click", (e) => {
    if (e.target?.id === "my-drawer-btn") {
      isDrawerOpen = !isDrawerOpen;
      if (drawer) drawer.style.left = isDrawerOpen ? "0" : "-300px";
      if (btn) btn.innerHTML = isDrawerOpen ? "✖ 關閉目錄" : "☰ 目錄";
    } else if (isDrawerOpen && drawer && !drawer.contains(e.target)) {
      drawer.style.left = "-300px";
      if (btn) btn.innerHTML = "☰ 目錄";
      isDrawerOpen = false;
    }
  });

  const toggleBtn = document.getElementById("dark-mode-toggle");
  const body = document.body;
  if (toggleBtn) {
    const icon = toggleBtn.querySelector("i"); // 嘗試尋找裡面的 <i> 標籤

    // 如果有找到 icon，且當前是深色模式，才去替換 icon
    if (body.classList.contains("dark-theme") && icon) {
      icon.classList.replace("fa-moon", "fa-sun");
    }

    toggleBtn.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-theme");
      localStorage.setItem("blog-theme", isDark ? "dark" : "light");

      // 切換時也要檢查 icon 存不存在
      if (icon) {
        icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
      }
    });
  }

  // ★ 全域 Lightbox 點擊事件代理 ★
  const lightbox = document.getElementById("combat-lightbox");
  const lightboxImg = document.getElementById("combat-lightbox-img");
  if (lightbox && lightboxImg) {
    document.addEventListener("click", (e) => {
      // 代理特定 class 或區塊內圖片的點擊事件
      const img = e.target.closest(".combat-record-box img, .image-placeholder img, .stardust-Gun-Reb-lightbox-trigger");
      if (img) {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
      }
    });
    lightbox.addEventListener("click", () => lightbox.classList.remove("show"));
  }

  const DAYS_FOR_NEW = 30;
  const now = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const linksWithDates = document.querySelectorAll(".hero-build-list a[data-date]");

  linksWithDates.forEach((link) => {
    const dateString = link.getAttribute("data-date");
    const postDate = new Date(dateString);
    if (!isNaN(postDate.getTime())) {
      const diffDays = Math.floor((now - postDate) / millisecondsPerDay);
      if (diffDays >= 0 && diffDays <= DAYS_FOR_NEW) {
        const newBadge = document.createElement("span");
        newBadge.className = "nav-badge badge-new";
        newBadge.textContent = "NEW";
        link.appendChild(newBadge);
      }
    }
  });

  // 【修復 jQuery 衝突】使用 window.jQuery 嚴格判斷
  if (window.jQuery) {
    $("#search-icon").click(() => $("#nav-search").fadeToggle());
    const $carousel = $(".owl-carousel");
    if ($carousel.length) {
      $carousel.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        dots: false,
      });
    }
  }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  initStardustCore();
} else {
  document.addEventListener("DOMContentLoaded", initStardustCore);
}