import Page from "../templates/page";
import Modal from "./modal";

class CartPage extends Page {
  static TextObject = {
    MainTitle: "Cart Page",
  };

  //modal popUp
  modal: Modal;

  constructor(id: string) {
    super(id);

    //modal popUp
    this.modal = new Modal("section", "", "modal");
  }

  afterRender() {
    function modalPopUp() {
      const cardInfoButton: HTMLElement | null = document.querySelector(
        ".checkButton"
      );
      const modalPayment: HTMLElement | null = document.querySelector(
        ".modal-payment"
      );
      const modalClose: HTMLElement | null = document.querySelector(
        ".modal-close"
      );
      cardInfoButton?.addEventListener("click", () => {
        // event.preventDefault();
        modalPayment?.classList.add("modal-show");
      });
      modalClose?.addEventListener("click", () => {
        modalPayment?.classList.remove("modal-show");
        modalPayment?.classList.remove("modal-error");
      });
      window.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
          modalPayment?.classList.remove("modal-show");
          modalPayment?.classList.remove("modal-error");
        }
      });
    }

    function modalCheck() {
      const modalPayment: HTMLElement | null = document.querySelector(
        ".modal-payment"
      );
      const paymentForm: HTMLFormElement | null = document.querySelector(
        ".payment-form"
      );
      const paymentName = document.getElementById(
        "payment-name-input"
      ) as HTMLInputElement;
      const paymentEmail: HTMLInputElement | null = document.getElementById(
        "payment-email-input"
      ) as HTMLInputElement;
      const paymentAdress = document.getElementById(
        "payment-address-input"
      ) as HTMLInputElement;
      const paymentPhone = document.getElementById(
        "payment-phone-input"
      ) as HTMLInputElement;
      const paymentCardNumber = document.getElementById(
        "payment-card-number-input"
      ) as HTMLInputElement;
      const paymentCardValid = document.getElementById(
        "payment-card-valid-input"
      ) as HTMLInputElement;
      const paymentCardCVV = document.getElementById(
        "payment-card-CVV-input"
      ) as HTMLInputElement;
      paymentForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (
          !paymentName?.value ||
          !paymentEmail?.value ||
          !paymentAdress?.value ||
          !paymentPhone?.value ||
          !paymentCardNumber?.value ||
          !paymentCardValid?.value ||
          !paymentCardCVV?.value
        ) {
          console.log("submit");
          modalPayment?.classList.add("modal-error");
        }
      });
    }

    function cardNumberMask() {
      const input: HTMLInputElement | null = document.querySelector(
        "#payment-card-number-input"
      );
      function dateInputMask(elm: HTMLInputElement) {
        elm.addEventListener("keypress", function (event) {
          if (event.keyCode < 47 || event.keyCode > 57 || event.keyCode == 32) {
            event.preventDefault();
          }

          const length = elm.value.length;

          // if (length !== 1) {
          //   if (event.keyCode == 32) {
          //     event.preventDefault();
          //   }
          // }
          // if (length !== 3) {
          //   if (event.keyCode == 47) {
          //     event.preventDefault();
          //   }
          // }
          if (length === 4 || length === 9 || length === 14) {
            elm.value += " ";
          }
        });
      }
      if (input) {
        dateInputMask(input);
      }
    }

    function cardValidMask() {
      // console.log(1);
      const input: HTMLInputElement | null = document.querySelector(
        "#payment-card-valid-input"
      );
      if (input) {
        input?.addEventListener("keypress", function (event) {
          // elm.addEventListener("keypress", function (event) {
          if (event.keyCode <= 47 || event.keyCode > 57) {
            event.preventDefault();
          }

          const length = input.value.length;

          // if (length !== 1) {
          //   if (event.keyCode == 47) {
          //     event.preventDefault();
          //   }
          // }
          // if (length !== 3) {
          //   if (event.keyCode == 47) {
          //     event.preventDefault();
          //   }
          // }
          if (length === 2) {
            input.value += "/";
          }
          // console.log(elm.value);
        });
        const x = input.value;
        console.log(x);
      }
      // }
      // if (input) {
      //   dateInputMask(input);
      // if (input?.value) {
      // }
      // }
    }

    function cardCVVMask() {
      const input: HTMLInputElement | null = document.querySelector(
        "#payment-card-CVV-input"
      );
      function dateInputMask(elm: HTMLInputElement) {
        elm.addEventListener("keypress", function (event) {
          if (event.keyCode < 47 || event.keyCode > 57) {
            event.preventDefault();
          }
        });
      }
      if (input) {
        dateInputMask(input);
      }
    }

    modalPopUp();
    modalCheck();
    cardNumberMask();
    cardValidMask();
    cardCVVMask();
  }

  render() {
    const title = this.createHeaderTitle(CartPage.TextObject.MainTitle);
    this.container.append(title);
    // кнопка-заглушка
    const cardInfoButton: HTMLAnchorElement = document.createElement("a");
    cardInfoButton.className = "checkButton";
    // cardInfoButton.href = "#";
    cardInfoButton.innerText = "click for show";
    cardInfoButton.style.color = "red";
    this.container.append(cardInfoButton);
    //modal popUp
    this.container.append(this.modal.render());
    setTimeout(() => {
      this.afterRender();
    }, 0);
    return this.container;
  }
}

export default CartPage;
