const createDOMLink = (link, linkText, active = false) => {
    const domItem = active ? 'span' : 'a';
    if (linkText == 'HOME') {
        return `<${domItem} ${active ? 'class="active"' : 'href="/"'}>HOME</${domItem}>`;
    } else {
        return `<${domItem} ${active ? 'class="active"' : `href="${link}"`}>${linkText.toUpperCase()}</${domItem}>`;
    }
}


const preprocessItem = (item) => {
    let processedItem = item.split('.')[0];
    if (processedItem.length > 30) {
        processedItem = processedItem.split('-').map((str) => str.charAt(0)).join('');
    }
    return processedItem.toUpperCase();
};

const preprocessLink = (link) => {
    if (link.includes('.')) {
        return link;
    } else {
        return link + '/';
    }
};


function generateBC(url, separator) {
    const urlBreadCrumbs = url.split('/');
    const urlength = urlBreadCrumbs.length - 1;
    let fullPath = '/';
    const processedBreadcrumbs = urlBreadCrumbs.map((item, index) => {
        if (index == 0) {
            return createDOMLink('/', 'HOME', index == urlength ? true : false);
        } else {
            const preprocesedItem = preprocessItem(item);
            if (preprocesedItem != 'INDEX' && index != urlength) {
                fullPath = fullPath + preprocessLink(item);
                return createDOMLink(fullPath, preprocesedItem, index == urlength ? true : false);
            }
        }
        console.log(fullPath);
    });
    console.log(processedBreadcrumbs.join(separator));
    return processedBreadcrumbs.join(separator);
}