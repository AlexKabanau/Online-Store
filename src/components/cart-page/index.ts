import Page from "../templates/page";
<<<<<<< HEAD
import Modal from "./modal";
=======
>>>>>>> 3293588c786c151b37620cbb2f1898bf509e0d40
import Cart_Page from "./cart";
import { ProductItemData } from "../../types";
import Header from "../details/header";
import Footer from "../details/footer";
<<<<<<< HEAD
import productsData from "../data";
=======
>>>>>>> 3293588c786c151b37620cbb2f1898bf509e0d40

// import productsData from "../data";

class CartPage extends Page {
  header: Header;
  cart_Page: Cart_Page;
  footer: Footer;
  _data: Array<ProductItemData>;
<<<<<<< HEAD
  // _clearData: Array<ProductItemData>;
  _numbers: Array<number>;
=======
>>>>>>> 3293588c786c151b37620cbb2f1898bf509e0d40
  static TextObject = {
    MainTitle: "Cart Page",
  };

  //modal popUp
  modal: Modal;

  constructor(id: string) {
    super(id);
    const cart: string | null = localStorage.getItem("cart");
<<<<<<< HEAD
    let arrCart: Array<ProductItemData> = [];
=======
    let arrCart = [];
>>>>>>> 3293588c786c151b37620cbb2f1898bf509e0d40
    if (cart) {
      arrCart = JSON.parse(cart);
    }
    // this._data = this._data = productsData.sort(() => Math.random() - 0.5);
<<<<<<< HEAD
    this._numbers = [];
    this._data = arrCart;

    const idsArr: Array<number> = arrCart.map((el) => el.id);
    // const clearData: Array<number> = Array.from(
    //   new Set(this._data.map((el) => el.id))
    // );
    // console.log(clearData);

    function getDatas(data: Array<number>, numbers: Array<number>) {
      let count = 1;
      for (let i = 0; i < data.length; i++) {
        if (data.indexOf(data[i]) === data.lastIndexOf(data[i])) {
          numbers[i] = count;
          count = 1;
        } else {
          data.splice(i, 1);
          count++;
          i--;
        }
      }
    }
    getDatas(idsArr, this._numbers);
    console.log(idsArr);
    console.log(this._numbers);

    this.header = new Header("header", "header");

    this.cart_Page = new Cart_Page(
      "section",
      "_cart container",
      "",
      this._data,
      this._numbers
    );

    this.footer = new Footer("footer", "footer");
    //modal popUp
    this.modal = new Modal("section", "", "modal");
  }

