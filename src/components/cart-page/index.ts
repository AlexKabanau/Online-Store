import Page from "../templates/page";
import Modal from "./modal";

class CartPage extends Page {
  static TextObject = {
    MainTitle: "Cart Page",
  };

  //modal popUp
  // modal: Modal;

  constructor(id: string) {
    super(id);

    //modal popUp
    // this.modal = new Modal("section", "", "modal");
  }

  render() {
    const title = this.createHeaderTitle(CartPage.TextObject.MainTitle);
    this.container.append(title);

    //modal popUp
    // this.container.append(this.modal.render());
    return this.container;
  }
}

export default CartPage;
