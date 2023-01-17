import { ProductItemData } from "../../types/index";
import productsData from "../data";
import { iCreateElement } from "../../utils/utils";

class ProductCardPage {
  container: HTMLElement;
  id: string;

  constructor(tageName: string, className: string, id: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
    this.id = id;
  }

  renderBreadcrumbs() {
    const curProduct: ProductItemData | undefined = productsData.find(
      (item) => item.id == Number(this.id.slice(3, -2))
    );
    if (curProduct) {
      const breadcrumbs: HTMLElement = iCreateElement({
        tag: "nav",
        classes: ["prodpage__breadcrumbs"],
      });

      breadcrumbs.insertAdjacentHTML(
        "afterbegin",
        `
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__li">
            <a class="breadcrumbs__home" href="index.html"></a>
          </li>
          <li class="breadcrumbs__li">
            <span class="breadcrumbs__item item__category">${curProduct.category}</span>
          </li>
          <li class="breadcrumbs__li">
            <span class="breadcrumbs__item item__brand">${curProduct.brand}</span>
          </li>
          <li class="breadcrumbs__li">
            <span class="breadcrumbs__item item__title">${curProduct.title}</span>
          </li>
        </ul>
      `
      );
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
        imageItem.alt = "photo";
        imageItemWrapper.append(imageItem);
      }

      const bodyProduct: HTMLElement = iCreateElement({
        tag: "div",
        classes: ["product__to-card", "body-product"],
      });

      bodyProduct.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="body-product__top">
          <div class="body-product__stock">In stock ${curProduct.stock}</div>
        </div>
        <div class="body-product__price">
          <div class="product-price__old">${Math.round(
            (100 * curProduct.price) / (100 - curProduct.discountPercentage)
          )} $</div>
          <div class="product-price">${curProduct.price} $</div>
        </div>
        <div class="body-product__bottom">
          <a class="button product-buy-now" href="#">Buy now</a>
        </div>
      `
      );
      productContainer.append(bodyProduct);
      const btnProductToCart: HTMLElement = document.createElement("button");
      btnProductToCart.className = "button product-to-cart";
      const shopCart: string | null = localStorage.getItem("cart");
      let availCart = [];
      if (shopCart) {
        availCart = JSON.parse(shopCart);
      }
      if (availCart.find((item: ProductItemData) => item.id == curProduct.id)) {
        btnProductToCart.className = "button product-to-cart drop";
        btnProductToCart.innerText = "Drop from cart";
      } else {
        btnProductToCart.innerText = "Add to cart";
      }
      const bodyBottomProduct = bodyProduct.querySelector(
        ".body-product__bottom"
      ) as HTMLElement;
      bodyBottomProduct.prepend(btnProductToCart);

      const productInfo: HTMLElement = iCreateElement({
        tag: "div",
        classes: ["product__info"],
      });

      productInfo.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="product-info__item">
          <h3 class="title-info__brand">Brand:</h3>
          <p class="value-info__brand">${curProduct.brand}</p>
        </div>
        <div class="product-info__item">
          <h3 class="title-info__rating">Rating:</h3>
          <p class="value-info__rating">${curProduct.rating}</p>
        </div>
        <div class="product-info__item">
          <h3 class="title-info__description">Description:</h3>
          <p class="value-info__description">${curProduct.description}</p>
        </div>
      `
      );
      productContainer.append(productInfo);
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
