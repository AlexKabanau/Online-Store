import { ProductItemData } from "../../types/index";

class Header {
  container: HTMLElement;
  constructor(tageName: string, className: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
  }
  createHeader() {
    const headerContainer: HTMLElement = document.createElement("div");
    headerContainer.className = "order-nav-wrapper";
    const containerTop: HTMLElement = document.createElement("div");
    containerTop.className = "container";
    headerContainer.append(containerTop);
    const nav: HTMLElement = document.createElement("div");
    nav.className = "order-nav";
    containerTop.append(nav);
    const logo: HTMLAnchorElement = document.createElement("a");
    logo.className = "logo header-logo";
    logo.href = "#main-page";
    logo.innerText = "LOGO";
    nav.append(logo);
    const priceCart: HTMLElement = document.createElement("div");
    priceCart.className = "price-cart";
    priceCart.innerText = "Cart total: ";
    nav.append(priceCart);
    const valuePriceCart: HTMLSpanElement = document.createElement("span");
    valuePriceCart.className = "value-price-cart";
    const cart: string | null = localStorage.getItem("cart");
    let arrCart = [];
    if (cart) {
      arrCart = JSON.parse(cart);
    }
    const sum: number = arrCart.reduce(
      (sum: number, item: ProductItemData) => sum + item.price,
      0
    );
    //console.log(sum);
    valuePriceCart.innerText = `${sum}`;
    priceCart.append(valuePriceCart);
    const orderInfo: HTMLElement = document.createElement("ul");
    orderInfo.className = "order-info";
    nav.append(orderInfo);
    const liFullCart: HTMLLIElement = document.createElement("li");
    liFullCart.className = "order-info-item";
    orderInfo.append(liFullCart);
    const fullCart: HTMLAnchorElement = document.createElement("a");
    fullCart.className = "cart full-cart header-cart";
    fullCart.href = "#cart-page";
    /*fullCart.innerText = "Cart total:";*/
    liFullCart.append(fullCart);
    const fullCartText: HTMLSpanElement = document.createElement("span");
    fullCartText.className = "full-cart-text";
    fullCartText.innerText = `${arrCart.length}`;
    fullCart.append(fullCartText);
    /*const liMakeOrder: HTMLLIElement = document.createElement("li");
    liMakeOrder.className = "order-info-item";
    orderInfo.append(liMakeOrder);
    const makeOrder: HTMLAnchorElement = document.createElement("a");
    makeOrder.className = "cart full-cart";
    makeOrder.href = "#";
    makeOrder.innerText = "Buy now";
    liMakeOrder.append(makeOrder);*/
    const containerBottom: HTMLElement = document.createElement("div");
    containerBottom.className = "container";
    const headerInner: HTMLElement = document.createElement("div");
    headerInner.className = "header-inner";
    headerInner.innerHTML = `
      <p class="description">Online Store<br>
      Lorem, ipsum.</p>
      <div class="header-contacts">
        <a class="header-tel" href="tel:+375290000000">+375 29 000-00-00</a>
        <p>Minsk, Belarus</p>
      </div>
    `;
    containerBottom.append(headerInner);
    this.container.append(headerContainer);
    this.container.append(containerBottom);
  }

  render() {
    this.createHeader();
    return this.container;
  }
}

export default Header;
