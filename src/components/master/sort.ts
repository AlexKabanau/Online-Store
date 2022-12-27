import Components from "../Components";
import { ProductItemData } from "../../types";
// import handlers from "./handlers";

class Sort extends Components {
  constructor(
    tagName: string,
    className: string,
    id: string,
    data: Array<ProductItemData>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    handlers: Object
  ) {
    super(tagName, className, id, data, handlers);
  }

  renderSort() {
    const sortTitle: HTMLElement = document.createElement("h3");
    sortTitle.innerText = "Sort:";
    this.container.append(sortTitle);

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
          // button.onclick = function (el) {
          //   handlers.click(el.target as HTMLButtonElement);
          // };
          break;
        case 1:
          button.className = "sort-button sort-type-button";
          button.name = "rating";
          button.innerText = "rating";
          // button.onclick = function (el) {
          //   handlers.click(el.target as HTMLButtonElement);
          // };
          break;
        case 2:
          button.className = "sort-button sort-type-button";
          button.name = "discount";
          button.innerText = "discount";
          // button.onclick = function (el) {
          //   handlers.click(el.target as HTMLButtonElement);
          // };
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
    this.container.append(sortButtonList);
  }
  render() {
    this.renderSort();
    return this.container;
  }
}

export default Sort;
