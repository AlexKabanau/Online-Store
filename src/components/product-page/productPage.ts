import productsData from "../data";
//import ICreateElement from "../templates/createElement";

/*function changeProduct(event) {

}*/
let n: number;
class ProductCardPage {
  container: HTMLElement;
  id: string;

  constructor(tageName: string, className: string, id: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
    this.id = id;
    n = Number(id.slice(4).slice(-2));
    console.log(n);
  }

  renderBreadcrumbs() {
    const breadcrumbs = document.createElement("nav");
    breadcrumbs.className = "prodpage__breadcrumbs";
    const breadcrumbsList: HTMLElement = document.createElement("ul");
    breadcrumbsList.className = "breadcrumbs__list";
    breadcrumbs.append(breadcrumbsList);
    const liHome: HTMLLIElement = document.createElement("li");
    liHome.className = "breadcrumbs__li";
    breadcrumbsList.append(liHome);
    const itemHome: HTMLAnchorElement = document.createElement("a");
    itemHome.classList.add("breadcrumbs__home");
    itemHome.href = "index.html";
    liHome.append(itemHome);
    const liCategory: HTMLLIElement = document.createElement("li");
    liCategory.className = "breadcrumbs__li";
    breadcrumbsList.append(liCategory);
    const itemCategory: HTMLSpanElement = document.createElement("span");
    itemCategory.className = "breadcrumbs__item item__category";
    itemCategory.innerText = `${productsData[n].category}`;
    liCategory.append(itemCategory);
    const liBrand: HTMLLIElement = document.createElement("li");
    liBrand.className = "breadcrumbs__li";
    breadcrumbsList.append(liBrand);
    const itemBrand: HTMLSpanElement = document.createElement("span");
    itemBrand.className = "breadcrumbs__item item__brand";
    itemBrand.innerText = `${productsData[n].brand}`;
    liBrand.append(itemBrand);
    const liTitle: HTMLLIElement = document.createElement("li");
    liTitle.className = "breadcrumbs__li";
    breadcrumbsList.append(liTitle);
    const itemTitle: HTMLSpanElement = document.createElement("span");
    itemTitle.className = "breadcrumbs__item item__title";
    itemTitle.innerText = `${productsData[n].title}`;
    liTitle.append(itemTitle);
    this.container.append(breadcrumbs);
  }

