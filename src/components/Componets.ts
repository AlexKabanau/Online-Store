import { ProductItemData } from "../types";
class Componets {
  container: HTMLElement;

  constructor(
    tagName: string,
    className: string,
    id: string,
    data?: Array<ProductItemData>
  ) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.container.id = id;
  }

  render(data?: Array<ProductItemData>) {
    return this.container;
  }
}

export default Componets;