  afterRender() {
    function modalPopUp() {
      const cardInfoButton: HTMLElement | null = document.querySelector(
        ".buy-now-button"
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
          // modalPayment?.classList.remove("modal-error");
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
          setTimeout(() => {
            modalPayment?.classList.remove("modal-error");
          }, 500);
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

    function manageItem() {
      const sections: NodeListOf<HTMLElement> | null = document.querySelectorAll(
        "._product"
      );
      if (sections) {
        for (const section of sections) {
          section.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;
            const delButton = target.closest(".del-item");
            const increaseButton = target.closest(".button_image_up");
            const decriseButton = target.closest(".button_image_down");
            const itemId = Number(target.closest("._product")?.id);
            console.log(itemId);
            console.log(delButton);
            const cart: string | null = localStorage.getItem("cart");
            function setPrice(price: number) {
              const valuePriceCart: HTMLSpanElement | null = document.querySelector(
                ".value-price-cart"
              );
              const cartFooterPrice: HTMLElement | null = document.querySelector(
                ".cart-footer__price"
              );
              const totalPrice: HTMLElement | null = document.querySelector(
                ".total-price-span"
              );
              if (valuePriceCart && cartFooterPrice && totalPrice) {
                const sum: number = price;
                valuePriceCart.innerText = `${sum}`;
                cartFooterPrice.innerText = `${sum}`;
                totalPrice.innerText = `${sum}`;
              }
            }
            function setAmount(amount: number) {
              const fullCartText: HTMLSpanElement | null = document.querySelector(
                ".full-cart-text"
              );
              const cartFooterCount: HTMLElement | null = document.querySelector(
                ".cart-footer__count"
              );
              const totalAmount: HTMLElement | null = document.querySelector(
                ".total-products-span"
              );
              if (fullCartText && cartFooterCount && totalAmount) {
                fullCartText.innerText = `${amount}`;
                cartFooterCount.innerText = `${amount}`;
                totalAmount.innerText = `${amount}`;
              }
            }
            function setItemCost(
              value: number,
              currentProduct: ProductItemData
            ) {
              const divPrice: HTMLElement | null = section.querySelector(
                ".product__price"
              );
              if (divPrice) {
                divPrice.innerText = `${value * currentProduct.price}`;
              }
            }
            let arrCart: Array<ProductItemData> = [];
            if (cart) {
              arrCart = JSON.parse(cart);
              console.log(arrCart);
            }
            if (delButton) {
              for (let i = 0; i < arrCart.length; i++) {
                // while (arrCart[i].id === itemId) {
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
                  i--;
                }
              }
            }

            if (increaseButton) {
              const currentProduct = productsData.find(
                (item) => item.id === itemId
              );
              if (currentProduct) {
                arrCart.push(currentProduct);
              }
              localStorage.setItem("cart", JSON.stringify(arrCart));
              const input: HTMLInputElement | null = section.querySelector(
                ".count__input"
              );
              if (input) {
                input.value = String(Number(input.value) + 1);
                if (currentProduct) {
                  setItemCost(+input.value, currentProduct);
                }
              }
              const sum: number = arrCart.reduce(
                (sum: number, item: ProductItemData) => sum + item.price,
                0
              );
              const amount: number = arrCart.length;
              setPrice(sum);
              setAmount(amount);
            }
            if (decriseButton) {
              // for (let i = 0; i < arrCart.length; i++) {
              // while (arrCart[i].id === itemId) {
              // if (arrCart[i].id === itemId) {
              // const currentProduct = productsData.find(
              //   (item) => item.id === itemId
              // );
              const currentProduct = productsData.find(
                (item) => item.id === itemId
              );
              if (currentProduct) {
                arrCart.splice(arrCart.indexOf(currentProduct), 1);
                localStorage.setItem("cart", JSON.stringify(arrCart));
              }
              // arrCart.splice(i, 1);
              console.log(arrCart);
              const input: HTMLInputElement | null = section.querySelector(
                ".count__input"
              );
              if (input) {
                if (+input.value > 1) {
                  input.value = String(Number(input.value) - 1);
                } else {
                  section.classList.add("visually-hidden");
                }
                if (currentProduct) {
                  setItemCost(+input.value, currentProduct);
                }
              }
              const sum: number = arrCart.reduce(
                (sum: number, item: ProductItemData) => sum + item.price,
                0
              );
              const amount: number = arrCart.length;
              setPrice(sum);
              setAmount(amount);
              // break;
              // }
              // }
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
    manageItem();
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
  renderMain(_data: Array<ProductItemData>, _numbers: Array<number>) {
    this.container.append(this.header.render());
    this.container.append(this.cart_Page.render(_data, _numbers));
=======
    this._data = arrCart;

    this.header = new Header("header", "header");

    this.cart_Page = new Cart_Page("section", "section-cart", "", arrCart);

    this.footer = new Footer("footer", "footer");
  }
  renderMain(_data: Array<ProductItemData>) {
    this.container.append(this.header.render());
    this.container.append(this.cart_Page.render(_data));
>>>>>>> 3293588c786c151b37620cbb2f1898bf509e0d40
    this.container.append(this.footer.render());
  }

  render() {
    const title = this.createHeaderTitle(CartPage.TextObject.MainTitle);
    this.container.append(title);
<<<<<<< HEAD
    this.renderMain(this._data, this._numbers);
    // кнопка-заглушка
    // const cardInfoButton: HTMLAnchorElement = document.createElement("a");
    // cardInfoButton.className = "checkButton";
    // // cardInfoButton.href = "#";
    // cardInfoButton.innerText = "click for show";
    // cardInfoButton.style.color = "red";
    // this.container.append(cardInfoButton);
    //modal popUp
    this.container.append(this.modal.render());
    setTimeout(() => {
      this.afterRender();
    }, 0);
=======
    this.renderMain(this._data);
>>>>>>> 3293588c786c151b37620cbb2f1898bf509e0d40
    return this.container;
  }
}

export default CartPage;
