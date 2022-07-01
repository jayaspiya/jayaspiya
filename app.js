const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

let drawerOpen = false;

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.paddingTop = "1.5rem";
//     document.getElementById("header").style.paddingTop = "1.5rem";
//   } else {
//     document.getElementById("header").style.height = "4.5rem";
//   }
// }

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  // nav.classList.toggle("nav-toggle");
});
