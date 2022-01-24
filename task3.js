const transformLinks = (str) => {
    const mdLinkTemplate = /\[[^\]]+\]\((http|https|ftp):\/\/([\w-]+\.)+\w{1,10}\/?( "[^"]+")?\)/g;
    return str.replace(mdLinkTemplate, changeLink);
};

const changeLink = (link) => {
    return buildHtmlTag(parse(link));
}

const parse = (mdLink) => {
    const regexp = /\[(?<textGroup>.+)\]\((?<urlGroup>[^"]+)( "(?<titleGroup>.+)")?\)/;
    const matchGroups = mdLink.match(regexp).groups;

    return ({
        text: matchGroups.textGroup,
        href: matchGroups.urlGroup,
        title: matchGroups.titleGroup,
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
