webpackJsonp([0x65ccee0e7054],{52:function(e,t){(function(t){function n(e,t){return null==e?void 0:e[t]}function a(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function r(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function o(){this.__data__=_e?_e(null):{}}function c(e){return this.has(e)&&delete this.__data__[e]}function l(e){var t=this.__data__;if(_e){var n=t[e];return n===K?void 0:n}return se.call(t,e)?t[e]:void 0}function u(e){var t=this.__data__;return _e?void 0!==t[e]:se.call(t,e)}function i(e,t){var n=this.__data__;return n[e]=_e&&void 0===t?K:t,this}function s(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function d(){this.__data__=[]}function f(e){var t=this.__data__,n=x(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():pe.call(t,n,1),!0}function m(e){var t=this.__data__,n=x(t,e);return n<0?void 0:t[n][1]}function p(e){return x(this.__data__,e)>-1}function v(e,t){var n=this.__data__,a=x(n,e);return a<0?n.push([e,t]):n[a][1]=t,this}function _(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}function g(){this.__data__={hash:new r,map:new(ve||s),string:new r}}function h(e){return O(this,e).delete(e)}function y(e){return O(this,e).get(e)}function E(e){return O(this,e).has(e)}function b(e,t){return O(this,e).set(e,t),this}function x(e,t){for(var n=e.length;n--;)if(C(e[n][0],t))return n;return-1}function j(e,t){t=M(t,e)?[t]:w(t);for(var n=0,a=t.length;null!=e&&n<a;)e=e[q(t[n++])];return n&&n==a?e:void 0}function N(e){if(!H(e)||S(e))return!1;var t=$(e)||a(e)?fe:ee;return t.test(P(e))}function k(e){if("string"==typeof e)return e;if(Q(e))return he?he.call(e):"";var t=e+"";return"0"==t&&1/e==-U?"-0":t}function w(e){return Ee(e)?e:ye(e)}function O(e,t){var n=e.__data__;return I(t)?n["string"==typeof t?"string":"hash"]:n.map}function T(e,t){var a=n(e,t);return N(a)?a:void 0}function M(e,t){if(Ee(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Q(e))||(Y.test(e)||!D.test(e)||null!=t&&e in Object(t))}function I(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function S(e){return!!ue&&ue in e}function q(e){if("string"==typeof e||Q(e))return e;var t=e+"";return"0"==t&&1/e==-U?"-0":t}function P(e){if(null!=e){try{return ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function L(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(F);var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var c=e.apply(this,a);return n.cache=o.set(r,c),c};return n.cache=new(L.Cache||_),n}function C(e,t){return e===t||e!==e&&t!==t}function $(e){var t=H(e)?de.call(e):"";return t==Z||t==G}function H(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function A(e){return!!e&&"object"==typeof e}function Q(e){return"symbol"==typeof e||A(e)&&de.call(e)==J}function R(e){return null==e?"":k(e)}function B(e,t,n){var a=null==e?void 0:j(e,t);return void 0===a?n:a}var F="Expected a function",K="__lodash_hash_undefined__",U=1/0,Z="[object Function]",G="[object GeneratorFunction]",J="[object Symbol]",D=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/,z=/^\./,W=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,X=/[\\^$.*+?()[\]{}|]/g,V=/\\(\\)?/g,ee=/^\[object .+?Constructor\]$/,te="object"==typeof t&&t&&t.Object===Object&&t,ne="object"==typeof self&&self&&self.Object===Object&&self,ae=te||ne||Function("return this")(),re=Array.prototype,oe=Function.prototype,ce=Object.prototype,le=ae["__core-js_shared__"],ue=function(){var e=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ie=oe.toString,se=ce.hasOwnProperty,de=ce.toString,fe=RegExp("^"+ie.call(se).replace(X,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),me=ae.Symbol,pe=re.splice,ve=T(ae,"Map"),_e=T(Object,"create"),ge=me?me.prototype:void 0,he=ge?ge.toString:void 0;r.prototype.clear=o,r.prototype.delete=c,r.prototype.get=l,r.prototype.has=u,r.prototype.set=i,s.prototype.clear=d,s.prototype.delete=f,s.prototype.get=m,s.prototype.has=p,s.prototype.set=v,_.prototype.clear=g,_.prototype.delete=h,_.prototype.get=y,_.prototype.has=E,_.prototype.set=b;var ye=L(function(e){e=R(e);var t=[];return z.test(e)&&t.push(""),e.replace(W,function(e,n,a,r){t.push(a?r.replace(V,"$1"):n||e)}),t});L.Cache=_;var Ee=Array.isArray;e.exports=B}).call(t,function(){return this}())},195:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.imageUrl,n=e.imageTitle,a=e.questionHtml;return c.default.createElement("div",{className:u.default.cover},c.default.createElement("img",{className:u.default.coverImage,src:t,alt:n}),c.default.createElement("div",{className:u.default.coverQuestionContainer},c.default.createElement("div",{className:u.default.coverQuestion,dangerouslySetInnerHTML:{__html:a}})))}t.__esModule=!0,t.default=r;var o=n(1),c=a(o),l=n(313),u=a(l);e.exports=t.default},313:function(e,t){e.exports={cover:"src-components-project-cover----index-module---cover---2RspC",coverImage:"src-components-project-cover----index-module---coverImage---7cSEo",coverQuestionContainer:"src-components-project-cover----index-module---coverQuestionContainer---3kB14",coverQuestion:"src-components-project-cover----index-module---coverQuestion---30O9O"}},196:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.src,n=e.caption;return c.default.createElement("div",{className:"subtle-background"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"section text-align-center"},c.default.createElement("figure",{className:u.default.block},c.default.createElement("img",{src:t,className:u.default.image}),c.default.createElement("figcaption",{className:u.default.caption},n)))))}t.__esModule=!0,t.default=r;var o=n(1),c=a(o),l=n(314),u=a(l);e.exports=t.default},314:function(e,t){e.exports={block:"src-components-project-image-block----index-module---block---2GN16",image:"src-components-project-image-block----index-module---image---3ALtR",caption:"src-components-project-image-block----index-module---caption---1cEKN"}},197:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=a(l),i=n(4),s=(a(i),n(63)),d=n(52),f=a(d),m=n(40),p=n(15),v=a(p),_=n(195),g=a(_),h=n(196),y=a(h),E=n(198),b=a(E),x=n(199),j=a(x),N=n(29),k=a(N),w=n(315),O=a(w),T=function(e){var t=e.title,n=e.text,a=e.imageName,r=e.imageUrl,o=e.reverseOrder,c=u.default.createElement("div",{key:"text-block-text-"+t,className:(0,v.default)(O.default.blockText,"col--sm-12 col--md-6")},u.default.createElement("div",{className:O.default.sectionTitle},t),u.default.createElement("div",{className:O.default.sectionText,dangerouslySetInnerHTML:{__html:n}})),l=u.default.createElement("div",{key:"text-block-image-"+t,className:(0,v.default)(O.default.blockImage,"col--sm-12 col--md-6")},u.default.createElement("img",{className:O.default.sectionImage,src:r,alt:a}));return u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"section"},u.default.createElement("div",{className:"row--space-between"},o?[c,l]:[l,c])))},M=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.state={data:n.data},a}return c(t,e),t.prototype.componentDidMount=function(){var e=this;if(!this.state.data){var t="discoverdesign";(0,s.fetchProjectBySlug)(t).then(function(t){null!==t&&t.acf?e.setState({data:t.acf}):e.setState({data:null})})}},t.prototype.render=function(){var e=this.state.data;if(null===e)return u.default.createElement(m.Redirect,{to:"/404"});if(!e)return u.default.createElement("div",{style:{minHeight:"1200px"}});var t=(0,f.default)(e,"narrative");t||(t=[]);var n=(0,f.default)(e,"question",""),a=(0,f.default)(e,"banner.image.url",""),r=(0,f.default)(e,"banner.image.title",""),o=(0,f.default)(e,"heading.headline",""),c=(0,f.default)(e,"overview.text",""),l=(0,f.default)(e,"meta.partners",[]),i=(0,f.default)(e,"meta.tags",[]),s=0;return u.default.createElement("div",null,u.default.createElement(g.default,{imageUrl:a,imageTitle:r,questionHtml:n}),u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:"section"},u.default.createElement("div",{className:O.default.title},o),u.default.createElement("div",{className:"row--space-between"},u.default.createElement("div",{className:"col--sm-12 col--md-6"},u.default.createElement("div",{className:O.default.sectionTitle},"Challenge"),u.default.createElement("div",{className:O.default.sectionText,dangerouslySetInnerHTML:{__html:c}})),u.default.createElement("div",{className:(0,v.default)(O.default.meta,"col--sm-12 col--md-5")},u.default.createElement("div",null,u.default.createElement("div",{className:O.default.sectionTitle},"Partners"),u.default.createElement("ul",{className:O.default.metaList},l.map(function(e){var t=e.name;return u.default.createElement("li",{key:t},t)}))),u.default.createElement("div",null,u.default.createElement("div",{className:O.default.sectionTitle},"Tags"),u.default.createElement("ul",{className:O.default.metaList},i.map(function(e){var t=e.name;return u.default.createElement("li",{key:t},t)}))))))),t.map(function(e){return"text"===e.acf_fc_layout?(s++,u.default.createElement(T,{title:e.title,text:e.text,imageName:e.image.name,imageUrl:e.image.sizes.medium_large,reverseOrder:s%2===0})):"quote"===e.acf_fc_layout?u.default.createElement(b.default,{quote:e.quote,attribution:e.attribution}):"image"===e.acf_fc_layout?u.default.createElement(y.default,{src:e.image.url,caption:e.caption}):void 0}),u.default.createElement(j.default,{data:e}),u.default.createElement(k.default,{title:"Interested in partnering?"}))},t}(u.default.Component);t.default=M,e.exports=t.default},315:function(e,t){e.exports={title:"src-components-project----index-module---title---25F36",sectionTitle:"src-components-project----index-module---sectionTitle---goonO",sectionImage:"src-components-project----index-module---sectionImage---3Yi5K",blockImage:"src-components-project----index-module---blockImage---8xO8u",sectionText:"src-components-project----index-module---sectionText---1hrZm",meta:"src-components-project----index-module---meta---1MsxK",metaList:"src-components-project----index-module---metaList---d2Z5X"}},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.quote,n=e.attribution;return c.default.createElement("div",{className:"subtle-background"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"section"},c.default.createElement("blockquote",{className:u.default.quote},c.default.createElement("div",{className:u.default.text},t),c.default.createElement("div",{className:u.default.attribution},"— ",n)))))}t.__esModule=!0,t.default=r;var o=n(1),c=a(o),l=n(316),u=a(l);e.exports=t.default},316:function(e,t){e.exports={quote:"src-components-project-quote-block----index-module---quote---23H_6",text:"src-components-project-quote-block----index-module---text---2gDKa",attribution:"src-components-project-quote-block----index-module---attribution---Gnxum"}},199:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.data,n=(0,s.default)(t,"banner.image.url",""),a=(0,s.default)(t,"banner.image.title",""),r=(0,s.default)(t,"heading.headline",""),o="/work/discoverdesign";return c.default.createElement("div",{className:"subtle-background"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"section"},c.default.createElement("div",{className:f.default.title},"Explore Other Work"),c.default.createElement("div",{className:f.default.container},c.default.createElement("div",{className:f.default.project},c.default.createElement("figure",{className:f.default.figure},c.default.createElement("img",{className:f.default.image,src:n,alt:a}),c.default.createElement("figcaption",{className:f.default.caption},c.default.createElement("div",{className:f.default.projectName},r),c.default.createElement(u.default,{to:o,className:f.default.link},"Learn more")))),c.default.createElement("div",{className:f.default.project},c.default.createElement("figure",{className:f.default.figure},c.default.createElement("img",{className:f.default.image,src:n,alt:a}),c.default.createElement("figcaption",{className:f.default.caption},c.default.createElement("div",{className:f.default.projectName},r),c.default.createElement(u.default,{to:o,className:f.default.link},"Learn more"))))))))}t.__esModule=!0,t.default=r;var o=n(1),c=a(o),l=n(4),u=a(l),i=n(52),s=a(i),d=n(317),f=a(d);e.exports=t.default},317:function(e,t){e.exports={title:"src-components-project-related-work----index-module---title---16ZdK",figure:"src-components-project-related-work----index-module---figure---2y9dB",image:"src-components-project-related-work----index-module---image---2OLvq",caption:"src-components-project-related-work----index-module---caption---2ZYJn",container:"src-components-project-related-work----index-module---container---1p1Oe",project:"src-components-project-related-work----index-module---project---3IUIS"}},208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),c=n(4),l=(a(c),n(197)),u=a(l),i=function(){return o.default.createElement(u.default,null)};t.default=i,e.exports=t.default},63:function(e,t,n){"use strict";function a(e){return fetch(e).then(function(e){return e.json()})}function r(){return a(s)}function o(){return a(d)}function c(e){return a(d+"/"+e)}function l(){return Promise.all([a(f),a(m)]).then(function(e){var t=e[0],n=e[1],a=n.reduce(function(e,t){var n=t.id,a=t.count,r=t.name;return e[r]={id:n,count:a},e},{}),r=t.reduce(function(e,t){var n=t.id,a=t.count,r=t.name;return e[r]={id:n,count:a},e},{});return{projectTags:a,partnerTags:r}})}function u(e){return a(s+"?slug="+e).then(function(e){return 0===e.length?null:e[0]})}t.__esModule=!0,t.fetchJson=a,t.fetchProjects=r,t.fetchAcfProjects=o,t.fetchProjectAcfById=c,t.fetchTaxonomies=l,t.fetchProjectBySlug=u;var i="https://api.convergencedesignlab.org/wp-json",s=i+"/wp/v2/projects",d=i+"/acf/v3/projects",f=i+"/wp/v2/partners",m=i+"/wp/v2/project_tags"}});
//# sourceMappingURL=component---src-pages-project-js-816ffc4eee699d681777.js.map