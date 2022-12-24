import Page from "../templates/page";
import Filter from "./Filter";
import Catalog from "./catalog";
import productsData from "../data";
// import Components from "../Components";

class MainPage extends Page {
  filter: Filter;
  catalog: Catalog;
  static TextObject = {
    MainTitle: "Main Page",
  };

  constructor(id: string) {
    super(id);
    this.filter = new Filter("section", "filter", "filter");
    this.catalog = new Catalog("section", "catalog", "catalog", productsData);
  }

  renderMain() {
    const catalogPage: HTMLElement = document.createElement("section");
    catalogPage.className = "catalog-page";

    const catalogGrid: HTMLDivElement = document.createElement("div");
    catalogGrid.className = "catalog-grid container";
    catalogGrid.append(this.filter.render());
    catalogGrid.append(this.catalog.render(productsData));
    catalogPage.append(catalogGrid);

    this.container.append(catalogPage);
  }

  render() {
    this.renderMain();
    return this.container;
  }
}

export default MainPage;
