import productsData from "../data";

class ProductCardPage {
  container: HTMLElement;
  id: string;

  constructor(tageName: string, className: string, id: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
    this.id = id;
  }

  renderBreadcrumbs() {
    const curProduct = productsData.find(
      (item) => item.id == Number(this.id.slice(3, -2))
    );
    if (curProduct) {
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
      itemCategory.innerText = `${curProduct.category}`;
      liCategory.append(itemCategory);
      const liBrand: HTMLLIElement = document.createElement("li");
      liBrand.className = "breadcrumbs__li";
      breadcrumbsList.append(liBrand);
      const itemBrand: HTMLSpanElement = document.createElement("span");
      itemBrand.className = "breadcrumbs__item item__brand";
      itemBrand.innerText = `${curProduct.brand}`;
      liBrand.append(itemBrand);
      const liTitle: HTMLLIElement = document.createElement("li");
      liTitle.className = "breadcrumbs__li";
      breadcrumbsList.append(liTitle);
      const itemTitle: HTMLSpanElement = document.createElement("span");
      itemTitle.className = "breadcrumbs__item item__title";
      itemTitle.innerText = `${curProduct.title}`;
      liTitle.append(itemTitle);
      this.container.append(breadcrumbs);
    }
  }

  renderProductSection() {
    const curProduct = productsData.find(
      (item) => item.id == Number(this.id.slice(3, -2))
    );
    if (curProduct) {
      const productSection = document.createElement("section");
      productSection.className = "product";
      const titleProduct: HTMLHeadingElement = document.createElement("h2");
      titleProduct.className = "product__title";
      titleProduct.innerText = `${curProduct.title}`;
      productSection.append(titleProduct);
      const productContainer: HTMLElement = document.createElement("div");
      productContainer.className = "product-container";
      productSection.append(productContainer);
      const productImages: HTMLElement = document.createElement("div");
      productImages.className = "product__images images-product";
      productContainer.append(productImages);
      const inputBtnFirst: HTMLInputElement = document.createElement("input");
      inputBtnFirst.setAttribute("type", "radio");
      inputBtnFirst.setAttribute("name", "btn");
      inputBtnFirst.id = "btn0";
      inputBtnFirst.setAttribute("checked", "");
      productImages.append(inputBtnFirst);
      const imagesCatalog = [...curProduct.images].slice(0, 5);
      console.log(imagesCatalog);
      for (let i = 1; i < imagesCatalog.length; i++) {
        const inputBtn: HTMLInputElement = document.createElement("input");
        inputBtn.setAttribute("type", "radio");
        inputBtn.setAttribute("name", "btn");
        inputBtn.id = `btn${i}`;
        productImages.append(inputBtn);
      }
      const productSale: HTMLElement = document.createElement("div");
      productSale.className = "images-product__sale";
      productSale.innerText = `${curProduct.discountPercentage} %`;
      productImages.append(productSale);
      const imageMainSlider: HTMLElement = document.createElement("div");
      imageMainSlider.className = "images-product__mainslide";
      imageMainSlider.id = "slides";
      productImages.append(imageMainSlider);
      const mainSliderWrap: HTMLElement = document.createElement("div");
      mainSliderWrap.className = "mainslide__wrap";
      imageMainSlider.append(mainSliderWrap);
      const imagesSliderCatalog: HTMLElement = document.createElement("div");
      imagesSliderCatalog.className = "images-product__catalog";
      imagesSliderCatalog.id = "imgnav";
      productImages.append(imagesSliderCatalog);
      for (let i = 0; i < imagesCatalog.length; i++) {
        const itemSlider: HTMLElement = document.createElement("div");
        itemSlider.className = `slider-item slide${i}`;
        const imgSlide: HTMLImageElement = document.createElement("img");
        imgSlide.className = "img-slide";
        imgSlide.src = `${imagesCatalog[i]}`;
        itemSlider.append(imgSlide);
        mainSliderWrap.append(itemSlider);
        const imageItemWrapper: HTMLLabelElement = document.createElement(
          "label"
        );
        imageItemWrapper.className = "sticker";
        imageItemWrapper.setAttribute("for", `btn${i}`);
        imagesSliderCatalog.append(imageItemWrapper);
        const imageItem: HTMLImageElement = document.createElement("img");
        imageItem.classList.add("images-product__item");
        imageItem.src = `${imagesCatalog[i]}`;
        console.log(imagesCatalog[i]);
        imageItem.alt = "photo";
        imageItemWrapper.append(imageItem);
      }
      const bodyProduct: HTMLElement = document.createElement("div");
      bodyProduct.className = "product__to-card body-product";
      productContainer.append(bodyProduct);
      const bodyTopProduct: HTMLElement = document.createElement("div");
      bodyTopProduct.className = "body-product__top";
      bodyProduct.append(bodyTopProduct);
      const bodyProductStock: HTMLElement = document.createElement("div");
      bodyProductStock.className = "body-product__stock";
      bodyProductStock.innerText = "In stock";
      bodyTopProduct.append(bodyProductStock);
      const bodyProductPrice: HTMLElement = document.createElement("div");
      bodyProductPrice.className = "body-product__price";
      bodyProduct.append(bodyProductPrice);
      const productPriceOld: HTMLElement = document.createElement("div");
      productPriceOld.className = "product-price__old";
      productPriceOld.innerText = `${Math.round(
        (100 * curProduct.price) / (100 - curProduct.discountPercentage)
      )} $`;
      bodyProductPrice.append(productPriceOld);
      const productPriceCur: HTMLElement = document.createElement("div");
      productPriceCur.className = "product-price";
      productPriceCur.innerText = `${curProduct.price} $`;
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
      productInfoBrand.append(titleInfoBrand);
      const valueInfoBrand: HTMLParagraphElement = document.createElement("p");
      valueInfoBrand.className = "value-info__brand";
      valueInfoBrand.innerText = `${curProduct.brand}`;
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
      valueInfoRating.innerText = `${curProduct.rating}`;
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
      valueInfoDescription.innerText = `${curProduct.description}`;
      productInfoDescription.append(valueInfoDescription);

      this.container.append(productSection);
    }
  }

  render() {
    this.renderBreadcrumbs();
    this.renderProductSection();
    return this.container;
  }
}

export default ProductCardPage;
