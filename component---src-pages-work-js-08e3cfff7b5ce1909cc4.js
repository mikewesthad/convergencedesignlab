webpackJsonp([23899280101116],{146:function(e,t,r){var n,a,o;!function(r,c){a=[],n=c,o="function"==typeof n?n.apply(t,a):n,!(void 0!==o&&(e.exports=o))}(this,function(){function e(e,l,i){function u(e){m==r?b+=e:l&&m==n&&(h+=e)}function s(){var e,t,r,n="",a=!1;e:for(e=0,t=h.length;e<t;e++)switch(r=h[e].toLowerCase()){case"<":break;case">":break e;case"/":a=!0;break;default:if(r.match(c)){if(a)break e}else a=!0,n+=r}l.indexOf(n)!==-1?b+=h:i&&(b+=i),h=""}var f,d,p,e=e||"",m=r,k=0,b="",h="",v=!1;for("string"==typeof l?l=t(l):Array.isArray(l)||(l=null),f=0,d=e.length;f<d;f++)switch(p=e[f]){case"<":if(v)break;if(" "==e[f+1]){u(p);break}if(m==r){m=n,u(p);break}if(m==n){k++;break}u(p);break;case">":if(k){k--;break}if(v)break;if(m==n){v=m=0,l&&(h+=">",s());break}if(m==a){v=m=0,h="";break}if(m==o&&"-"==e[f-1]&&"-"==e[f-2]){v=m=0,h="";break}u(p);break;case'"':case"'":m==n&&(v==p?v=!1:v||(v=p)),u(p);break;case"!":if(m==n&&"<"==e[f-1]){m=a;break}u(p);break;case"-":if(m==a&&"-"==e[f-1]&&"!"==e[f-2]){m=o;break}u(p);break;case"E":case"e":if(m==a&&"doctype"==e.substr(f-6,7).toLowerCase()){m=n;break}u(p);break;default:u(p)}return b}function t(e){for(var t,r=[];null!==(t=l.exec(e));)r.push(t[1]);return 0!==r.length?r:null}var r=0,n=1,a=2,o=3,c=/\s/,l=/<(\w*)>/g;return e})},73:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.height;return c.default.createElement("div",{className:i.default.container,style:{height:t}},c.default.createElement("div",{className:i.default.circle}),c.default.createElement("div",{className:i.default.circle}),c.default.createElement("div",{className:i.default.circle}))}t.__esModule=!0,t.default=a;var o=r(1),c=n(o),l=r(112),i=n(l);e.exports=t.default},112:function(e,t){e.exports={container:"src-components-loading----index-module---container---3CAtY",circle:"src-components-loading----index-module---circle---1fU7_",shrink:"src-components-loading----index-module---shrink---jeRxp"}},263:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=r(1),i=n(l),u=r(4),s=n(u),f=r(16),d=(n(f),r(146)),p=n(d),m=r(18),k=n(m),b=r(73),h=n(b),v=r(36),j=r(375),g=n(j),y=function(e){function t(){var r,n,c;a(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return r=n=o(this,e.call.apply(e,[this].concat(i))),n.state={projects:null},c=r,o(n,c)}return c(t,e),t.prototype.componentDidMount=function(){var e=this;(0,v.fetchWork)().then(function(t){return e.setState({projects:t})})},t.prototype.render=function(){var e=this.state.projects,t=null;return e&&(t=e.map(function(e){var t=e.id,r=e.slug,n=e.question,a=e.image;return i.default.createElement("div",{key:"project-"+t,className:g.default.projectContainer},i.default.createElement(s.default,{className:g.default.projectLinkWrapper,to:"/work/"+r+"/"},i.default.createElement("figure",{className:g.default.projectFigure},i.default.createElement("img",{className:g.default.projectImage,src:a}),i.default.createElement("figcaption",{className:g.default.projectCaption},i.default.createElement("div",{dangerouslySetInnerHTML:{__html:(0,p.default)(n)}})))))})),i.default.createElement("div",null,i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:g.default.title},"Selected Work")),i.default.createElement("div",{className:"container"},e?i.default.createElement("div",{className:g.default.projectGrid},t):i.default.createElement(h.default,{height:"65vh"})),i.default.createElement(k.default,{alternateColor:!0}))},t}(i.default.Component);t.default=y,e.exports=t.default},375:function(e,t){e.exports={projectLinkWrapper:"src-components-work----index-module---projectLinkWrapper---1uRow",title:"src-components-work----index-module---title---3hvQr",projectGrid:"src-components-work----index-module---projectGrid---1HilX",projectContainer:"src-components-work----index-module---projectContainer---1WuRU",projectFigure:"src-components-work----index-module---projectFigure---p3cF-",projectImage:"src-components-work----index-module---projectImage---12qqX",projectCaption:"src-components-work----index-module---projectCaption---CR6lY"}},272:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(1),o=n(a),c=r(263),l=n(c),i=function(e){return o.default.createElement(l.default,e)};t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-work-js-08e3cfff7b5ce1909cc4.js.map