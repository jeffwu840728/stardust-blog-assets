/* ==========================================================================
   ★ 系統路由與動態資源載入器 (Asset Loader) ★
   ========================================================================== */
/**
 * 動態注入 <link> 標籤 (CSS) 的共用函式
 */
function injectStyles(cssUrls) {
  cssUrls.forEach((url) => {
    // 防呆：避免重複載入相同的 CSS
    if (!document.querySelector(`link[href="${url}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  });
}
   /**
 * 動態注入 <script> 標籤的共用函式
 */
function injectScripts(scriptUrls) {
  scriptUrls.forEach((url) => {
    const script = document.createElement("script");
    script.src = url;
    // 【核心修正】關閉非同步，強制瀏覽器嚴格按照陣列順序 (先 assets 再 logic) 執行！
    script.async = false; 
    script.defer = true;
    document.body.appendChild(script);
  });
}

/**
 * 依據當前頁面標籤或標題，動態載入對應的遊戲資源
 */
function loadGameSpecificAssets() {
  // 1. 嘗試從 meta 標籤抓取 (Blogger 預設或 SEO 佈景常見)
  let tags = Array.from(document.querySelectorAll('meta[property="article:tag"], meta[name="keywords"]'))
    .flatMap((meta) => meta.content.split(",").map((s) => s.trim()));

  // 2. 嘗試從 Blogger 預設的標籤 DOM 抓取 (抓取帶有 rel="tag" 或 class="label-link" 的連結)
  const labelLinks = Array.from(document.querySelectorAll('a.label-link, a[rel="tag"]')).map((a) => a.textContent.trim());
  tags = tags.concat(labelLinks);

  // 3. 頁面標題防呆
  const pageTitle = document.title || "";

  // --- [路由判斷區塊] ---
  const isGunfire = tags.includes("槍火重生") || pageTitle.includes("槍火重生");
  const isArknights = tags.includes("明日方舟") || pageTitle.includes("明日方舟");

  if (isGunfire) {
    console.log("SYS_LOG: [槍火重生] 協定確認，開始依序載入專屬武裝模組...");
    injectStyles([
      "https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_style.css?v=1"
    ]);
    injectScripts([
      // 注意：這裡的順序絕對不能反，有 async = false 護航，必定會先執行 assets
      "https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_assets.js?v=1",
      "https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_logic.js?v=1"
    ]);
  }

  if (isArknights) {
    console.log("SYS_LOG: [明日方舟] 協定確認，連線至羅德島資料庫...");
    // injectScripts([...]);
  }
}

/* ==========================================================================
   ★ 基礎系統與通用組件初始化 ★
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // 0. 執行遊戲資源路由分發
  loadGameSpecificAssets();

  // 1. 左側側邊欄抽屜 (Drawer) 開關邏輯
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

  // 2. 深色模式 (Dark Mode) 切換邏輯
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const body = document.body;

  if (toggleBtn) {
    const icon = toggleBtn.querySelector("i");
    if (body.classList.contains("dark-theme")) {
      icon.classList.replace("fa-moon", "fa-sun");
    }
    toggleBtn.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-theme");
      localStorage.setItem("blog-theme", isDark ? "dark" : "light");
      icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
    });
  }

  // 3. 全局實戰截圖點擊放大 (Lightbox)
  const lightbox = document.getElementById("combat-lightbox");
  const lightboxImg = document.getElementById("combat-lightbox-img");
  if (lightbox && lightboxImg) {
    const imgs = document.querySelectorAll(".combat-record-box img, .image-placeholder img");
    imgs.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightbox.classList.add("show");
      });
    });
    lightbox.addEventListener("click", () => lightbox.classList.remove("show"));
  }

  // 4. 自動產生 [NEW] 標籤
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

  // 5. 頂部導覽列搜尋框與首頁輪播圖 (依賴 jQuery)
  if (typeof $ !== "undefined") {
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
});
