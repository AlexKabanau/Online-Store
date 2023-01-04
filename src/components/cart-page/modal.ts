import Components from "../Components";

class Modal extends Components {
  constructor(tagName: string, className: string, id: string) {
    super(tagName, className, id);
  }
  renderModal() {
    const modal: HTMLElement = document.createElement("section");
    modal.className = "modal modal-payment";

    const modalTitle: HTMLHeadingElement = document.createElement("h2");
    modalTitle.innerText = "Форма для оплаты";
    modalTitle.className = "visually-hidden";
    modal.append(modalTitle);

    const paymentForm: HTMLFormElement = document.createElement("form");
    paymentForm.action = "";
    paymentForm.className = "payment-form";

    const divContainer: HTMLElement = document.createElement("div");
    divContainer.className = "container";

    const paymentInfo: HTMLElement = document.createElement("div");
    paymentInfo.className = "payment-info";

    const paymentName: HTMLElement = document.createElement("div");
    paymentName.className = "payment-name";

    const paymentNameLabel: HTMLLabelElement = document.createElement("label");
    paymentNameLabel.htmlFor = "payment-name-input";
    paymentNameLabel.innerText = "Ваше имя:";
    paymentName.append(paymentNameLabel);

    const paymentNameInput: HTMLInputElement = document.createElement("input");
    paymentNameInput.name = "name";
    paymentNameInput.type = "text";
    paymentNameInput.id = "payment-name-input";
    paymentNameInput.placeholder = "Имя Фамилия";
    paymentName.append(paymentNameInput);
    paymentInfo.append(paymentName);

    const paymentEmail: HTMLElement = document.createElement("div");
    paymentEmail.className = "payment-email";

    const paymentEmailLabel: HTMLLabelElement = document.createElement("label");
    paymentEmailLabel.htmlFor = "payment-email-input";
    paymentEmailLabel.innerText = "Ваш e-mail:";
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
    paymentAddressLabel.innerText = "Адрес:";
    paymentAddress.append(paymentAddressLabel);

    const paymentAddressInput: HTMLInputElement = document.createElement(
      "input"
    );
    paymentAddressInput.name = "address";
    paymentAddressInput.type = "text";
    paymentAddressInput.id = "payment-address-input";
    paymentAddressInput.placeholder = "Ваш адрес:";
    paymentAddress.append(paymentAddressInput);
    paymentInfo.append(paymentAddress);

    const paymentPhone: HTMLElement = document.createElement("div");
    paymentPhone.className = "payment-phone";

    const paymentPhoneLabel: HTMLLabelElement = document.createElement("label");
    paymentPhoneLabel.htmlFor = "payment-phone-input";
    paymentPhoneLabel.innerText = "Телефон:";
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
      '<label for="payment-card-number-input"><img src="../2443.webp" alt="Logo of Credit Card"></label><input name="card-number" type="text" id="payment-card-number-input" data-mask = "____ ____ ____ ____" maxlength = "19" placeholder="XXXX XXXX XXXX XXXX">';

    // const paymentCardNumberLabel: HTMLLabelElement = document.createElement(
    //   "label"
    // );
    // paymentCardNumberLabel.htmlFor = "payment-card-number-input";
    // const paymentCardImg: HTMLImageElement = document.createElement("img");
    // paymentCardImg.src = "../2443.webp";
    // paymentCardImg.alt = "";
    // paymentCardNumberLabel.append(paymentCardImg);
    // paymentCardNumber.append(paymentCardNumberLabel);

    // const paymentCardNumberInput: HTMLInputElement = document.createElement(
    //   "input"
    // );
    // paymentCardNumberInput.name = "card-number masked";
    // paymentCardNumberInput.type = "tel";
    // paymentCardNumberInput.id = "payment-card-number-input";
    // paymentCardNumberInput.placeholder = "XXXX XXXX XXXX XXXX";
    // paymentCardNumberInput.pattern = "/d{4} /d{4} /d{4} /d{4}";
    // paymentCardNumber.append(paymentCardNumberInput);
    paymentCardInfo.append(paymentCardNumber);

    const paymentCardValid: HTMLElement = document.createElement("div");
    paymentCardValid.className = "payment-card-valid";

    // const paymentCardValidLabel: HTMLLabelElement = document.createElement(
    //   "label"
    // );
    // paymentCardValidLabel.htmlFor = "payment-card-valid-input";
    // paymentCardValidLabel.innerText = "Valid:";
    // paymentCardValid.append(paymentCardValidLabel);
    paymentCardValid.innerHTML =
      '<label for="payment-card-valid-input">Valid:</label><input name="card-valid" type="text" id="payment-card-valid-input" data-mask = "__/__" maxlength = "5" placeholder="MM/YY">';

    // const paymentCardValidInput: HTMLInputElement = document.createElement(
    //   "input"
    // );
    // paymentCardValidInput.name = "card-valid";
    // paymentCardValidInput.type = "text";
    // paymentCardValidInput.id = "payment-card-valid-input";
    // paymentCardValidInput.dataset.mask = "__/__/____";
    // paymentCardValidInput.maxlength = 4;
    // paymentCardValidInput.placeholder = "MM/YY";
    // paymentCardValid.append(paymentCardValidInput);
    paymentCardInfo.append(paymentCardValid);

    const paymentCardCVV: HTMLElement = document.createElement("div");
    paymentCardCVV.className = "payment-card-CVV";
    paymentCardCVV.innerHTML =
      '<label for="payment-CVV-valid-input">CVV code:</label><input name="card-CVV" type="text" id="payment-card-CVV-input" data-mask = "___" maxlength = "3" placeholder="000">';

    // const paymentCardCVVLabel: HTMLLabelElement = document.createElement(
    //   "label"
    // );
    // paymentCardCVVLabel.htmlFor = "payment-card-CVV-input";
    // paymentCardCVVLabel.innerText = "CVV code:";
    // paymentCardCVV.append(paymentCardCVVLabel);

    // const paymentCardCVVInput: HTMLInputElement = document.createElement(
    //   "input"
    // );
    // paymentCardCVVInput.name = "card-CVV";
    // paymentCardCVVInput.type = "text";
    // paymentCardCVVInput.id = "payment-card-valid-input";
    // paymentCardCVVInput.placeholder = "CVV";
    // paymentCardCVV.append(paymentCardCVVInput);
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
    submitButton.innerText = "Оплатить";
    modalContainer.append(submitButton);
    modalWrapper.append(modalContainer);
    paymentForm.append(modalWrapper);
    modal.append(paymentForm);

    const closeButton: HTMLButtonElement = document.createElement("button");
    closeButton.className = "modal-close";
    closeButton.type = "button";

    const spanButton: HTMLSpanElement = document.createElement("span");
    spanButton.className = "visually-hidden";
    spanButton.innerText = "Закрыть";
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
