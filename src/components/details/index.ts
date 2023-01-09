import IComponent from "../templates/icomponent";
import { PageIds } from "../app/index";

const Buttons = [
  {
    id: PageIds.MainPage,
    text: "Main Page",
  },
  {
    id: PageIds.ProductPage,
    text: "Goods Page",
  },
  {
    id: PageIds.CartPage,
    text: "Cart Page",
  },
  {
    id: PageIds.ErrorPage,
    text: "Error Page",
  },
];

class Links extends IComponent {
  constructor(tageName: string, className: string) {
    super(tageName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement("div");
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.classList.add("link-page");
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Links;
