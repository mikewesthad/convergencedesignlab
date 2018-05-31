webpackJsonp([0x65ccee0e7054],{228:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.imageUrl,a=e.imageTitle,n=e.questionHtml;return r.default.createElement("div",{className:u.default.cover},r.default.createElement("img",{className:u.default.coverImage,src:t,alt:a}),r.default.createElement("div",{className:u.default.coverQuestionContainer},r.default.createElement("div",{className:u.default.coverQuestion,dangerouslySetInnerHTML:{__html:n}})))}t.__esModule=!0,t.default=l;var c=a(1),r=n(c),o=a(339),u=n(o);e.exports=t.default},339:function(e,t){e.exports={cover:"src-components-project-cover----index-module---cover---2RspC",coverImage:"src-components-project-cover----index-module---coverImage---7cSEo",coverQuestionContainer:"src-components-project-cover----index-module---coverQuestionContainer---3kB14",coverQuestion:"src-components-project-cover----index-module---coverQuestion---30O9O"}},229:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.src,a=e.caption;return r.default.createElement("div",{className:"subtle-background"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"section text-align-center"},r.default.createElement("figure",{className:u.default.block},r.default.createElement("img",{src:t,className:u.default.image}),r.default.createElement("figcaption",{className:u.default.caption},a)))))}t.__esModule=!0,t.default=l;var c=a(1),r=n(c),o=a(340),u=n(o);e.exports=t.default},340:function(e,t){e.exports={block:"src-components-project-image-block----index-module---block---2GN16",image:"src-components-project-image-block----index-module---image---3ALtR",caption:"src-components-project-image-block----index-module---caption---1cEKN"}},230:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),u=n(o),i=a(4),s=(n(i),a(35)),d=a(27),m=n(d),f=a(30),p=a(5),v=n(p),g=a(228),E=n(g),x=a(229),N=n(x),b=a(231),_=n(b),j=a(77),h=n(j),k=a(16),y=n(k),w=a(341),T=n(w),M=function(e){var t=e.title,a=e.text,n=e.imageName,l=e.imageUrl,c=e.reverseOrder,r=u.default.createElement("div",{key:"text-block-text-"+t,className:(0,v.default)(T.default.blockText,"col--sm-12 col--md-6")},u.default.createElement("div",{className:T.default.sectionTitle},t),u.default.createElement("div",{className:T.default.sectionText,dangerouslySetInnerHTML:{__html:a}})),o=u.default.createElement("div",{key:"text-block-image-"+t,className:(0,v.default)(T.default.blockImage,"col--sm-12 col--md-6")},u.default.createElement("img",{className:T.default.sectionImage,src:l,alt:n}));return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"section"},u.default.createElement("div",{className:"row--space-between"},c?[r,o]:[o,r])))},q=function(e){function t(a){l(this,t);var n=c(this,e.call(this,a));return n.state={data:a.data},n}return r(t,e),t.prototype.componentDidMount=function(){var e=this;if(!this.state.data){var t="discoverdesign";(0,s.fetchProjectBySlug)(t).then(function(t){null!==t&&t.acf?e.setState({data:t.acf}):e.setState({data:null})})}},t.prototype.render=function(){var e=this.state.data;if(null===e)return u.default.createElement(f.Redirect,{to:"/404"});if(!e)return u.default.createElement("div",{style:{minHeight:"1200px"}});var t=(0,m.default)(e,"narrative");t||(t=[]);var a=(0,m.default)(e,"question",""),n=(0,m.default)(e,"banner.image.url",""),l=(0,m.default)(e,"banner.image.title",""),c=(0,m.default)(e,"heading.headline",""),r=(0,m.default)(e,"overview.text",""),o=(0,m.default)(e,"meta.partners",[]),i=(0,m.default)(e,"meta.tags",[]),s=0;return u.default.createElement("div",null,u.default.createElement(E.default,{imageUrl:n,imageTitle:l,questionHtml:a}),u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"section"},u.default.createElement("div",{className:T.default.title},c),u.default.createElement("div",{className:"row--space-between"},u.default.createElement("div",{className:"col--sm-12 col--md-6"},u.default.createElement("div",{className:T.default.sectionTitle},"Challenge"),u.default.createElement("div",{className:T.default.sectionText,dangerouslySetInnerHTML:{__html:r}})),u.default.createElement("div",{className:(0,v.default)(T.default.meta,"col--sm-12 col--md-5")},u.default.createElement("div",null,u.default.createElement("div",{className:T.default.sectionTitle},"Partners"),u.default.createElement("ul",{className:T.default.metaList},o.map(function(e){var t=e.name;return u.default.createElement("li",{key:t},t)}))),u.default.createElement("div",null,u.default.createElement("div",{className:T.default.sectionTitle},"Tags"),u.default.createElement("ul",{className:T.default.metaList},i.map(function(e){var t=e.name;return u.default.createElement("li",{key:t},t)}))))))),t.map(function(e){return"text"===e.acf_fc_layout?(s++,u.default.createElement(M,{title:e.title,text:e.text,imageName:e.image.name,imageUrl:e.image.sizes.medium_large,reverseOrder:s%2===0})):"quote"===e.acf_fc_layout?u.default.createElement(_.default,{quote:e.quote,attribution:e.attribution}):"image"===e.acf_fc_layout?u.default.createElement(N.default,{src:e.image.url,caption:e.caption}):void 0}),u.default.createElement(h.default,{data:e}),u.default.createElement(y.default,{title:"Interested in partnering?"}))},t}(u.default.Component);t.default=q,e.exports=t.default},341:function(e,t){e.exports={title:"src-components-project----index-module---title---25F36",sectionTitle:"src-components-project----index-module---sectionTitle---goonO",sectionImage:"src-components-project----index-module---sectionImage---3Yi5K",blockImage:"src-components-project----index-module---blockImage---8xO8u",sectionText:"src-components-project----index-module---sectionText---1hrZm",meta:"src-components-project----index-module---meta---1MsxK",metaList:"src-components-project----index-module---metaList---d2Z5X"}},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.quote,a=e.attribution;return r.default.createElement("div",{className:"subtle-background"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"section"},r.default.createElement("blockquote",{className:u.default.quote},r.default.createElement("div",{className:u.default.text},t),r.default.createElement("div",{className:u.default.attribution},"— ",a)))))}t.__esModule=!0,t.default=l;var c=a(1),r=n(c),o=a(342),u=n(o);e.exports=t.default},342:function(e,t){e.exports={quote:"src-components-project-quote-block----index-module---quote---23H_6",text:"src-components-project-quote-block----index-module---text---2gDKa",attribution:"src-components-project-quote-block----index-module---attribution---Gnxum"}},77:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data,a=(0,s.default)(t,"banner.image.url",""),n=(0,s.default)(t,"banner.image.title",""),l=(0,s.default)(t,"heading.headline",""),c="/work/discoverdesign";return r.default.createElement("div",{className:"subtle-background"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"section"},r.default.createElement("div",{className:m.default.title},"Explore Other Work"),r.default.createElement("div",{className:m.default.container},r.default.createElement("div",{className:m.default.project},r.default.createElement("figure",{className:m.default.figure},r.default.createElement("img",{className:m.default.image,src:a,alt:n}),r.default.createElement("figcaption",{className:m.default.caption},r.default.createElement("div",{className:m.default.projectName},l),r.default.createElement(u.default,{to:c,className:m.default.link},"Learn more")))),r.default.createElement("div",{className:m.default.project},r.default.createElement("figure",{className:m.default.figure},r.default.createElement("img",{className:m.default.image,src:a,alt:n}),r.default.createElement("figcaption",{className:m.default.caption},r.default.createElement("div",{className:m.default.projectName},l),r.default.createElement(u.default,{to:c,className:m.default.link},"Learn more"))))))))}t.__esModule=!0,t.default=l;var c=a(1),r=n(c),o=a(4),u=n(o),i=a(27),s=n(i),d=a(116),m=n(d);e.exports=t.default},116:function(e,t){e.exports={title:"src-components-related-work----index-module---title---3csyk",figure:"src-components-related-work----index-module---figure---2gBNr",image:"src-components-related-work----index-module---image---1a5lr",caption:"src-components-related-work----index-module---caption---1xjjV",container:"src-components-related-work----index-module---container---1n-m2",project:"src-components-related-work----index-module---project---mPmlp"}},240:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),c=n(l),r=a(230),o=n(r),u=function(){return c.default.createElement(o.default,null)};t.default=u,e.exports=t.default},35:function(e,t,a){"use strict";function n(e){return fetch(e).then(function(e){return e.json()})}function l(){return n(s)}function c(){return n(d)}function r(e){return n(d+"/"+e)}function o(){return Promise.all([n(m),n(f)]).then(function(e){var t=e[0],a=e[1],n=a.reduce(function(e,t){var a=t.id,n=t.count,l=t.name;return e[l]={id:a,count:n},e},{}),l=t.reduce(function(e,t){var a=t.id,n=t.count,l=t.name;return e[l]={id:a,count:n},e},{});return{projectTags:n,partnerTags:l}})}function u(e){return n(s+"?slug="+e).then(function(e){return 0===e.length?null:e[0]})}t.__esModule=!0,t.fetchJson=n,t.fetchProjects=l,t.fetchAcfProjects=c,t.fetchProjectAcfById=r,t.fetchTaxonomies=o,t.fetchProjectBySlug=u;var i="https://api.convergencedesignlab.org/wp-json",s=i+"/wp/v2/projects",d=i+"/acf/v3/projects",m=i+"/wp/v2/partners",f=i+"/wp/v2/project_tags"}});
//# sourceMappingURL=component---src-pages-project-js-ff3e1bd9fddbae21dfc5.js.map