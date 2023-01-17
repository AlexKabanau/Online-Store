export type createElementParams = {
  tag: string;
  id?: string;
  classes?: string[];
  text?: string;
  data?: { [name: string]: string };
};

export const iCreateElement = (params: createElementParams): HTMLElement => {
  const { tag, id, classes = [], text = "", data = {} } = params;
  const el = document.createElement(tag);
  id && el.setAttribute("id", id);
  classes && el.classList.add(...classes);
  el.innerText = text;
  Object.assign(el.dataset, data);
  return el;
};
