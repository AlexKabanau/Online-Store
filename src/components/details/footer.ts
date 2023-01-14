import {
  SCHOOL_LINK,
  GITHUB_ALEX,
  GITHUB_OXANA,
  YEAR_CREAT,
} from "../../types/constansts";

class Footer {
  container: HTMLElement;
  constructor(tageName: string, className: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
  }
  createFooter() {
    const footerContainer: HTMLElement = document.createElement("div");
    footerContainer.className = "copyright container";
    footerContainer.innerHTML = `
      <a class="rss-logo" href=${SCHOOL_LINK} target="_blank">
        <img class="rss-logo-img">
      </a>
      <div class="year-wrap">
        <span>${YEAR_CREAT}</span>
      </div>
      <div class="copyright__info">
      <a class="copyright__info__link" href=${GITHUB_ALEX} target="_blank">
      RSSchool#2022 <br>
      Alexandr Kabanau
      </a>
      <a class="copyright__info__link" href=${GITHUB_OXANA} target="_blank">
      RSSchool#2022 <br>
      Oxana Savianok
      </a>
      </div>
    `;
    this.container.append(footerContainer);
  }

  render() {
    this.createFooter();
    return this.container;
  }
}

export default Footer;
