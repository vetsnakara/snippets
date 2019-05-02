const items = document.querySelectorAll(".timeline__item");

const isInViewport = el => {
  const rect = el.getBoundingClientRect();

  const maxBottom = window.innerHeight || document.documentElement.clientHeight;
  const maxRight = window.innerWidth || documen.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= maxBottom &&
    rect.right <= maxRight
  );
};

const showItems = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("timeline__item--show");
    }
  });

// Events
window.addEventListener("load", showItems);
window.addEventListener("resize", showItems);
window.addEventListener("scroll", showItems);
