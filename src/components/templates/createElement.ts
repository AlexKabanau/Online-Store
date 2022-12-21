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
