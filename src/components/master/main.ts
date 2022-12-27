import Filter from "./Filter";
//import Catalog from "./catalog";
import productsData from "../data";
import Components from "../Components";

class Main extends Components {
  filter: Filter;
  //catalog: Catalog;

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className, id);
    this.filter = new Filter("section", "filter", "filter");
  }
  renderMain() {
    const catalogPage: HTMLElement = document.createElement("section");
    catalogPage.className = "catalog-page";

    const catalogGrid: HTMLDivElement = document.createElement("div");
    catalogGrid.className = "catalog-grid container";
    catalogGrid.append(this.filter.render());
    this.container.append(catalogPage);
  }

  render(): HTMLElement {
    this.renderMain();
    return this.container;
  }
}

export default Main;
