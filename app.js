const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "JAKET",
    price: 399000,
    colors: [
      {
        code: "black",
        img: "./img/Bomber1.png",
      },
      {
        code: "darkblue",
        img: "./img/Bomber2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Polo T-shirt FKM Makara UI ",
    price: 150000,
    colors: [
      {
        code: "White",
        img: "./img/Polo Tshirt.png",
      },
      {
        code: "Purple",
        img: "./img/Polo Tshirt2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Topi UI",
    price: 85000,
    colors: [
      {
        code: "Khaki",
        img: "./img/Topi UI.png",
      },
      {
        code: "Maroon",
        img: "./img/Topi UI2.png",
      },
    ],
  },
  {
    id: 4,
    title: "MAP UI",
    price: 60000,
    colors: [
      {
        code: "black",
        img: "./img/MAP_UI_2.png",
      },
      {
        code: "Yellow",
        img: "./img/MAP_UI_3.png",
      },
    ],
  },
  {
    id: 5,
    title: "Tumbler Lock&Lock",
    price: 140000,
    colors: [
      {
        code: "pink",
        img: "./img/Tumbler2.png",
      },
      {
        code: "blue",
        img: "./img/Tumbler3.png",
      },
      {
        code: "grey",
        img: "./img/Tumbler4.png",
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

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rp" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
