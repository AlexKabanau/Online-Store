import Page from "../templates/page";
import Footer from "../details/footer";

class ErrorPage extends Page {
  footer: Footer;
  static TextObject = {
    MainTitle: "Error Page",
  };

  constructor(id: string) {
    super(id);
    this.footer = new Footer("footer", "footer");
  }

  renderErrorPage() {
    const mainErrorPage: HTMLElement = document.createElement("main");
    mainErrorPage.classList.add("main-error");
    const messageErrorWrap: HTMLElement = document.createElement("div");
    messageErrorWrap.className = "message-error-wrap";
    mainErrorPage.append(messageErrorWrap);
    const messageError: HTMLParagraphElement = document.createElement("p");
    messageError.className = "message-error";
    messageError.innerText = "PAGE NOT FOUND (404)";
    messageErrorWrap.append(messageError);
    this.container.append(mainErrorPage);
    this.container.append(this.footer.render());
  }

  render() {
    this.renderErrorPage();
    return this.container;
  }
}

export default ErrorPage;
