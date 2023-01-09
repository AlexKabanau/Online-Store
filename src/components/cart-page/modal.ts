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

    const paymentName: HTMLElement = document.createElement("div");
    paymentName.className = "payment-name";

    const paymentNameLabel: HTMLLabelElement = document.createElement("label");
    paymentNameLabel.htmlFor = "payment-name-input";
    paymentNameLabel.innerText = "Name:";
    paymentName.append(paymentNameLabel);

    const paymentNameInput: HTMLInputElement = document.createElement("input");
    paymentNameInput.name = "name";
    paymentNameInput.type = "text";
    paymentNameInput.id = "payment-name-input";
    paymentNameInput.placeholder = "FirstName LastName";
    paymentName.append(paymentNameInput);
    paymentInfo.append(paymentName);

    const paymentEmail: HTMLElement = document.createElement("div");
    paymentEmail.className = "payment-email";

    const paymentEmailLabel: HTMLLabelElement = document.createElement("label");
    paymentEmailLabel.htmlFor = "payment-email-input";
    paymentEmailLabel.innerText = "E-mail:";
    paymentEmail.append(paymentEmailLabel);

    const paymentEmailInput: HTMLInputElement = document.createElement("input");
    paymentEmailInput.name = "email";
    paymentEmailInput.type = "email";
    paymentEmailInput.id = "payment-email-input";
    paymentEmailInput.placeholder = "email@example.com";
    paymentEmail.append(paymentEmailInput);
    paymentInfo.append(paymentEmail);

    const paymentAddress: HTMLElement = document.createElement("div");
    paymentAddress.className = "payment-email";

    const paymentAddressLabel: HTMLLabelElement = document.createElement(
      "label"
    );
    paymentAddressLabel.htmlFor = "payment-address-input";
    paymentAddressLabel.innerText = "Address:";
    paymentAddress.append(paymentAddressLabel);

    const paymentAddressInput: HTMLInputElement = document.createElement(
      "input"
    );
    paymentAddressInput.name = "address";
    paymentAddressInput.type = "text";
    paymentAddressInput.id = "payment-address-input";
    paymentAddressInput.placeholder = "Address:";
    paymentAddress.append(paymentAddressInput);
    paymentInfo.append(paymentAddress);

    const paymentPhone: HTMLElement = document.createElement("div");
    paymentPhone.className = "payment-phone";

    const paymentPhoneLabel: HTMLLabelElement = document.createElement("label");
    paymentPhoneLabel.htmlFor = "payment-phone-input";
    paymentPhoneLabel.innerText = "Phone:";
    paymentPhone.append(paymentPhoneLabel);

    const paymentPhoneInput: HTMLInputElement = document.createElement("input");
    paymentPhoneInput.name = "phone";
    paymentPhoneInput.type = "tel";
    paymentPhoneInput.id = "payment-phone-input";
    paymentPhoneInput.placeholder = "+375 (00) 000-00-00";
    paymentPhone.append(paymentPhoneInput);
    paymentInfo.append(paymentPhone);

    const paymentCardInfo: HTMLElement = document.createElement("div");
    paymentCardInfo.className = "payment-card-info";

    const paymentCardInfoTitle: HTMLHeadingElement = document.createElement(
      "h3"
    );
    paymentCardInfoTitle.className = "payment-card-info_title";
    paymentCardInfoTitle.innerText = "Credit card";
    paymentCardInfo.append(paymentCardInfoTitle);

    const paymentCardNumber: HTMLElement = document.createElement("div");
    paymentCardNumber.className = "payment-card-number";
    paymentCardNumber.innerHTML =
      '<label for="payment-card-number-input"><img class= "card-logo"></label><input name="card-number" type="text" id="payment-card-number-input" data-mask = "____ ____ ____ ____" maxlength = "19" placeholder="XXXX XXXX XXXX XXXX">';

    paymentCardInfo.append(paymentCardNumber);

    const paymentCardValid: HTMLElement = document.createElement("div");
    paymentCardValid.className = "payment-card-valid";
    paymentCardValid.innerHTML =
      '<label for="payment-card-valid-input">Valid:</label><input name="card-valid" type="text" id="payment-card-valid-input" data-mask = "__/__" maxlength = "5" placeholder="MM/YY">';

    paymentCardInfo.append(paymentCardValid);

    const paymentCardCVV: HTMLElement = document.createElement("div");
    paymentCardCVV.className = "payment-card-CVV";
    paymentCardCVV.innerHTML =
      '<label for="payment-CVV-valid-input">CVV code:</label><input name="card-CVV" type="text" id="payment-card-CVV-input" data-mask = "___" maxlength = "3" placeholder="000">';

    paymentCardInfo.append(paymentCardCVV);
    paymentInfo.append(paymentCardInfo);
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
