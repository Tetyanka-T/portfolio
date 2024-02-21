"use strict";

const menuBtn = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header__menu");
if (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuBtn.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// scroll

const menuLinks = document.querySelectorAll(".header__menu___link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector("header").offsetHeight;

    if (menuBtn.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      menuBtn.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
  }
  e.preventDefault();
}

// effect for link

// const menuLinksWrappers = document.querySelectorAll("[data-line-effect]");
// menuLinksWrappers.length ? menuEffect() : null;

// function menuEffect() {
//   menuLinksWrappers.forEach((menuLinksWrapper) => {
//     const menuLinks = menuLinksWrapper.querySelectorAll("a");
//     const effectSpeed = menuLinksWrapper.dataset.lineEffect
//       ? menuLinksWrapper.dataset.lineEffect
//       : 200;
//     menuLinks.length ? menuEffectItem(menuLinks, effectSpeed) : null;
//   });
// }

// function menuEffectItem(menuLinks, effectSpeed) {
//   const effectTransition = `transition: transform ${effectSpeed}ms ease;`;
//   const effectHover = `transform: translate3d(0px, 0%, 0px);`;
//   const effectTop = `transform: translate3d(0px, -100%, 0px);`;
//   const effectBottom = `transform: translate3d(0px, 100%, 0px);`;

//   menuLinks.forEach((menuLink) => {
//     menuLink.insertAdjacentHTML(
//       "beforeend",
//       `
//     <span style="transform: translate3d(0px,100%,0px);" class="hover">
//     <span style="transform: translate3d(0px, -100%,0px);" class="hover__text">${menuLink.textContent}</span>
//     </span>`
//     );
//   });
// }
