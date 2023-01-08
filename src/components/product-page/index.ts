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
    //let idAboutProd;
    const aboutProd: string | null = localStorage.getItem("about");
    if (aboutProd) {
      idAboutProd = JSON.parse(aboutProd);
      console.log(idAboutProd.id);
    }
    /*const cart: string | null = localStorage.getItem("cart");
          let arrCart = [];
          if (cart) {
            arrCart = JSON.parse(cart);
          }*/
    this.productCardPage = new ProductCardPage(
      "div",
      "prodpage-container",
      `tem${idAboutProd.id}Id`
      //"tem3Id"
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
    btnToCart?.addEventListener("click", () => {
      //console.log(idAboutProd);
      const cart: string | null = localStorage.getItem("cart");
      let arrCart = [];
      if (cart) {
        arrCart = JSON.parse(cart);
      }
      if (arrCart.length === 10) {
        popupMaxGoods?.classList.add("open");
        document.body.style.overflowY = "hidden";
      } else {
        arrCart.push(idAboutProd);
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
  }

  render() {
    this.renderProductPage();
    setTimeout(() => {
      this.afterRender();
    }, 0);
    setTimeout(() => {
      this.afterRender();
    }, 0);
    return this.container;
  }
}

export default ProductPage;
