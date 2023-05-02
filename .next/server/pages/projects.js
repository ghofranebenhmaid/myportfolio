(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 8148:
/***/ ((module) => {

// Exports
module.exports = {
	"projects": "Projects_projects__qg6Ro",
	"image": "Projects_image__5nygz",
	"calygraphyImage": "Projects_calygraphyImage__iUGEj",
	"logoImage": "Projects_logoImage__4fkqm",
	"btn": "Projects_btn__PLuTy",
	"navTab": "Projects_navTab__Dp9r4",
	"tabBtn": "Projects_tabBtn__AEGbN",
	"active": "Projects_active__bbDQ2",
	"web": "Projects_web__u2Shv",
	"web__projects": "Projects_web__projects__UP1uG",
	"web__image": "Projects_web__image__8UQu4",
	"web__description": "Projects_web__description__YRVJ7",
	"web__btn": "Projects_web__btn__RfdAw",
	"activeLink": "Projects_activeLink__ZkEom"
};


/***/ }),

/***/ 1042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3997);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8148);
/* harmony import */ var _styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lyket_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6133);
/* harmony import */ var _lyket_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lyket_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ActiveLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1666);
/* harmony import */ var _components_useTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4630);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6278);













const getServerSideProps = async ()=>{
    const res = await fetch(`http://localhost:3000/api/projects`);
    const data = await res.json();
    return {
        props: {
            projects: data
        }
    };
};
const projects1 = ({ projects , router  })=>{
    const { darkTheme  } = (0,_components_useTheme__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const { query: { tab  } ,  } = router;
    const isTabOne = tab === 'logos' || tab == null;
    const isTabTwo = tab === 'calygraphy';
    const isTabThree = tab === 'web';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: " About | Portfolio Ghofrane Ben Hmaid "
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().navTab),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().tabBtn),
                                    selected: isTabOne,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        href: {
                                            pathname: '/projects',
                                            query: {
                                                tab: 'logos'
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Logos"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().tabBtn),
                                    selected: isTabTwo,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        href: {
                                            pathname: '/projects',
                                            query: {
                                                tab: 'calygraphy'
                                            }
                                        },
                                        activeClassName: "activeLink",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: " Calygraphy"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().tabBtn),
                                    selected: isTabThree,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        href: {
                                            pathname: '/projects',
                                            query: {
                                                tab: 'web'
                                            }
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            activeClassName: "active",
                                            children: "Web"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content",
                            children: [
                                isTabOne && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().projects),
                                        children: projects.map((item)=>item.type === 'logo' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().centent),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().image),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                        alt: item.title,
                                                        src: item.imageUrl,
                                                        className: !darkTheme ? (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().logoImage) : '',
                                                        layout: "fill",
                                                        objectFit: "contain",
                                                        // placeholder='blur'
                                                        quality: 100,
                                                        priority: true
                                                    })
                                                })
                                            }, item.id) : null
                                        )
                                    })
                                }),
                                isTabTwo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().projects),
                                        children: projects.map((item)=>item.type === 'calygraphy' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().centent),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().image),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                        alt: item.title,
                                                        src: item.imageUrl,
                                                        className: !darkTheme ? (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().calygraphyImage) : '',
                                                        layout: "fill",
                                                        objectFit: "contain",
                                                        // placeholder='blur'
                                                        quality: 100,
                                                        priority: true
                                                    })
                                                })
                                            }, item.id) : null
                                        )
                                    })
                                }),
                                isTabThree && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().web__projects),
                                        children: projects.map((item1)=>item1.type === 'web' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: ((_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().centent), (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().web)),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().web__image),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                            alt: item1.title,
                                                            src: item1.imageUrl,
                                                            className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().image),
                                                            // width={ 300 }
                                                            // height={ 300 }
                                                            layout: "fill",
                                                            objectFit: "cover",
                                                            // placeholder='blur'  
                                                            quality: 100,
                                                            priority: true
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().web__bg),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: `${item1.link}`,
                                                                target: "blank",
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().web__btn),
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        children: [
                                                                            ' ',
                                                                            "View Case Study ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiArrowUpRight, {
                                                                            }),
                                                                            ' '
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Projects_module_scss__WEBPACK_IMPORTED_MODULE_12___default().web__description),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    children: item1.title
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    children: item1.technologies && item1.technologies.length > 0 ? item1.technologies.map((item, index)=>{
                                                                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                            children: [
                                                                                " ",
                                                                                item
                                                                            ]
                                                                        }, index));
                                                                    }) : 'Loading..'
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, item1.id) : null
                                        )
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_6__.withRouter)(projects1));


/***/ }),

/***/ 6133:
/***/ ((module) => {

"use strict";
module.exports = require("@lyket/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,607], () => (__webpack_exec__(1042)));
module.exports = __webpack_exports__;

})();