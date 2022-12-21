<<<<<<< HEAD
abstract class ICreateElement {
  protected container: HTMLElement;

  constructor(
    tageName: string,
    className?: string,
    id?: string,
    dataAttrName?: string,
    dataAttrValue?: string,
    textContent?: string
  ) {
    this.container = document.createElement(tageName);
    if (className) this.container.classList.add(className);
    if (id) this.container.id = id;
    if (dataAttrValue && dataAttrName)
      this.container.dataset[dataAttrName] = dataAttrValue;
    if (textContent) this.container.textContent = textContent;
  }

  protected iCreateElement(tageName: string, className: string) {
    const el = document.createElement(tageName);
    el.className = className;
    return el;
  }

  protected iCreateChildElement(
    tageName: string,
    className: string,
    parent: HTMLElement
  ) {
    const el = document.createElement(tageName);
    el.className = className;
    parent.append(el);
    return el;
  }

  protected iCreateTextElement(
    tageName: string,
    className: string,
    text: string
  ) {
    const el = document.createElement(tageName);
    el.className = className;
    el.innerText = text;
    return el;
  }

  render() {
    return this.container;
  }
}

export default ICreateElement;
=======
export interface IElement {
  //selector: string,
  tag: string;
  classNames: string[];
  idName?: string;
  innerText?: string;
  innerHTML?: string;
}

export default class ElementConstructor {
  public createIElement = <T extends HTMLElement>(elementInfo: IElement): T => {
    const { tag, classNames, idName, innerText, innerHTML } = elementInfo;
    const element: T = document.createElement(tag) as T;
    element.classList.add(...classNames);
    if (idName) element.id = idName;
    if (innerText) element.textContent = innerText;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
  };
}
>>>>>>> 2609e31 (add: try to add catalog page)
