// const animItems = document.querySelectorAll("._anim-items");

// if (animItems.length > 0) {
//   window.addEventListener("scroll", animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         scrollY > animItemOffset - animItemPoint &&
//         scrollY < animItemOffset + animItemHeight
//       ) {
//         animItem.classList.add("_anime");
//       } else {
//         if (!animItem.classList.contains("_anim-items")) {
//           animItem.classList.remove("_anime");
//         }
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//       scrollTop = window.scrollY || document.documentElement.scrollTop;
//     return {
//       top: rect.top + scrollTop,
//       left: rect.left + scrollLeft,
//     };
//   }
//   // setTimeout(() => {
//   animOnScroll();
//   // }, 300);
// }

// const the_animation = document.querySelectorAll(".animation");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("scroll-animation");
//       } else {
//         entry.target.classList.remove("scroll-animation");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );
// //
// for (let i = 0; i < the_animation.length; i++) {
//   const elements = the_animation[i];

//   observer.observe(elements);
// }

// Get the element to animate
const element = document.querySelector(".animation");

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      element.classList.add("scroll-animation");
    } else {
      element.classList.remove("scroll-animation");
    }
  });
}, options);

// Start observing the element
observer.observe(element);
