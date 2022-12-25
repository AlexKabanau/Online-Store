// import Page from "../core/templates/page";
import Page from "../templates/page";
import Filter from "./filter";
import Catalog from "./catalog";
import productsData from "../data";
import { ProductItemData } from "../../types";
import handlers from "./handlers";
// import Components from "../Components";

class MainPage extends Page {
  filter: Filter;
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
    this.catalog = new Catalog(
      "section",
      "catalog",
      "catalog",
      productsData,
      handlers
    );
    this.searchProp = {
      sortOptions: "",
    };
  }
  // checkFilter = (event: Event) => {
  //   console.log("check");
  //   const priceSort: HTMLButtonElement | null = document.querySelector(
  //     '.sort-button[name="price"]'
  //   );
  //   console.log(priceSort?.name);
  //   // console.log(this.searchProp);

  //   // if (priceSort) {
  //   //   this.searchProp.sortOptions = priceSort.name;
  //   // }

  //   const result: Array<ProductItemData> = productsData;

  //   switch (priceSort?.name) {
  //     case "price":
  //       result.sort((a: ProductItemData, b: ProductItemData) => {
  //         if (Number(a.price) > Number(b.price)) {
  //           return -1;
  //         }
  //         if (Number(a.price) < Number(b.price)) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //       break;
  //   }
  //   console.log(result);
  //   // this.renderMain(result);
  // };
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

    this.renderMain();
    // setTimeout(() => {
    //   this.afterRender();
    // }, 0);
    return this.container;
  }
}

export default MainPage;
