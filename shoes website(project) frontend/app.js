const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "JIMMI CHU",
    price: "Rs2000",
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "JORDAN",
    price: "Rs2500",
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "SPARKS",
    price: "Rs2500",
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "GOLDSTAR",
    price: "Rs1500",
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "PUMA",
    price: "Rs8500",
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
//by doing this, we can able to change our page from one shoe to another shoe
menuItems.forEach((item, index) => {
  //change the current slide
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;//-100 means when picture will slide it will take full width as screen size

    choosenProduct = products[index];
    //this is how we give same shoes name and all its detail as same we choose in first
    currentProductTitle.textContent = choosenProduct.title;//for shoes name
    currentProductPrice.textContent = choosenProduct.price;//for price
    currentProductImg.src = choosenProduct.colors[0].img;//for image
    currentProductColors.forEach((color, index) => {//how we are assingn new color
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
//if i click the color button the image will change according to my color button
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
//now for shoes size we are adding functionality
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {//if we click on one size button then another button will automatially become as they are 
      size.style.backgroundColor = "white";
      size.style.color = "darkred";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
//when click on close button it will close it
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});