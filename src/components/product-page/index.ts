import Page from "../templates/page";
import ProductCardPage from "../product-page/productPage";
import Header from "../details/header";
import Footer from "../details/footer";

class ProductPage extends Page {
  header: Header;
  productCardPage: ProductCardPage;
  footer: Footer;
  static TextObject = {
    MainTitle: "Product Page",
  };

  constructor(id: string) {
    super(id);
    this.header = new Header("header", "header");
    let idAboutProd;
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
  }
  renderProductPage() {
    const mainProdPage: HTMLElement = document.createElement("main");
    mainProdPage.classList.add("main_prodpage");
    this.container.append(this.header.render());
    mainProdPage.append(this.productCardPage.render());
    this.container.append(mainProdPage);
    this.container.append(this.footer.render());
  }
  render() {
    this.renderProductPage();
    return this.container;
  }
}

export default ProductPage;
