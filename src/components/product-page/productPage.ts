//import productsData from "../data";
import ICreateElement from "../templates/createElement";

/*function changeProduct(event) {

}*/
const imagesAllCatalog: string[] = [
  "https://i.dummyjson.com/data/products/4/1.jpg",
  "https://i.dummyjson.com/data/products/4/2.jpg",
  "https://i.dummyjson.com/data/products/4/3.jpg",
  "https://i.dummyjson.com/data/products/4/4.jpg",
  "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
];
//let imagesCatalog: string[] = imagesAllCatalog.splice(-1, 1);
const imagesCatalog: string[] = [...imagesAllCatalog];
imagesCatalog.pop();
class ProductCardPage extends ICreateElement {
  constructor(
    tageName: string,
    className: string,
    id: string,
    dataAttrName?: string,
    dataAttrValue?: string,
    textContent?: string
  ) {
    super(tageName, className, id, dataAttrName, dataAttrValue, textContent);
  }

  renderBreadcrumbs() {
    const breadcrumbs = document.createElement("nav");
    breadcrumbs.classList.add("prodpage__breadcrumbs");
    const breadcrumbsList: HTMLElement = this.iCreateChildElement(
      "ul",
      "breadcrumbs__list",
      breadcrumbs
    );
    const liHome = this.iCreateChildElement(
      "ii",
      "breadcrumbs__li",
      breadcrumbsList
    );
    const itemHome: HTMLAnchorElement = document.createElement("a");
    itemHome.classList.add("breadcrumbs__home");
    itemHome.href = "index.html";
    liHome.append(itemHome);
    const liCategory = this.iCreateChildElement(
      "li",
      "breadcrumbs__li",
      breadcrumbsList
    );
    const itemCategory: HTMLSpanElement = this.iCreateTextElement(
      "span",
      "breadcrumbs__item item__category",
      "category"
    );
    liCategory.append(itemCategory);
    const liBrand = this.iCreateChildElement(
      "li",
      "breadcrumbs__li",
      breadcrumbsList
    );
    const itemBrand: HTMLSpanElement = this.iCreateTextElement(
      "span",
      "breadcrumbs__item item__brand",
      "brand"
    );
    liBrand.append(itemBrand);
    const liTitle = this.iCreateChildElement(
      "li",
      "breadcrumbs__li",
      breadcrumbsList
    );
    const itemTitle: HTMLSpanElement = this.iCreateTextElement(
      "span",
      "breadcrumbs__item item__title",
      "title"
    );
    liTitle.append(itemTitle);
    this.container.append(breadcrumbs);
  }

  renderProductSection() {
    const productSection = document.createElement("section");
    productSection.classList.add("product");
    const titleProduct = this.iCreateTextElement(
      "h2",
      "product__title",
      "iPhone 9"
    );
    productSection.append(titleProduct);
    const productContainer = this.iCreateChildElement(
      "div",
      "product-container",
      productSection
    );
    const productImages = this.iCreateChildElement(
      "div",
      "product__images images-product",
      productContainer
    );
    const imagesSlider = this.iCreateChildElement(
      "div",
      "images-product__slider",
      productImages
    );
    const productSale = this.iCreateTextElement(
      "div",
      "images-product__sale",
      "-15%"
    );
    imagesSlider.append(productSale);
    const imageMainSlider = this.iCreateChildElement(
      "div",
      "images-product__mainslide",
      imagesSlider
    );
    const imageMain: HTMLImageElement = document.createElement("img");
    imageMain.classList.add("mainslide__img");
    imageMain.src = `${imagesAllCatalog[imagesAllCatalog.length - 1]}`;
    imageMain.alt = "photo";
    imageMainSlider.append(imageMain);
    const imagesSliderCatalog = this.iCreateChildElement(
      "div",
      "images-product__catalog",
      productImages
    );
    imagesCatalog.forEach((elem) => {
      const imageItemWrapper = this.iCreateChildElement(
        "div",
        "images-product__wrapper",
        imagesSliderCatalog
      );
      const imageItem: HTMLImageElement = document.createElement("img");
      imageItem.classList.add("images-product__item");
      imageItem.src = elem;
      imageItem.alt = "photo";
      imageItemWrapper.append(imageItem);
    });
    const bodyProduct = this.iCreateChildElement(
      "div",
      "product__to-card body-product",
      productContainer
    );
    const bodyTopProduct = this.iCreateChildElement(
      "div",
      "body-product__top",
      bodyProduct
    );
    const bodyProductStock = this.iCreateTextElement(
      "div",
      "body-product__stock",
      "In stock"
    );
    bodyTopProduct.append(bodyProductStock);
    const bodyProductPrice = this.iCreateChildElement(
      "div",
      "body-product__price",
      bodyProduct
    );
    const productPriceOld = this.iCreateTextElement(
      "div",
      "product-price__old",
      "645 $"
    );
    bodyProductPrice.append(productPriceOld);
    const productPriceCur = this.iCreateTextElement(
      "div",
      "product-price",
      "549 $"
    );
    bodyProductPrice.append(productPriceCur);
    const bodyBottomProduct = this.iCreateChildElement(
      "div",
      "body-product__bottom",
      bodyProduct
    );
    const btnProductToCart = this.iCreateTextElement(
      "button",
      "button product-to-cart",
      "Add to cart"
    );
    bodyBottomProduct.append(btnProductToCart);
    const btnProductBuyNow: HTMLAnchorElement = document.createElement("a");
    btnProductBuyNow.className = "button product-buy-now";
    btnProductBuyNow.href = "#";
    btnProductBuyNow.innerText = "Buy now";
    bodyBottomProduct.append(btnProductBuyNow);
    const productInfo = this.iCreateChildElement(
      "div",
      "product__info",
      productContainer
    );
    const productInfoBrand = this.iCreateChildElement(
      "div",
      "product-info__item",
      productInfo
    );
    const titleInfoBrand = this.iCreateTextElement(
      "h3",
      "title-info__brand",
      "Brand:"
    );
    productInfoBrand.append(titleInfoBrand);
    const valueInfoBrand = this.iCreateTextElement(
      "p",
      "value-info__brand",
      "Apple"
    );
    productInfoBrand.append(valueInfoBrand);
    const productInfoRating = this.iCreateChildElement(
      "div",
      "product-info__item",
      productInfo
    );
    const titleInfoRating = this.iCreateTextElement(
      "h3",
      "title-info__rating",
      "Rating:"
    );
    productInfoRating.append(titleInfoRating);
    const valueInfoRating = this.iCreateTextElement(
      "p",
      "value-info__rating",
      "4.69"
    );
    productInfoRating.append(valueInfoRating);
    const productInfoDescription = this.iCreateChildElement(
      "div",
      "product-info__item",
      productInfo
    );
    const titleInfoDescription = this.iCreateTextElement(
      "h3",
      "title-info__description",
      "Description:"
    );
    productInfoDescription.append(titleInfoDescription);
    const valueInfoDescription = this.iCreateTextElement(
      "p",
      "value-info__description",
      "An apple mobile which is nothing like apple"
    );
    productInfoDescription.append(valueInfoDescription);

    this.container.append(productSection);
  }

  render() {
    this.renderBreadcrumbs();
    this.renderProductSection();
    return this.container;
  }
}

export default ProductCardPage;
