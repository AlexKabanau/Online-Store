import productsData from "../components/data";
// import { ProductItemData } from "../types/index";

function drawFilters(): HTMLElement {
  /* drawBreadcrumbs */
  const catalogPage: HTMLElement = document.createElement("section");
  catalogPage.className = "catalog-page";
  const catalogGrid: HTMLDivElement = document.createElement("div");
  catalogGrid.className = "catalog-grid container";
  catalogPage.append(catalogGrid);
  const breadcrumbs: HTMLElement = document.createElement("ul");
  breadcrumbs.className = "breadcrumbs";
  for (let i = 0; i < 4; i++) {
    const liItem: HTMLLIElement = document.createElement("li");
    const link: HTMLAnchorElement = document.createElement("a");
    switch (i) {
      case 0:
        link.className = "home";
        link.href = "../index.html";
        // eslint-disable-next-line no-case-declarations
        const span: HTMLSpanElement = document.createElement("span");
        span.className = "visually-hidden";
        span.innerText = "Home";
        link.append(span);
        break;
      case 1:
        link.innerText = "category"; //category from data
        break;
      case 2:
        link.innerText = "brand"; //brand from data
        break;
      case 3:
        link.innerText = "title"; //title from data
        break;
    }
    liItem.append(link);
    breadcrumbs.append(liItem);
  }
  catalogGrid.append(breadcrumbs);
  /* end of breadcrumbs */

  /* draw filters */

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

  const rangeControls: HTMLDivElement = document.createElement("div");
  rangeControls.className = "range-controls";

  const scale: HTMLDivElement = document.createElement("div");
  scale.className = "scale";

  const bar: HTMLDivElement = document.createElement("div");
  bar.className = "bar";
  bar.style.width = "79%";
  bar.style.marginLeft = "0%";
  scale.append(bar);

  const firstToggle: HTMLDivElement = document.createElement("div");
  firstToggle.className = "toggle";
  firstToggle.tabIndex = 0;
  firstToggle.style.left = "5%";
  scale.append(firstToggle);

  const secondToggle: HTMLDivElement = document.createElement("div");
  secondToggle.className = "toggle";
  secondToggle.tabIndex = 0;
  secondToggle.style.left = "84%";
  scale.append(secondToggle);
  rangeControls.append(scale);
  priceFilter.append(rangeControls);

  const priceControls: HTMLDivElement = document.createElement("div");
  priceControls.className = "price-controls";

  const minPrice: HTMLInputElement = document.createElement("input");
  minPrice.type = "text";
  minPrice.name = "min-price";
  minPrice.value = "0";
  priceControls.appendChild(minPrice);

  const priceControlsSpan: HTMLSpanElement = document.createElement("span");
  priceControlsSpan.innerText = "-";
  priceControls.append(priceControlsSpan);

  const maxPrice: HTMLInputElement = document.createElement("input");
  maxPrice.type = "text";
  maxPrice.name = "max-price";
  maxPrice.value = "30000";
  priceControls.appendChild(maxPrice);
  priceFilter.append(priceControls);
  form.append(priceFilter);

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

  catalogGrid.append(filter);

  catalogPage.append(catalogGrid);
  const main: HTMLElement | null = document.querySelector("main");
  if (main) {
    main.append(catalogPage);
    return main;
  }
  // return main;
  /* end of filter */
}
// function drawCatalog(arr: Array<ProductItemData>): void {
//   const a = 0;
// }

export default { drawFilters };
