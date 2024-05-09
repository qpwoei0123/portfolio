window.onload = function () {
  const menuOpen = document.querySelector(".gnb .menuOpen");
  const menuBox = document.querySelector(".gnb .menuBox");

  menuOpen.addEventListener("click", function () {
    menuBox.classList.toggle("on");
  });
};
