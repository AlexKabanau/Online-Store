// import productsData from "../data";
import Components from "../Components";
import { ProductItemData } from "../../types";
// import data from "../data";

class Catalog extends Components {
  constructor(
    tagName: string,
    className: string,
    id: string,
    data: Array<ProductItemData>
  ) {
    super(tagName, className, id, data);
  }
  renderCatalog(data: Array<ProductItemData>) {
    const section: HTMLElement = document.createElement("section");

    const title: HTMLHeadingElement = document.createElement("h2");
    title.className = "visually-hidden";
    title.innerText = "Catalog";
    section.append(title);

    const sort: HTMLElement = document.createElement("div");
    sort.className = "sort";

    const sortTitle: HTMLElement = document.createElement("h3");
    sortTitle.innerText = "Sort:";
    sort.append(sortTitle);

    const sortButtonList: HTMLElement = document.createElement("ul");
    sortButtonList.className = "sort-button-list";
    for (let i = 0; i < 5; i++) {
      const li: HTMLLIElement = document.createElement("li");
      const button: HTMLButtonElement = document.createElement("button");
      button.className = "sort-button";
      switch (i) {
        case 0:
          button.className = "sort-button sort-type-button";
          button.name = "price";
          button.innerText = "price";
          break;
        case 1:
          button.className = "sort-button sort-type-button";
          button.name = "type";
          button.innerText = "type";
          break;
        case 2:
          button.className = "sort-button sort-type-button";
          button.name = "func";
          button.innerText = "func";
          break;
        case 3:
          button.className = "sort-button sort-dir-button";
          button.name = "up";
          button.innerHTML = `<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Up</span>`;
          break;
        case 4:
          button.className = "sort-button sort-dir-button";
          button.name = "down";
          button.innerHTML = `<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Down</span>`;
          break;
      }
      li.append(button);
      sortButtonList.append(li);
    }
    sort.append(sortButtonList);
    section.append(sort);

    const productList: HTMLElement = document.createElement("ul");
    productList.className = "product-list";
    for (let i = 0; i < data.length; i++) {
      const li: HTMLLIElement = document.createElement("li");
      li.className = "product-card";
      li.id = `item${data[i].id}Id`;

      const liTitle: HTMLHeadingElement = document.createElement("h3");
      liTitle.innerText = data[i].title;
      li.append(liTitle);

      const buttonContainer: HTMLElement = document.createElement("div");
      buttonContainer.className = "button-container";

      const aBuy: HTMLAnchorElement = document.createElement("a");
      aBuy.href = "#";
      aBuy.className = "buy-button";
      aBuy.innerText = "Buy!";
      buttonContainer.append(aBuy);

      const aAbout: HTMLAnchorElement = document.createElement("a");
      aAbout.href = "#";
      aAbout.className = "about-button";
      aAbout.innerText = "About";
      buttonContainer.append(aAbout);
      li.append(buttonContainer);

      const imageContainer: HTMLElement = document.createElement("div");
      imageContainer.className = "img-container";

      const image: HTMLImageElement = document.createElement("img");
      image.src = data[i].thumbnail;
      image.alt = data[i].title;
      imageContainer.append(image);
      li.append(imageContainer);

      const oldPrice: HTMLParagraphElement = document.createElement("p");
      oldPrice.className = "old-price";
      const priceWithoutPercent = Math.round(
        (100 * data[i].price) / (100 - data[i].discountPercentage)
      );
      oldPrice.innerText = `${priceWithoutPercent} $`;
      li.append(oldPrice);

      const aPrice: HTMLAnchorElement = document.createElement("a");
      aPrice.href = "";
      aPrice.className = "price";
      aPrice.innerText = `${data[i].price} $`;
      li.append(aPrice);

      productList.append(li);
    }

    section.append(productList);

    this.container.append(section);
  }
  render(data: Array<ProductItemData>) {
    this.renderCatalog(data);
    return this.container;
  }
}

export default Catalog;
