class Footer {
  container: HTMLElement;
  constructor(tageName: string, className: string) {
    this.container = document.createElement(tageName);
    this.container.classList.add(className);
  }
  createFooter() {
    const footerContainer: HTMLElement = document.createElement("div");
    footerContainer.className = "copyright container";
    const rssLogo: HTMLAnchorElement = document.createElement("a");
    rssLogo.className = "rss-logo";
    rssLogo.href = "https://rs.school/js/";
    footerContainer.append(rssLogo);
    const imageRss: HTMLImageElement = document.createElement("img");
    imageRss.classList.add("rss-logo-img");
    //imageRss.src = "../../../img/rs_school_js.svg";
    //imageRss.alt = "RS Logo";
    rssLogo.append(imageRss);
    const footerInfo: HTMLElement = document.createElement("div");
    footerInfo.className = "copyright__info";
    footerInfo.innerHTML = `
      <a class="copyright__info__link" href="https://github.com/AlexKabanau">
      RSSchool#2022 <br>
      Alexandr Kabanau
      </a>
      <a class="copyright__info__link" href="https://github.com/oxana988">
      RSSchool#2022 <br>
      Oxana Savianok
      </a>
      `;
    footerContainer.append(footerInfo);
    this.container.append(footerContainer);
  }

  render() {
    this.createFooter();
    return this.container;
  }
}

export default Footer;
