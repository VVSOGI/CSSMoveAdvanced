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
      clickedMovement();
    }
    if (item.classList.contains("click")) {
      slicedArr.splice(0, slicedArr.length);
    } // 전체 불러오기.
  });
  if (item.classList.contains("click") === false) {
    item.addEventListener("mouseover", (e) => {
      if (item.classList.contains("click")) {
        return;
      } else {
        item.classList.add("mouseover");
      }
    });
    item.addEventListener("mouseout", (e) => {
      if (item.classList.contains("mouseover")) {
        item.classList.remove("mouseover");
      }
    });
  }
});

const clickedMovement = () => {
  clickedArr[0].style.transition = "1.5s";
  clickedArr[0].style.transitionTimingFunction =
    "cubic-bezier(0.58, -1.55, 0.165, 1)";
  clickedArr[0].style.transform = `none`;
  clickedArr[0].style.width = "100%";
  clickedArr[0].style.height = "100%";
  if (clickedArr[0].classList.contains("red")) {
    const test = document.querySelector(".svg");
    test.classList.add("testing");
    svgStart();
  }
  if (clickedArr[0].classList.contains("yellow")) {
    console.log(2);
  }
  if (clickedArr[0].classList.contains("green")) {
    console.log(3);
  }
  if (clickedArr[0].classList.contains("blue")) {
    console.log(4);
  }
  if (clickedArr[0].classList.contains("purple")) {
    console.log(5);
  }
  if (clickedArr[0].classList.contains("violet")) {
    console.log(6);
  }
};

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
        -i * 2 + 74
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
