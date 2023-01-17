import Page from "../templates/page";
import Filter from "./Filter";
import Catalog from "./catalog";
import Sort from "./sort";
import productsData from "../data";
import { ProductItemData } from "../../types";
import PopupMaxGoods from "../details/popupMaxGoods";
import Footer from "../details/footer";

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
    searchValue: string;
  };
  popupMaxGoods: PopupMaxGoods;
  footer: Footer;

  constructor(id: string) {
    super(id);
    this._data = productsData.sort(() => Math.random() - 0.5);
    this.filter = new Filter("section", "filter", "filter");
    this.sort = new Sort("div", "sort", "sort", productsData);
    this.catalog = new Catalog(
      "ul",
      "product-list grid3x",
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
      searchValue: "",
    };
    this.popupMaxGoods = new PopupMaxGoods("div", "popup-max-goods__wrap");
    this.footer = new Footer("footer", "footer");
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
    this.container.append(this.footer.render());
    this.container.append(this.popupMaxGoods.render());
  }
  afterRender() {
    function clearURL() {
      window.history.replaceState({}, "", location.pathname);
    }
    //HANDLERS
    //PRICE
    let result: Array<ProductItemData> = this._data;
    const sortPriceDown: HTMLElement | null = document.querySelector(
      '.sort-button[name="price_down"]'
    );
    function sortPrDown() {
      sortPriceUp?.classList.remove("active");
      sortPriceDown?.classList.add("active");
      sortRatingUp?.classList.remove("active");
      sortRatingDown?.classList.remove("active");
      sortDiscountUp?.classList.remove("active");
      sortDiscountDown?.classList.remove("active");
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.price) > Number(b.price)) {
          return -1;
        }
        if (Number(a.price) < Number(b.price)) {
          return 1;
        }
        return 0;
      });
    }
    sortPriceDown?.addEventListener("click", () => {
      sortPrDown();
      this.reRender(result);
    });

    const sortPriceUp: HTMLElement | null = document.querySelector(
      '.sort-button[name="price_up"]'
    );
    function sortPrUp() {
      sortPriceUp?.classList.add("active");
      sortPriceDown?.classList.remove("active");
      sortRatingUp?.classList.remove("active");
      sortRatingDown?.classList.remove("active");
      sortDiscountUp?.classList.remove("active");
      sortDiscountDown?.classList.remove("active");

      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.price) > Number(b.price)) {
          return 1;
        }
        if (Number(a.price) < Number(b.price)) {
          return -1;
        }
        return 0;
      });
    }
    sortPriceUp?.addEventListener("click", () => {
      sortPrUp();
      this.reRender(result);
    });

    //RATING
    const sortRatingDown: HTMLElement | null = document.querySelector(
      '.sort-button[name="rating_down"]'
    );
    function sortRatDown() {
      sortPriceUp?.classList.remove("active");
      sortPriceDown?.classList.remove("active");
      sortRatingUp?.classList.remove("active");
      sortRatingDown?.classList.add("active");
      sortDiscountUp?.classList.remove("active");
      sortDiscountDown?.classList.remove("active");

      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.rating) > Number(b.rating)) {
          return -1;
        }
        if (Number(a.rating) < Number(b.rating)) {
          return 1;
        }
        return 0;
      });
    }
    sortRatingDown?.addEventListener("click", () => {
      sortRatDown();
      this.reRender(result);
    });

    const sortRatingUp: HTMLElement | null = document.querySelector(
      '.sort-button[name="rating_up"]'
    );
    function sortRatUp() {
      sortPriceUp?.classList.remove("active");
      sortPriceDown?.classList.remove("active");
      sortRatingUp?.classList.add("active");
      sortRatingDown?.classList.remove("active");
      sortDiscountUp?.classList.remove("active");
      sortDiscountDown?.classList.remove("active");

      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.rating) > Number(b.rating)) {
          return 1;
        }
        if (Number(a.rating) < Number(b.rating)) {
          return -1;
        }
        return 0;
      });
    }
    sortRatingUp?.addEventListener("click", () => {
      sortRatUp();
      this.reRender(result);
    });

    //DISCOUNT
    const sortDiscountDown: HTMLElement | null = document.querySelector(
      '.sort-button[name="discount_down"]'
    );
    function sortDiscDown() {
      sortPriceUp?.classList.remove("active");
      sortPriceDown?.classList.remove("active");
      sortRatingUp?.classList.remove("active");
      sortRatingDown?.classList.remove("active");
      sortDiscountUp?.classList.remove("active");
      sortDiscountDown?.classList.add("active");

      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.discountPercentage) > Number(b.discountPercentage)) {
          return -1;
        }
        if (Number(a.discountPercentage) < Number(b.discountPercentage)) {
          return 1;
        }
        return 0;
      });
    }
    sortDiscountDown?.addEventListener("click", () => {
      sortDiscDown();
      this.reRender(result);
    });

    const sortDiscountUp: HTMLElement | null = document.querySelector(
      '.sort-button[name="discount_up"]'
    );
    function sortDiscUp() {
      sortPriceUp?.classList.remove("active");
      sortPriceDown?.classList.remove("active");
      sortRatingUp?.classList.remove("active");
      sortRatingDown?.classList.remove("active");
      sortDiscountUp?.classList.add("active");
      sortDiscountDown?.classList.remove("active");
      result.sort((a: ProductItemData, b: ProductItemData) => {
        if (Number(a.discountPercentage) > Number(b.discountPercentage)) {
          return 1;
        }
        if (Number(a.discountPercentage) < Number(b.discountPercentage)) {
          return -1;
        }
        return 0;
      });
    }
    sortDiscountUp?.addEventListener("click", () => {
      sortDiscUp();
      this.reRender(result);
    });

    ////////////
    //filters
    ////////////
    const form: HTMLFormElement | null = document.querySelector("form");
    form?.addEventListener("change", (el) => {
      if (el.target instanceof HTMLInputElement) {
        const input: HTMLInputElement = el.target;
        const arrCheckbox: Array<string> = [];
        switch (input.type) {
          //CHECKBOX
          case "checkbox":
            // eslint-disable-next-line no-case-declarations
            const checkboxes: NodeListOf<HTMLInputElement> = form.querySelectorAll(
              ".filter-checkbox"
            );
            for (let i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                arrCheckbox.push(checkboxes[i].name);
              }
            }
            this._searchProp.brandOptions = arrCheckbox;
            break;
          //RADIO
          case "radio":
            this._searchProp.propOptions = input.id
              .split("")
              .splice(13)
              .join("");
            break;
        }
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

      // eslint-disable-next-line no-case-declarations
      const params = new URLSearchParams(JSON.stringify(this._searchProp));

      clearURL();
      history.pushState({}, "", `${window.location.href}?${params}`);
      this.reRender(result);
    });
    //double range PRICE slider
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

    const popupMaxGoods = document.querySelector(".popup-max-goods__wrap");
    const productList: HTMLElement | null = document.querySelector(
      ".product-list"
    );
    productList?.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const toCard = (event.target as HTMLElement).closest(".buy-button");
      const clickAbout = (event.target as HTMLAnchorElement).closest(
        ".about-button"
      );
      const clickOnPrice = (event.target as HTMLAnchorElement).closest(
        ".price"
      );
      const itemID = target.closest(".product-card")?.id;

      if (toCard) {
        // console.log("клик на кнопке В КОРЗИНУ", itemID);
        if (itemID) {
          const currentProduct = productsData.find(
            (item) => item.id == +itemID
          );
          const cart: string | null = localStorage.getItem("cart");
          let arrCart = [];
          if (cart) {
            arrCart = JSON.parse(cart);
          }
          if (arrCart.length === 10) {
            popupMaxGoods?.classList.add("open");
            document.body.style.overflowY = "hidden";
          } else {
            arrCart.push(currentProduct);
            localStorage.setItem("cart", JSON.stringify(arrCart));
            const fullCartText: HTMLSpanElement | null = document.querySelector(
              ".full-cart-text"
            );
            if (fullCartText) {
              fullCartText.innerText = `${arrCart.length}`;
            }
            const valuePriceCart: HTMLSpanElement | null = document.querySelector(
              ".value-price-cart"
            );
            if (valuePriceCart) {
              const sum: number = arrCart.reduce(
                (sum: number, item: ProductItemData) => sum + item.price,
                0
              );
              valuePriceCart.innerText = `${sum}`;
            }
          }
        }
      }
      if (clickAbout instanceof HTMLAnchorElement) {
        // console.log("клик на кнопке ABOUT", itemID);
        clearURL();
        clickAbout.href = "#goods-page";
        if (itemID) {
          const currentAboutProduct = productsData.find(
            (item) => item.id == +itemID
          );
          localStorage.setItem("about", JSON.stringify(currentAboutProduct));
          history.pushState({}, "", `${window.location}?id=${itemID}`);
        }
      }
      if (clickOnPrice instanceof HTMLAnchorElement) {
        clearURL();
        clickOnPrice.href = "#goods-page";
        if (itemID) {
          const currentAboutProduct = productsData.find(
            (item) => item.id == +itemID
          );
          localStorage.setItem("about", JSON.stringify(currentAboutProduct));
          history.pushState({}, "", `${window.location}?id=${itemID}`);
        }
      }
    });
    popupMaxGoods?.addEventListener("click", (event) => {
      const popupWrap = (event.target as HTMLElement).closest(
        ".popup-max-goods"
      );
      const btnClose = (event.target as HTMLElement).closest(".btn__close");
      if (!popupWrap || btnClose) {
        popupMaxGoods.classList.remove("open");
        document.body.style.overflowY = "auto";
      }
    });

    const buttonReset: HTMLButtonElement | null = document.querySelector(
      ".reset-button"
    );
    buttonReset?.addEventListener("click", () => {
      clearURL();
      this.reRender(this._data);
    });

    const search = document.querySelector(".search_input") as HTMLInputElement;
    search.addEventListener("input", () => {
      const searchValue = search.value.trim().toLocaleLowerCase();
      this._searchProp.searchValue = searchValue;
      const params = new URLSearchParams(JSON.stringify(this._searchProp));
      clearURL();
      history.pushState({}, "", `${window.location.href}?${params}`);

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
    function gridChange() {
      const grid1: HTMLElement | null = document.querySelector(".grid1");
      const grid2: HTMLElement | null = document.querySelector(".grid2");
      const productList: HTMLElement | null = document.querySelector(
        ".product-list"
      );
      grid1?.addEventListener("click", () => {
        productList?.classList.remove("grid4x");
        productList?.classList.add("grid3x");
      });
      grid2?.addEventListener("click", () => {
        productList?.classList.remove("grid3x");
        productList?.classList.add("grid4x");
      });
    }
    gridChange();
  }

  reRender(arr: Array<ProductItemData>) {
    const section: HTMLElement | null = document.querySelector(".forRender");
    const productList: HTMLElement | null = document.querySelector(
      ".product-list"
    );
    if (productList) {
      productList.innerHTML = "";
    }
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
