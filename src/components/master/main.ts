import Filter from "./Filter";
import Catalog from "./catalog";
import productsData from "../data";
import Components from "../Components";
import { ProductItemData } from "../../types";

class Main extends Components {
  filter: Filter;
  catalog: Catalog;
  searchProp: {
    minPrice: number | null;
    maxPrice: number | null;
    sortOptions: string;
  };

  constructor(tagName: string, className: string, id: string) {
    super(tagName, className, id);
    this.filter = new Filter("section", "filter", "filter");
    this.catalog = new Catalog("section", "catalog", "catalog", productsData);
    this.searchProp = {
      minPrice: null,
      maxPrice: null,
      sortOptions: "",
    };
  }
  checkFilter(event: Event) {
    const priceSort: HTMLButtonElement | null = document.querySelector(
      '.sort-button[name="price"]'
    );
    if (priceSort) {
      this.searchProp.sortOptions = priceSort.name;
    }

    const result: Array<ProductItemData> = productsData;

    switch (this.searchProp.sortOptions) {
      case "price":
        result.sort((a: ProductItemData, b: ProductItemData) => {
          if (Number(a.price) > Number(b.price)) {
            return -1;
          }
          if (Number(a.price) < Number(b.price)) {
            return 1;
          }
          return 0;
        });
        break;
    }
    this.renderMain(result);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderMain(_data: Array<ProductItemData> = productsData) {
    const catalogPage: HTMLElement = document.createElement("section");
    catalogPage.className = "catalog-page";

    const catalogGrid: HTMLDivElement = document.createElement("div");
    catalogGrid.className = "catalog-grid container";
    catalogGrid.append(this.filter.render());
    catalogGrid.append(this.catalog.render(_data));
    catalogPage.append(catalogGrid);

    this.container.append(catalogPage);
  }

  render(): HTMLElement {
    this.renderMain();
    return this.container;
  }

  afterRender() {
    const priceSort: HTMLButtonElement | null = document.querySelector(
      '.sort-button[name="price"]'
    );
    priceSort?.addEventListener("click", this.checkFilter);
  }
}

export default Main;
