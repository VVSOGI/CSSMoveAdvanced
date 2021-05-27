const section = document.querySelectorAll("section");
const main = document.querySelector("main");
const arr = [...section];
const arr2 = arr;

let slicedArr = arr.slice(0, arr.length);
let clickedArr = [];

arr.map((item) => {
  item.addEventListener("click", (e) => {
    if (!item.classList.contains("click")) {
      item.classList.add("click");
      iterateMaker(arr);
      iterateMaker(slicedArr);
    }
    if (item.classList.contains("click")) {
      slicedArr.splice(0, slicedArr.length);
    } // 전체 불러오기.
  });
});

const cssMaker = () => {
  iterateMaker(arr2);
};

const iterateMaker = (array) => {
  if (array === arr) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains("click")) {
        clickedArr = slicedArr.splice(i, 1);
      }
    }
  }

  if (array === slicedArr) {
    for (let i = 0; i < array.length; i++) {
      array[i].style.transform = `skew(2deg, -10deg) translate(${
        -i * 2 + 55
      }em, ${-i * 2 + 5}em)`;
    }
  }

  if (array === arr2) {
    for (let i = 0; i < array.length; i++) {
      array[i].style.transform = `skew(2deg, -10deg) translate(${
        -i * 2 + 5
      }em, ${-i * 2 + 5}em)`;
    }
  }
};

cssMaker();
