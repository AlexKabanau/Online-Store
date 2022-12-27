import { TCards } from "../../types/index";
import productsData from "../data";
import ICreateElement from "../templates/createElement";

  //let n: number;
    class CardProduct {
    id: number;
  
    constructor(id: number) {
      this.id = id;
    }
  
  createCardProduct(id: number) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.id = `${productsData[this.id].id}`;
    const cardTitle: HTMLHeadingElement = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.innerText = `${productsData[this.id].title}`;
    card.append(cardTitle);
    const buttonContainer: HTMLElement = document.createElement("div");
    buttonContainer.className = "button-container";
    card.append(buttonContainer);
    const aBuy: HTMLDivElement = document.createElement("div");
    aBuy.classList.add("buy-button");
    aBuy.innerText = "Buy!";
    buttonContainer.append(aBuy);
    const aAbout: HTMLAnchorElement = document.createElement("a");
    aAbout.classList.add("about-button");
    aAbout.href = "#";
    buttonContainer.append(aAbout);
    const imageContainer: HTMLElement = document.createElement("div");
    imageContainer.className = "img-container";
    card.append(imageContainer);
    const image: HTMLImageElement = document.createElement("img");
    image.src = productsData[this.id].thumbnail;
    image.alt = productsData[this.id].title;
    imageContainer.append(image);
    const oldPrice: HTMLParagraphElement = document.createElement("p");
    oldPrice.classList.add("old-price");
    cardTitle.innerText = `${Math.round((100 * productsData[this.id].price) / (100 - productsData[this.id].discountPercentage))}`;
    card.append(oldPrice);
    const price: HTMLParagraphElement = document.createElement("p");
    price.classList.add("price");
    cardTitle.innerText = `${productsData[this.id].price}`;
    card.append(price);
    return card;
  }
}

export default CardProduct;