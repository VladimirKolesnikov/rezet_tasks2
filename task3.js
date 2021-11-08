const transformLinks = (str) => {
  const mdLinkTemplate = /\[.+\]\((http|https|ftp):\/\/[^" ]+?\)/g;
  return str.replace(mdLinkTemplate, changeLink);
};

const changeLink = (link) => {
    return buildHtmlTag(parse(link));
}

const parse = (mdLink) => {
    const textUrlTilleTemplate = /\[(.+)\]\(([^"]+)( "(.+)")?\)/; // match groups: 1-text, 2-url, 4-title
    return ({
        text: mdLink.match(textUrlTilleTemplate)[1],
        href: mdLink.match(textUrlTilleTemplate)[2],
        title: mdLink.match(textUrlTilleTemplate)[4],
        renderAsHtml() {
            const titleAttribute = this.title ? ` title="${this.title}"` : '';
            return `<a href="${this.href}"${titleAttribute} >${this.text}</a>`;
        },
    });
};

const buildHtmlTag = (dataObj) => {
    return dataObj.renderAsHtml();
};

export default transformLinks;