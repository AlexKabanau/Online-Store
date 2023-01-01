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
    this.productCardPage = new ProductCardPage(
      "div",
      "prodpage-container",
      "item3Id"
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
