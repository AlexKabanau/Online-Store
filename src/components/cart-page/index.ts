import Page from "../templates/page";
import Modal from "./modal";
import Cart_Page from "./cart";
import { ProductItemData } from "../../types";
import Header from "../details/header";
import Footer from "../details/footer";

// import productsData from "../data";

class CartPage extends Page {
  header: Header;
  cart_Page: Cart_Page;
  footer: Footer;
  _data: Array<ProductItemData>;
  static TextObject = {
    MainTitle: "Cart Page",
  };

  //modal popUp
  modal: Modal;

  constructor(id: string) {
    super(id);
    const cart: string | null = localStorage.getItem("cart");
    let arrCart = [];
    if (cart) {
      arrCart = JSON.parse(cart);
    }
    // this._data = this._data = productsData.sort(() => Math.random() - 0.5);
    this._data = arrCart;

    this.header = new Header("header", "header");

    this.cart_Page = new Cart_Page("section", "section-cart", "", arrCart);

    this.footer = new Footer("footer", "footer");
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
          const image: HTMLImageElement | null = document.querySelector(
            ".card-logo"
          );
          if (image) {
            if (length === 0) {
              image.classList.remove("american");
              image.classList.remove("visa");
              image.classList.remove("mastercart");
              image.classList.remove("unionpay");
            }
            if (length === 1) {
              if (elm.value === "3") {
                image.classList.add("american");
              }
              if (elm.value === "4") {
                image.classList.add("visa");
              }
              if (elm.value === "5") {
                image.classList.add("mastercart");
              }
              if (elm.value === "6") {
                image.classList.add("unionpay");
              }
            }
          }
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
        // const x = input.value;
        // console.log(x);
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

    function deleteItem() {
      const sections: NodeListOf<HTMLElement> | null = document.querySelectorAll(
        "._product"
      );
      if (sections) {
        for (const section of sections) {
          section.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            const delButton = target.closest(".del-item");
            const itemId = Number(target.closest("._product")?.id.slice(1));
            console.log(itemId);
            console.log(delButton);
            const cart: string | null = localStorage.getItem("cart");
            let arrCart = [];
            if (cart) {
              arrCart = JSON.parse(cart);
              // console.log(arrCart);
            }
            if (delButton) {
              for (let i = 0; i < arrCart.length; i++) {
                if (arrCart[i].id === itemId) {
                  arrCart.splice(i, 1);
                  console.log(arrCart);
                  localStorage.setItem("cart", JSON.stringify(arrCart));
                  section.classList.add("visually-hidden");
                  const fullCartText: HTMLSpanElement | null = document.querySelector(
                    ".full-cart-text"
                  );
                  const cartFooterCount: HTMLElement | null = document.querySelector(
                    ".cart-footer__count"
                  );
                  if (fullCartText && cartFooterCount) {
                    fullCartText.innerText = `${arrCart.length}`;
                    cartFooterCount.innerText = `${arrCart.length}`;
                  }
                  const valuePriceCart: HTMLSpanElement | null = document.querySelector(
                    ".value-price-cart"
                  );
                  const cartFooterPrice: HTMLElement | null = document.querySelector(
                    ".cart-footer__price"
                  );
                  if (valuePriceCart && cartFooterPrice) {
                    const sum: number = arrCart.reduce(
                      (sum: number, item: ProductItemData) => sum + item.price,
                      0
                    );
                    valuePriceCart.innerText = `${sum}`;
                    cartFooterPrice.innerText = `${sum}`;
                  }
                }
              }
            }
            // this.reRender(arrCart);
          });
        }
      }
    }

    modalPopUp();
    modalCheck();
    cardNumberMask();
    cardValidMask();
    cardCVVMask();
    deleteItem();
    // const cart: string | null = localStorage.getItem("cart");
    // let arrCart = [];
    // if (cart) {
    //   arrCart = JSON.parse(cart);
    // }
    // this._data = this._data = productsData.sort(() => Math.random() - 0.5);
    // this._data = arrCart;

    // this.header = new Header("header", "header");

    // this.cart_Page = new Cart_Page("section", "section-cart", "", arrCart);

    // this.footer = new Footer("footer", "footer");
  }
  renderMain(_data: Array<ProductItemData>) {
    this.container.append(this.header.render());
    this.container.append(this.cart_Page.render(_data));
    this.container.append(this.footer.render());
  }

  render() {
    const title = this.createHeaderTitle(CartPage.TextObject.MainTitle);
    this.container.append(title);
    this.renderMain(this._data);
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