  renderProductSection() {
    const productSection = document.createElement("section");
    productSection.className = "product";
    const titleProduct: HTMLHeadingElement = document.createElement("h2");
    titleProduct.className = "product__title";
    titleProduct.innerText = `${productsData[n].title}`;
    productSection.append(titleProduct);
    const productContainer: HTMLElement = document.createElement("div");
    productContainer.className = "product-container";
    productSection.append(productContainer);
    const productImages: HTMLElement = document.createElement("div");
    productImages.className = "product__images images-product";
    productContainer.append(productImages);
    const imagesSlider: HTMLElement = document.createElement("div");
    imagesSlider.className = "images-product__slider";
    productImages.append(imagesSlider);
    const productSale: HTMLElement = document.createElement("div");
    productSale.className = "images-product__sale";
    productSale.innerText = `${productsData[n].discountPercentage}`;
    imagesSlider.append(productSale);
    const imageMainSlider: HTMLElement = document.createElement("div");
    imageMainSlider.className = "images-product__mainslide";
    imagesSlider.append(imageMainSlider);

    const imageMain: HTMLImageElement = document.createElement("img");
    imageMain.classList.add("mainslide__img");
    imageMain.src = `${
      productsData[n].images[productsData[n].images.length - 1]
    }`;
    imageMain.alt = "photo";
    imageMainSlider.append(imageMain);
    const imagesSliderCatalog: HTMLElement = document.createElement("div");
    imagesSliderCatalog.className = "images-product__catalog";
    productImages.append(imagesSliderCatalog);
    /*imagesCatalog.forEach((elem) => {
      const imageItemWrapper: HTMLElement = document.createElement("div");
      imageItemWrapper.className = "images-product__wrapper";
      imagesSliderCatalog.append(imageItemWrapper);
      const imageItem: HTMLImageElement = document.createElement("img");
      imageItem.classList.add("images-product__item");
      imageItem.src = `${productsData[n].images[elem]}`;
      imageItem.alt = "photo";
      imageItemWrapper.append(imageItem);
    });*/
    const bodyProduct: HTMLElement = document.createElement("div");
    bodyProduct.className = "product__to-card body-product";
    productContainer.append(bodyProduct);
    const bodyTopProduct: HTMLElement = document.createElement("div");
    bodyTopProduct.className = "body-product__top";
    bodyProduct.append(bodyTopProduct);
    const bodyProductStock: HTMLElement = document.createElement("div");
    bodyProductStock.className = "body-product__stock";
    productSale.innerText = "In stock";
    bodyTopProduct.append(bodyProductStock);
    const bodyProductPrice: HTMLElement = document.createElement("div");
    bodyProductPrice.className = "body-product__price";
    bodyProduct.append(bodyProductPrice);
    const productPriceOld: HTMLElement = document.createElement("div");
    productPriceOld.className = "product-price__old";
    productPriceOld.innerText = `${Math.round(
      (100 * productsData[n].price) / (100 - productsData[n].discountPercentage)
    )}`;
    bodyProductPrice.append(productPriceOld);
    const productPriceCur: HTMLElement = document.createElement("div");
    productPriceCur.className = "product-price";
    productPriceCur.innerText = `${productsData[n].price}`;
    bodyProductPrice.append(productPriceCur);
    const bodyBottomProduct: HTMLElement = document.createElement("div");
    bodyBottomProduct.className = "body-product__bottom";
    bodyProduct.append(bodyBottomProduct);
    const btnProductToCart: HTMLElement = document.createElement("button");
    btnProductToCart.className = "button product-to-cart";
    btnProductToCart.innerText = "Add to cart";
    bodyBottomProduct.append(btnProductToCart);
    const btnProductBuyNow: HTMLAnchorElement = document.createElement("a");
    btnProductBuyNow.className = "button product-buy-now";
    btnProductBuyNow.href = "#";
    btnProductBuyNow.innerText = "Buy now";
    bodyBottomProduct.append(btnProductBuyNow);
    const productInfo: HTMLElement = document.createElement("div");
    productInfo.className = "product__info";
    productContainer.append(productInfo);
    const productInfoBrand: HTMLElement = document.createElement("div");
    productInfoBrand.className = "product-info__item";
    productInfo.append(productInfoBrand);
    const titleInfoBrand: HTMLHeadingElement = document.createElement("h3");
    titleInfoBrand.className = "title-info__brand";
    titleInfoBrand.innerText = "Brand:";
    const valueInfoBrand: HTMLParagraphElement = document.createElement("p");
    valueInfoBrand.className = "value-info__brand";
    valueInfoBrand.innerText = `${productsData[n].brand}`;
    productInfoBrand.append(valueInfoBrand);
    const productInfoRating: HTMLElement = document.createElement("div");
    productInfoRating.className = "product-info__item";
    productInfo.append(productInfoRating);
    const titleInfoRating: HTMLHeadingElement = document.createElement("h3");
    titleInfoRating.className = "title-info__rating";
    titleInfoRating.innerText = "Rating:";
    productInfoRating.append(titleInfoRating);
    const valueInfoRating: HTMLParagraphElement = document.createElement("p");
    valueInfoRating.className = "value-info__rating";
    valueInfoRating.innerText = `${productsData[n].rating}`;
    productInfoRating.append(valueInfoRating);
    const productInfoDescription: HTMLElement = document.createElement("div");
    productInfoDescription.className = "product-info__item";
    productInfo.append(productInfoDescription);
    const titleInfoDescription: HTMLHeadingElement = document.createElement(
      "h3"
    );
    titleInfoDescription.className = "title-info__description";
    titleInfoDescription.innerText = "Description:";
    productInfoDescription.append(titleInfoDescription);
    const valueInfoDescription: HTMLParagraphElement = document.createElement(
      "p"
    );
    valueInfoDescription.className = "value-info__description";
    valueInfoDescription.innerText = `${productsData[n].description}`;
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
