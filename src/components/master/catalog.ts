import productsData from "../data";
import Components from "../Components";
import { TCards } from "../../types";
import CardProduct from "../master/cardProduct";

class Catalog {
  private cardProduct(): CardProduct;
  constructor(
    /*tagName: string,
    className: string,
    id: string,
    data: Array<ProductItemData>,
    this.cardProduct = new CardProduct*/) {
  }

  renderSort() {
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
    this.container.append(sort);
  }

  renderCatalog(data: TCards) {
    const catalogWrapper: HTMLElement = document.createElement("div");
    
    const productList: HTMLElement = document.createElement("ul");
    productList.className = "product-list";
    productList.append(this.rendercardProduct.render());

    catalogWrapper.append(productList);
    this.container.append(catalogWrapper);
  }
  render(data: TCards) {
    this.renderSort();
    this.renderCatalog(data);
    return this.container;
  }
}

export default Catalog;
