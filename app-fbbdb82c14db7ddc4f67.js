webpackJsonp([231608221292675],{

/***/ 62:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.apiRunner = apiRunner;
	exports.apiRunnerAsync = apiRunnerAsync;
	var plugins = [];
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   {
	//     plugin: require("/path/to/plugin1/gatsby-browser.js"),
	//     options: { ... },
	//   },
	//   {
	//     plugin: require("/path/to/plugin2/gatsby-browser.js"),
	//     options: { ... },
	//   },
	// ]
	
	function apiRunner(api, args, defaultReturn) {
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  });
	
	  // Filter out undefined results.
	  results = results.filter(function (result) {
	    return typeof result !== "undefined";
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	}
	
	function apiRunnerAsync(api, args, defaultReturn) {
	  return plugins.reduce(function (previous, next) {
	    return next.plugin[api] ? previous.then(function () {
	      return next.plugin[api](args, next.options);
	    }) : previous;
	  }, Promise.resolve());
	}

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "component---cache-dev-404-page-js": __webpack_require__(336),
	  "component---src-pages-404-js": __webpack_require__(338),
	  "component---src-pages-about-js": __webpack_require__(339),
	  "component---src-pages-contact-js": __webpack_require__(340),
	  "component---src-pages-index-js": __webpack_require__(341),
	  "component---src-pages-project-js": __webpack_require__(342),
	  "component---src-pages-resources-js": __webpack_require__(343),
	  "component---src-pages-work-js": __webpack_require__(344)
	};
	
	exports.json = {
	  "layout-index.json": __webpack_require__(345),
	  "dev-404-page.json": __webpack_require__(350),
	  "404.json": __webpack_require__(346),
	  "about.json": __webpack_require__(348),
	  "contact.json": __webpack_require__(349),
	  "index.json": __webpack_require__(351),
	  "project.json": __webpack_require__(352),
	  "resources.json": __webpack_require__(353),
	  "work.json": __webpack_require__(354),
	  "404-html.json": __webpack_require__(347)
	};
	
	exports.layouts = {
	  "layout---index": __webpack_require__(337)
	};

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _loader = __webpack_require__(111);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _emitter = __webpack_require__(41);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _apiRunnerBrowser = __webpack_require__(62);
	
	var _shallowCompare = __webpack_require__(489);
	
	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultLayout = function DefaultLayout(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    null,
	    children()
	  );
	};
	
	// Pass pathname in as prop.
	// component will try fetching resources. If they exist,
	// will just render, else will render null.
	
	var ComponentRenderer = function (_React$Component) {
	  _inherits(ComponentRenderer, _React$Component);
	
	  function ComponentRenderer(props) {
	    _classCallCheck(this, ComponentRenderer);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    var location = props.location;
	
	    // Set the pathname for 404 pages.
	    if (!_loader2.default.getPage(location.pathname)) {
	      location = _extends({}, location, {
	        pathname: "/404.html"
	      });
	    }
	
	    _this.state = {
	      location: location,
	      pageResources: _loader2.default.getResourcesForPathname(location.pathname)
	    };
	    return _this;
	  }
	
	  ComponentRenderer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    // During development, always pass a component's JSON through so graphql
	    // updates go through.
	    if (false) {
	      if (nextProps && nextProps.pageResources && nextProps.pageResources.json) {
	        this.setState({ pageResources: nextProps.pageResources });
	      }
	    }
	    if (this.state.location.pathname !== nextProps.location.pathname) {
	      var pageResources = _loader2.default.getResourcesForPathname(nextProps.location.pathname);
	      if (!pageResources) {
	        var location = nextProps.location;
	
	        // Set the pathname for 404 pages.
	        if (!_loader2.default.getPage(location.pathname)) {
	          location = _extends({}, location, {
	            pathname: "/404.html"
	          });
	        }
	
	        // Page resources won't be set in cases where the browser back button
	        // or forward button is pushed as we can't wait as normal for resources
	        // to load before changing the page.
	        _loader2.default.getResourcesForPathname(location.pathname, function (pageResources) {
	          _this2.setState({
	            location: location,
	            pageResources: pageResources
	          });
	        });
	      } else {
	        this.setState({
	          location: nextProps.location,
	          pageResources: pageResources
	        });
	      }
	    }
	  };
	
	  ComponentRenderer.prototype.componentDidMount = function componentDidMount() {
	    var _this3 = this;
	
	    // Listen to events so when our page gets updated, we can transition.
	    // This is only useful on delayed transitions as the page will get rendered
	    // without the necessary page resources and then re-render once those come in.
	    _emitter2.default.on("onPostLoadPageResources", function (e) {
	      if (_loader2.default.getPage(_this3.state.location.pathname) && e.page.path === _loader2.default.getPage(_this3.state.location.pathname).path) {
	        _this3.setState({ pageResources: e.pageResources });
	      }
	    });
	  };
	
	  ComponentRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	    // 404
	    if (!nextState.pageResources) {
	      return true;
	    }
	    // Check if the component or json have changed.
	    if (!this.state.pageResources && nextState.pageResources) {
	      return true;
	    }
	    if (this.state.pageResources.component !== nextState.pageResources.component) {
	      return true;
	    }
	
	    if (this.state.pageResources.json !== nextState.pageResources.json) {
	      return true;
	    }
	
	    // Check if location has changed on a page using internal routing
	    // via matchPath configuration.
	    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
	      return true;
	    }
	
	    return (0, _shallowCompare2.default)(this, nextProps, nextState);
	  };
	
	  ComponentRenderer.prototype.render = function render() {
	    var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceComponentRenderer", {
	      props: _extends({}, this.props, { pageResources: this.state.pageResources }),
	      loader: _loader.publicLoader
	    });
	    var replacementComponent = pluginResponses[0];
	    // If page.
	    if (this.props.page) {
	      if (this.state.pageResources) {
	        return replacementComponent || (0, _react.createElement)(this.state.pageResources.component, _extends({
	          key: this.props.location.pathname
	        }, this.props, this.state.pageResources.json));
	      } else {
	        return null;
	      }
	      // If layout.
	    } else if (this.props.layout) {
	      return replacementComponent || (0, _react.createElement)(this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : DefaultLayout, _extends({
	        key: this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : "DefaultLayout"
	      }, this.props));
	    } else {
	      return null;
	    }
	  };
	
	  return ComponentRenderer;
	}(_react2.default.Component);
	
	ComponentRenderer.propTypes = {
	  page: _propTypes2.default.bool,
	  layout: _propTypes2.default.bool,
	  location: _propTypes2.default.object
	};
	
	exports.default = ComponentRenderer;
	module.exports = exports["default"];

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(63035248922600, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(177) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mitt = __webpack_require__(452);
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = (0, _mitt2.default)();
	module.exports = emitter;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactRouterDom = __webpack_require__(40);
	
	var _stripPrefix = __webpack_require__(112);
	
	var _stripPrefix2 = _interopRequireDefault(_stripPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO add tests especially for handling prefixed links.
	var pageCache = {};
	
	module.exports = function (pages) {
	  var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  return function (rawPathname) {
	    var pathname = decodeURIComponent(rawPathname);
	
	    // Remove the pathPrefix from the pathname.
	    var trimmedPathname = (0, _stripPrefix2.default)(pathname, pathPrefix);
	
	    // Remove any hashfragment
	    if (trimmedPathname.split("#").length > 1) {
	      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
	    }
	
	    // Remove search query
	    if (trimmedPathname.split("?").length > 1) {
	      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
	    }
	
	    if (pageCache[trimmedPathname]) {
	      return pageCache[trimmedPathname];
	    }
	
	    var foundPage = void 0;
	    // Array.prototype.find is not supported in IE so we use this somewhat odd
	    // work around.
	    pages.some(function (page) {
	      if (page.matchPath) {
	        // Try both the path and matchPath
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.matchPath
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      } else {
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path,
	          exact: true
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	
	        // Finally, try and match request with default document.
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path + "index.html"
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      }
	
	      return false;
	    });
	
	    return foundPage;
	  };
	};

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createBrowserHistory = __webpack_require__(95);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _apiRunnerBrowser = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceHistory");
	var replacementHistory = pluginResponses[0];
	var history = replacementHistory || (0, _createBrowserHistory2.default)();
	module.exports = history;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(178698757827068, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(363) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(254022195166212, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(364) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(273950069227526, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(365) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(184662623972074, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(366) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(249642918573919, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(367) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(142629428675168, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(368) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(60335399758886, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(98) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(82289178807862, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(369) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(176626024532719, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(370) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(32551418774257, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(371) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(114276838955818, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(180) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.publicLoader = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _findPage = __webpack_require__(178);
	
	var _findPage2 = _interopRequireDefault(_findPage);
	
	var _emitter = __webpack_require__(41);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _stripPrefix = __webpack_require__(112);
	
	var _stripPrefix2 = _interopRequireDefault(_stripPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findPage = void 0;
	
	var syncRequires = {};
	var asyncRequires = {};
	var pathScriptsCache = {};
	var resourceStrCache = {};
	var resourceCache = {};
	var pages = [];
	// Note we're not actively using the path data atm. There
	// could be future optimizations however around trying to ensure
	// we load all resources for likely-to-be-visited paths.
	var pathArray = [];
	var pathCount = {};
	var pathPrefix = "";
	var resourcesArray = [];
	var resourcesCount = {};
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var prefetcher = void 0;
	var inInitialRender = true;
	var fetchHistory = [];
	var failedPaths = {};
	var failedResources = {};
	var MAX_HISTORY = 5;
	
	// Prefetcher logic
	if (true) {
	  prefetcher = __webpack_require__(181)({
	    getNextQueuedResources: function getNextQueuedResources() {
	      return resourcesArray.slice(-1)[0];
	    },
	    createResourceDownload: function createResourceDownload(resourceName) {
	      fetchResource(resourceName, function () {
	        resourcesArray = resourcesArray.filter(function (r) {
	          return r !== resourceName;
	        });
	        prefetcher.onResourcedFinished(resourceName);
	      });
	    }
	  });
	  _emitter2.default.on("onPreLoadPageResources", function (e) {
	    prefetcher.onPreLoadPageResources(e);
	  });
	  _emitter2.default.on("onPostLoadPageResources", function (e) {
	    prefetcher.onPostLoadPageResources(e);
	  });
	}
	
	var sortResourcesByCount = function sortResourcesByCount(a, b) {
	  if (resourcesCount[a] > resourcesCount[b]) {
	    return 1;
	  } else if (resourcesCount[a] < resourcesCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var sortPagesByCount = function sortPagesByCount(a, b) {
	  if (pathCount[a] > pathCount[b]) {
	    return 1;
	  } else if (pathCount[a] < pathCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var fetchResource = function fetchResource(resourceName) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  if (resourceStrCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceStrCache[resourceName]);
	    });
	  } else {
	    // Find resource
	    var resourceFunction = void 0;
	    if (resourceName.slice(0, 12) === "component---") {
	      resourceFunction = asyncRequires.components[resourceName];
	    } else if (resourceName.slice(0, 9) === "layout---") {
	      resourceFunction = asyncRequires.layouts[resourceName];
	    } else {
	      resourceFunction = asyncRequires.json[resourceName];
	    }
	
	    // Download the resource
	    resourceFunction(function (err, executeChunk) {
	      resourceStrCache[resourceName] = executeChunk;
	      fetchHistory.push({
	        resource: resourceName,
	        succeeded: !err
	      });
	
	      if (!failedResources[resourceName]) {
	        failedResources[resourceName] = err;
	      }
	
	      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
	      cb(err, executeChunk);
	    });
	  }
	};
	
	var getResourceModule = function getResourceModule(resourceName, cb) {
	  if (resourceCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceCache[resourceName]);
	    });
	  } else if (failedResources[resourceName]) {
	    process.nextTick(function () {
	      cb(failedResources[resourceName]);
	    });
	  } else {
	    fetchResource(resourceName, function (err, executeChunk) {
	      if (err) {
	        cb(err);
	      } else {
	        var module = preferDefault(executeChunk());
	        resourceCache[resourceName] = module;
	        cb(err, module);
	      }
	    });
	  }
	};
	
	var appearsOnLine = function appearsOnLine() {
	  var isOnLine = navigator.onLine;
	  if (typeof isOnLine === "boolean") {
	    return isOnLine;
	  }
	
	  // If no navigator.onLine support assume onLine if any of last N fetches succeeded
	  var succeededFetch = fetchHistory.find(function (entry) {
	    return entry.succeeded;
	  });
	  return !!succeededFetch;
	};
	
	var handleResourceLoadError = function handleResourceLoadError(path, message) {
	  console.log(message);
	
	  if (!failedPaths[path]) {
	    failedPaths[path] = message;
	  }
	
	  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
	    window.location.pathname = path;
	  }
	};
	
	var mountOrder = 1;
	var queue = {
	  empty: function empty() {
	    pathArray = [];
	    pathCount = {};
	    resourcesCount = {};
	    resourcesArray = [];
	    pages = [];
	    pathPrefix = "";
	  },
	  addPagesArray: function addPagesArray(newPages) {
	    pages = newPages;
	    if (true) {
	      if (true) pathPrefix = ("/convergencedesignlab");
	    }
	    findPage = (0, _findPage2.default)(newPages, pathPrefix);
	  },
	  addDevRequires: function addDevRequires(devRequires) {
	    syncRequires = devRequires;
	  },
	  addProdRequires: function addProdRequires(prodRequires) {
	    asyncRequires = prodRequires;
	  },
	  dequeue: function dequeue() {
	    return pathArray.pop();
	  },
	  enqueue: function enqueue(rawPath) {
	    // Check page exists.
	    var path = (0, _stripPrefix2.default)(rawPath, pathPrefix);
	    if (!pages.some(function (p) {
	      return p.path === path;
	    })) {
	      return false;
	    }
	
	    var mountOrderBoost = 1 / mountOrder;
	    mountOrder += 1;
	    // console.log(
	    // `enqueue "${path}", mountOrder: "${mountOrder}, mountOrderBoost: ${mountOrderBoost}`
	    // )
	
	    // Add to path counts.
	    if (!pathCount[path]) {
	      pathCount[path] = 1;
	    } else {
	      pathCount[path] += 1;
	    }
	
	    // Add path to queue.
	    if (!queue.has(path)) {
	      pathArray.unshift(path);
	    }
	
	    // Sort pages by pathCount
	    pathArray.sort(sortPagesByCount);
	
	    // Add resources to queue.
	    var page = findPage(path);
	    if (page.jsonName) {
	      if (!resourcesCount[page.jsonName]) {
	        resourcesCount[page.jsonName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.jsonName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the JSON resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.jsonName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.jsonName);
	      }
	    }
	    if (page.componentChunkName) {
	      if (!resourcesCount[page.componentChunkName]) {
	        resourcesCount[page.componentChunkName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.componentChunkName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the component resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.componentChunkName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.componentChunkName);
	      }
	    }
	
	    // Sort resources by resourcesCount.
	    resourcesArray.sort(sortResourcesByCount);
	    if (true) {
	      prefetcher.onNewResourcesAdded();
	    }
	
	    return true;
	  },
	  getResources: function getResources() {
	    return {
	      resourcesArray: resourcesArray,
	      resourcesCount: resourcesCount
	    };
	  },
	  getPages: function getPages() {
	    return {
	      pathArray: pathArray,
	      pathCount: pathCount
	    };
	  },
	  getPage: function getPage(pathname) {
	    return findPage(pathname);
	  },
	  has: function has(path) {
	    return pathArray.some(function (p) {
	      return p === path;
	    });
	  },
	  getResourcesForPathname: function getResourcesForPathname(path) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    if (inInitialRender && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
	      // If we're loading from a service worker (it's already activated on
	      // this initial render) and we can't find a page, there's a good chance
	      // we're on a new page that this (now old) service worker doesn't know
	      // about so we'll unregister it and reload.
	      if (!findPage(path)) {
	        navigator.serviceWorker.getRegistrations().then(function (registrations) {
	          // We would probably need this to
	          // prevent unnecessary reloading of the page
	          // while unregistering of ServiceWorker is not happening
	          if (registrations.length) {
	            for (var _iterator = registrations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	              var _ref;
	
	              if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	              } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	              }
	
	              var registration = _ref;
	
	              registration.unregister();
	            }
	            window.location.reload();
	          }
	        });
	      }
	    }
	    inInitialRender = false;
	    // In development we know the code is loaded already
	    // so we just return with it immediately.
	    if (false) {
	      var page = findPage(path);
	      if (!page) return cb();
	      var pageResources = {
	        component: syncRequires.components[page.componentChunkName],
	        json: syncRequires.json[page.jsonName],
	        layout: syncRequires.layouts[page.layout],
	        page: page
	      };
	      cb(pageResources);
	      return pageResources;
	      // Production code path
	    } else {
	      if (failedPaths[path]) {
	        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
	
	        return cb();
	      }
	
	      var _page = findPage(path);
	
	      if (!_page) {
	        handleResourceLoadError(path, "A page wasn't found for \"" + path + "\"");
	
	        return cb();
	      }
	
	      // Use the path from the page so the pathScriptsCache uses
	      // the normalized path.
	      path = _page.path;
	
	      // Check if it's in the cache already.
	      if (pathScriptsCache[path]) {
	        process.nextTick(function () {
	          cb(pathScriptsCache[path]);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: pathScriptsCache[path]
	          });
	        });
	        return pathScriptsCache[path];
	      }
	
	      _emitter2.default.emit("onPreLoadPageResources", { path: path });
	      // Nope, we need to load resource(s)
	      var component = void 0;
	      var json = void 0;
	      var layout = void 0;
	      // Load the component/json/layout and parallel and call this
	      // function when they're done loading. When both are loaded,
	      // we move on.
	      var done = function done() {
	        if (component && json && (!_page.layoutComponentChunkName || layout)) {
	          pathScriptsCache[path] = { component: component, json: json, layout: layout, page: _page };
	          var _pageResources = { component: component, json: json, layout: layout, page: _page };
	          cb(_pageResources);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: _pageResources
	          });
	        }
	      };
	      getResourceModule(_page.componentChunkName, function (err, c) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the component for " + _page.path + " failed");
	        }
	        component = c;
	        done();
	      });
	      getResourceModule(_page.jsonName, function (err, j) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the JSON for " + _page.path + " failed");
	        }
	        json = j;
	        done();
	      });
	
	      _page.layoutComponentChunkName && getResourceModule(_page.layout, function (err, l) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the Layout for " + _page.path + " failed");
	        }
	        layout = l;
	        done();
	      });
	
	      return undefined;
	    }
	  },
	  peek: function peek(path) {
	    return pathArray.slice(-1)[0];
	  },
	  length: function length() {
	    return pathArray.length;
	  },
	  indexOf: function indexOf(path) {
	    return pathArray.length - pathArray.indexOf(path) - 1;
	  }
	};
	
	var publicLoader = exports.publicLoader = {
	  getResourcesForPathname: queue.getResourcesForPathname
	};
	
	exports.default = queue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(454)))

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

	module.exports = [{"componentChunkName":"component---cache-dev-404-page-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"dev-404-page.json","path":"/dev-404-page/"},{"componentChunkName":"component---src-pages-404-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"404.json","path":"/404/"},{"componentChunkName":"component---src-pages-about-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"about.json","path":"/about/"},{"componentChunkName":"component---src-pages-contact-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"contact.json","path":"/contact/"},{"componentChunkName":"component---src-pages-index-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"index.json","path":"/"},{"componentChunkName":"component---src-pages-project-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"project.json","path":"/project/","matchPath":"/work/:project"},{"componentChunkName":"component---src-pages-resources-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"resources.json","path":"/resources/"},{"componentChunkName":"component---src-pages-work-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"work.json","path":"/work/"},{"componentChunkName":"component---src-pages-404-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"404-html.json","path":"/404.html"}]

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (_ref) {
	  var getNextQueuedResources = _ref.getNextQueuedResources,
	      createResourceDownload = _ref.createResourceDownload;
	
	  var pagesLoading = [];
	  var resourcesDownloading = [];
	
	  // Do things
	  var startResourceDownloading = function startResourceDownloading() {
	    var nextResource = getNextQueuedResources();
	    if (nextResource) {
	      resourcesDownloading.push(nextResource);
	      createResourceDownload(nextResource);
	    }
	  };
	
	  var reducer = function reducer(action) {
	    switch (action.type) {
	      case "RESOURCE_FINISHED":
	        resourcesDownloading = resourcesDownloading.filter(function (r) {
	          return r !== action.payload;
	        });
	        break;
	      case "ON_PRE_LOAD_PAGE_RESOURCES":
	        pagesLoading.push(action.payload.path);
	        break;
	      case "ON_POST_LOAD_PAGE_RESOURCES":
	        pagesLoading = pagesLoading.filter(function (p) {
	          return p !== action.payload.page.path;
	        });
	        break;
	      case "ON_NEW_RESOURCES_ADDED":
	        break;
	    }
	
	    // Take actions.
	    // Wait for event loop queue to finish.
	    setTimeout(function () {
	      if (resourcesDownloading.length === 0 && pagesLoading.length === 0) {
	        // Start another resource downloading.
	        startResourceDownloading();
	      }
	    }, 0);
	  };
	
	  return {
	    onResourcedFinished: function onResourcedFinished(event) {
	      // Tell prefetcher that the resource finished downloading
	      // so it can grab the next one.
	      reducer({ type: "RESOURCE_FINISHED", payload: event });
	    },
	    onPreLoadPageResources: function onPreLoadPageResources(event) {
	      // Tell prefetcher a page load has started so it should stop
	      // loading anything new
	      reducer({ type: "ON_PRE_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onPostLoadPageResources: function onPostLoadPageResources(event) {
	      // Tell prefetcher a page load has finished so it should start
	      // loading resources again.
	      reducer({ type: "ON_POST_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onNewResourcesAdded: function onNewResourcesAdded() {
	      // Tell prefetcher that more resources to be downloaded have
	      // been added.
	      reducer({ type: "ON_NEW_RESOURCES_ADDED" });
	    },
	    getState: function getState() {
	      return { pagesLoading: pagesLoading, resourcesDownloading: resourcesDownloading };
	    },
	    empty: function empty() {
	      pagesLoading = [];
	      resourcesDownloading = [];
	    }
	  };
	};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _apiRunnerBrowser = __webpack_require__(62);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(140);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__(40);
	
	var _gatsbyReactRouterScroll = __webpack_require__(360);
	
	var _domready = __webpack_require__(303);
	
	var _domready2 = _interopRequireDefault(_domready);
	
	var _history = __webpack_require__(97);
	
	var _history2 = __webpack_require__(179);
	
	var _history3 = _interopRequireDefault(_history2);
	
	var _emitter = __webpack_require__(41);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _pages = __webpack_require__(372);
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _redirects = __webpack_require__(373);
	
	var _redirects2 = _interopRequireDefault(_redirects);
	
	var _componentRenderer = __webpack_require__(176);
	
	var _componentRenderer2 = _interopRequireDefault(_componentRenderer);
	
	var _asyncRequires = __webpack_require__(175);
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	var _loader = __webpack_require__(111);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	  __webpack_require__(227);
	}
	
	window.___history = _history3.default;
	
	window.___emitter = _emitter2.default;
	
	_loader2.default.addPagesArray(_pages2.default);
	_loader2.default.addProdRequires(_asyncRequires2.default);
	window.asyncRequires = _asyncRequires2.default;
	window.___loader = _loader2.default;
	window.matchPath = _reactRouterDom.matchPath;
	
	// Convert to a map for faster lookup in maybeRedirect()
	var redirectMap = _redirects2.default.reduce(function (map, redirect) {
	  map[redirect.fromPath] = redirect;
	  return map;
	}, {});
	
	var maybeRedirect = function maybeRedirect(pathname) {
	  var redirect = redirectMap[pathname];
	
	  if (redirect != null) {
	    _history3.default.replace(redirect.toPath);
	    return true;
	  } else {
	    return false;
	  }
	};
	
	// Check for initial page-load redirect
	maybeRedirect(window.location.pathname);
	
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser.apiRunnerAsync)("onClientEntry").then(function () {
	  // Let plugins register a service worker. The plugin just needs
	  // to return true.
	  if ((0, _apiRunnerBrowser.apiRunner)("registerServiceWorker").length > 0) {
	    __webpack_require__(182);
	  }
	
	  var navigateTo = function navigateTo(to) {
	    var location = (0, _history.createLocation)(to, null, null, _history3.default.location);
	    var pathname = location.pathname;
	
	    var redirect = redirectMap[pathname];
	
	    // If we're redirecting, just replace the passed in pathname
	    // to the one we want to redirect to.
	    if (redirect) {
	      pathname = redirect.toPath;
	    }
	    var wl = window.location;
	
	    // If we're already at this location, do nothing.
	    if (wl.pathname === location.pathname && wl.search === location.search && wl.hash === location.hash) {
	      return;
	    }
	
	    // Listen to loading events. If page resources load before
	    // a second, navigate immediately.
	    function eventHandler(e) {
	      if (e.page.path === _loader2.default.getPage(pathname).path) {
	        _emitter2.default.off("onPostLoadPageResources", eventHandler);
	        clearTimeout(timeoutId);
	        window.___history.push(location);
	      }
	    }
	
	    // Start a timer to wait for a second before transitioning and showing a
	    // loader in case resources aren't around yet.
	    var timeoutId = setTimeout(function () {
	      _emitter2.default.off("onPostLoadPageResources", eventHandler);
	      _emitter2.default.emit("onDelayedLoadPageResources", { pathname: pathname });
	      window.___history.push(location);
	    }, 1000);
	
	    if (_loader2.default.getResourcesForPathname(pathname)) {
	      // The resources are already loaded so off we go.
	      clearTimeout(timeoutId);
	      window.___history.push(location);
	    } else {
	      // They're not loaded yet so let's add a listener for when
	      // they finish loading.
	      _emitter2.default.on("onPostLoadPageResources", eventHandler);
	    }
	  };
	
	  // window.___loadScriptsForPath = loadScriptsForPath
	  window.___navigateTo = navigateTo;
	
	  // Call onRouteUpdate on the initial page load.
	  (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
	    location: _history3.default.location,
	    action: _history3.default.action
	  });
	
	  var initialAttachDone = false;
	  function attachToHistory(history) {
	    if (!window.___history || initialAttachDone === false) {
	      window.___history = history;
	      initialAttachDone = true;
	
	      history.listen(function (location, action) {
	        if (!maybeRedirect(location.pathname)) {
	          // Make sure React has had a chance to flush to DOM first.
	          setTimeout(function () {
	            (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", { location: location, action: action });
	          }, 0);
	        }
	      });
	    }
	  }
	
	  function shouldUpdateScroll(prevRouterProps, _ref) {
	    var pathname = _ref.location.pathname;
	
	    var results = (0, _apiRunnerBrowser.apiRunner)("shouldUpdateScroll", {
	      prevRouterProps: prevRouterProps,
	      pathname: pathname
	    });
	    if (results.length > 0) {
	      return results[0];
	    }
	
	    if (prevRouterProps) {
	      var oldPathname = prevRouterProps.location.pathname;
	
	      if (oldPathname === pathname) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  var AltRouter = (0, _apiRunnerBrowser.apiRunner)("replaceRouterComponent", { history: _history3.default })[0];
	  var DefaultRouter = function DefaultRouter(_ref2) {
	    var children = _ref2.children;
	    return _react2.default.createElement(
	      _reactRouterDom.Router,
	      { history: _history3.default },
	      children
	    );
	  };
	
	  var ComponentRendererWithRouter = (0, _reactRouterDom.withRouter)(_componentRenderer2.default);
	
	  _loader2.default.getResourcesForPathname(window.location.pathname, function () {
	    var Root = function Root() {
	      return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_gatsbyReactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, (0, _react.createElement)(ComponentRendererWithRouter, {
	        layout: true,
	        children: function children(layoutProps) {
	          return (0, _react.createElement)(_reactRouterDom.Route, {
	            render: function render(routeProps) {
	              attachToHistory(routeProps.history);
	              var props = layoutProps ? layoutProps : routeProps;
	
	              if (_loader2.default.getPage(props.location.pathname)) {
	                return (0, _react.createElement)(_componentRenderer2.default, _extends({
	                  page: true
	                }, props));
	              } else {
	                return (0, _react.createElement)(_componentRenderer2.default, {
	                  page: true,
	                  location: { pathname: "/404.html" }
	                });
	              }
	            }
	          });
	        }
	      })));
	    };
	
	    var NewRoot = (0, _apiRunnerBrowser.apiRunner)("wrapRootComponent", { Root: Root }, Root)[0];
	
	    var renderer = (0, _apiRunnerBrowser.apiRunner)("replaceHydrateFunction", undefined, _reactDom2.default.render)[0];
	
	    (0, _domready2.default)(function () {
	      return renderer(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
	        (0, _apiRunnerBrowser.apiRunner)("onInitialClientRender");
	      });
	    });
	  });
	});

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

	module.exports = []

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _emitter = __webpack_require__(41);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/";
	if (true) {
	  pathPrefix = ("/convergencedesignlab") + "/";
	}
	
	if ("serviceWorker" in navigator) {
	  navigator.serviceWorker.register(pathPrefix + "sw.js").then(function (reg) {
	    reg.addEventListener("updatefound", function () {
	      // The updatefound event implies that reg.installing is set; see
	      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
	      var installingWorker = reg.installing;
	      console.log("installingWorker", installingWorker);
	      installingWorker.addEventListener("statechange", function () {
	        switch (installingWorker.state) {
	          case "installed":
	            if (navigator.serviceWorker.controller) {
	              // At this point, the old content will have been purged and the fresh content will
	              // have been added to the cache.
	              // We reload immediately so the user sees the new content.
	              // This could/should be made configurable in the future.
	              window.location.reload();
	            } else {
	              // At this point, everything has been precached.
	              // It's the perfect time to display a "Content is cached for offline use." message.
	              console.log("Content is now available offline!");
	              _emitter2.default.emit("sw:installed");
	            }
	            break;
	
	          case "redundant":
	            console.error("The installing service worker became redundant.");
	            break;
	        }
	      });
	    });
	  }).catch(function (e) {
	    console.error("Error during service worker registration:", e);
	  });
	}

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	/**
	 * Remove a prefix from a string. Return the input string if the given prefix
	 * isn't found.
	 */
	
	exports.default = function (str) {
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
	  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
	  return str;
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? setTimeout(fn, 0) : fns.push(fn)
	  }
	
	});


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	/* global document: false, __webpack_require__: false */
	patch();
	
	function patch() {
	  var head = document.querySelector("head");
	  var ensure = __webpack_require__.e;
	  var chunks = __webpack_require__.s;
	  var failures;
	
	  __webpack_require__.e = function (chunkId, callback) {
	    var loaded = false;
	    var immediate = true;
	
	    var handler = function handler(error) {
	      if (!callback) return;
	
	      callback(__webpack_require__, error);
	      callback = null;
	    };
	
	    if (!chunks && failures && failures[chunkId]) {
	      handler(true);
	      return;
	    }
	
	    ensure(chunkId, function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (immediate) {
	        // webpack fires callback immediately if chunk was already loaded
	        // IE also fires callback immediately if script was already
	        // in a cache (AppCache counts too)
	        setTimeout(function () {
	          handler();
	        });
	      } else {
	        handler();
	      }
	    });
	
	    // This is |true| if chunk is already loaded and does not need onError call.
	    // This happens because in such case ensure() is performed in sync way
	    if (loaded) {
	      return;
	    }
	
	    immediate = false;
	
	    onError(function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (chunks) {
	        chunks[chunkId] = void 0;
	      } else {
	        failures || (failures = {});
	        failures[chunkId] = true;
	      }
	
	      handler(true);
	    });
	  };
	
	  function onError(callback) {
	    var script = head.lastChild;
	
	    if (script.tagName !== "SCRIPT") {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("Script is not a script", script);
	      }
	
	      return;
	    }
	
	    script.onload = script.onerror = function () {
	      script.onload = script.onerror = null;
	      setTimeout(callback, 0);
	    };
	  }
	}

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(c,e){(n[c]||(n[c]=[])).push(e)},off:function(c,e){n[c]&&n[c].splice(n[c].indexOf(e)>>>0,1)},emit:function(c,e){(n[c]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(c,e)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),

/***/ 489:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	// Pulled from react-compat
	// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
	function shallowDiffers(a, b) {
	  for (var i in a) {
	    if (!(i in b)) return true;
	  }for (var _i in b) {
	    if (a[_i] !== b[_i]) return true;
	  }return false;
	}
	
	exports.default = function (instance, nextProps, nextState) {
	  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(162898551421021, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(210) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(263791100135453, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(211) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(70144966829960, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(212) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(35783957827783, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(213) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(111930841657428, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(214) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(79718873386587, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(215) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      3
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(23899280101116, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(216) })
	        }
	      });
	     }
	    

/***/ })

});
//# sourceMappingURL=app-fbbdb82c14db7ddc4f67.js.map