/* eslint-disable @typescript-eslint/ban-types */
import { ProductItemData } from "../types";
class Components {
  container: HTMLElement;

  constructor(
    tagName: string,
    className: string,
    id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data?: Array<ProductItemData>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handlers?: Object
  ) {
    this.container = document.createElement(tagName);
    this.container.className = className;
    this.container.id = id;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(data?: Array<ProductItemData>, handlers?: Object) {
    return this.container;
  }
}

export default Components;
