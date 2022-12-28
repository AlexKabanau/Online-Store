import productsData from "../data";
import { ProductItemData } from "../../types";

const handlers = {
  click(_el: HTMLButtonElement) {
    console.log("click on ", _el);
    console.log(_el instanceof HTMLButtonElement);
    const result: Array<ProductItemData> = productsData;

    switch (_el instanceof HTMLButtonElement) {
      case true:
        // eslint-disable-next-line no-case-declarations
        const element: HTMLButtonElement = _el;
        // eslint-disable-next-line no-case-declarations
        switch (element.name) {
          case "price":
            result.sort((a: ProductItemData, b: ProductItemData) => {
              if (Number(a.price) > Number(b.price)) {
                return -1;
              }
              if (Number(a.price) < Number(b.price)) {
                return 1;
              }
              return 0;
            });
            break;
          case "rating":
            result.sort((a: ProductItemData, b: ProductItemData) => {
              if (Number(a.rating) > Number(b.rating)) {
                return -1;
              }
              if (Number(a.rating) < Number(b.rating)) {
                return 1;
              }
              return 0;
            });
            break;
          case "discount":
            result.sort((a: ProductItemData, b: ProductItemData) => {
              if (Number(a.discountPercentage) > Number(b.discountPercentage)) {
                return -1;
              }
              if (Number(a.discountPercentage) < Number(b.discountPercentage)) {
                return 1;
              }
              return 0;
            });
            break;
        }
        // console.log(result);
        break;
      case false:
        break;
    }
  },
  change(_el: HTMLInputElement) {
    // console.log("click on ", _el);
    // console.log(_el instanceof HTMLInputElement);
    const propArr: Array<string> = [];
    propArr.push(_el.id.split("").splice(15).join(""));
    // console.log(propArr);
    //arr.filter((item) => item > 0);
    // const result: Array<ProductItemData> = productsData;
    // for (item in propArr) {
    //   if ( === `{$item}`) {}
    // }
    // if () {}
    // const answer = result.filter((item) => item.brand === `${_el.name}`);
    // console.log(answer);
    // document.write("<b>Привет из JS</b>");
  },
};

export default handlers;
