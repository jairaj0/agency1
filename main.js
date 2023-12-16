// Cursor
const cursor = document.querySelector(".cursor");
let cordX, cordY;
let timer;

window.addEventListener("mousemove", function (e) {
  cordX = e.clientX;
  cordY = e.clientY;

  clearTimeout(timer);

  cursor.classList.add("cur_move");

  timer = setTimeout(() => {
    cursor.classList.remove("cur_move");
  }, 100);
});

const cur_func = () => {
  let x = cordX + window.screenX - 15;
  let y = cordY + window.scrollY - 15;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  requestAnimationFrame(cur_func);
};

cur_func();

// navLinks

const navLinkAnimation = (ele) => {
  const preEl = ele.innerText;
  const text = preEl.split("");
  let newHtml = "";
  text.forEach((el) => {
    newHtml += `<span style="opacity: 0;">${el}</span>`;
  });
  ele.innerHTML = newHtml;

  hideAndShowTexts(ele);
};

const hideAndShowTexts = (ele) => {
  const spans = ele.querySelectorAll("span");
  let width = 0;

  const defaultState = () => {
    spans.forEach((el, i) => {
      if (i != 0) {
        el.style.left = `-${width}px`;
        el.style.opacity = 0;
      }else{
        el.style.opacity = 1;
      }
      width += el.offsetWidth;
    });
    ele.style.width = "45px";
  };

  defaultState();

  ele.addEventListener("mouseenter", () => {
    spans.forEach((el, i) => {
      if (i != 0) {
        el.style.left = "0px";
        el.style.opacity = 1;
      }
    });
    ele.style.width = `${30 + width}px`;
    width = 0;
  });

  ele.addEventListener("mouseleave", defaultState);
};

const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((link) => navLinkAnimation(link));

// Hero title

const titleAnimation = (ele) => {
  const preEl = ele.innerText;
  const text = preEl.split("");
  let newHtml = "";
  text.forEach((el) => {
    newHtml += `<span>${el}</span>`;
  });
  ele.innerHTML = newHtml;

  const spans = ele.querySelectorAll("span");

  spans.forEach((el , i)=>{
    el.style.animationDelay = `${0.2 * i + 0.1}s`;
    el.classList.add("animateTitle");
  })
}

const heroTitle = document.querySelector('.hero .title');

titleAnimation(heroTitle)
