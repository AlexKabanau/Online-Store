// import productsData from "./components/data";
import Filter from "./main/Filter";
import Catalog from "./main/catalog";
import productsData from "./data";
class App {
  container: HTMLElement | null = document.querySelector("main");

  filter: Filter;
  catalog: Catalog;

  constructor() {
    this.filter = new Filter("main", "main", "main");
    this.catalog = new Catalog("main", "main", "main", productsData);
  }

  run() {
    if (this.container) {
      this.container.append(this.filter.render());
      this.container.append(this.catalog.render(productsData));
    }
  }
}

export default App;
