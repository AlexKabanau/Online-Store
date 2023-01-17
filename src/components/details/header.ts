import { ProductItemData } from "../../types/index";
import { iCreateElement } from "../../utils/utils";
import { PHONE, ADDRESS } from "../../types/constansts";

class Header {
  container: HTMLElement;
  constructor(tageName: string, className: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
  }

  createHeader() {
    const headerContainer: HTMLElement = iCreateElement({
      tag: "div",
      classes: ["order-nav-wrapper"],
    });

    headerContainer.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="order-nav-wrapper">
        <div class="container">
          <div class="order-nav">
            <a class="logo header-logo">OnlineStore</a>
            <div class="price-cart">Cart total: 
              <span class="value-price-cart">0</span>
            </div>
            <ul class="order-info">
              <li class="order-info-item">
                <a class="cart full-cart header-cart">
                  <span class="full-cart-text">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `
    );

    const cart: string | null = localStorage.getItem("cart");
    let arrCart = [];
    if (cart) {
      arrCart = JSON.parse(cart);
    }
    const sum: number = arrCart.reduce(
      (sum: number, item: ProductItemData) => sum + item.price,
      0
    );
    const valuePriceCart = headerContainer.querySelector(
      ".value-price-cart"
    ) as HTMLElement;
    valuePriceCart.innerText = `${sum}`;
    const fullCartText = headerContainer.querySelector(
      ".full-cart-text"
    ) as HTMLElement;
    fullCartText.innerText = `${arrCart.length}`;

    const containerBottom: HTMLElement = iCreateElement({
      tag: "div",
      classes: ["container", "header-bottom"],
    });

    containerBottom.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="header-inner">
        <p class="description">Online Store<br>
        of digital devices</p>
        <div class="header-contacts">
          <a class="header-tel" href="tel:+375290000000">${PHONE}</a>
          <p>${ADDRESS}</p>
        </div>
      </div>
      `
    );

    this.container.append(headerContainer);
    this.container.append(containerBottom);

    const logo = headerContainer.querySelector(".logo") as HTMLAnchorElement;
    logo.addEventListener("click", () => {
      window.history.replaceState({}, "", location.pathname);
      logo.href = "#main-page";
    });
    const fullCart = headerContainer.querySelector(
      ".full-cart"
    ) as HTMLAnchorElement;
    fullCart.addEventListener("click", () => {
      window.history.replaceState({}, "", location.pathname);
      fullCart.href = "#cart-page";
    });
  }

  render() {
    this.createHeader();
    return this.container;
  }
}

export default Header;
