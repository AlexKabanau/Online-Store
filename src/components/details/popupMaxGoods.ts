class PopupMaxGoods {
  container: HTMLElement;
  constructor(tageName: string, className: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
  }
  createPopupMaxGoods() {
    const popupMaxGoods: HTMLElement = document.createElement("div");
    popupMaxGoods.className = "popup-max-goods";
    const messagePopup: HTMLParagraphElement = document.createElement("p");
    messagePopup.className = "message-popup";
    messagePopup.innerText = "Sorry, maximum 10 items in the cart...";
    popupMaxGoods.append(messagePopup);
    const btnClosePopup: HTMLElement = document.createElement("button");
    btnClosePopup.className = "btn__close";
    btnClosePopup.innerHTML = `×`;
    popupMaxGoods.append(btnClosePopup);
    this.container.append(popupMaxGoods);
  }

  render() {
    this.createPopupMaxGoods();
    return this.container;
  }
}

export default PopupMaxGoods;
