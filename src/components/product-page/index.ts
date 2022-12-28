import Page from "../templates/page";
import ProductCardPage from "../product-page/productPage";

class ProductPage extends Page {
  productCardPage: ProductCardPage;
  static TextObject = {
    MainTitle: "Product Page",
  };

  constructor(id: string) {
    super(id);
    this.productCardPage = new ProductCardPage(
      "div",
      "prodpage-container",
      "item3Id"
    );
  }

  renderProductPage() {
    const mainProdPage: HTMLElement = document.createElement("main");
    mainProdPage.classList.add("main_prodpage");
    mainProdPage.append(this.productCardPage.render());
    this.container.append(mainProdPage);
  }
  render() {
    const title = this.createHeaderTitle(ProductPage.TextObject.MainTitle);
    this.container.append(title);
    this.renderProductPage();
    return this.container;
  }
}

export default ProductPage;
