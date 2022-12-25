import productsData from "../data";
import { ProductItemData } from "../../types";

const handlers = {
  click(_el: HTMLButtonElement) {
    console.log("click on ", _el);
    console.log(_el instanceof HTMLButtonElement);

    switch (_el instanceof HTMLButtonElement) {
      case true:
        // eslint-disable-next-line no-case-declarations
        const element: HTMLButtonElement = _el;
        // eslint-disable-next-line no-case-declarations
        const result: Array<ProductItemData> = productsData;
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
        console.log(result);
        break;
      case false:
        break;
    }
  },
};

export default handlers;
