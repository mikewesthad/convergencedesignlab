webpackJsonp([0x5bd43c8295b9],{556:function(e,t,a){e.exports=a.p+"static/test-1.69e04633.png"},33:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e){var t=e.src,a=e.alt,n=e.className,r=l(e,["src","alt","className"]);return s.default.createElement("img",o({className:(0,d.default)(m.default.cover,n),src:t,alt:a},r))}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=r;var c=a(1),s=n(c),u=a(5),d=n(u),i=a(46),m=n(i);e.exports=t.default},46:function(e,t){e.exports={cover:"src-components-cover-image----index-module---cover---3rgX9"}},78:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data,a=(0,d.default)(t,"banner.image.url",""),n=(0,d.default)(t,"banner.image.title",""),l=(0,d.default)(t,"heading.headline",""),r="/work/discoverdesign";return o.default.createElement("div",{className:"subtle-background"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"section"},o.default.createElement("div",{className:m.default.title},"Explore Other Work"),o.default.createElement("div",{className:m.default.container},o.default.createElement("div",{className:m.default.project},o.default.createElement("figure",{className:m.default.figure},o.default.createElement("img",{className:m.default.image,src:a,alt:n}),o.default.createElement("figcaption",{className:m.default.caption},o.default.createElement("div",{className:m.default.projectName},l),o.default.createElement(s.default,{to:r,className:m.default.link},"Learn more")))),o.default.createElement("div",{className:m.default.project},o.default.createElement("figure",{className:m.default.figure},o.default.createElement("img",{className:m.default.image,src:a,alt:n}),o.default.createElement("figcaption",{className:m.default.caption},o.default.createElement("div",{className:m.default.projectName},l),o.default.createElement(s.default,{to:r,className:m.default.link},"Learn more"))))))))}t.__esModule=!0,t.default=l;var r=a(1),o=n(r),c=a(4),s=n(c),u=a(16),d=n(u),i=a(117),m=n(i);e.exports=t.default},117:function(e,t){e.exports={title:"src-components-related-work----index-module---title---3csyk",figure:"src-components-related-work----index-module---figure---2gBNr",image:"src-components-related-work----index-module---image---1a5lr",caption:"src-components-related-work----index-module---caption---1xjjV",container:"src-components-related-work----index-module---container---1n-m2",project:"src-components-related-work----index-module---project---mPmlp"}},260:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(1),s=n(c),u=a(4),d=(n(u),a(36)),i=a(16),m=n(i),f=a(31),p=a(5),v=n(p),g=a(33),E=n(g),N=a(78),h=(n(N),a(18)),x=n(h),b=a(372),w=n(b),y=a(556),k=n(y),_=({id:1,title:"Pudding pudding gummi bears chocolate brownie dessert candy",description:"Jelly-o macaroon gummi bears bonbon gummies topping topping oat cake. Chocolate bar marzipan biscuit tiramisu cookie lemon drops cotton candy. Sesame snaps donut sesame snaps pie jelly-o toffee. Cheesecake muffin toffee. Carrot cake dessert wafer candy canes macaroon cheesecake lollipop.",image:k.default},function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.state={data:null,noValidData:!1},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;if(!this.state.data){var t=this.props.location.pathname,a=t.substring(11).replace("/","");(0,d.fetchResourceBySlug)(a).then(function(t){null!==t&&t.acf?e.setState({data:t.acf}):e.setState({noValidData:!0})})}},t.prototype.render=function(){var e=this.state,t=e.data,a=e.noValidData;if(a)return s.default.createElement(f.Redirect,{to:"/404"});if(!t)return s.default.createElement("div",{style:{minHeight:"1200px"}});var n=(0,m.default)(t,"title",""),l=n,r=(0,m.default)(t,"overview",""),o=(0,m.default)(t,"download",""),c=(0,m.default)(t,"image.sizes.large",""),u=(0,m.default)(t,"tags",[]).map(function(e){return e.name}),d=(0,m.default)(t,"authors",[]).map(function(e){return e.author});return s.default.createElement("div",null,s.default.createElement(E.default,{src:c,alt:l}),s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"section"},s.default.createElement("div",{className:w.default.title},n),s.default.createElement("div",{className:"row--space-between"},s.default.createElement("div",{className:"col--sm-12 col--md-6"},s.default.createElement("div",{className:w.default.sectionTitle},"Overview"),s.default.createElement("div",{className:w.default.sectionText,dangerouslySetInnerHTML:{__html:r}})),s.default.createElement("div",{className:(0,v.default)(w.default.meta,"col--sm-12 col--md-5")},s.default.createElement("div",{className:w.default.metaSection},s.default.createElement("div",{className:w.default.sectionTitle},"Tags"),s.default.createElement("ul",{className:w.default.metaList},u.map(function(e){return s.default.createElement("li",{key:"author-"+e},e)}))),s.default.createElement("div",{className:w.default.metaSection},s.default.createElement("div",{className:w.default.sectionTitle},"Authors"),s.default.createElement("ul",{className:w.default.metaList},d.map(function(e){return s.default.createElement("li",{key:"author-"+e},e)}))))),s.default.createElement("div",{className:w.default.download},s.default.createElement("a",{href:o,download:!0,target:"_blank"},"Download PDF")))),s.default.createElement(x.default,{title:"Looking for a framework?"}))},t}(s.default.Component));t.default=_,e.exports=t.default},372:function(e,t){e.exports={title:"src-components-resource----index-module---title---1sZrX",sectionTitle:"src-components-resource----index-module---sectionTitle---3hURJ",sectionImage:"src-components-resource----index-module---sectionImage---2r80e",blockImage:"src-components-resource----index-module---blockImage---3WA8M",sectionText:"src-components-resource----index-module---sectionText---2gE0l",meta:"src-components-resource----index-module---meta---2aWB-",metaSection:"src-components-resource----index-module---metaSection---2e_vP",metaList:"src-components-resource----index-module---metaList---3WcQ2",download:"src-components-resource----index-module---download---1iXXh"}},269:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),o=a(260),c=n(o),s=function(e){return r.default.createElement(c.default,e)};t.default=s,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-resource-js-054cddbacd053e833482.js.map