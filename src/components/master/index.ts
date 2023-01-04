// import Page from "../core/templates/page";
import Page from "../templates/page";
import Filter from "./Filter";
// import Filter from "./filter";
import Catalog from "./catalog";
import Sort from "./sort";
import productsData from "../data";
import { ProductItemData } from "../../types";
import PopupMaxGoods from "../details/popupMaxGoods";
// import Components from "../Components";

class MainPage extends Page {
  filter: Filter;
  sort: Sort;
  catalog: Catalog;
  _data: Array<ProductItemData>;
  static TextObject = {
    MainTitle: "Main Page",
  };
  _searchProp: {
    brandOptions: Array<string>;
    propOptions: string;
    minPrice: number;
    maxPrice: number;
    minStock: number;
    maxStock: number;
  };
  popupMaxGoods: PopupMaxGoods;

  constructor(id: string) {
    super(id);
    this._data = productsData.sort(() => Math.random() - 0.5);
    this.filter = new Filter("section", "filter", "filter");
    this.sort = new Sort("div", "sort", "sort", productsData);
    this.catalog = new Catalog(
      "ul",
      "product-list",
      "product-list",
      productsData
    );
    this._searchProp = {
      brandOptions: [],
      propOptions: "",
      minPrice: 0,
      maxPrice: 0,
      minStock: 0,
      maxStock: 0,
    };
    this.popupMaxGoods = new PopupMaxGoods("div", "popup-max-goods__wrap");
  }
  renderMain(_data: Array<ProductItemData>) {
    const catalogPage: HTMLElement = document.createElement("section");
    catalogPage.className = "catalog-page";

    const catalogGrid: HTMLDivElement = document.createElement("div");
    catalogGrid.className = "catalog-grid container";
    catalogGrid.append(this.filter.render());

    const section: HTMLElement = document.createElement("section");
    section.className = "forRender";

    section.append(this.sort.render());
    section.append(this.catalog.render(_data));

    catalogGrid.append(section);
    catalogPage.append(catalogGrid);

    this.container.append(catalogPage);
    this.container.append(this.popupMaxGoods.render());
  }
  afterRender() {
    //HANDLERS
    //PRICE
    let result: Array<ProductItemData> = this._data;
    const sortPriceDown: HTMLElement | null = document.querySelector(
      '.sort-button[name="price_down"]'
    );
    sortPriceDown?.addEventListener("click", () => {
      // console.log(el.target);
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.price) > Number(b.price)) {
          return -1;
        }
        if (Number(a.price) < Number(b.price)) {
          return 1;
        }
        return 0;
      });
      // console.log(result);
      this.reRender(result);
    });

    const sortPriceUp: HTMLElement | null = document.querySelector(
      '.sort-button[name="price_up"]'
    );
    sortPriceUp?.addEventListener("click", () => {
      // console.log(el.target);
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.price) > Number(b.price)) {
          return 1;
        }
        if (Number(a.price) < Number(b.price)) {
          return -1;
        }
        return 0;
      });
      // console.log(result);
      this.reRender(result);
    });

    //RATING
    const sortRatingDown: HTMLElement | null = document.querySelector(
      '.sort-button[name="rating_down"]'
    );
    sortRatingDown?.addEventListener("click", () => {
      // console.log(el.target);
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.rating) > Number(b.rating)) {
          return -1;
        }
        if (Number(a.rating) < Number(b.rating)) {
          return 1;
        }
        return 0;
      });
      // console.log(result);
      this.reRender(result);
    });

    const sortRatingUp: HTMLElement | null = document.querySelector(
      '.sort-button[name="rating_up"]'
    );
    sortRatingUp?.addEventListener("click", () => {
      // console.log(el.target);
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.rating) > Number(b.rating)) {
          return 1;
        }
        if (Number(a.rating) < Number(b.rating)) {
          return -1;
        }
        return 0;
      });
      // console.log(result);
      this.reRender(result);
    });

    //DISCOUNT
    const sortDiscountDown: HTMLElement | null = document.querySelector(
      '.sort-button[name="discount_down"]'
    );
    sortDiscountDown?.addEventListener("click", () => {
      // console.log(el.target);
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.discountPercentage) > Number(b.discountPercentage)) {
          return -1;
        }
        if (Number(a.discountPercentage) < Number(b.discountPercentage)) {
          return 1;
        }
        return 0;
      });
      // console.log(result);
      this.reRender(result);
    });

    const sortDiscountUp: HTMLElement | null = document.querySelector(
      '.sort-button[name="discount_up"]'
    );
    sortDiscountUp?.addEventListener("click", () => {
      // console.log(el.target);
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.discountPercentage) > Number(b.discountPercentage)) {
          return 1;
        }
        if (Number(a.discountPercentage) < Number(b.discountPercentage)) {
          return -1;
        }
        return 0;
      });
      // console.log(result);
      this.reRender(result);
    });

    ////////////
    //filters
    ////////////
    const form: HTMLFormElement | null = document.querySelector("form");
    // console.log(form);
    form?.addEventListener("change", (el) => {
      // console.log(el.target);
      if (el.target instanceof HTMLInputElement) {
        const input: HTMLInputElement = el.target;
        const arrCheckbox: Array<string> = [];
        switch (input.type) {
          //CHECKBOX
          case "checkbox":
            // console.log("checkbox");
            // eslint-disable-next-line no-case-declarations
            const checkboxes: NodeListOf<HTMLInputElement> = form.querySelectorAll(
              ".filter-checkbox"
            );
            for (let i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                // this._searchProp.brandOptions = Array.from(
                //   new Set(checkboxes[i].name)
                // );
                arrCheckbox.push(checkboxes[i].name);
                // this._searchProp.brandOptions.push(checkboxes[i].name);
              }
            }
            // console.log(arrCheckbox);
            // if (arrCheckbox.length > 0) {
            //   result = this._data.filter((el) =>
            //     arrCheckbox.includes(el.brand)
            //   );
            // } else {
            //   result = this._data;
            // }
            // console.log(result);
            this._searchProp.brandOptions = arrCheckbox;
            break;
          //RADIO
          case "radio":
            // console.log("radio");
            // console.log(input.id.split("").splice(13).join(""));
            // console.log(result);
            this._searchProp.propOptions = input.id
              .split("")
              .splice(13)
              .join("");
            // console.log(this._searchProp.propOptions);
            // result = result.filter(
            //   (el) => el.category === input.id.split("").splice(13).join("")
            // );
            // console.log(result);
            break;
          // case "range":
          //   console.log("range");

          //   break;
        }
        // this._searchProp.brandOptions = arrCheckbox;
      }
      //value from range
      //price
      const minInputPrice = document.getElementById(
        "fromPriceSlider"
      ) as HTMLInputElement;
      this._searchProp.minPrice = Number(minInputPrice?.value);
      const maxInputPrice = document.getElementById(
        "toPriceSlider"
      ) as HTMLInputElement;
      this._searchProp.maxPrice = Number(maxInputPrice?.value);
      //stock
      const minInputStock = document.getElementById(
        "fromStockSlider"
      ) as HTMLInputElement;
      this._searchProp.minStock = Number(minInputStock?.value);
      const maxInputStock = document.getElementById(
        "fromStockSlider"
      ) as HTMLInputElement;
      this._searchProp.maxStock = Number(maxInputStock?.value);

      if (this._searchProp.brandOptions.length > 0) {
        if (this._searchProp.propOptions.length > 0) {
          //brand and prop
          // console.log("brand and prop");
          result = this._data.filter((element) => {
            if (
              element.price >= this._searchProp.minPrice &&
              element.price <= this._searchProp.maxPrice &&
              element.stock >= this._searchProp.minStock &&
              element.stock >= this._searchProp.maxStock &&
              element.category === this._searchProp.propOptions &&
              this._searchProp.brandOptions.includes(element.brand)
            ) {
              return true;
            } else {
              return false;
            }
          });
        } else {
          result = this._data.filter((element) => {
            // console.log("brand");
            //only brand
            if (
              element.price >= this._searchProp.minPrice &&
              element.price <= this._searchProp.maxPrice &&
              element.stock >= this._searchProp.minStock &&
              element.stock >= this._searchProp.maxStock &&
              this._searchProp.brandOptions.includes(element.brand)
            ) {
              return true;
            } else {
              return false;
            }
          });
        }
      } else if (this._searchProp.propOptions.length > 0) {
        //only prop
        // console.log("prop");
        result = this._data.filter((element) => {
          if (
            element.price >= this._searchProp.minPrice &&
            element.price <= this._searchProp.maxPrice &&
            element.stock >= this._searchProp.minStock &&
            element.stock >= this._searchProp.maxStock &&
            element.category === this._searchProp.propOptions
          ) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        //all
        // console.log("all");
        result = this._data.filter((element) => {
          if (
            element.price >= this._searchProp.minPrice &&
            element.price <= this._searchProp.maxPrice &&
            element.stock >= this._searchProp.minStock &&
            element.stock >= this._searchProp.maxStock
          ) {
            return true;
          } else {
            return false;
          }
        });
      }
      // if (
      //   this._searchProp.brandOptions.length > 0 &&
      //   this._searchProp.propOptions.length > 0
      // ) {
      //   result = this._data.filter((element) => {
      //     if (
      //       element.category === this._searchProp.propOptions &&
      //       this._searchProp.brandOptions.includes(element.brand)
      //     ) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   });
      // } else if (this._searchProp.propOptions.length == 0) {
      //   result = this._data.filter((element) => {
      //     if (element.category === this._searchProp.propOptions) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   });
      // } else {
      //   result = this._data;
      // }
      this.reRender(result);
      // function filterFunc(element: ProductItemData): boolean {
      //   if (element.category === this._searchProp.propOptions) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
    });
    //duble range PRICE slider
    const fromPriceSlider: HTMLInputElement | null = document.querySelector(
      "#fromPriceSlider"
    );
    const toPriceSlider: HTMLInputElement | null = document.querySelector(
      "#toPriceSlider"
    );
    const fromPriceInput: HTMLInputElement | null = document.querySelector(
      "#fromPriceInput"
    );
    const toPriceInput: HTMLInputElement | null = document.querySelector(
      "#toPriceInput"
    );
    if (fromPriceSlider && toPriceSlider && fromPriceInput && toPriceInput) {
      fillSlider(
        fromPriceSlider,
        toPriceSlider,
        "#C6C6C6",
        "#25daa5",
        toPriceSlider
      );
      setToggleAccessible(toPriceSlider);

      fromPriceSlider.oninput = () =>
        controlFromSlider(fromPriceSlider, toPriceSlider, fromPriceInput);
      toPriceSlider.oninput = () =>
        controlToSlider(fromPriceSlider, toPriceSlider, toPriceInput);
      fromPriceInput.oninput = () =>
        controlFromInput(
          fromPriceSlider,
          fromPriceInput,
          toPriceInput,
          toPriceSlider
        );
      toPriceInput.oninput = () =>
        controlToInput(
          toPriceSlider,
          fromPriceInput,
          toPriceInput,
          toPriceSlider
        );
    }
    const fromStockSlider: HTMLInputElement | null = document.querySelector(
      "#fromStockSlider"
    );
    const toStockSlider: HTMLInputElement | null = document.querySelector(
      "#toStockSlider"
    );
    const fromStockInput: HTMLInputElement | null = document.querySelector(
      "#fromStockInput"
    );
    const toStockInput: HTMLInputElement | null = document.querySelector(
      "#toStockInput"
    );
    if (fromStockSlider && toStockSlider && fromStockInput && toStockInput) {
      fillSlider(
        fromStockSlider,
        toStockSlider,
        "#C6C6C6",
        "#25daa5",
        toStockSlider
      );
      setToggleAccessible(toStockSlider);

      fromStockSlider.oninput = () =>
        controlFromSlider(fromStockSlider, toStockSlider, fromStockInput);
      toStockSlider.oninput = () =>
        controlToSlider(fromStockSlider, toStockSlider, toStockInput);
      fromStockInput.oninput = () =>
        controlFromInput(
          fromStockSlider,
          fromStockInput,
          toStockInput,
          toStockSlider
        );
      toStockInput.oninput = () =>
        controlToInput(
          toStockSlider,
          fromStockInput,
          toStockInput,
          toStockSlider
        );
    }

    function setToggleAccessible(currentTarget: HTMLInputElement) {
      const toSlider: HTMLInputElement | null = document.querySelector(
        "#toSlider"
      );
      if (toSlider) {
        if (Number(currentTarget.value) <= 0) {
          toSlider.style.zIndex = "2";
        } else {
          toSlider.style.zIndex = "0";
        }
      }
    }
    function controlFromInput(
      fromSlider: HTMLInputElement,
      fromInput: HTMLInputElement,
      toInput: HTMLInputElement,
      controlSlider: HTMLInputElement
    ) {
      const [from, to] = getParsed(fromInput, toInput);
      fillSlider(fromInput, toInput, "#C6C6C6", "#25daa5", controlSlider);
      if (from > to) {
        fromSlider.value = `${to}`;
        fromInput.value = `${to}`;
      } else {
        fromSlider.value = `${from}`;
      }
    }
    function controlToInput(
      toSlider: HTMLInputElement,
      fromInput: HTMLInputElement,
      toInput: HTMLInputElement,
      controlSlider: HTMLInputElement
    ) {
      const [from, to] = getParsed(fromInput, toInput);
      fillSlider(fromInput, toInput, "#C6C6C6", "#25daa5", controlSlider);
      setToggleAccessible(toInput);
      if (from <= to) {
        toSlider.value = `${to}`;
        toInput.value = `${to}`;
      } else {
        toInput.value = `${from}`;
      }
    }
    function controlFromSlider(
      fromSlider: HTMLInputElement,
      toSlider: HTMLInputElement,
      fromInput: HTMLInputElement
    ) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
      if (from > to) {
        fromSlider.value = `${to}`;
        fromInput.value = `${to}`;
      } else {
        fromInput.value = `${from}`;
      }
    }
    function controlToSlider(
      fromSlider: HTMLInputElement,
      toSlider: HTMLInputElement,
      toInput: HTMLInputElement
    ) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
      setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = `${to}`;
        toInput.value = `${to}`;
      } else {
        toInput.value = `${from}`;
        toSlider.value = `${from}`;
      }
    }
    function getParsed(
      currentFrom: HTMLInputElement,
      currentTo: HTMLInputElement
    ) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    function fillSlider(
      from: HTMLInputElement,
      to: HTMLInputElement,
      sliderColor: string,
      rangeColor: string,
      controlSlider: HTMLInputElement
    ) {
      const rangeDistance = Number(to.max) - Number(to.min);
      const fromPosition = Number(from.value) - Number(to.min);
      const toPosition = Number(to.value) - Number(to.min);
      controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
        ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
        ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
        ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
        ${sliderColor} 100%)`;
    }

    const productList: HTMLElement | null = document.querySelector(
      ".product-list"
    );
    // console.log(productList);
    productList?.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const toCard = (event.target as HTMLElement).closest(".buy-button");
      const clickAbout = (event.target as HTMLAnchorElement).closest(
        ".about-button"
      );
      const itemID = target.closest(".product-card")?.id;
      //const arrCart = [];
      // console.log(event);
      if (toCard) {
        console.log("клик на кнопке В КОРЗИНУ", itemID);
        if (itemID) {
          const currentProduct = productsData.find(
            (item) => item.id == +itemID
          );
          console.log(currentProduct);
          const cart: string | null = localStorage.getItem("cart");
          let arrCart = [];
          if (cart) {
            arrCart = JSON.parse(cart);
          }
          //if (arrCart.length === 10) {
          //`Sorry, maximum 10 items in the cart...`
          //} else {
          arrCart.push(currentProduct);
          localStorage.setItem("cart", JSON.stringify(arrCart));
          //}
        }
      }
      if (clickAbout instanceof HTMLAnchorElement) {
        console.log("клик на кнопке ABOUT", itemID);
        clickAbout.href = "#goods-page";
        if (itemID) {
          const currentAboutProduct = productsData.find(
            (item) => item.id == +itemID
          );
          console.log(currentAboutProduct);
          localStorage.setItem("about", JSON.stringify(currentAboutProduct));
        }
        //localStorage.clear();
      }
    });

    const buttonReset: HTMLButtonElement | null = document.querySelector(
      ".reset-button"
    );
    buttonReset?.addEventListener("click", () => {
      this.reRender(this._data);
    });

    const search = document.querySelector(".search_input") as HTMLInputElement;
    search.addEventListener("input", () => {
      const searchValue = search.value.trim().toLocaleLowerCase();
      if (searchValue && searchValue != "") {
        result = this._data.filter((item) => {
          if (
            item.title.toLowerCase().includes(searchValue) ||
            `${item.price}`.includes(searchValue) ||
            `${item.discountPercentage}`.includes(searchValue) ||
            `${item.rating}`.includes(searchValue) ||
            `${item.stock}`.includes(searchValue) ||
            item.brand.toLowerCase().includes(searchValue) ||
            item.category.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
          ) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        result = this._data;
      }
      this.reRender(result);
    });
  }

  reRender(arr: Array<ProductItemData>) {
    const section: HTMLElement | null = document.querySelector(".forRender");
    const productList: HTMLElement | null = document.querySelector(
      ".product-list"
    );
    if (productList) {
      productList.innerHTML = "";
    }
    // console.log(productList);
    section?.append(this.catalog.render(arr));
  }

  render() {
    this.renderMain(this._data);
    setTimeout(() => {
      this.afterRender();
    }, 0);
    return this.container;
  }
}

export default MainPage;
