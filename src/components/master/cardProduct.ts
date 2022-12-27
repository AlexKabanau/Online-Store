import { TCards } from "../../types/index";
import productsData from "../data";
import ICreateElement from "../templates/createElement";

/*class CardProduct extends ICreateElement {
  constructor(
    tageName: string,
    className: string,
    id: string,
    //data: TCards,
    n: number,
  ) {
    super(tageName, className, id);
  }*/

  let n: number;
  abstract class CardProduct {
    protected container: HTMLElement;
  
    constructor(id: string) {
      this.container = document.createElement("div");
      this.container.id = id;
      n = Number(id);
    }
  
  renderCardProduct(n: number): void {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.id = `${productsData[n].id}`;
    const cardTitle: HTMLHeadingElement = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.innerText = `${productsData[n].title}`;
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
    image.src = productsData[n].thumbnail;
    image.alt = productsData[n].title;
    imageContainer.append(image);
    const oldPrice: HTMLParagraphElement = document.createElement("p");
    oldPrice.classList.add("old-price");
    cardTitle.innerText = `${Math.round((100 * productsData[n].price) / (100 - productsData[n].discountPercentage))}`;
    card.append(oldPrice);
    const price: HTMLParagraphElement = document.createElement("p");
    price.classList.add("price");
    cardTitle.innerText = `${productsData[n].price}`;
    card.append(price);
  }

  render() {
    this.renderCardProduct(n);
    return this.container;
  }
}

export default CardProduct;