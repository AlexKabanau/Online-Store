import Components from "../Components";
import { ProductItemData } from "../../types";
// import handlers from "./handlers";

class Sort extends Components {
  constructor(
    tagName: string,
    className: string,
    id: string,
    data: Array<ProductItemData>
  ) {
    super(tagName, className, id, data);
  }

  renderSort() {
    const sortTitle: HTMLElement = document.createElement("h3");
    sortTitle.innerText = "Sort:";
    this.container.append(sortTitle);

    const sortButtonList: HTMLElement = document.createElement("ul");
    sortButtonList.className = "sort-button-list";
    for (let i = 0; i < 6; i++) {
      const li: HTMLLIElement = document.createElement("li");
      const button: HTMLButtonElement = document.createElement("button");
      button.className = "sort-button";
      switch (i) {
        case 0:
          button.className = "sort-button sort-type-button";
          button.name = "price_up";
          button.innerHTML = `price <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Up</span>`;
          break;
        case 1:
          button.className = "sort-button sort-type-button";
          button.name = "price_down";
          button.innerHTML = `price <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Down</span>`;
          break;
        case 2:
          button.className = "sort-button sort-type-button";
          button.name = "rating_up";
          button.innerHTML = `rating <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Up</span>`;
          break;
        case 3:
          button.className = "sort-button sort-type-button";
          button.name = "rating_down";
          button.innerHTML = `rating <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Down</span>`;
          break;
        case 4:
          button.className = "sort-button sort-type-button";
          button.name = "discount_up";
          button.innerHTML = `discount <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Up</span>`;
          break;
        case 5:
          button.className = "sort-button sort-type-button";
          button.name = "discount_down";
          button.innerHTML = `discount <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 10L0 10" fill="#C5C5C5"/>
          </svg>
          <span class="visually-hidden">To Down</span>`;
          break;
      }
      li.append(button);
      sortButtonList.append(li);
    }
    this.container.append(sortButtonList);

    const searchInput: HTMLInputElement = document.createElement("input");
    searchInput.type = "search";
    searchInput.className = "search_input";
    searchInput.placeholder = "Search";

    this.container.append(searchInput);
  }
  render() {
    this.renderSort();
    return this.container;
  }
}

export default Sort;
