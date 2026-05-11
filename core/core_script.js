/* ==========================================================================
   ★ 系統路由與動態資源載入器 (Asset Loader) ★
   ========================================================================== */

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

  const isGunfire = tags.includes("槍火重生") || pageTitle.includes("槍火重生");
  const isArknights = tags.includes("明日方舟") || pageTitle.includes("明日方舟");

  if (isGunfire) {
    console.log("SYS_LOG: [槍火重生] 協定確認，啟動嚴格循序載入...");
    injectStyles(["https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_style.css"]);
    // 這裡用了 await，確保第一支 assets 載入完，才會載入第二支 logic
    await injectScripts(["https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_assets.js", "https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/gunfire/gunfire_logic.js"]);
  }

  if (isArknights) {
    console.log("SYS_LOG: [明日方舟] 協定確認...");
    // 暫時註解掉，等你把檔案傳上 GitHub 後再打開，就不會噴 404 錯誤了
    // await injectScripts([
    //   "https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/arknights/arknights_assets.js",
    //   "https://raw.githack.com/jeffwu840728/stardust-blog-assets/main/arknights/arknights_logic.js"
    // ]);
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
