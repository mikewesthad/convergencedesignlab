webpackJsonp([0x5bd43c8295b9],{34:function(e,o,c){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function t(e,o){var c={};for(var l in e)o.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(c[l]=e[l]);return c}function n(e){var o=e.src,c=e.alt,l=e.className,n=t(e,["src","alt","className"]);return d.default.createElement("img",r({className:(0,u.default)(i.default.cover,l),src:o,alt:c},n))}o.__esModule=!0;var r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l])}return e};o.default=n;var s=c(1),d=l(s),a=c(5),u=l(a),m=c(47),i=l(m);e.exports=o.default},47:function(e,o){e.exports={cover:"src-components-cover-image----index-module---cover---3rgX9"}},78:function(e,o,c){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function t(e){var o=e.data,c=(0,u.default)(o,"banner.image.url",""),l=(0,u.default)(o,"banner.image.title",""),t=(0,u.default)(o,"heading.headline",""),n="/work/discoverdesign";return r.default.createElement("div",{className:"subtle-background"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"section"},r.default.createElement("div",{className:i.default.title},"Explore Other Work"),r.default.createElement("div",{className:i.default.container},r.default.createElement("div",{className:i.default.project},r.default.createElement("figure",{className:i.default.figure},r.default.createElement("img",{className:i.default.image,src:c,alt:l}),r.default.createElement("figcaption",{className:i.default.caption},r.default.createElement("div",{className:i.default.projectName},t),r.default.createElement(d.default,{to:n,className:i.default.link},"Learn more")))),r.default.createElement("div",{className:i.default.project},r.default.createElement("figure",{className:i.default.figure},r.default.createElement("img",{className:i.default.image,src:c,alt:l}),r.default.createElement("figcaption",{className:i.default.caption},r.default.createElement("div",{className:i.default.projectName},t),r.default.createElement(d.default,{to:n,className:i.default.link},"Learn more"))))))))}o.__esModule=!0,o.default=t;var n=c(1),r=l(n),s=c(4),d=l(s),a=c(16),u=l(a),m=c(116),i=l(m);e.exports=o.default},116:function(e,o){e.exports={title:"src-components-related-work----index-module---title---3csyk",figure:"src-components-related-work----index-module---figure---2gBNr",image:"src-components-related-work----index-module---image---1a5lr",caption:"src-components-related-work----index-module---caption---1xjjV",container:"src-components-related-work----index-module---container---1n-m2",project:"src-components-related-work----index-module---project---mPmlp"}},260:function(e,o,c){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function n(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var s=c(1),d=l(s),a=c(4),u=(l(a),c(37)),m=c(16),i=l(m),f=c(32),x=c(5),p=l(x),g=c(34),v=l(g),E=c(78),w=(l(E),c(18)),h=l(w),N=c(19),b=l(N),y=c(373),j=l(y),_=function(e){function o(c){t(this,o);var l=n(this,e.call(this,c));return l.state={data:null,noValidData:!1},l}return r(o,e),o.prototype.componentDidMount=function(){var e=this;if(!this.state.data){var o=this.props.location.pathname,c=o.endsWith("/")?o.slice(0,o.length-1):o,l=c.split("/").pop();(0,u.fetchResourceBySlug)(l).then(function(o){null!==o&&o.acf?e.setState({data:o.acf}):e.setState({noValidData:!0})})}},o.prototype.render=function(){var e=this.state,o=e.data,c=e.noValidData;if(c)return d.default.createElement(f.Redirect,{to:"/404"});if(!o)return d.default.createElement(b.default,{height:"100vh"});var l=(0,i.default)(o,"title",""),t=l,n=(0,i.default)(o,"overview",""),r=(0,i.default)(o,"download",""),s=(0,i.default)(o,"image.sizes.large",""),a=(0,i.default)(o,"tags",[]).map(function(e){return e.name}),u=(0,i.default)(o,"authors",[]).map(function(e){return e.author});return d.default.createElement("div",null,d.default.createElement(v.default,{src:s,alt:t}),d.default.createElement("div",{className:"container"},d.default.createElement("div",{className:"section"},d.default.createElement("div",{className:j.default.title},l),d.default.createElement("div",{className:j.default.row},d.default.createElement("div",{className:"col--md-6"},d.default.createElement("div",{className:j.default.sectionTitle},"Overview"),d.default.createElement("div",{className:j.default.sectionText,dangerouslySetInnerHTML:{__html:n}})),d.default.createElement("div",{className:(0,p.default)(j.default.meta,"col--md-5")},d.default.createElement("div",{className:j.default.metaSection},d.default.createElement("div",{className:j.default.sectionTitle},"Tags"),d.default.createElement("ul",{className:j.default.metaList},a.map(function(e){return d.default.createElement("li",{key:"author-"+e},e)}))),d.default.createElement("div",{className:j.default.metaSection},d.default.createElement("div",{className:j.default.sectionTitle},"Authors"),d.default.createElement("ul",{className:j.default.metaList},u.map(function(e){return d.default.createElement("li",{key:"author-"+e},e)}))))),d.default.createElement("div",{className:j.default.download},d.default.createElement("a",{href:r,download:!0,target:"_blank"},"Download PDF")))),d.default.createElement(h.default,{title:"Looking for a framework?"}))},o}(d.default.Component);o.default=_,e.exports=o.default},373:function(e,o){e.exports={row:"src-components-resource----index-module---row---55qHC","row--justify-center":"src-components-resource----index-module---row--justify-center---XKZD3","row--space-between":"src-components-resource----index-module---row--space-between---2lrdt","row--justify-end":"src-components-resource----index-module---row--justify-end---b1a-v",col:"src-components-resource----index-module---col---3LOXn","col--xs":"src-components-resource----index-module---col--xs---1XBMU","col--xs-1":"src-components-resource----index-module---col--xs-1---2i23x","col--xs-2":"src-components-resource----index-module---col--xs-2---3Bs7r","col--xs-3":"src-components-resource----index-module---col--xs-3---yX7pj","col--xs-4":"src-components-resource----index-module---col--xs-4---20bBS","col--xs-5":"src-components-resource----index-module---col--xs-5---1SHFK","col--xs-6":"src-components-resource----index-module---col--xs-6---1lK0Y","col--xs-7":"src-components-resource----index-module---col--xs-7---2bexI","col--xs-8":"src-components-resource----index-module---col--xs-8---3afL8","col--xs-9":"src-components-resource----index-module---col--xs-9---2yO8t","col--xs-10":"src-components-resource----index-module---col--xs-10---3aLzZ","col--xs-11":"src-components-resource----index-module---col--xs-11---2S4WS","col--xs-12":"src-components-resource----index-module---col--xs-12---1pFWk","col--sm":"src-components-resource----index-module---col--sm---3SlFH","col--sm-1":"src-components-resource----index-module---col--sm-1---3CX7T","col--sm-2":"src-components-resource----index-module---col--sm-2---2deYH","col--sm-3":"src-components-resource----index-module---col--sm-3---3MPe0","col--sm-4":"src-components-resource----index-module---col--sm-4---18F2w","col--sm-5":"src-components-resource----index-module---col--sm-5---3DEcA","col--sm-6":"src-components-resource----index-module---col--sm-6---1xeF8","col--sm-7":"src-components-resource----index-module---col--sm-7---2KAnx","col--sm-8":"src-components-resource----index-module---col--sm-8---3kWYA","col--sm-9":"src-components-resource----index-module---col--sm-9---1UCtn","col--sm-10":"src-components-resource----index-module---col--sm-10---mYaGJ","col--sm-11":"src-components-resource----index-module---col--sm-11---3TKYQ","col--sm-12":"src-components-resource----index-module---col--sm-12---1D2QL","col--md":"src-components-resource----index-module---col--md---2wPxP","col--md-1":"src-components-resource----index-module---col--md-1---1i_qk","col--md-2":"src-components-resource----index-module---col--md-2---2SkYn","col--md-3":"src-components-resource----index-module---col--md-3---1nyl2","col--md-4":"src-components-resource----index-module---col--md-4---2AbGE","col--md-5":"src-components-resource----index-module---col--md-5---1B6DO","col--md-6":"src-components-resource----index-module---col--md-6---10TdF","col--md-7":"src-components-resource----index-module---col--md-7---2LvwC","col--md-8":"src-components-resource----index-module---col--md-8---3DVv6","col--md-9":"src-components-resource----index-module---col--md-9---36-GJ","col--md-10":"src-components-resource----index-module---col--md-10---1EKjW","col--md-11":"src-components-resource----index-module---col--md-11---1Ovq9","col--md-12":"src-components-resource----index-module---col--md-12---1o6FL","col--lg":"src-components-resource----index-module---col--lg---ELsUz","col--lg-1":"src-components-resource----index-module---col--lg-1---2CjvM","col--lg-2":"src-components-resource----index-module---col--lg-2---LshZc","col--lg-3":"src-components-resource----index-module---col--lg-3---D7O_O","col--lg-4":"src-components-resource----index-module---col--lg-4---G5jkL","col--lg-5":"src-components-resource----index-module---col--lg-5---3VJJj","col--lg-6":"src-components-resource----index-module---col--lg-6---1gH-s","col--lg-7":"src-components-resource----index-module---col--lg-7---3O3vI","col--lg-8":"src-components-resource----index-module---col--lg-8---2Yhqd","col--lg-9":"src-components-resource----index-module---col--lg-9---3WRog","col--lg-10":"src-components-resource----index-module---col--lg-10---1jNgD","col--lg-11":"src-components-resource----index-module---col--lg-11---3zKPX","col--lg-12":"src-components-resource----index-module---col--lg-12---1a64g","col--xl":"src-components-resource----index-module---col--xl---gpp-j","col--xl-1":"src-components-resource----index-module---col--xl-1---1TAtL","col--xl-2":"src-components-resource----index-module---col--xl-2---19wwD","col--xl-3":"src-components-resource----index-module---col--xl-3---YYMmd","col--xl-4":"src-components-resource----index-module---col--xl-4---zMybU","col--xl-5":"src-components-resource----index-module---col--xl-5---KTwO-","col--xl-6":"src-components-resource----index-module---col--xl-6---2vgmt","col--xl-7":"src-components-resource----index-module---col--xl-7---3uSd5","col--xl-8":"src-components-resource----index-module---col--xl-8---3lip3","col--xl-9":"src-components-resource----index-module---col--xl-9---3vZIH","col--xl-10":"src-components-resource----index-module---col--xl-10---3aC1t","col--xl-11":"src-components-resource----index-module---col--xl-11---2vjPz","col--xl-12":"src-components-resource----index-module---col--xl-12---31q4o",title:"src-components-resource----index-module---title---1sZrX",sectionTitle:"src-components-resource----index-module---sectionTitle---3hURJ",sectionImage:"src-components-resource----index-module---sectionImage---2r80e",blockImage:"src-components-resource----index-module---blockImage---3WA8M",sectionText:"src-components-resource----index-module---sectionText---2gE0l",meta:"src-components-resource----index-module---meta---2aWB-",metaSection:"src-components-resource----index-module---metaSection---2e_vP",metaList:"src-components-resource----index-module---metaList---3WcQ2",download:"src-components-resource----index-module---download---1iXXh"}},269:function(e,o,c){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}o.__esModule=!0;var t=c(1),n=l(t),r=c(260),s=l(r),d=function(e){return n.default.createElement(s.default,e)};o.default=d,e.exports=o.default}});
//# sourceMappingURL=component---src-pages-resource-js-5756c4ec97ee7b4ad674.js.map