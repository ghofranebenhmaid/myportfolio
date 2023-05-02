exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3351:
/***/ ((module) => {

// Exports
module.exports = {
	"switch": "DarkLigthTheme_switch__XXe_2",
	"sunmoon": "DarkLigthTheme_sunmoon__iGj8p"
};


/***/ }),

/***/ 7093:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__oaUOW",
	"borderTop": "Footer_borderTop__JLC8S",
	"footer__centent": "Footer_footer__centent__QpmQt"
};


/***/ }),

/***/ 5769:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "NavBar_nav__Gp39b",
	"nav__logo": "NavBar_nav__logo__wo5_c",
	"logo": "NavBar_logo__IB5ZT",
	"menu": "NavBar_menu__wBWtQ",
	"isopen": "NavBar_isopen__vNuxk",
	"list": "NavBar_list__0XiFN",
	"list__ul": "NavBar_list__ul__PmfMk",
	"slideUp": "NavBar_slideUp__2mifJ"
};


/***/ }),

/***/ 8703:
/***/ ((module) => {

// Exports
module.exports = {
	"socialmedia__links": "SocialMedia_socialmedia__links__y2kyu"
};


/***/ }),

/***/ 1666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const NavLink = ({ href , children , activeClassName  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const Reload = ()=>{
        router.reload();
    };
    let className = children.props.className || '';
    if (router.pathname === href) {
        className = `${className} ${activeClassName}`;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        onClick: Reload,
        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
            className
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);


/***/ }),

/***/ 6278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7093);
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4374);




const Footer = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().footer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().borderTop)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().footer__centent),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "\xa9 ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                    children: new Date().getFullYear()
                                }),
                                " Ghofrane Ben Hmaid"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialMedia__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 3997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/styles/NavBar.module.scss
var NavBar_module = __webpack_require__(5769);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
// EXTERNAL MODULE: ./src/styles/DarkLigthTheme.module.scss
var DarkLigthTheme_module = __webpack_require__(3351);
var DarkLigthTheme_module_default = /*#__PURE__*/__webpack_require__.n(DarkLigthTheme_module);
// EXTERNAL MODULE: ./src/components/useTheme.js
var useTheme = __webpack_require__(4630);
;// CONCATENATED MODULE: ./src/components/DarkLigthTheme.js




const DarkLigthTheme = ()=>{
    const { darkTheme , handleToggleTheme , Reload  } = (0,useTheme/* default */.Z)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (DarkLigthTheme_module_default())["switch"],
            children: darkTheme !== undefined && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "#",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: (DarkLigthTheme_module_default())["switch"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                checked: darkTheme,
                                onChange: handleToggleTheme,
                                onClick: Reload
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (DarkLigthTheme_module_default()).sunmoon,
                                children: darkTheme ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#212121",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "feather feather-moon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#fff",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "feather feather-sun",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "1",
                                            x2: "12",
                                            y2: "3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "12",
                                            y1: "21",
                                            x2: "12",
                                            y2: "23"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "4.22",
                                            y1: "4.22",
                                            x2: "5.64",
                                            y2: "5.64"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "18.36",
                                            y1: "18.36",
                                            x2: "19.78",
                                            y2: "19.78"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "1",
                                            y1: "12",
                                            x2: "3",
                                            y2: "12"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "21",
                                            y1: "12",
                                            x2: "23",
                                            y2: "12"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "4.22",
                                            y1: "19.78",
                                            x2: "5.64",
                                            y2: "18.36"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                            x1: "18.36",
                                            y1: "5.64",
                                            x2: "19.78",
                                            y2: "4.22"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_DarkLigthTheme = (DarkLigthTheme);

// EXTERNAL MODULE: ./src/components/ActiveLink.js
var ActiveLink = __webpack_require__(1666);
;// CONCATENATED MODULE: ./src/components/NavBar.js






const NavBar = ({ activeClassName , children , router , ...props })=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const handleToggle = ()=>{
        setOpen(!open);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: `${(NavBar_module_default()).nav} container`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavBar_module_default()).nav__logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (NavBar_module_default()).logo,
                        children: "GHOFRANE."
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: !open ? `${(NavBar_module_default()).menu} hide-for-desktop` : `${(NavBar_module_default()).menu} ${(NavBar_module_default()).isopen} hide-for-desktop `,
                onClick: handleToggle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: !open ? `${(NavBar_module_default()).list} hide-for-desktop` : `${(NavBar_module_default()).list} ${(NavBar_module_default()).isopen} hide-for-desktop `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (NavBar_module_default()).list__ul,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: open ? (NavBar_module_default()).slideUp : ' ',
                            onClick: handleToggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                                href: "/",
                                activeClassName: "active",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About Me"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: open ? (NavBar_module_default()).slideUp : '',
                            onClick: handleToggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Projects"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: open ? (NavBar_module_default()).slideUp : '',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_DarkLigthTheme, {
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex hide-for-mobile",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/",
                            activeClassName: "activeLink",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/projects",
                            activeClassName: "activeLink",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Projects"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hide-for-mobile",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_DarkLigthTheme, {
                })
            })
        ]
    }));
};
/* harmony default export */ const components_NavBar = (NavBar);


/***/ }),

/***/ 4374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8703);
/* harmony import */ var _styles_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SocialMediaAccounts = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_2___default().socialmedia),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_2___default().socialmedia__links),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://www.linkedin.com/in/ghofranebenhmaid/",
                    className: 'transition-colors hover:text-yellow-500',
                    target: "_blank",
                    rel: "noreferrer",
                    children: "LinkedIn"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://www.instagram.com/ghofranbenhmaid/",
                    className: 'transition-colors hover:text-yellow-500',
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Instagram"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://github.com/ghofranebenhmaid",
                    className: 'transition-colors hover:text-yellow-500',
                    target: "_blank",
                    rel: "noreferrer",
                    children: "GitHub"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://www.behance.net/ghofranebenhmaid",
                    className: 'transition-colors hover:text-yellow-500',
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Behance"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialMediaAccounts);


/***/ }),

/***/ 4630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useTheme = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const Reload = ()=>{
        router.reload();
    };
    const { 0: darkTheme , 1: setDarkTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const handleToggleTheme = (event)=>{
        setDarkTheme(event.target.checked);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (darkTheme !== undefined) {
            if (darkTheme) {
                // Set value of  darkmode to dark
                document.documentElement.setAttribute('data-theme', 'dark');
                window.localStorage.setItem('theme', 'dark');
            } else {
                // Set value of  darkmode to light
                document.documentElement.removeAttribute('data-theme');
                window.localStorage.setItem('theme', 'light');
            }
        }
    }, [
        darkTheme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
        // Set initial darkmode to light
        setDarkTheme(initialColorValue === 'dark');
    }, []);
    return {
        darkTheme,
        handleToggleTheme,
        Reload
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);


/***/ })

};
;