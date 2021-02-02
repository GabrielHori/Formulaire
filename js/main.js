let tabs = document.querySelectorAll(".tab-link:not(.desactive)");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    unSelectAll();
    tab.classList.add("active");
    let ref = tab.getAttribute("data-ref");
    document
      .querySelector(`.tab-body[data-id="${ref}"]`)
      .classList.add("active");
  });
});

function unSelectAll() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  let tabbodies = document.querySelectorAll(".tab-body");
  tabbodies.forEach((tab) => {
    tab.classList.remove("active");
  });
}

document.querySelector(".tab-link.active").click();


// BUTTON COLOR BACKGROUND

const button = document.querySelector('.colorbtn');
const h2E1 = document.querySelector('h2');
const bgE1 = document.querySelector('body');

button.addEventListener('click',() =>{
  let color = '#';
  color += random =Math.random().toString(16).slice(2,8);
  bgE1.style.backgroundColor = color;
  h2E1.innerText = color;
  console.log(color)
})