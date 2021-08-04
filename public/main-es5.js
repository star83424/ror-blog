function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-side-menu></app-side-menu>\n<div class=\"page\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/back-to-all-button/back-to-all-button.component.html": function node_modulesRawLoaderDistCjsJsSrcAppBackToAllButtonBackToAllButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"backToAll()\">Back to all</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-page/edit-page.component.html": function node_modulesRawLoaderDistCjsJsSrcAppEditPageEditPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h1 class=\"page-title\">Edit Post</h1>\n  <app-back-to-all-button></app-back-to-all-button>\n  <app-signing-buttons></app-signing-buttons>\n</div>\n\n<div class=\"page-body\">\n  <div class=\"page-content\">\n      <p>\n          <label for=\"post_title\">Title</label><br>\n          <input type=\"text\" [(ngModel)]=\"post.title\" [name]=\"post?.title\" id=\"post_title\">\n      </p>\n      <p>\n          <label for=\"post_text\">Text</label><br>\n          <textarea  [(ngModel)]=\"post.text\" [name]=\"post?.text\" id=\"post_text\"></textarea>\n      </p>\n      <p>\n          <button (click)=\"edit()\">Save Post</button>\n      </p>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html": function node_modulesRawLoaderDistCjsJsSrcAppErrorPageErrorPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h1 class=\"page-title\">Error Page</h1>\n  <app-back-to-all-button></app-back-to-all-button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/index-page/index-page.component.html": function node_modulesRawLoaderDistCjsJsSrcAppIndexPageIndexPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <!-- Specific author's blog -->\n  <ng-container *ngIf=\"blogger; else allPost\">\n    <h1 class=\"page-title\">{{blogger?.email}}'s Blog</h1>\n    <app-back-to-all-button></app-back-to-all-button>\n  </ng-container>\n  <!-- All Posts Index Page -->\n  <ng-template #allPost>\n    <h1 class=\"page-title\">All Posts</h1>\n  </ng-template>\n  <app-signing-buttons></app-signing-buttons>\n</div>\n\n<div class=\"page-body\">\n  <div class=\"page-content\">\n    <table class=\"post-list-table\">\n      <tr>\n        <th class=\"table-title\">Title</th>\n        <th class=\"table-author\">Author</th>\n        <th class=\"table-published-time\">Published Time</th>\n      </tr>\n\n      <tr *ngFor=\"let post of posts\">\n        <td><a (click)=\"goToPost(post)\">{{post?.title}}</a></td>\n        <td>{{post?.author?.email}}</td>\n        <td>{{post?.created_at}}</td>\n      </tr>\n    </table>\n    <br>\n    {{totalPosts}} found! <br>\n    <button (click)=\"paginate()\">Go to page</button>\n    <select [(ngModel)]=\"goToPage\" class=\"page-select\">\n      <option *ngFor=\"let page of pages\" [ngValue]=\"page+1\">{{page+1}}</option>\n    </select>\n    / {{this.totalPage}} with <input type=\"text\" class=\"per-page-input\" [(ngModel)]=\"perPage\"> posts per page\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-page/post-page.component.html": function node_modulesRawLoaderDistCjsJsSrcAppPostPagePostPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <h1 class=\"page-title\">Hi from Taiwan</h1>\n  <app-back-to-all-button></app-back-to-all-button>\n  <app-signing-buttons></app-signing-buttons>\n  <button (click)=\"edit()\">Edit</button>\n  <button (click)=\"delete()\">Delete</button>\n</div>\n\n<div class=\"page-body\">\n  <div class=\"page-content\">\n    <div class=\"post-date\">\n      <p>Author: abcabc@abc.tw</p>\n    </div>\n    <div class=\"post-date\">\n      <p>Published time: August 02, 2021</p>\n    </div>\n    <div class=\"post-content\">\n      <div>\n        <p>\n          I just succeed my first attempt\n        </p>\n      </div>\n    </div>\n    <div class=\"post-comment\">\n      <h2>Comments</h2>\n      <b>\n        cdcdcd@abc.tw commented on August 02, 2021\n      </b>\n      <p>\n        I was just too excited!\n      </p>\n      <br>\n      <h2>Add a comment:</h2>\n      <form class=\"new_comment\" id=\"new_comment\" action=\"/posts/6/comments\" accept-charset=\"UTF-8\" method=\"post\"><input\n          type=\"hidden\" name=\"authenticity_token\"\n          value=\"muGufTXnZg1H7R_6APoJSvyYZEamCOnRXqiK0uAJtYoQzra44nO9dqv60WuNRs2F6jsdKfcU6luTHMrskMVgGw\">\n        <p>\n          <label for=\"comment_commenter\">Commenter</label><br>\n          <!-- Block loggin user to change the commenter name of it-->\n          <input value=\"star83424.dif01@g2.nctu.edu.tw\" readonly=\"readonly\" type=\"text\" name=\"comment[commenter]\"\n            id=\"comment_commenter\">\n        </p>\n        <p>\n          <label for=\"comment_content\">Content</label><br>\n          <textarea name=\"comment[content]\" id=\"comment_content\"></textarea>\n        </p>\n        <p>\n          <input type=\"submit\" name=\"commit\" value=\"Create Comment\" data-disable-with=\"Create Comment\">\n        </p>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html": function node_modulesRawLoaderDistCjsJsSrcAppSideMenuSideMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"side-menu\">\n  <div class=\"side-menu-content\">\n      <div class=\"side-menu-logo\">\n          <i class=\"fas fa-user-astronaut\"></i>\n      </div>\n      <b class=\"sign-in\">\n          Welcome\n          <ng-container *ngIf=\"isLoggedIn; else platformName\">{{user?.email}}</ng-container>\n          <ng-template #platformName>to PCHao Blog Platform</ng-template>\n          !\n      </b>\n      <br>\n      <ul>\n        <li><a (click)=\"goToAllPost()\">All Posts</a></li>\n        <li><a (click)=\"goToMyBlog()\">My Blog</a></li>\n      </ul>\n      <br>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signing-buttons/signing-buttons.component.html": function node_modulesRawLoaderDistCjsJsSrcAppSigningButtonsSigningButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"signOut()\">Sign Out</button>\n<button (click)=\"signUp()\">Register</button>\n<button (click)=\"signIn()\">Sing In</button>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./post-page/post-page.component */
    "./src/app/post-page/post-page.component.ts");
    /* harmony import */


    var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit-page/edit-page.component */
    "./src/app/edit-page/edit-page.component.ts");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index-page/index-page.component */
    "./src/app/index-page/index-page.component.ts");

    var routes = [{
      path: "",
      component: _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_6__["IndexPageComponent"]
    }, {
      path: "edit",
      component: _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_2__["EditPageComponent"]
    }, {
      path: "posts",
      component: _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_1__["PostPageComponent"]
    }, {
      path: "error",
      component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] // },{
      //   path: "**",
      //   redirectTo: "",
      //   pathMatch: "full"

    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css": function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ror-blog-angular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.model.ts": function srcAppAppModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_URL", function () {
      return BASE_URL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** For local dev */


    var BASE_URL = "http://localhost:3000";
    /** For local dev */
    // export const BASE_URL = "https://pchao-ror-ng-blog-app.herokuapp.com/";

    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-page/index-page.component */
    "./src/app/index-page/index-page.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/side-menu/side-menu.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error-page/error-page.component */
    "./src/app/error-page/error-page.component.ts");
    /* harmony import */


    var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./post-page/post-page.component */
    "./src/app/post-page/post-page.component.ts");
    /* harmony import */


    var _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./edit-page/edit-page.component */
    "./src/app/edit-page/edit-page.component.ts");
    /* harmony import */


    var _signing_buttons_signing_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./signing-buttons/signing-buttons.component */
    "./src/app/signing-buttons/signing-buttons.component.ts");
    /* harmony import */


    var _back_to_all_button_back_to_all_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./back-to-all-button/back-to-all-button.component */
    "./src/app/back-to-all-button/back-to-all-button.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_5__["IndexPageComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__["SideMenuComponent"], _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"], _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_11__["PostPageComponent"], _edit_page_edit_page_component__WEBPACK_IMPORTED_MODULE_12__["EditPageComponent"], _signing_buttons_signing_buttons_component__WEBPACK_IMPORTED_MODULE_13__["SigningButtonsComponent"], _back_to_all_button_back_to_all_button_component__WEBPACK_IMPORTED_MODULE_14__["BackToAllButtonComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/back-to-all-button/back-to-all-button.component.ts": function srcAppBackToAllButtonBackToAllButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackToAllButtonComponent", function () {
      return BackToAllButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BackToAllButtonComponent = /*#__PURE__*/function () {
      function BackToAllButtonComponent(router) {
        _classCallCheck(this, BackToAllButtonComponent);

        this.router = router;
      }

      _createClass(BackToAllButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * 回到所有文章列表
         *
         * @memberof EditPageComponent
         */

      }, {
        key: "backToAll",
        value: function backToAll() {
          this.router.navigate(['']);
        }
      }]);

      return BackToAllButtonComponent;
    }();

    BackToAllButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    BackToAllButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-back-to-all-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./back-to-all-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/back-to-all-button/back-to-all-button.component.html"))["default"]
    })], BackToAllButtonComponent);
    /***/
  },

  /***/
  "./src/app/edit-page/edit-page.component.ts": function srcAppEditPageEditPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageComponent", function () {
      return EditPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditPageComponent = /*#__PURE__*/function () {
      function EditPageComponent(router) {
        _classCallCheck(this, EditPageComponent);

        this.router = router;
        this.post = {};
      }

      _createClass(EditPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * 編輯 （待串接）
         *
         * @memberof EditPageComponent
         */

      }, {
        key: "edit",
        value: function edit() {
          // TODO: Wait to connect to edit api with auth token
          console.log("Edit post: ", this.post);
          this.router.navigate(['']);
        }
      }]);

      return EditPageComponent;
    }();

    EditPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EditPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-page/edit-page.component.html"))["default"]
    })], EditPageComponent);
    /***/
  },

  /***/
  "./src/app/error-page/error-page.component.ts": function srcAppErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent(router) {
        _classCallCheck(this, ErrorPageComponent);

        this.router = router;
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-error-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html"))["default"]
    })], ErrorPageComponent);
    /***/
  },

  /***/
  "./src/app/index-page/index-page.component.ts": function srcAppIndexPageIndexPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function () {
      return IndexPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app.model */
    "./src/app/app.model.ts");

    var IndexPageComponent = /*#__PURE__*/function () {
      function IndexPageComponent(http, activateRoute, router) {
        _classCallCheck(this, IndexPageComponent);

        this.http = http;
        this.activateRoute = activateRoute;
        this.router = router;
      }
      /**
       * Init
       *
       * @memberof IndexPageComponent
       */


      _createClass(IndexPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activateRoute.paramMap.subscribe(function (params) {
            console.log(params);
            var bloggerId = params.get('blogger_id');

            if (bloggerId) {
              _this.getPostsByBloggerId(bloggerId);
            } else {
              _this.getPosts();
            }
          });
        }
      }, {
        key: "goToPost",
        value: function goToPost(post) {
          console.log("goToPost: ", post);
          this.router.navigate(["posts", {
            post_id: post.id
          }]);
        }
      }, {
        key: "paginate",
        value: function paginate() {
          this.getPosts({
            go_to_page: this.goToPage,
            per_page: this.perPage
          });
        }
      }, {
        key: "getPostsByBloggerId",
        value: function getPostsByBloggerId(bloggerId) {
          console.log("getPostsByBloggerId");
          this.getPosts({
            blogger_id: bloggerId
          });
        }
      }, {
        key: "getPosts",
        value: function getPosts(params) {
          var _this2 = this;

          this.http.get(_app_model__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"] + "/posts", {
            params: params
          }).subscribe(function (data) {
            console.log("get Posts data:", data);

            _this2.initPaginate(data['pagination']);

            _this2.posts = data['posts'];
            _this2.blogger = data['blogger'];
            _this2.authorSignedIn = data['author_signed_in'];
          }, function (error) {
            console.log("Error occurs:", error);

            _this2.router.navigate(["/error"]);
          });
        }
      }, {
        key: "initPaginate",
        value: function initPaginate(pagination) {
          this.goToPage = pagination.current_page ? pagination.current_page : 1;
          this.totalPage = pagination.total_page ? pagination.total_page : 1;
          this.perPage = pagination.per_page ? pagination.per_page : 10;
          this.totalPosts = pagination.total_posts ? pagination.total_posts : 0;
        }
      }, {
        key: "pages",
        get: function get() {
          return _toConsumableArray(Array(this.totalPage).keys());
        }
        /**
         * 回到所有文章列表
         *
         * @memberof EditPageComponent
         */

      }, {
        key: "backToAll",
        value: function backToAll() {
          this.router.navigate(['']);
        }
      }]);

      return IndexPageComponent;
    }();

    IndexPageComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    IndexPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-index-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/index-page/index-page.component.html"))["default"]
    })], IndexPageComponent);
    /***/
  },

  /***/
  "./src/app/post-page/post-page.component.ts": function srcAppPostPagePostPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostPageComponent", function () {
      return PostPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostPageComponent = /*#__PURE__*/function () {
      function PostPageComponent(activatedRoute, router) {
        _classCallCheck(this, PostPageComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
      }

      _createClass(PostPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activatedRoute.paramMap.subscribe(function (params) {
            console.log("PostPageComponent params:", params);
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          this.router.navigate(["edit"]);
        }
      }, {
        key: "delete",
        value: function _delete() {
          // TODO: wait for api
          this.router.navigate(["/"]);
        }
      }]);

      return PostPageComponent;
    }();

    PostPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    PostPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-post-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-page/post-page.component.html"))["default"]
    })], PostPageComponent);
    /***/
  },

  /***/
  "./src/app/side-menu/side-menu.component.ts": function srcAppSideMenuSideMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
      return SideMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideMenuComponent = /*#__PURE__*/function () {
      function SideMenuComponent(router) {
        _classCallCheck(this, SideMenuComponent);

        this.router = router;
      }

      _createClass(SideMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToAllPost",
        value: function goToAllPost() {
          this.router.navigate(['']);
        }
      }, {
        key: "goToMyBlog",
        value: function goToMyBlog() {
          this.router.navigate(['error']);
        }
      }]);

      return SideMenuComponent;
    }();

    SideMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-side-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/side-menu/side-menu.component.html"))["default"]
    })], SideMenuComponent);
    /***/
  },

  /***/
  "./src/app/signing-buttons/signing-buttons.component.ts": function srcAppSigningButtonsSigningButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigningButtonsComponent", function () {
      return SigningButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.model */
    "./src/app/app.model.ts");

    var SigningButtonsComponent = /*#__PURE__*/function () {
      function SigningButtonsComponent(router) {
        _classCallCheck(this, SigningButtonsComponent);

        this.router = router;
      }

      _createClass(SigningButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp() {
          window.location.href = _app_model__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + "/authors/sign_up";
        }
      }, {
        key: "signIn",
        value: function signIn() {
          window.location.href = _app_model__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"] + "/authors/sign_in";
        }
      }, {
        key: "signOut",
        value: function signOut() {
          // TODO: connect to a sign_out api
          // window.location.href = BASE_URL + "/authors/sign_out";
          this.router.navigate(["/error"]);
        }
      }]);

      return SigningButtonsComponent;
    }();

    SigningButtonsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    SigningButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-signing-buttons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signing-buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signing-buttons/signing-buttons.component.html"))["default"]
    })], SigningButtonsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/pochienh/project/til/ror-blog/ror-blog-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map