const transformLinks = (str) => {
  const mdLinkTemplate = /\[.+\]\((http|https|ftp):\/\/[^" ]+?\)/g;
  return str.replace(mdLinkTemplate, changeLink);
};

const changeLink = (link) => {
    return buildHtmlTag(parse(link));
}

const parse = (mdLink) => {
    return ({
        text: mdLink.match(/\[(.+?)\]/)[1],
        href: mdLink.match(/\((.+?)\)/)[1],
        renderAsHtml() {
            return `<a href="${this.href}" >${this.text}</a>`;
        },
    });
};

const buildHtmlTag = (dataObj) => {
    return dataObj.renderAsHtml();
};

export default transformLinks;