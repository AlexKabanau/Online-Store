// import Page from "../core/templates/page";
import Page from "../templates/page";
// import Filter from "./Filter";
import Filter from "./filter";
import Catalog from "./catalog";
import Sort from "./sort";
import productsData from "../data";
import { ProductItemData } from "../../types";
import handlers from "./handlers";
// import Components from "../Components";

class MainPage extends Page {
  filter: Filter;
  sort: Sort;
  catalog: Catalog;
  _data: Array<ProductItemData>;
  static TextObject = {
    MainTitle: "Main Page",
  };
  searchProp: {
    sortOptions: string;
  };

  constructor(id: string) {
    super(id);
    this._data = productsData.sort(() => Math.random() - 0.5);
    this.filter = new Filter("section", "filter", "filter");
    this.sort = new Sort("div", "sort", "sort", productsData, handlers);
    this.catalog = new Catalog(
      "ul",
      "product-list",
      "product-list",
      productsData,
      handlers
    );
    this.searchProp = {
      sortOptions: "",
    };
  }
  renderMain(_data: Array<ProductItemData>) {
    const catalogPage: HTMLElement = document.createElement("section");
    catalogPage.className = "catalog-page";

    const catalogGrid: HTMLDivElement = document.createElement("div");
    catalogGrid.className = "catalog-grid container";
    catalogGrid.append(this.filter.render());

    const section: HTMLElement = document.createElement("section");

    section.append(this.sort.render());
    section.append(this.catalog.render(_data));

    catalogGrid.append(section);
    catalogPage.append(catalogGrid);

    this.container.append(catalogPage);
  }

  render() {
    this.renderMain(this._data);
    return this.container;
  }
}

export default MainPage;
