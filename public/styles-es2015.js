(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n:root {\n  --left-padding: 40px;\n  --page-header-height: 80px;\n  --side-menu-width: 20vw;\n  --body-margin: 8px;\n  --button-height: 30px;\n  --light-grey: #EFEFF1;\n}\n\n.side-menu{\n  width: var(--side-menu-width);\n  display: inline-block;\n  position: fixed;\n}\n\n.side-menu-content{\n  padding: 10%;\n}\n\n.side-menu-logo{\n  position: relative;\n  width: calc(var(--side-menu-width) * 0.7);\n  height: calc(var(--side-menu-width) * 0.7);\n  font-size: calc(var(--side-menu-width) * 0.7 * 0.8);\n  padding: calc(var(--side-menu-width) * 0.7 * 0.1);\n}\n\n.page{\n  position: fixed;\n  display: inline-block;\n  left: 20vw;\n  width: auto;\n}\n\n.page-header{\n  position: fixed;\n  height: var(--page-header-height);\n}\n\n.page-title{\n  display: inline-block;\n  padding: calc(var(--left-padding) / 2) var(--left-padding);\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.page-body{\n  position: relative;\n  top: var(--page-header-height);\n  overflow-y: scroll;\n  height: calc(100vh - var(--page-header-height) - 2 * var(--body-margin));\n  width: calc(100vw - var(--side-menu-width));\n}\n\n.page-content{\n  margin: var(--left-padding);\n  height: 100%;\n}\n\n.post-date{\n  width: 100%;\n  display: inline-block;\n}\n\n.post-content{\n  width: 100%;\n  display: inline-block;\n}\n\n.post-comment{\n  width: 100%;\n  display: inline-block;\n}\n\n.post-list-table{\n  width: 800px;\n}\n\n.table-title{\n  width: 50%;\n}\n\n.table-author{\n  width: 30%;\n}\n\n.table-published-time{\n  width: 20%;\n}\n\n.field_with_errors{\n  color: red;\n}\n\n.devise-alert{\n  color: red;\n}\n\ntd{\n  text-align: center;\n}\n\nbutton{\n  width: 80px;\n  margin: 10px;\n  min-height: var(--button-height);\n  background: var(--light-grey);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border: none;\n  border-radius: 10px;\n}\n\n.page-select{\n  width: 50px;\n}\n\n.per-page-input{\n  width: 50px;\n}\n\na {\n  text-decoration: underline;\n  color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTs7QUFFOUU7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsMENBQTBDO0VBQzFDLG1EQUFtRDtFQUNuRCxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBEQUEwRDtFQUMxRCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsd0VBQXdFO0VBQ3hFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG46cm9vdCB7XG4gIC0tbGVmdC1wYWRkaW5nOiA0MHB4O1xuICAtLXBhZ2UtaGVhZGVyLWhlaWdodDogODBweDtcbiAgLS1zaWRlLW1lbnUtd2lkdGg6IDIwdnc7XG4gIC0tYm9keS1tYXJnaW46IDhweDtcbiAgLS1idXR0b24taGVpZ2h0OiAzMHB4O1xuICAtLWxpZ2h0LWdyZXk6ICNFRkVGRjE7XG59XG5cbi5zaWRlLW1lbnV7XG4gIHdpZHRoOiB2YXIoLS1zaWRlLW1lbnUtd2lkdGgpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnNpZGUtbWVudS1jb250ZW50e1xuICBwYWRkaW5nOiAxMCU7XG59XG5cbi5zaWRlLW1lbnUtbG9nb3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYyh2YXIoLS1zaWRlLW1lbnUtd2lkdGgpICogMC43KTtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXNpZGUtbWVudS13aWR0aCkgKiAwLjcpO1xuICBmb250LXNpemU6IGNhbGModmFyKC0tc2lkZS1tZW51LXdpZHRoKSAqIDAuNyAqIDAuOCk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tc2lkZS1tZW51LXdpZHRoKSAqIDAuNyAqIDAuMSk7XG59XG5cbi5wYWdle1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGVmdDogMjB2dztcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5wYWdlLWhlYWRlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtaGVhZGVyLWhlaWdodCk7XG59XG5cbi5wYWdlLXRpdGxle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tbGVmdC1wYWRkaW5nKSAvIDIpIHZhcigtLWxlZnQtcGFkZGluZyk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdlLWJvZHl7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiB2YXIoLS1wYWdlLWhlYWRlci1oZWlnaHQpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXBhZ2UtaGVhZGVyLWhlaWdodCkgLSAyICogdmFyKC0tYm9keS1tYXJnaW4pKTtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlLW1lbnUtd2lkdGgpKTtcbn1cblxuLnBhZ2UtY29udGVudHtcbiAgbWFyZ2luOiB2YXIoLS1sZWZ0LXBhZGRpbmcpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3N0LWRhdGV7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0LWNvbnRlbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0LWNvbW1lbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0LWxpc3QtdGFibGV7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuLnRhYmxlLXRpdGxle1xuICB3aWR0aDogNTAlO1xufVxuXG4udGFibGUtYXV0aG9ye1xuICB3aWR0aDogMzAlO1xufVxuXG4udGFibGUtcHVibGlzaGVkLXRpbWV7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5maWVsZF93aXRoX2Vycm9yc3tcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRldmlzZS1hbGVydHtcbiAgY29sb3I6IHJlZDtcbn1cblxudGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9ue1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1idXR0b24taGVpZ2h0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JleSk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBhZ2Utc2VsZWN0e1xuICB3aWR0aDogNTBweDtcbn1cblxuLnBlci1wYWdlLWlucHV0e1xuICB3aWR0aDogNTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogYmx1ZTtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pochienh/project/til/ror-blog/ror-blog-angular/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map