const the_animation = document.querySelectorAll(".animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        if (!entry.target.contains("animation")) {
          entry.target.classList.remove("scroll-animation");
        }
      }
    });
  },
  { threshold: 0.5 }
);
//
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}
