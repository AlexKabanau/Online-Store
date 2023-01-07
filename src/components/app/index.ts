import Page from "../templates/page";
import MainPage from "../master";
import ProductPage from "../product-page";
import CartPage from "../cart-page";
import Header from "../details/header";
import Links from "../details";

export const enum PageIds {
  MainPage = "main-page",
  ProductPage = "goods-page",
  CartPage = "cart-page",
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId = "current-page";
  private initialPage: MainPage;
  header: Header;
  private links: Links;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.ProductPage) {
      page = new ProductPage(idPage);
    } else if (idPage === PageIds.CartPage) {
      page = new CartPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
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
    App.container.prepend(this.links.render());
    App.renderNewPage("main-page");
    this.enableRouteChange();
  }
}

export default App;
