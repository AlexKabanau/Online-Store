// import productsData from "./components/data";
import Filter from "./main/Filter";
class App {
  container: HTMLElement | null = document.querySelector("main");

  filter: Filter;

  constructor() {
    this.filter = new Filter("main", "main", "main");
  }

  run() {
    if (this.container) {
      this.container.append(this.filter.render());
    }
  }
}

export default App;
