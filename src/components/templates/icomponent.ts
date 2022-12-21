abstract class IComponent {
  protected container: HTMLElement;

  constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  render() {
    return this.container;
  }
}

export default IComponent;
