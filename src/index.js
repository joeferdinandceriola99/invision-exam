import "./styles/main.scss";

import comp1Image1 from "../assets/component-01/Image-01.jpg";
import comp1Image2 from "../assets/component-01/Image-02.jpg";
import comp1Image3 from "../assets/component-01/Image-03.jpg";

import comp2Image1 from "../assets/component-02/Image-01.jpg";
import comp2Image2 from "../assets/component-02/Image-02.jpg";
import comp2Image3 from "../assets/component-02/Image-03.jpg";

document.getElementById("image-one").src = comp1Image1;
document.getElementById("image-two").src = comp1Image2;
document.getElementById("image-three").src = comp1Image3;

const cards = [
  {
    image: comp2Image1,
    header: "Summer Lunch Menu By Mark Best",
    text: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining home.",
  },
  {
    image: comp2Image2,
    header: "A Traditional Christmas Eve, Mark Best Style",
    text: "One of Austrelia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
  },
  {
    image: comp2Image3,
    header: "Taking Taste Further",
    text: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
  },
];

let modalShowing = false;

const closeBtn = document.querySelector(".close");

function showModal(title, text, modalImage) {
  modalShowing = true;
  document.getElementById("myModal").style.display = "grid";
  document.querySelector(".modal__content_title").innerHTML = title;
  document.querySelector(".modal__content_text").innerHTML = text;
  document.querySelector(".modal__content_image").src = modalImage;
}

function hideModal() {
  modalShowing = false;
  document.getElementById("myModal").style.display = "none";
}

const cardElement = (header, text, cardImage) => {
  const item = document.createElement("div");
  item.className = "card";

  const image = document.createElement("img");
  image.src = cardImage;
  item.appendChild(image);

  const contents = document.createElement("div");
  contents.className = "contents";
  item.appendChild(contents);

  const headerNode = document.createElement("h3");
  headerNode.innerHTML = header;
  contents.appendChild(headerNode);

  const description = document.createElement("p");
  description.innerHTML = text;
  contents.appendChild(description);

  const readMore = document.createElement("button");
  readMore.innerHTML = "READ MORE";
  readMore.addEventListener("click", () =>
    modalShowing ? hideModal() : showModal(header, text, cardImage)
  );
  contents.appendChild(readMore);

  closeBtn.addEventListener("click", hideModal);

  document.querySelector(".two__card_container").appendChild(item);
};

cards.forEach((item) => {
  cardElement(item.header, item.text, item.image);
});