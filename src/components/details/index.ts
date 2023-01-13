import IComponent from "../templates/icomponent";
import { PageId } from "../app/index";

const Buttons = [
  {
    id: PageId.Main,
    text: "Main Page",
  },
  {
    id: PageId.Product,
    text: "Goods Page",
  },
  {
    id: PageId.Cart,
    text: "Cart Page",
  },
  {
    id: PageId.Error,
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
