import productsData from "../data";
import Components from "../Components";
// import handlers from "./handlers";

class Filter extends Components {
  constructor(tagName: string, className: string, id: string) {
    super(tagName, className, id);
  }
  renderFilter() {
    const title: HTMLHeadingElement = document.createElement("h2");
    title.innerText = "Filter:";
    this.container.append(title);

    const form: HTMLFormElement = document.createElement("form");
    form.action = "";

    /* range controls */
    /* dual range */
    //PRICE
    const pricesArray: Array<number> = productsData.map((el) =>
      Number(el.price)
    );
    const minPrice: number = Math.min(...pricesArray);
    const maxPrice: number = Math.max(...pricesArray);
    const rangePriceContainer: HTMLFieldSetElement = document.createElement(
      "fieldset"
    );
    rangePriceContainer.className = "range_container";

    const priceLegend: HTMLLegendElement = document.createElement("legend");
    priceLegend.innerText = "Price";
    rangePriceContainer.append(priceLegend);

    const sliderPriceControl: HTMLDivElement = document.createElement("div");
    sliderPriceControl.className = "sliders_control";
    sliderPriceControl.innerHTML = `<input id="fromPriceSlider" type="range" value="${minPrice}" min="${minPrice}" max="${maxPrice}"/>
    <input id="toPriceSlider" type="range" value="${maxPrice}" min="${minPrice}" max="${maxPrice}"/>`;

    // const inputMinPrice: HTMLInputElement = document.createElement("input");
    // inputMinPrice.id = "fromPriceSlider";
    // inputMinPrice.type = "range";
    // inputMinPrice.value = "280";
    // inputMinPrice.min = "280";
    // inputMinPrice.max = "1749";
    // sliderPriceControl.append(inputMinPrice);

    // const inputMaxPrice: HTMLInputElement = document.createElement("input");
    // inputMaxPrice.id = "toPriceSlider";
    // inputMaxPrice.type = "range";
    // inputMaxPrice.value = "1749";
    // inputMaxPrice.min = "280";
    // inputMaxPrice.max = "1749";
    // sliderPriceControl.append(inputMaxPrice);
    rangePriceContainer.append(sliderPriceControl);

    const formPriceControl: HTMLElement = document.createElement("div");
    formPriceControl.className = "form_control price-controls";

    const formPriceControlContainer: HTMLElement = document.createElement(
      "div"
    );
    formPriceControlContainer.className = "form_control_container";

    const formPriceControlContainerTime: HTMLElement = document.createElement(
      "div"
    );
    formPriceControlContainerTime.className = "form_control_container__time";
    formPriceControlContainerTime.innerText = "Min";
    formPriceControlContainer.append(formPriceControlContainerTime);

    const formPriceControlContainerTimeInput: HTMLInputElement = document.createElement(
      "input"
    );
    formPriceControlContainerTimeInput.className =
      "form_control_container__time__input";
    formPriceControlContainerTimeInput.type = "number";
    formPriceControlContainerTimeInput.id = "fromPriceInput";
    formPriceControlContainerTimeInput.value = `${minPrice}`;
    formPriceControlContainerTimeInput.min = `${minPrice}`;
    formPriceControlContainerTimeInput.max = `${maxPrice}`;
    formPriceControlContainer.append(formPriceControlContainerTimeInput);
    formPriceControl.append(formPriceControlContainer);

    const formPriceControlContainer2: HTMLElement = document.createElement(
      "div"
    );
    formPriceControlContainer2.className = "form_control_container";

    const formPriceControlContainerTime2: HTMLElement = document.createElement(
      "div"
    );
    formPriceControlContainerTime2.className = "form_control_container__time";
    formPriceControlContainerTime2.innerText = "Max";
    formPriceControlContainer2.append(formPriceControlContainerTime2);

    const formPriceControlContainerTimeInput2: HTMLInputElement = document.createElement(
      "input"
    );
    formPriceControlContainerTimeInput2.className =
      "form_control_container__time__input";
    formPriceControlContainerTimeInput2.type = "number";
    formPriceControlContainerTimeInput2.id = "toPriceInput";
    formPriceControlContainerTimeInput2.value = `${maxPrice}`;
    formPriceControlContainerTimeInput2.min = `${minPrice}`;
    formPriceControlContainerTimeInput2.max = `${maxPrice}`;
    formPriceControlContainer2.append(formPriceControlContainerTimeInput2);
    formPriceControl.append(formPriceControlContainer2);
    rangePriceContainer.append(formPriceControl);

    form.append(rangePriceContainer);

    //STOCK
    const stockArray: Array<number> = productsData.map((el) =>
      Number(el.stock)
    );
    const minStock: number = Math.min(...stockArray);
    const maxStock: number = Math.max(...stockArray);

    const rangeStockContainer: HTMLFieldSetElement = document.createElement(
      "fieldset"
    );
    rangeStockContainer.className = "range_container";

    const stockLegend: HTMLLegendElement = document.createElement("legend");
    stockLegend.innerText = "Stock";
    rangeStockContainer.append(stockLegend);

    const sliderStockControl: HTMLDivElement = document.createElement("div");
    sliderStockControl.className = "sliders_control";
    sliderStockControl.innerHTML = `<input id="fromStockSlider" type="range" value="${minStock}" min="${minStock}" max="${maxStock}"/>
    <input id="toStockSlider" type="range" value="${maxStock}" min="${minStock}" max="${maxStock}"/>`;

    // const inputMinStock: HTMLInputElement = document.createElement("input");
    // inputMinStock.id = "fromStockSlider";
    // inputMinStock.type = "range";
    // inputMinStock.value = "0";
    // inputMinStock.min = "0";
    // inputMinStock.max = "100";
    // sliderStockControl.append(inputMinStock);

    // const inputMaxStock: HTMLInputElement = document.createElement("input");
    // inputMaxStock.id = "toStockSlider";
    // inputMaxStock.type = "range";
    // inputMaxStock.value = "100";
    // inputMaxStock.min = "0";
    // inputMaxStock.max = "100";
    // sliderStockControl.append(inputMaxStock);
    rangeStockContainer.append(sliderStockControl);

    const formStockControl: HTMLElement = document.createElement("div");
    formStockControl.className = "form_control price-controls";

    const formStockControlContainer: HTMLElement = document.createElement(
      "div"
    );
    formStockControlContainer.className = "form_control_container";

    const formStockControlContainerTime: HTMLElement = document.createElement(
      "div"
    );
    formStockControlContainerTime.className = "form_control_container__time";
    formStockControlContainerTime.innerText = "Min";
    formStockControlContainer.append(formStockControlContainerTime);

    const formStockControlContainerTimeInput: HTMLInputElement = document.createElement(
      "input"
    );
    formStockControlContainerTimeInput.className =
      "form_control_container__time__input";
    formStockControlContainerTimeInput.type = "number";
    formStockControlContainerTimeInput.id = "fromStockInput";
    formStockControlContainerTimeInput.value = `${minStock}`;
    formStockControlContainerTimeInput.min = `${minStock}`;
    formStockControlContainerTimeInput.max = `${maxStock}`;
    formStockControlContainer.append(formStockControlContainerTimeInput);
    formStockControl.append(formStockControlContainer);

    const formStockControlContainer2: HTMLElement = document.createElement(
      "div"
    );
    formStockControlContainer2.className = "form_control_container";

    const formStockControlContainerTime2: HTMLElement = document.createElement(
      "div"
    );
    formStockControlContainerTime2.className = "form_control_container__time";
    formStockControlContainerTime2.innerText = "Max";
    formStockControlContainer2.append(formStockControlContainerTime2);

    const formStockControlContainerTimeInput2: HTMLInputElement = document.createElement(
      "input"
    );
    formStockControlContainerTimeInput2.className =
      "form_control_container__time__input";
    formStockControlContainerTimeInput2.type = "number";
    formStockControlContainerTimeInput2.id = "toStockInput";
    formStockControlContainerTimeInput2.value = `${maxStock}`;
    formStockControlContainerTimeInput2.min = `${minStock}`;
    formStockControlContainerTimeInput2.max = `${maxStock}`;
    formStockControlContainer2.append(formStockControlContainerTimeInput2);
    formStockControl.append(formStockControlContainer2);
    rangeStockContainer.append(formStockControl);

    form.append(rangeStockContainer);

    /* checkbox */
    const producersFilter: HTMLFieldSetElement = document.createElement(
      "fieldset"
    );
    producersFilter.className = "producers-filter";

    const brandLegend: HTMLLegendElement = document.createElement("legend");
    brandLegend.innerText = "Brand";
    producersFilter.append(brandLegend);

    const brandList: HTMLElement = document.createElement("ul");
    const brandsArray: Array<string> = Array.from(
      new Set(productsData.map((el) => el.brand))
    );
    for (let i = 0; i < brandsArray.length; i++) {
      const li: HTMLLIElement = document.createElement("li");
      const input: HTMLInputElement = document.createElement("input");
      input.className = "visually-hidden filter-checkbox";
      input.name = brandsArray[i];
      input.type = "checkbox";
      input.id = `filter-chekbox-${brandsArray[i]}`;
      li.append(input);
      const label: HTMLLabelElement = document.createElement("label");
      label.htmlFor = `filter-chekbox-${brandsArray[i]}`;
      label.innerText = brandsArray[i];
      li.append(label);
      brandList.append(li);
    }
    producersFilter.append(brandList);
    form.append(producersFilter);

    /* radiobuttons */
    const propertyFilter: HTMLFieldSetElement = document.createElement(
      "fieldset"
    );
    propertyFilter.className = "property-filter";

    const propertyLegend: HTMLLegendElement = document.createElement("legend");
    propertyLegend.innerText = "Property";
    propertyFilter.append(propertyLegend);

    const propertyList: HTMLElement = document.createElement("ul");
    const propertyArray: Array<string> = Array.from(
      new Set(productsData.map((el) => el.category))
    );
    for (let i = 0; i < propertyArray.length; i++) {
      const li: HTMLLIElement = document.createElement("li");
      const input: HTMLInputElement = document.createElement("input");
      input.className = "filter-radio visually-hidden";
      input.name = "Property";
      input.type = "radio";
      input.id = `filter-radio-${propertyArray[i]}`;
      li.append(input);
      const label: HTMLLabelElement = document.createElement("label");
      label.htmlFor = `filter-radio-${propertyArray[i]}`;
      label.innerText = propertyArray[i];
      li.append(label);
      propertyList.append(li);
    }
    propertyFilter.append(propertyList);
    form.append(propertyFilter);

    /* button */
    const filterButton: HTMLButtonElement = document.createElement("button");
    filterButton.innerText = "Сбросить";
    filterButton.className = "reset-button";
    filterButton.type = "reset";
    form.append(filterButton);

    this.container.append(form);
  }
  render() {
    this.renderFilter();
    return this.container;
  }
}

export default Filter;
