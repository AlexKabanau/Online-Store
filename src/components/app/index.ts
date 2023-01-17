import Page from "../templates/page";
import MainPage from "../master";
import ProductPage from "../product-page";
import CartPage from "../cart-page";
import ErrorPage from "../error-page";
import Header from "../details/header";
import Links from "../details";

export const enum PageId {
  Main = "main-page",
  Product = "goods-page",
  Cart = "cart-page",
  Error = "error-page",
  Current = "current",
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: PageId = PageId.Current;
  private initialPage: MainPage;
  header: Header;
  private links: Links;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    switch (idPage) {
      case PageId.Main:
        page = new MainPage(idPage);
        break;
      case PageId.Product:
        page = new ProductPage(idPage);
        break;
      case PageId.Cart:
        page = new CartPage(idPage);
        break;
      default:
        page = new ErrorPage(idPage);
    }

    const pageHTML = page.render();
    pageHTML.id = App.defaultPageId;
    App.container.append(pageHTML);
  }

  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new MainPage("main-page");
    this.header = new Header("header", "header");
    this.links = new Links("links", "links");
  }

  run() {
    App.container.prepend(this.header.render());
    //App.container.prepend(this.links.render());
    App.renderNewPage(PageId.Main);
    this.enableRouteChange();
  }
}

export default App;
