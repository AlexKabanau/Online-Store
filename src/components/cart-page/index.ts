import Page from "../templates/page";
import Cart_Page from "./cart";
import { ProductItemData } from "../../types";

import productsData from "../data";

class CartPage extends Page {
  cart_Page: Cart_Page;
  _data: Array<ProductItemData>;
  static TextObject = {
    MainTitle: "Cart Page",
  };

  constructor(id: string) {
    super(id);
    const cart: string | null = localStorage.getItem("cart");
    let arrCart = [];
    if (cart) {
      arrCart = JSON.parse(cart);
    }
    // this._data = this._data = productsData.sort(() => Math.random() - 0.5);
    this._data = arrCart;
    this.cart_Page = new Cart_Page("section", "section-cart", "", productsData);
  }
  renderMain(_data: Array<ProductItemData>) {
    this.container.append(this.cart_Page.render(_data));
  }

  render() {
    const title = this.createHeaderTitle(CartPage.TextObject.MainTitle);
    this.container.append(title);
    this.renderMain(this._data);
    return this.container;
  }
}

export default CartPage;
