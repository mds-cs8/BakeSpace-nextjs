exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 74361:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39450))

/***/ }),

/***/ 39450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/components/Wrapper.jsx
var Wrapper = __webpack_require__(41240);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./public/img/logo2.png
/* harmony default export */ const logo2 = ({"src":"/_next/static/media/logo2.e9c1414d.png","height":1563,"width":1563,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxklEQVR42mMAgU/TpzMxoIE3TExMKJJvdHSk3peV7X+XmHjgJQODFFiMgQGi6BUDA++vR4+e//369f+fd+/+f54378VDBgY+uHFPGBgUPy9f/v/H1av/f96+/f/nvXv/X8TFKcIV/M/L4/4cF3fv24wZr7719r78Wlt79//mzbxgSVUtLQMTbe2gBg+P6KnV1d79eXlBzQwMgebKypbyBgaSDDra2poaWlrxDCoqwQwMDM4M3NxJDAYG8era2v66WloKDIQAAEajTGM8sZ1qAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(32695);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(60930);
// EXTERNAL MODULE: ./node_modules/react-icons/vsc/index.esm.js
var vsc_index_esm = __webpack_require__(34025);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./app/components/Header/Menu.jsx
// MENU IN NAVBAR FOR LARGE SCREEN




// list in nav 
const data = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "Products",
        url: "/products"
    },
    {
        id: 3,
        name: "Bakeries",
        url: "/bakeries"
    },
    {
        id: 4,
        name: "Open Your Bakery",
        url: "/contact"
    }
];
const Menu = ()=>{
    {
    /* Get the current route */ }
    const currentRoute = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "hidden md:flex items-center gap-8 font-medium text-black",
        children: data.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    style: {
                        transition: "all 0.5s ease"
                    },
                    className: "cursor-pointer hover:text-[#ef6466] text-black",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        style: {
                            padding: "10px"
                        },
                        className: currentRoute === item.url ? "activeLink" : "non-activeLink",
                        href: item?.url,
                        children: item.name
                    })
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const Header_Menu = (Menu);

;// CONCATENATED MODULE: ./app/components/Header/MenuMobile.jsx
// MENU FOR MOBILE SCREEN




// LIST IN NAVBAR
const MenuMobile_data = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "Products",
        url: "/products"
    },
    {
        id: 3,
        name: "Bakeries",
        url: "/bakeries"
    },
    {
        id: 4,
        name: "Open Your Bakery",
        url: "/contact"
    }
];
const MenuMobile = ()=>{
    const currentRoute = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex flex-col md:hidden font-bold absolute top-[60px] left-0 w-full bg-white text-black",
        children: MenuMobile_data.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    style: {
                        transition: "all 0.5s ease"
                    },
                    className: "py-4 px-5 border-b  hover:text-[#ef6466] text-black",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item?.url,
                        onClick: ()=>setMobileMenu(false),
                        className: currentRoute === item.url ? "activeLink" : "non-activeLink",
                        children: item.name
                    })
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const Header_MenuMobile = (MenuMobile);

;// CONCATENATED MODULE: ./app/components/Header/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
// IMPORT UI LIBRARY AND IMG AND ICONS









// IMPORT COMPONENTS


const Header = ()=>{
    // USE STATE
    const [mobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const [show, setShow] = (0,react_.useState)("translate-y-0");
    const [lastScrollY, setLastScrollY] = (0,react_.useState)(0);
    //----------------------------------------------------
    //   const { cartItems } = useSelector((state) => state.cart);
    // FUNCTION FOR SCROLL ANIMATION
    const controlNavbar = ()=>{
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[90px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [
        lastScrollY
    ]);
    //----------------------------------------------------
    //   useEffect(() => {
    //     fetchCategories();
    //   }, []);
    //   const fetchCategories = async () => {
    //     const { data } = await fetchDataFromApi("/api/categories?populate=*");
    //     setCategories(data);
    //   };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `p-5 w-full h-[60px] md:h-[90px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 shadow-sm ${show}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper/* Wrapper */.i, {
            className: "h-[60px] flex justify-between items-center ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo2,
                        className: "w-[60px] md:w-[80px]",
                        alt: "logo"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Header_Menu, {}),
                mobileMenu && /*#__PURE__*/ jsx_runtime_.jsx(Header_MenuMobile, {
                    setMobileMenu: setMobileMenu
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-2 text-black",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/user",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiUserCircle */.ePx, {
                                    className: "text-[24px] md:text-[30px]"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/cart",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_index_esm/* BsCart */.UZs, {
                                        className: "text-[15px] md:text-[20px]"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]",
                                        children: "1"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2",
                            children: mobileMenu ? /*#__PURE__*/ jsx_runtime_.jsx(vsc_index_esm/* VscChromeClose */.S1K, {
                                className: "text-[16px]",
                                onClick: ()=>setMobileMenu(false)
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiMenuAltRight */.fdF, {
                                className: "text-[20px]",
                                onClick: ()=>setMobileMenu(true)
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 41240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// CUSTTOM CONTAINER


function Wrapper({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ""}`,
        children: children
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Wrapper)));


/***/ }),

/***/ 82341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/components/Header/Header.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\meed-\OneDrive\سطح المكتب\bahmed\bakespace_nextjs\app\components\Header\Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
;// CONCATENATED MODULE: ./app/layout.js



const metadata = {
    title: "BAKESPACE | HOME",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;