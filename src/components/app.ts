// import productsData from "./components/data";
// import Filter from "./main/Filter";
// import Catalog from "./main/catalog";
// import productsData from "./data";
import Main from "./main/main";
class App {
  container: HTMLElement = document.body;

  main: Main;

  constructor() {
    this.main = new Main("main", "main", "main");
  }

  run() {
    this.container.append(this.main.render());
  }
}

export default App;
