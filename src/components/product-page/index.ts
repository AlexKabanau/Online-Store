import Page from "../templates/page";
import ProductCardPage from "../product-page/productPage";
import Header from "../details/header";

class ProductPage extends Page {
  header: Header;
  productCardPage: ProductCardPage;
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
  }
  renderProductPage() {
    const mainProdPage: HTMLElement = document.createElement("main");
    mainProdPage.classList.add("main_prodpage");
    this.container.append(this.header.render());
    mainProdPage.append(this.productCardPage.render());
    this.container.append(mainProdPage);
  }
  render() {
    this.renderProductPage();
    return this.container;
  }
}

export default ProductPage;
