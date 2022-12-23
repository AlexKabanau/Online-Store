import productsData from "../data";
import Components from "../Components";

class Filter extends Components {
  constructor(tagName: string, className: string, id: string) {
    super(tagName, className, id);
  }
  renderFilter() {
    const filter: HTMLElement = document.createElement("section");
    filter.className = "filter";

    const title: HTMLHeadingElement = document.createElement("h2");
    title.innerText = "Filter:";
    filter.append(title);

    const form: HTMLFormElement = document.createElement("form");
    form.action = "";

    /* range controls */
    const priceFilter: HTMLFieldSetElement = document.createElement("fieldset");
    priceFilter.className = "price-filter";

    const priceLegend: HTMLLegendElement = document.createElement("legend");
    priceLegend.innerText = "Price";
    priceFilter.append(priceLegend);

    /* dual range */

    const rangeContainer: HTMLDivElement = document.createElement("div");
    rangeContainer.className = "range_container";

    const sliderControl: HTMLDivElement = document.createElement("div");
    sliderControl.className = "sliders_control";

    const inputMax: HTMLInputElement = document.createElement("input");
    inputMax.id = "fromSlider";
    inputMax.type = "range";
    inputMax.value = "10";
    inputMax.min = "0";
    inputMax.max = "100";
    sliderControl.append(inputMax);

    const inputMin: HTMLInputElement = document.createElement("input");
    inputMin.id = "toSlider";
    inputMin.type = "range";
    inputMin.value = "40";
    inputMin.min = "0";
    inputMin.max = "100";
    sliderControl.append(inputMin);
    rangeContainer.append(sliderControl);

    const formControl: HTMLElement = document.createElement("div");
    formControl.className = "form_control";

    const formControlContainer: HTMLElement = document.createElement("div");
    formControlContainer.className = "form_control_container";

    const formControlContainerTime: HTMLElement = document.createElement("div");
    formControlContainerTime.className = "form_control_container__time";
    formControlContainerTime.innerText = "Min";
    formControlContainer.append(formControlContainerTime);

    const formControlContainerTimeInput: HTMLInputElement = document.createElement(
      "input"
    );
    formControlContainerTimeInput.className =
      "form_control_container__time__input";
    formControlContainerTimeInput.type = "number";
    formControlContainerTimeInput.id = "fromInput";
    formControlContainerTimeInput.value = "10";
    formControlContainerTimeInput.min = "0";
    formControlContainerTimeInput.max = "100";
    formControlContainer.append(formControlContainerTimeInput);
    formControl.append(formControlContainer);

    const formControlContainer2: HTMLElement = document.createElement("div");
    formControlContainer2.className = "form_control_container";

    const formControlContainerTime2: HTMLElement = document.createElement(
      "div"
    );
    formControlContainerTime2.className = "form_control_container__time";
    formControlContainerTime2.innerText = "Max";
    formControlContainer2.append(formControlContainerTime2);

    const formControlContainerTimeInput2: HTMLInputElement = document.createElement(
      "input"
    );
    formControlContainerTimeInput2.className =
      "form_control_container__time__input";
    formControlContainerTimeInput2.type = "number";
    formControlContainerTimeInput2.id = "toInput";
    formControlContainerTimeInput2.value = "40";
    formControlContainerTimeInput2.min = "0";
    formControlContainerTimeInput2.max = "100";
    formControlContainer2.append(formControlContainerTimeInput2);
    formControl.append(formControlContainer2);
    rangeContainer.append(formControl);

    form.append(rangeContainer);

    // const bar: HTMLDivElement = document.createElement("div");
    // bar.className = "bar";
    // bar.style.width = "79%";
    // bar.style.marginLeft = "0%";
    // scale.append(bar);

    // const firstToggle: HTMLDivElement = document.createElement("div");
    // firstToggle.className = "toggle";
    // firstToggle.tabIndex = 0;
    // firstToggle.style.left = "5%";
    // scale.append(firstToggle);

    // const secondToggle: HTMLDivElement = document.createElement("div");
    // secondToggle.className = "toggle";
    // secondToggle.tabIndex = 0;
    // secondToggle.style.left = "84%";
    // scale.append(secondToggle);
    // rangeControls.append(scale);
    // priceFilter.append(rangeControls);

    // const priceControls: HTMLDivElement = document.createElement("div");
    // priceControls.className = "price-controls";

    // const minPrice: HTMLInputElement = document.createElement("input");
    // minPrice.type = "text";
    // minPrice.name = "min-price";
    // minPrice.value = "0";
    // priceControls.appendChild(minPrice);

    // const priceControlsSpan: HTMLSpanElement = document.createElement("span");
    // priceControlsSpan.innerText = "-";
    // priceControls.append(priceControlsSpan);

    // const maxPrice: HTMLInputElement = document.createElement("input");
    // maxPrice.type = "text";
    // maxPrice.name = "max-price";
    // maxPrice.value = "30000";
    // priceControls.appendChild(maxPrice);
    // priceFilter.append(priceControls);
    // form.append(priceFilter);

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
      input.name = "Property1";
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
    filterButton.innerText = "Показать";
    filterButton.className = "filter-button";
    filterButton.type = "submit";
    form.append(filterButton);
    filter.append(form);

    this.container.append(filter);
  }
  render() {
    this.renderFilter();
    return this.container;
  }
}

export default Filter;
