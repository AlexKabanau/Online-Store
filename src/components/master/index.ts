// import Page from "../core/templates/page";
import Page from "../templates/page";
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
  static TextObject = {
    MainTitle: "Main Page",
  };
  searchProp: {
    sortOptions: string;
  };

  constructor(id: string) {
    super(id);
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
  renderMain(_data: Array<ProductItemData> = productsData) {
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
  // afterRender() {
  //   // setTimeout(() => {
  //   const priceSort: HTMLButtonElement | null = document.querySelector(
  //     '.sort-button[name="price"]'
  //   );
  //   // if (!priceSort) {
  //   //   console.log("check");
  //   // } else {
  //   //   console.log(priceSort);
  //   // }
  //   priceSort?.addEventListener("click", this.checkFilter);
  //   // }, 0);
  //   // const priceSort: HTMLButtonElement | null = document.querySelector(
  //   //   '.sort-button[name="price"]'
  //   // );
  //   // if (!priceSort) {
  //   //   console.log("check");
  //   // }
  // }

  render() {
    // const promise = new Promise<HTMLElement>((resolve) => {
    //   this.renderMain();
    //   resolve(this.container);
    // });
    // promise.then(
    //   // console.log("123");
    //   // this.afterRender();
    //   // this.container;
    // );

    // const promise = new Promise<HTMLElement>((resolve) => {
    //   this.renderMain();
    //   resolve(this.container);
    // });
    // promise.then(
    //   // console.log("123");
    //   // this.afterRender();
    //   // this.container;
    // );

    this.renderMain();
    // setTimeout(() => {
    //   this.afterRender();
    // }, 0);
    return this.container;
  }
}

export default MainPage;
