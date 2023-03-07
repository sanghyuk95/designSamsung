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
};
