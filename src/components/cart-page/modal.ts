import Components from "../Components";

class Modal extends Components {
  constructor(tagName: string, className: string, id: string) {
    super(tagName, className, id);
  }
  renderModal() {
    const modal: HTMLElement = document.createElement("section");
    modal.className = "modal modal-payment";

    const modalTitle: HTMLHeadingElement = document.createElement("h2");
    modalTitle.innerText = "Pay form";
    modalTitle.className = "visually-hidden";
    modal.append(modalTitle);

    const paymentForm: HTMLFormElement = document.createElement("form");
    paymentForm.action = "";
    paymentForm.target = "index.html";
    paymentForm.className = "payment-form";

    const divContainer: HTMLElement = document.createElement("div");
    divContainer.className = "container";

    const paymentInfo: HTMLElement = document.createElement("div");
    paymentInfo.className = "payment-info";
    paymentInfo.innerHTML = `
    <div class="payment-name">
        <label for="payment-name-input">Name:</label>
        <input name="name" type="text" id="payment-name-input" placeholder="FirstName LastName">
      </div>
      <div class="payment-email">
        <label for="payment-email-input">E-mail:</label>
        <input name="email" type="email" id="payment-email-input" placeholder="email@example.com">
      </div>
      <div class="payment-email">
        <label for="payment-address-input">Address:</label>
        <input name="address" type="text" id="payment-address-input" placeholder="Address:">
      </div>
      <div class="payment-phone">
        <label for="payment-phone-input">Phone:</label>
        <input name="phone" type="tel" id="payment-phone-input" placeholder="+375 (00) 000-00-00">
      </div>
      <div class="payment-card-info">
        <h3 class="payment-card-info_title">Credit card</h3>
        <div class="payment-card-number">
          <label for="payment-card-number-input">
            <img class="card-logo">
          </label>
          <input name="card-number" type="text" id="payment-card-number-input" data-mask="____ ____ ____ ____" maxlength="19" placeholder="XXXX XXXX XXXX XXXX">
        </div>
        <div class="payment-card-valid">
          <label for="payment-card-valid-input">Valid:</label>
          <input name="card-valid" type="text" id="payment-card-valid-input" data-mask="__/__" maxlength="5" placeholder="MM/YY">
        </div>
        <div class="payment-card-CVV">
          <label for="payment-CVV-valid-input">CVV code:</label>
          <input name="card-CVV" type="text" id="payment-card-CVV-input" data-mask="___" maxlength="3" placeholder="000">
        </div>
    `;

    divContainer.append(paymentInfo);
    paymentForm.append(divContainer);

    const modalWrapper: HTMLElement = document.createElement("div");
    modalWrapper.className = "modal-wrapper";

    const modalContainer: HTMLElement = document.createElement("div");
    modalContainer.className = "container";

    const submitButton: HTMLButtonElement = document.createElement("button");
    submitButton.className = "button";
    submitButton.type = "submit";
    submitButton.innerText = "Pay";
    modalContainer.append(submitButton);
    modalWrapper.append(modalContainer);
    paymentForm.append(modalWrapper);
    modal.append(paymentForm);

    const closeButton: HTMLButtonElement = document.createElement("button");
    closeButton.className = "modal-close";
    closeButton.type = "button";

    const spanButton: HTMLSpanElement = document.createElement("span");
    spanButton.className = "visually-hidden";
    spanButton.innerText = "Close";
    closeButton.append(spanButton);
    modal.append(closeButton);

    this.container.append(modal);
  }
  render() {
    this.renderModal();
    return this.container;
  }
}

export default Modal;
