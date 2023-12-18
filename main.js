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

//form_discription

const element = document.querySelector(".form_discription p");

function mapValue(value, inMin, inMax, outMin, outMax) {
  // Ensure the value is within the input range
  value = Math.min(Math.max(value, inMin), inMax);

  // Calculate the percentage of the value within the input range
  const percentage = (value - inMin) / (inMax - inMin);

  // Map the percentage to the output range
  const mappedValue = outMin + percentage * (outMax - outMin);

  return mappedValue;
}

document.addEventListener('scroll', ()=>{
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const mappedValue = mapValue(rect.top, 0, viewportHeight, 1, 0.3);
  element.style.opacity = mappedValue;
})

// video

const stickyDiv = document.querySelector(".showCase");
const bigText = document.querySelector(".bigtext");

document.addEventListener('scroll', ()=>{
  const rect = stickyDiv.getBoundingClientRect();
  // const rectText = bigText.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  console.log(rect.top+500)
  const mappedValue = mapValue(rect.top + 300, 0, viewportHeight, 1, 0.5);
  const mappedValueText = mapValue(rect.top + 400, 0, viewportHeight, 1145, 2 * window.innerWidth);
  stickyDiv.style.scale = mappedValue;
  bigText.style.width = `${mappedValueText}px`;
  // console.log(mappedValueText )
})
