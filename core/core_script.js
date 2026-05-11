/* ==========================================================================
   ★ 基礎系統與通用組件初始化 ★
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
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
