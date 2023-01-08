import Components from "../Components";
import { ProductItemData } from "../../types";
// import handlers from "./handlers";
import productsData from "../data";

class Cart_Page extends Components {
  constructor(
    tagName: string,
    className: string,
    id: string,
    data: Array<ProductItemData>,
    numbers: Array<number>
  ) {
    super(tagName, className, id, data, numbers);
  }
  renderCart(data: Array<ProductItemData>, numbers: Array<number>) {
    const idArray: Array<number> = Array.from(new Set(data.map((el) => el.id)));
    const header: HTMLElement = document.createElement("header");
    header.className = "section-cart__header";

    const container: HTMLElement = document.createElement("div");
    container.className = "container";

    // const sectionTitle: HTMLElement = document.createElement("h2");
    // sectionTitle.className = "section-cart__title";
    // sectionTitle.innerText = "Корзина товаров";
    // container.append(sectionTitle);
    header.append(container);
    this.container.append(header);

    const sectionCartBody: HTMLElement = document.createElement("div");
    sectionCartBody.className = "section-cart__body";
    const bodyContainer: HTMLElement = document.createElement("div");
    bodyContainer.className = "container";
    const cartSection: HTMLElement = document.createElement("section");
    cartSection.className = "_cart";
    const cartHeader: HTMLElement = document.createElement("header");
    cartHeader.className = "cart-header";
    const cartHeaderTitle: HTMLElement = document.createElement("div");
    cartHeaderTitle.className = "cart-header__title";
    cartHeaderTitle.innerText = "Title";
    cartHeader.append(cartHeaderTitle);
    const cartHeaderCount: HTMLElement = document.createElement("div");
    cartHeaderCount.className = "cart-header__count";
    cartHeaderCount.innerText = "Amount";
    cartHeader.append(cartHeaderCount);
    const cartHeaderCost: HTMLElement = document.createElement("div");
    cartHeaderCost.className = "cart-header__cost";
    cartHeaderCost.innerText = "Cost";
    cartHeader.append(cartHeaderCost);
    cartSection.append(cartHeader);

    for (let i = 0; i < idArray.length; i++) {
      const curProduct = productsData.find((item) => item.id == idArray[i]);
      if (curProduct) {
        const cartProduct: HTMLElement = document.createElement("section");
        cartProduct.className = "_product";
        cartProduct.id = `${curProduct.id}`;

        const divImg: HTMLElement = document.createElement("div");
        divImg.className = "product__img";
        const image: HTMLImageElement = document.createElement("img");
        image.src = curProduct.thumbnail;
        image.alt = curProduct.title;
        divImg.append(image);
        cartProduct.append(divImg);

        const divTitle: HTMLElement = document.createElement("div");
        divTitle.className = "product__title";
        divTitle.innerHTML = curProduct.title;
        cartProduct.append(divTitle);

        const divCount: HTMLElement = document.createElement("div");
        divCount.className = "product__count";
        const div_Count: HTMLElement = document.createElement("div");
        div_Count.className = "count";
        const divCountBox: HTMLElement = document.createElement("div");
        divCountBox.className = "count__box";
        divCountBox.innerHTML = `<input type="number" class="count__input" max="100" min="1" value="${numbers[i]}">`;
        div_Count.append(divCountBox);
        const divCountControls: HTMLElement = document.createElement("div");
        divCountControls.className = "count__controls";
        const buttonUp: HTMLButtonElement = document.createElement("button");
        buttonUp.type = "button";
        const buttonUpImage: HTMLImageElement = document.createElement("img");
        buttonUpImage.className = "button_image_up";
        buttonUp.append(buttonUpImage);
        divCountControls.append(buttonUp);
        const buttonDown: HTMLButtonElement = document.createElement("button");
        buttonDown.type = "button";
        const buttonDownImage: HTMLImageElement = document.createElement("img");
        buttonDownImage.className = "button_image_down";
        buttonDown.append(buttonDownImage);
        divCountControls.append(buttonDown);
        div_Count.append(divCountControls);

        divCount.append(div_Count);
        cartProduct.append(divCount);

        const divPrice: HTMLElement = document.createElement("div");
        divPrice.className = "product__price";
        divPrice.innerHTML = `${curProduct.price * numbers[i]}`;
        cartProduct.append(divPrice);

        const divControls: HTMLElement = document.createElement("div");
        divControls.className = "product__controls";
        const button: HTMLButtonElement = document.createElement("button");
        button.type = "button";
        button.className = "del-item";
        const buttonImage: HTMLImageElement = document.createElement("img");
        buttonImage.className = "button_image";
        button.append(buttonImage);
        divControls.append(button);
        cartProduct.append(divControls);

        cartSection.append(cartProduct);
      }
    }

    const cartFooter: HTMLElement = document.createElement("header");
    cartFooter.className = "cart-footer";
    const cartFooterCount: HTMLElement = document.createElement("div");
    cartFooterCount.className = "cart-footer__count";
    cartFooterCount.innerText = `${data.length}`;
    cartFooter.append(cartFooterCount);
    const cartFooterPrice: HTMLElement = document.createElement("div");
    cartFooterPrice.className = "cart-footer__price";
    const cart: string | null = localStorage.getItem("cart");
    let arrCart = [];
    if (cart) {
      arrCart = JSON.parse(cart);
      // console.log(arrCart);
    }
    const sum: number = arrCart.reduce(
      (sum: number, item: ProductItemData) => sum + item.price,
      0
    );
    //console.log(sum);
    // valuePriceCart.innerText = `${sum}`;
    cartFooterPrice.innerText = `${sum}`;
    cartFooter.append(cartFooterPrice);
    cartSection.append(cartFooter);

    bodyContainer.append(cartSection);

    sectionCartBody.append(bodyContainer);
    this.container.append(sectionCartBody);
  }

  render(data: Array<ProductItemData>, numbers: Array<number>) {
    this.renderCart(data, numbers);
    return this.container;
  }
}

export default Cart_Page;
