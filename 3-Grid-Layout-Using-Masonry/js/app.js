// MASTIONARY JS
/**
const elem = document.querySelector(".grid");

const msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  gutter: 10,
  //   columnWidth: ".grid-sizer",
  //   percentPosition: true,
});

let elem2 = document.querySelector(".grid");
let infScroll = new InfiniteScroll(elem2, {
  // options
  //   path: ".pagination__next",
  //   append: ".post",
  //   history: false,
});
 */

// -------
// PLY JS
// -------
// const player = new Plyr("#player");
// console.log(player);

// COUNTER UP2
// -----------------

const cost = {
  default() {
    console.log(5);
  },
};

window.cost = cost;

const newCost = window.cost.default;
console.log(newCost());

const counterUp = window.counterUp.default;

const el = document.querySelector(".counter");

counterUp(el, {
  duration: 5000,
  delay: 16,
});

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     const el = entry.target;
//     if (entry.isIntersecting && !el.classList.contains("is-visible")) {
//       counterUp(el, {
//         duration: 2000,
//         delay: 16,
//       });
//       el.classList.add("is-visible");
//     }
//   });
// };

// const IO = new IntersectionObserver(callback, { threshold: 1 });

// const el = document.querySelector(".counter");
// IO.observe(el);

// TYPE WRITTER
// --------------------
/**
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("A simple yet powerful native javascript")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .typeString(
    '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
  )
  .pauseFor(1000)
  .start();
 */
