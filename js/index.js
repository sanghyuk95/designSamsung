window.onload = function () {
  AOS.init();

  const $header = document.querySelector(".header");
  const $mainBanner = document.querySelector(".mainbanner");

  new Waypoint({
    element: $mainBanner,
    handler: (dir) => {
      if (dir === "down") {
        $header.classList.add("active");
      } else {
        $header.classList.remove("active");
      }
    },
    offset: "10%",
  });

  const $mobMenu = document.querySelector(".mobgnbwrap");
  const $mobOpen = document.querySelector(".mobmenuopen");
  const $mainLogo = document.querySelector(".mainlogo");
  $mobOpen.addEventListener("click", () => {
    $mobMenu.classList.toggle("active");
    $mobOpen.classList.toggle("active");
    $mainLogo.classList.toggle("active");

    if ($mainLogo.classList.contains("active")) {
      $mainLogo.src = "img/whiteLogo.png";
    } else {
      $mainLogo.src = "img/logo.png";
    }
  });

  var swiper = new Swiper(".mainSwiper", {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".index-center",
      type: "progressbar",
    },
    navigation: {
      prevEl: ".fa-arrow-left",
      nextEl: ".fa-arrow-right",
    },
  });

  const $play = document.querySelector(".play");
  const $indexLeft = document.querySelector(".index-left");

  swiper.on("slideChange", () => {
    $indexLeft.textContent = `${swiper.realIndex + 1}`;
  });

  $play.addEventListener("click", () => {
    $play.classList.toggle("fa-pause");
    $play.classList.toggle("fa-angle-right");
    if ($play.classList.contains("fa-angle-right")) {
      swiper.autoplay.pause();
    } else {
      swiper.autoplay.resume();
    }
  });

  const $list = document.querySelectorAll(".categories-list");

  $list.forEach((item, idx) => {
    item.addEventListener("click", () => {
      $list.forEach((e, i) => {
        e.classList.toggle("active", idx === i);
      });
    });
  });

  new Swiper(".itemSwiper", {
    // autoplay: {
    //   delay: 3000,
    // },
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      744: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      968: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1040: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".pbswiper", {
    slidesPerView: 1.5,
    spaceBetween: 16,
    breakpoints: {
      744: {
        slidesPerView: 3,
      },
      1040: {
        slidesPerView: 4,
      },
    },
  });
  new Swiper(".storyswiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      744: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: ".story-leftbtn",
      nextEl: ".story-rightbtn",
    },
  });

  const $mobTitle = document.querySelectorAll(".mob-gnb-list-title");
  const $mobDetail = document.querySelectorAll(".mob-gnb-list-detail");
  const $mobTitleColor = document.querySelectorAll(".mob-gnb-list-title-left");

  $mobTitle.forEach((item, idx) => {
    item.addEventListener("click", () => {
      $mobDetail.forEach((e, i) => {
        if (e.classList.contains("active")) {
          e.classList.remove('active')
          return
        }
        e.classList.toggle("active", i === idx);
      });
      $mobTitleColor.forEach((e, i) => {
        if (e.classList.contains("active")) {
          e.classList.remove('active')
          return
        }
        e.classList.toggle("active", i === idx);
      });
    });
  });
};
