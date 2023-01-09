import { ProductItemData } from "../../types/index";
import Page from "../templates/page";
import ProductCardPage from "../product-page/productPage";
import Footer from "../details/footer";
import PopupMaxGoods from "../details/popupMaxGoods";
let idAboutProd: ProductItemData;
class ProductPage extends Page {
  productCardPage: ProductCardPage;
  footer: Footer;
  popupMaxGoods: PopupMaxGoods;
  static TextObject = {
    MainTitle: "Product Page",
  };

  constructor(id: string) {
    super(id);
    const aboutProd: string | null = localStorage.getItem("about");
    if (aboutProd) {
      idAboutProd = JSON.parse(aboutProd);
      console.log(idAboutProd.id);
    }
    this.productCardPage = new ProductCardPage(
      "div",
      "prodpage-container",
      `tem${idAboutProd.id}Id`
    );
    this.footer = new Footer("footer", "footer");
    this.popupMaxGoods = new PopupMaxGoods("div", "popup-max-goods__wrap");
  }
  renderProductPage() {
    const mainProdPage: HTMLElement = document.createElement("main");
    mainProdPage.classList.add("main_prodpage");
    mainProdPage.append(this.productCardPage.render());
    this.container.append(mainProdPage);
    this.container.append(this.footer.render());
    this.container.append(this.popupMaxGoods.render());
  }

  afterRender() {
    const popupMaxGoods = document.querySelector(".popup-max-goods__wrap");
    const btnToCart: HTMLElement | null = document.querySelector(
      ".product-to-cart"
    );
    const fullCartText: HTMLSpanElement | null = document.querySelector(
      ".full-cart-text"
    );
    const valuePriceCart: HTMLSpanElement | null = document.querySelector(
      ".value-price-cart"
    );
    const btnBuyNow: HTMLAnchorElement | null = document.querySelector(
      ".product-buy-now"
    );
    /*const modalPayment = document.querySelector(
      ".modal-payment"
    ) as HTMLElement;*/
    btnToCart?.addEventListener("click", () => {
      //console.log(idAboutProd);
      const cart: string | null = localStorage.getItem("cart");
      let arrCart = [];
      if (cart) {
        arrCart = JSON.parse(cart);
      }
      if (btnToCart.classList.contains("drop")) {
        btnToCart.classList.remove("drop");
        const arrCartFilt = arrCart.filter(
          (elem: ProductItemData) => elem.id != idAboutProd.id
        );
        localStorage.setItem("cart", JSON.stringify(arrCartFilt));
        btnToCart.innerText = "Add to cart";
        if (fullCartText) {
          fullCartText.textContent = `${arrCartFilt.length}`;
        }
        if (valuePriceCart) {
          const sum: number = arrCartFilt.reduce(
            (sum: number, item: ProductItemData) => sum + item.price,
            0
          );
          valuePriceCart.textContent = `${sum}`;
        }
        //console.log(arrCartFilt);
      } else if (arrCart.length === 10) {
        popupMaxGoods?.classList.add("open");
        document.body.style.overflowY = "hidden";
      } else {
        arrCart.push(idAboutProd);
        localStorage.setItem("cart", JSON.stringify(arrCart));
        btnToCart.innerText = "Drop from cart";
        btnToCart.classList.add("drop");
        if (fullCartText) {
          fullCartText.textContent = `${arrCart.length}`;
        }
        if (valuePriceCart) {
          const sum: number = arrCart.reduce(
            (sum: number, item: ProductItemData) => sum + item.price,
            0
          );
          valuePriceCart.textContent = `${sum}`;
        }
      }
      //localStorage.clear();
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

    btnBuyNow?.addEventListener("click", () => {
      window.history.replaceState({}, "", location.pathname);
      btnBuyNow.href = "#cart-page";
      //modalPayment.classList.add("modal-show");
    });
  }

  render() {
    this.renderProductPage();
    setTimeout(() => {
      this.afterRender();
    }, 0);
    return this.container;
  }
}

export default ProductPage;
