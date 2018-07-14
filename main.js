const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType); // #page-banner node type is: 1
console.log('#page-banner node name is:', banner.nodeName); // #page-banner node name is: DIV
console.log('#page-banner has child nodes:', banner.hasChildNodes()); // #page-banner has child nodes: true

const clonedBanner = banner.cloneNode(true); // if is true will clone a hole div + child from #page-banner
//const clonedBanner = banner.cloneNode(false); // if is true will clone only <div id="page-banner"></div> without child
console.log(clonedBanner);


