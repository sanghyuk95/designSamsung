window.onload = function () {
  const $header = document.querySelector(".header");

  new Waypoint({
    element: $header,
    handler: (dir) => {
      if (dir === "down") {
        $header.classList.add("active");
      } else {
        $header.classList.remove("active");
      }
    },
    offset: "-10%",
  });

  var swiper = new Swiper(".mainSwiper", {
    autoplay: {
      delay: 2000,
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

  var swiper2 = new Swiper(".itemSwiper", {
    autoplay: {
      delay: 2000,
    },
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(".pbswiper", {
    slidesPerView: 4,
    spaceBetween: 16,
  });
};
