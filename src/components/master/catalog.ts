import Components from "../Components";
import { ProductItemData } from "../../types";

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
    if (data.length > 0) {
      const title: HTMLHeadingElement = document.createElement("h3");
      title.innerHTML = `<h3 class="grid-title">${data.length} items
      <span class="grid1">
      </span>
      <span class="grid2">
      </span>
    </h3>`;
      this.container.append(title);

      for (let i = 0; i < data.length; i++) {
        const li: HTMLLIElement = document.createElement("li");
        li.className = "product-card";
        li.id = `${data[i].id}`;

        const liTitle: HTMLHeadingElement = document.createElement("h3");
        liTitle.innerText = data[i].title;
        li.append(liTitle);

        const buttonContainer: HTMLElement = document.createElement("div");
        buttonContainer.className = "button-container";

        const aBuy: HTMLAnchorElement = document.createElement("a");
        aBuy.className = "buy-button";
        aBuy.innerText = "Buy!";
        buttonContainer.append(aBuy);

        const aAbout: HTMLAnchorElement = document.createElement("a");
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

        this.container.append(li);
      }
    } else {
      this.container.innerHTML = `<p class="no-items">Извените, совпадений не найдено</p>`;
    }
  }
  render(data: Array<ProductItemData>) {
    this.renderCatalog(data);
    return this.container;
  }
}

export default Catalog;
