/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Animation/Parallax/SmoothScrollContainer.tsx":
/*!*****************************************************************!*\
  !*** ./components/Animation/Parallax/SmoothScrollContainer.tsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScrollContainer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_styled_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=styled,useMediaQuery,useTheme!=!@mui/material */ \"(pages-dir-node)/__barrel_optimize__?names=styled,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ \"@react-spring/web\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_react_spring_web__WEBPACK_IMPORTED_MODULE_1__]);\n_react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst ScrollContainer = (0,_barrel_optimize_names_styled_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.styled)(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div)(()=>({\n        position: 'fixed',\n        willChange: 'transform',\n        right: 0,\n        left: 0\n    }));\nfunction SmoothScrollContainer(props) {\n    const { children } = props;\n    const theme = (0,_barrel_optimize_names_styled_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const isTablet = (0,_barrel_optimize_names_styled_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.up('md'));\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [spring, springApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)({\n        \"SmoothScrollContainer.useSpring\": ()=>({\n                y: 0\n            })\n    }[\"SmoothScrollContainer.useSpring\"]);\n    const ref = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);\n    const [height, setHeight] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect({\n        \"SmoothScrollContainer.useEffect\": ()=>{\n            if (isTablet) {\n                springApi.start({\n                    config: _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.config.slow\n                });\n            } else {\n                springApi.start({\n                    config: {\n                        duration: 0\n                    }\n                });\n            }\n        }\n    }[\"SmoothScrollContainer.useEffect\"], [\n        isTablet,\n        springApi\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect({\n        \"SmoothScrollContainer.useEffect\": ()=>{\n            const handleChangeStart = {\n                \"SmoothScrollContainer.useEffect.handleChangeStart\": ()=>{\n                    springApi.start({\n                        config: {\n                            duration: 0\n                        }\n                    });\n                }\n            }[\"SmoothScrollContainer.useEffect.handleChangeStart\"];\n            const handleChangeComplete = {\n                \"SmoothScrollContainer.useEffect.handleChangeComplete\": ()=>{\n                    springApi.start({\n                        y: 0,\n                        onResolve: {\n                            \"SmoothScrollContainer.useEffect.handleChangeComplete\": ()=>{\n                                springApi.start({\n                                    config: isTablet ? _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.config.slow : {\n                                        duration: 0\n                                    }\n                                });\n                            }\n                        }[\"SmoothScrollContainer.useEffect.handleChangeComplete\"]\n                    });\n                }\n            }[\"SmoothScrollContainer.useEffect.handleChangeComplete\"];\n            router.events.on('routeChangeStart', handleChangeStart);\n            router.events.on('routeChangeComplete', handleChangeComplete);\n            return ({\n                \"SmoothScrollContainer.useEffect\": ()=>{\n                    router.events.off('routeChangeStart', handleChangeStart);\n                    router.events.off('routeChangeComplete', handleChangeComplete);\n                }\n            })[\"SmoothScrollContainer.useEffect\"];\n        }\n    }[\"SmoothScrollContainer.useEffect\"], [\n        isTablet,\n        springApi,\n        router\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_3___default().useLayoutEffect({\n        \"SmoothScrollContainer.useLayoutEffect\": ()=>{\n            const { current } = ref;\n            const observer = new ResizeObserver({\n                \"SmoothScrollContainer.useLayoutEffect\": (entries)=>{\n                    setHeight(entries[0].target.scrollHeight);\n                }\n            }[\"SmoothScrollContainer.useLayoutEffect\"]);\n            if (current) observer.observe(current);\n            return ({\n                \"SmoothScrollContainer.useLayoutEffect\": ()=>{\n                    if (current) observer.unobserve(current);\n                }\n            })[\"SmoothScrollContainer.useLayoutEffect\"];\n        }\n    }[\"SmoothScrollContainer.useLayoutEffect\"], [\n        ref\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect({\n        \"SmoothScrollContainer.useEffect\": ()=>{\n            const handleScroll = {\n                \"SmoothScrollContainer.useEffect.handleScroll\": ()=>springApi.start({\n                        y: -window.scrollY\n                    })\n            }[\"SmoothScrollContainer.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll, {\n                passive: true\n            });\n            return ({\n                \"SmoothScrollContainer.useEffect\": ()=>window.removeEventListener('scroll', handleScroll)\n            })[\"SmoothScrollContainer.useEffect\"];\n        }\n    }[\"SmoothScrollContainer.useEffect\"], [\n        springApi\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScrollContainer, {\n                style: spring,\n                ref: ref,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/components/Animation/Parallax/SmoothScrollContainer.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/components/Animation/Parallax/SmoothScrollContainer.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQW5pbWF0aW9uL1BhcmFsbGF4L1Ntb290aFNjcm9sbENvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNBO0FBQ3hCO0FBQ2Q7QUFFMUIsTUFBTVEsa0JBQWtCUix5R0FBTUEsQ0FBQ0ksdURBQVFBLENBQUNLLEdBQUcsRUFBRSxJQUFPO1FBQ2xEQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7QUFNZSxTQUFTQyxzQkFBc0JDLEtBQVk7SUFDeEQsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0Q7SUFFckIsTUFBTUUsUUFBUWhCLDJHQUFRQTtJQUN0QixNQUFNaUIsV0FBV2hCLGdIQUFhQSxDQUFDZSxNQUFNRSxXQUFXLENBQUNDLEVBQUUsQ0FBQztJQUVwRCxNQUFNQyxTQUFTZixzREFBU0E7SUFFeEIsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHcEIsNERBQVNBOzJDQUFDLElBQU87Z0JBQzNDcUIsR0FBRztZQUNMOztJQUVBLE1BQU1DLE1BQU1sQixtREFBWSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ29CLFFBQVFDLFVBQVUsR0FBR3JCLHFEQUFjLENBQUM7SUFFM0NBLHNEQUFlOzJDQUFDO1lBQ2QsSUFBSVcsVUFBVTtnQkFDWkssVUFBVVEsS0FBSyxDQUFDO29CQUNkMUIsUUFBUUEscURBQU1BLENBQUMyQixJQUFJO2dCQUNyQjtZQUNGLE9BQU87Z0JBQ0xULFVBQVVRLEtBQUssQ0FBQztvQkFDZDFCLFFBQVE7d0JBQUU0QixVQUFVO29CQUFFO2dCQUN4QjtZQUNGO1FBQ0Y7MENBQUc7UUFBQ2Y7UUFBVUs7S0FBVTtJQUV4QmhCLHNEQUFlOzJDQUFDO1lBQ2QsTUFBTTJCO3FFQUFvQjtvQkFDeEJYLFVBQVVRLEtBQUssQ0FBQzt3QkFDZDFCLFFBQVE7NEJBQUU0QixVQUFVO3dCQUFFO29CQUN4QjtnQkFDRjs7WUFFQSxNQUFNRTt3RUFBdUI7b0JBQzNCWixVQUFVUSxLQUFLLENBQUM7d0JBQ2RQLEdBQUc7d0JBQ0hZLFNBQVM7b0ZBQUU7Z0NBQ1RiLFVBQVVRLEtBQUssQ0FBQztvQ0FDZDFCLFFBQVFhLFdBQVdiLHFEQUFNQSxDQUFDMkIsSUFBSSxHQUFHO3dDQUFFQyxVQUFVO29DQUFFO2dDQUNqRDs0QkFDRjs7b0JBQ0Y7Z0JBQ0Y7O1lBRUFaLE9BQU9nQixNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JKO1lBQ3JDYixPQUFPZ0IsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCSDtZQUV4QzttREFBTztvQkFDTGQsT0FBT2dCLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQkw7b0JBQ3RDYixPQUFPZ0IsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCSjtnQkFDM0M7O1FBQ0Y7MENBQUc7UUFBQ2pCO1FBQVVLO1FBQVdGO0tBQU87SUFFaENkLDREQUFxQjtpREFBQztZQUNwQixNQUFNLEVBQUVrQyxPQUFPLEVBQUUsR0FBR2hCO1lBQ3BCLE1BQU1pQixXQUFXLElBQUlDO3lEQUFlLENBQUNDO29CQUNuQ2hCLFVBQVVnQixPQUFPLENBQUMsRUFBRSxDQUFDQyxNQUFNLENBQUNDLFlBQVk7Z0JBQzFDOztZQUNBLElBQUlMLFNBQVNDLFNBQVNLLE9BQU8sQ0FBQ047WUFDOUI7eURBQU87b0JBQ0wsSUFBSUEsU0FBU0MsU0FBU00sU0FBUyxDQUFDUDtnQkFDbEM7O1FBQ0Y7Z0RBQUc7UUFBQ2hCO0tBQUk7SUFFUmxCLHNEQUFlOzJDQUFDO1lBQ2QsTUFBTTBDO2dFQUFlLElBQU0xQixVQUFVUSxLQUFLLENBQUM7d0JBQUVQLEdBQUcsQ0FBQzBCLE9BQU9DLE9BQU87b0JBQUM7O1lBQ2hFRCxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSCxjQUFjO2dCQUFFSSxTQUFTO1lBQUs7WUFDaEU7bURBQU8sSUFBTUgsT0FBT0ksbUJBQW1CLENBQUMsVUFBVUw7O1FBQ3BEOzBDQUFHO1FBQUMxQjtLQUFVO0lBRWQscUJBQ0U7OzBCQUNFLDhEQUFDZjtnQkFBZ0IrQyxPQUFPakM7Z0JBQVFHLEtBQUtBOzBCQUNsQ1Q7Ozs7OzswQkFFSCw4REFBQ1A7Z0JBQUk4QyxPQUFPO29CQUFFNUI7Z0JBQU87Ozs7Ozs7O0FBRzNCIiwic291cmNlcyI6WyIvVXNlcnMvbWluaXN0cnlvZm1lZGlhL0RvY3VtZW50cy9HSVQvdHdnQ0MvY29tcG9uZW50cy9BbmltYXRpb24vUGFyYWxsYXgvU21vb3RoU2Nyb2xsQ29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQsIHVzZVRoZW1lLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3dlYic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JvbGxDb250YWluZXIgPSBzdHlsZWQoYW5pbWF0ZWQuZGl2KSgoKSA9PiAoe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gIHJpZ2h0OiAwLFxuICBsZWZ0OiAwLFxufSkpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNtb290aFNjcm9sbENvbnRhaW5lcihwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJykpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtzcHJpbmcsIHNwcmluZ0FwaV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcbiAgICB5OiAwLFxuICB9KSk7XG5cbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNUYWJsZXQpIHtcbiAgICAgIHNwcmluZ0FwaS5zdGFydCh7XG4gICAgICAgIGNvbmZpZzogY29uZmlnLnNsb3csXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ByaW5nQXBpLnN0YXJ0KHtcbiAgICAgICAgY29uZmlnOiB7IGR1cmF0aW9uOiAwIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtpc1RhYmxldCwgc3ByaW5nQXBpXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcbiAgICAgIHNwcmluZ0FwaS5zdGFydCh7XG4gICAgICAgIGNvbmZpZzogeyBkdXJhdGlvbjogMCB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgc3ByaW5nQXBpLnN0YXJ0KHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgb25SZXNvbHZlOiAoKSA9PiB7XG4gICAgICAgICAgc3ByaW5nQXBpLnN0YXJ0KHtcbiAgICAgICAgICAgIGNvbmZpZzogaXNUYWJsZXQgPyBjb25maWcuc2xvdyA6IHsgZHVyYXRpb246IDAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlQ2hhbmdlU3RhcnQpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDaGFuZ2VDb21wbGV0ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVDaGFuZ2VTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNoYW5nZUNvbXBsZXRlKTtcbiAgICB9O1xuICB9LCBbaXNUYWJsZXQsIHNwcmluZ0FwaSwgcm91dGVyXSk7XG5cbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHJlZjtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgc2V0SGVpZ2h0KGVudHJpZXNbMF0udGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnQpIG9ic2VydmVyLm9ic2VydmUoY3VycmVudCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50KSBvYnNlcnZlci51bm9ic2VydmUoY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW3JlZl0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4gc3ByaW5nQXBpLnN0YXJ0KHsgeTogLXdpbmRvdy5zY3JvbGxZIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtzcHJpbmdBcGldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2Nyb2xsQ29udGFpbmVyIHN0eWxlPXtzcHJpbmd9IHJlZj17cmVmfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9TY3JvbGxDb250YWluZXI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodCB9fSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsInVzZVRoZW1lIiwidXNlTWVkaWFRdWVyeSIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwiY29uZmlnIiwidXNlUm91dGVyIiwiUmVhY3QiLCJTY3JvbGxDb250YWluZXIiLCJkaXYiLCJwb3NpdGlvbiIsIndpbGxDaGFuZ2UiLCJyaWdodCIsImxlZnQiLCJTbW9vdGhTY3JvbGxDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwidGhlbWUiLCJpc1RhYmxldCIsImJyZWFrcG9pbnRzIiwidXAiLCJyb3V0ZXIiLCJzcHJpbmciLCJzcHJpbmdBcGkiLCJ5IiwicmVmIiwidXNlUmVmIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdGFydCIsInNsb3ciLCJkdXJhdGlvbiIsImhhbmRsZUNoYW5nZVN0YXJ0IiwiaGFuZGxlQ2hhbmdlQ29tcGxldGUiLCJvblJlc29sdmUiLCJldmVudHMiLCJvbiIsIm9mZiIsInVzZUxheW91dEVmZmVjdCIsImN1cnJlbnQiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsInRhcmdldCIsInNjcm9sbEhlaWdodCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Animation/Parallax/SmoothScrollContainer.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(pages-dir-node)/./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"@react-three/drei\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ \"(pages-dir-node)/./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createEmotionCache */ \"(pages-dir-node)/./utils/createEmotionCache.tsx\");\n/* harmony import */ var _utils_queries_getMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/queries/getMenu */ \"(pages-dir-node)/./utils/queries/getMenu.tsx\");\n/* harmony import */ var _utils_queries_getNavigationContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queries/getNavigationContent */ \"(pages-dir-node)/./utils/queries/getNavigationContent.tsx\");\n/* harmony import */ var _utils_queries_globals_getInstagramSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/queries/globals/getInstagramSection */ \"(pages-dir-node)/./utils/queries/globals/getInstagramSection.tsx\");\n/* harmony import */ var _utils_menus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/menus */ \"(pages-dir-node)/./utils/menus.tsx\");\n/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/routes */ \"(pages-dir-node)/./utils/routes.tsx\");\n/* harmony import */ var _components_Animation_Parallax_SmoothScrollContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Animation/Parallax/SmoothScrollContainer */ \"(pages-dir-node)/./components/Animation/Parallax/SmoothScrollContainer.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__, _components_Animation_Parallax_SmoothScrollContainer__WEBPACK_IMPORTED_MODULE_13__]);\n([_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__, _components_Animation_Parallax_SmoothScrollContainer__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst AppWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/@mui\"), __webpack_require__.e(\"vendor-chunks/@babel\"), __webpack_require__.e(\"_pages-dir-node_components_AppWrapper_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/AppWrapper */ \"(pages-dir-node)/./components/AppWrapper.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.tsx -> \" + \"../components/AppWrapper\"\n        ]\n    }\n});\nconst NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/@mui\"), __webpack_require__.e(\"vendor-chunks/@babel\"), __webpack_require__.e(\"_pages-dir-node_components_Navigation_NavBar_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Navigation/NavBar */ \"(pages-dir-node)/./components/Navigation/NavBar.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.tsx -> \" + \"../components/Navigation/NavBar\"\n        ]\n    }\n});\nconst InstagramSection = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/@mui\"), __webpack_require__.e(\"vendor-chunks/@babel\"), __webpack_require__.e(\"_pages-dir-node_components_Sections_InstagramSection_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Sections/InstagramSection */ \"(pages-dir-node)/./components/Sections/InstagramSection.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.tsx -> \" + \"../components/Sections/InstagramSection\"\n        ]\n    }\n});\nconst Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/@mui\"), __webpack_require__.e(\"vendor-chunks/@babel\"), __webpack_require__.e(\"_pages-dir-node_components_Footer_Footer_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Footer/Footer */ \"(pages-dir-node)/./components/Footer/Footer.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/_app.tsx -> \" + \"../components/Footer/Footer\"\n        ]\n    }\n});\n// Client-side cache, shared for the whole session of the user in the browser.\nconst clientSideEmotionCache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\nconst HIDE_INSTAGRAM_PATHS = [\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.MEDICAL_RESOURCE_HUB_PAGE,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.OUR_SCIENCE_PAGE,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.PUBLICATIONS_PAGE,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.CLINICAL_STUDIES_PAGE,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.CLINICAL_STUDY_PATH,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.STAGES_PAGE,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.STOCKISTS_PAGE,\n    _utils_routes__WEBPACK_IMPORTED_MODULE_12__.COOKIE_POLICY_PAGE\n];\nfunction MyApp(props) {\n    const { Component, emotionCache = clientSideEmotionCache, pageProps, headerMenu, footerMenu, navigationContent, instagramSection } = props;\n    _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF.preload('/gltfs/can.gltf');\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            if ('scrollRestoration' in window.history) {\n                window.history.scrollRestoration = 'manual';\n            }\n        }\n    }[\"MyApp.useEffect\"], []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const shouldShowInstagram = !HIDE_INSTAGRAM_PATHS.some((path)=>router.pathname.startsWith(path)) && instagramSection.visibility === 'Visible';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppWrapper, {\n        emotionCache: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {\n                menu: headerMenu,\n                logo: navigationContent?.logo,\n                headerContent: navigationContent?.headerContent\n            }, void 0, false, {\n                fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/pages/_app.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Animation_Parallax_SmoothScrollContainer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/pages/_app.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    shouldShowInstagram && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InstagramSection, {\n                        data: instagramSection\n                    }, void 0, false, {\n                        fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/pages/_app.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 33\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        menu: footerMenu,\n                        logo: navigationContent?.logo,\n                        footerContent: navigationContent?.footerContent\n                    }, void 0, false, {\n                        fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/pages/_app.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/pages/_app.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ministryofmedia/Documents/GIT/twgCC/pages/_app.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\nMyApp.getInitialProps = async (appContext)=>{\n    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_5___default().getInitialProps(appContext);\n    const headerMenu = await (0,_utils_queries_getMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        id: _utils_menus__WEBPACK_IMPORTED_MODULE_11__.HEADER_MENU\n    });\n    const footerMenu = await (0,_utils_queries_getMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        id: _utils_menus__WEBPACK_IMPORTED_MODULE_11__.FOOTER_MENU\n    });\n    const instagramSection = await (0,_utils_queries_globals_getInstagramSection__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    const navigationContent = await (0,_utils_queries_getNavigationContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    return {\n        ...appProps,\n        headerMenu,\n        footerMenu,\n        navigationContent,\n        instagramSection\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0k7QUFDSztBQUNJO0FBR2pCO0FBQ087QUFDMkI7QUFDZDtBQUMwQjtBQUNNO0FBQ3JCO0FBYWpDO0FBQ2tFO0FBRTNGLE1BQU1vQixhQUFhcEIsbURBQU9BLENBQUMsSUFBTSw2V0FBa0M7Ozs7Ozs7QUFDbkUsTUFBTXFCLFNBQVNyQixtREFBT0EsQ0FBQyxJQUFNLGtZQUF5Qzs7Ozs7OztBQUN0RSxNQUFNc0IsbUJBQW1CdEIsbURBQU9BLENBQzlCLElBQU0sMFpBQWlEOzs7Ozs7O0FBRXpELE1BQU11QixTQUFTdkIsbURBQU9BLENBQUMsSUFBTSxzWEFBcUM7Ozs7Ozs7QUFFbEUsOEVBQThFO0FBQzlFLE1BQU13Qix5QkFBeUJuQixxRUFBa0JBO0FBRWpELE1BQU1vQix1QkFBdUI7SUFDM0JYLHFFQUF5QkE7SUFDekJFLDREQUFnQkE7SUFDaEJELDZEQUFpQkE7SUFDakJKLGlFQUFxQkE7SUFDckJDLCtEQUFtQkE7SUFDbkJLLHVEQUFXQTtJQUNYQywwREFBY0E7SUFDZEwsOERBQWtCQTtDQUNuQjtBQVVELFNBQVNhLE1BQU1DLEtBQWlCO0lBQzlCLE1BQU0sRUFDSkMsU0FBUyxFQUNUQyxlQUFlTCxzQkFBc0IsRUFDckNNLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxVQUFVLEVBQ1ZDLGlCQUFpQixFQUNqQkMsZ0JBQWdCLEVBQ2pCLEdBQUdQO0lBRUp6QixzREFBT0EsQ0FBQ2lDLE9BQU8sQ0FBQztJQUVoQi9CLGdEQUFTQTsyQkFBQztZQUNSLElBQUksdUJBQXVCZ0MsT0FBT0MsT0FBTyxFQUFFO2dCQUN6Q0QsT0FBT0MsT0FBTyxDQUFDQyxpQkFBaUIsR0FBRztZQUNyQztRQUNGOzBCQUFHLEVBQUU7SUFFTCxNQUFNQyxTQUFTdEMsc0RBQVNBO0lBRXhCLE1BQU11QyxzQkFDSixDQUFDZixxQkFBcUJnQixJQUFJLENBQUMsQ0FBQ0MsT0FBU0gsT0FBT0ksUUFBUSxDQUFDQyxVQUFVLENBQUNGLFVBQ2hFUixpQkFBaUJXLFVBQVUsS0FBSztJQUVsQyxxQkFDRSw4REFBQ3pCO1FBQVdTLGNBQWNBOzswQkFDeEIsOERBQUNSO2dCQUNDeUIsTUFBTWY7Z0JBQ05nQixNQUFNZCxtQkFBbUJjO2dCQUN6QkMsZUFBZWYsbUJBQW1CZTs7Ozs7OzBCQUVwQyw4REFBQzdCLDZGQUFxQkE7O2tDQUNwQiw4REFBQ1M7d0JBQVcsR0FBR0UsU0FBUzs7Ozs7O29CQUN2QlUscUNBQXVCLDhEQUFDbEI7d0JBQWlCMkIsTUFBTWY7Ozs7OztrQ0FDaEQsOERBQUNYO3dCQUNDdUIsTUFBTWQ7d0JBQ05lLE1BQU1kLG1CQUFtQmM7d0JBQ3pCRyxlQUFlakIsbUJBQW1CaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztBQUVBeEIsTUFBTXlCLGVBQWUsR0FBRyxPQUFPQztJQUM3QixNQUFNQyxXQUFXLE1BQU1sRCwrREFBbUIsQ0FBQ2lEO0lBRTNDLE1BQU1yQixhQUFhLE1BQU16QixrRUFBT0EsQ0FBQztRQUFFZ0QsSUFBSTVDLHNEQUFXQTtJQUFDO0lBQ25ELE1BQU1zQixhQUFhLE1BQU0xQixrRUFBT0EsQ0FBQztRQUFFZ0QsSUFBSTdDLHNEQUFXQTtJQUFDO0lBQ25ELE1BQU15QixtQkFBbUIsTUFBTTFCLHVGQUFtQkE7SUFDbEQsTUFBTXlCLG9CQUFvQixNQUFNMUIsK0VBQW9CQTtJQUVwRCxPQUFPO1FBQ0wsR0FBRzhDLFFBQVE7UUFDWHRCO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlUixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbWluaXN0cnlvZm1lZGlhL0RvY3VtZW50cy9HSVQvdHdnQ0MvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUdMVEYgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XG5pbXBvcnQgdHlwZSB7IEFwcENvbnRleHQsIEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gJy4uL3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5pbXBvcnQgZ2V0TWVudSBmcm9tICcuLi91dGlscy9xdWVyaWVzL2dldE1lbnUnO1xuaW1wb3J0IGdldE5hdmlnYXRpb25Db250ZW50IGZyb20gJy4uL3V0aWxzL3F1ZXJpZXMvZ2V0TmF2aWdhdGlvbkNvbnRlbnQnO1xuaW1wb3J0IGdldEluc3RhZ3JhbVNlY3Rpb24gZnJvbSAnLi4vdXRpbHMvcXVlcmllcy9nbG9iYWxzL2dldEluc3RhZ3JhbVNlY3Rpb24nO1xuaW1wb3J0IHsgRk9PVEVSX01FTlUsIEhFQURFUl9NRU5VIH0gZnJvbSAnLi4vdXRpbHMvbWVudXMnO1xuaW1wb3J0IHR5cGUgeyBNZW51TW9kZWwgfSBmcm9tICcuLi91dGlscy9tb2RlbHMvTWVudU1vZGVsJztcbmltcG9ydCB0eXBlIHsgSW5zdGFncmFtU2VjdGlvbk1vZGVsIH0gZnJvbSAnLi4vdXRpbHMvbW9kZWxzL3NlY3Rpb25zL0luc3RhZ3JhbVNlY3Rpb25Nb2RlbCc7XG5pbXBvcnQgdHlwZSB7IE5hdmlnYXRpb25Db250ZW50TW9kZWwgfSBmcm9tICcuLi91dGlscy9tb2RlbHMvTmF2aWdhdGlvbk1vZGVsJztcbmltcG9ydCB7XG4gIENMSU5JQ0FMX1NUVURJRVNfUEFHRSxcbiAgQ0xJTklDQUxfU1RVRFlfUEFUSCxcbiAgQ09PS0lFX1BPTElDWV9QQUdFLFxuICBNRURJQ0FMX1JFU09VUkNFX0hVQl9QQUdFLFxuICBQVUJMSUNBVElPTlNfUEFHRSxcbiAgT1VSX1NDSUVOQ0VfUEFHRSxcbiAgU1RBR0VTX1BBR0UsXG4gIFNUT0NLSVNUU19QQUdFLFxufSBmcm9tICcuLi91dGlscy9yb3V0ZXMnO1xuaW1wb3J0IFNtb290aFNjcm9sbENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0FuaW1hdGlvbi9QYXJhbGxheC9TbW9vdGhTY3JvbGxDb250YWluZXInO1xuXG5jb25zdCBBcHBXcmFwcGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvQXBwV3JhcHBlcicpKTtcbmNvbnN0IE5hdkJhciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2QmFyJykpO1xuY29uc3QgSW5zdGFncmFtU2VjdGlvbiA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9TZWN0aW9ucy9JbnN0YWdyYW1TZWN0aW9uJyksXG4pO1xuY29uc3QgRm9vdGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcicpKTtcblxuLy8gQ2xpZW50LXNpZGUgY2FjaGUsIHNoYXJlZCBmb3IgdGhlIHdob2xlIHNlc3Npb24gb2YgdGhlIHVzZXIgaW4gdGhlIGJyb3dzZXIuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cbmNvbnN0IEhJREVfSU5TVEFHUkFNX1BBVEhTID0gW1xuICBNRURJQ0FMX1JFU09VUkNFX0hVQl9QQUdFLFxuICBPVVJfU0NJRU5DRV9QQUdFLFxuICBQVUJMSUNBVElPTlNfUEFHRSxcbiAgQ0xJTklDQUxfU1RVRElFU19QQUdFLFxuICBDTElOSUNBTF9TVFVEWV9QQVRILFxuICBTVEFHRVNfUEFHRSxcbiAgU1RPQ0tJU1RTX1BBR0UsXG4gIENPT0tJRV9QT0xJQ1lfUEFHRSxcbl07XG5cbmludGVyZmFjZSBNeUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xuICBlbW90aW9uQ2FjaGU/OiBFbW90aW9uQ2FjaGU7XG4gIGhlYWRlck1lbnU/OiBNZW51TW9kZWw7XG4gIGZvb3Rlck1lbnU/OiBNZW51TW9kZWw7XG4gIG5hdmlnYXRpb25Db250ZW50PzogTmF2aWdhdGlvbkNvbnRlbnRNb2RlbDtcbiAgaW5zdGFncmFtU2VjdGlvbjogSW5zdGFncmFtU2VjdGlvbk1vZGVsO1xufVxuXG5mdW5jdGlvbiBNeUFwcChwcm9wczogTXlBcHBQcm9wcykge1xuICBjb25zdCB7XG4gICAgQ29tcG9uZW50LFxuICAgIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsXG4gICAgcGFnZVByb3BzLFxuICAgIGhlYWRlck1lbnUsXG4gICAgZm9vdGVyTWVudSxcbiAgICBuYXZpZ2F0aW9uQ29udGVudCxcbiAgICBpbnN0YWdyYW1TZWN0aW9uLFxuICB9ID0gcHJvcHM7XG5cbiAgdXNlR0xURi5wcmVsb2FkKCcvZ2x0ZnMvY2FuLmdsdGYnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5KSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHNob3VsZFNob3dJbnN0YWdyYW0gPVxuICAgICFISURFX0lOU1RBR1JBTV9QQVRIUy5zb21lKChwYXRoKSA9PiByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aChwYXRoKSkgJiZcbiAgICBpbnN0YWdyYW1TZWN0aW9uLnZpc2liaWxpdHkgPT09ICdWaXNpYmxlJztcblxuICByZXR1cm4gKFxuICAgIDxBcHBXcmFwcGVyIGVtb3Rpb25DYWNoZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxOYXZCYXJcbiAgICAgICAgbWVudT17aGVhZGVyTWVudX1cbiAgICAgICAgbG9nbz17bmF2aWdhdGlvbkNvbnRlbnQ/LmxvZ299XG4gICAgICAgIGhlYWRlckNvbnRlbnQ9e25hdmlnYXRpb25Db250ZW50Py5oZWFkZXJDb250ZW50fVxuICAgICAgLz5cbiAgICAgIDxTbW9vdGhTY3JvbGxDb250YWluZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAge3Nob3VsZFNob3dJbnN0YWdyYW0gJiYgPEluc3RhZ3JhbVNlY3Rpb24gZGF0YT17aW5zdGFncmFtU2VjdGlvbn0gLz59XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBtZW51PXtmb290ZXJNZW51fVxuICAgICAgICAgIGxvZ289e25hdmlnYXRpb25Db250ZW50Py5sb2dvfVxuICAgICAgICAgIGZvb3RlckNvbnRlbnQ9e25hdmlnYXRpb25Db250ZW50Py5mb290ZXJDb250ZW50fVxuICAgICAgICAvPlxuICAgICAgPC9TbW9vdGhTY3JvbGxDb250YWluZXI+XG4gICAgPC9BcHBXcmFwcGVyPlxuICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dDogQXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG5cbiAgY29uc3QgaGVhZGVyTWVudSA9IGF3YWl0IGdldE1lbnUoeyBpZDogSEVBREVSX01FTlUgfSk7XG4gIGNvbnN0IGZvb3Rlck1lbnUgPSBhd2FpdCBnZXRNZW51KHsgaWQ6IEZPT1RFUl9NRU5VIH0pO1xuICBjb25zdCBpbnN0YWdyYW1TZWN0aW9uID0gYXdhaXQgZ2V0SW5zdGFncmFtU2VjdGlvbigpO1xuICBjb25zdCBuYXZpZ2F0aW9uQ29udGVudCA9IGF3YWl0IGdldE5hdmlnYXRpb25Db250ZW50KCk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5hcHBQcm9wcyxcbiAgICBoZWFkZXJNZW51LFxuICAgIGZvb3Rlck1lbnUsXG4gICAgbmF2aWdhdGlvbkNvbnRlbnQsXG4gICAgaW5zdGFncmFtU2VjdGlvbixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VSb3V0ZXIiLCJ1c2VHTFRGIiwiQXBwIiwidXNlRWZmZWN0IiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiZ2V0TWVudSIsImdldE5hdmlnYXRpb25Db250ZW50IiwiZ2V0SW5zdGFncmFtU2VjdGlvbiIsIkZPT1RFUl9NRU5VIiwiSEVBREVSX01FTlUiLCJDTElOSUNBTF9TVFVESUVTX1BBR0UiLCJDTElOSUNBTF9TVFVEWV9QQVRIIiwiQ09PS0lFX1BPTElDWV9QQUdFIiwiTUVESUNBTF9SRVNPVVJDRV9IVUJfUEFHRSIsIlBVQkxJQ0FUSU9OU19QQUdFIiwiT1VSX1NDSUVOQ0VfUEFHRSIsIlNUQUdFU19QQUdFIiwiU1RPQ0tJU1RTX1BBR0UiLCJTbW9vdGhTY3JvbGxDb250YWluZXIiLCJBcHBXcmFwcGVyIiwiTmF2QmFyIiwiSW5zdGFncmFtU2VjdGlvbiIsIkZvb3RlciIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJISURFX0lOU1RBR1JBTV9QQVRIUyIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJoZWFkZXJNZW51IiwiZm9vdGVyTWVudSIsIm5hdmlnYXRpb25Db250ZW50IiwiaW5zdGFncmFtU2VjdGlvbiIsInByZWxvYWQiLCJ3aW5kb3ciLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyb3V0ZXIiLCJzaG91bGRTaG93SW5zdGFncmFtIiwic29tZSIsInBhdGgiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJ2aXNpYmlsaXR5IiwibWVudSIsImxvZ28iLCJoZWFkZXJDb250ZW50IiwiZGF0YSIsImZvb3RlckNvbnRlbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiYXBwUHJvcHMiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./utils/apolloClient.tsx":
/*!********************************!*\
  !*** ./utils/apolloClient.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ \"(pages-dir-node)/./utils/globals.tsx\");\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: _globals__WEBPACK_IMPORTED_MODULE_2__.GRAPHQL_URL,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n        typePolicies: {\n            Query: {\n                fields: {\n                    posts: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__.relayStylePagination)(),\n                    publications: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__.relayStylePagination)(),\n                    clinicalStudies: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_1__.relayStylePagination)()\n                }\n            }\n        }\n    }),\n    defaultOptions: {\n        watchQuery: {\n            fetchPolicy: 'no-cache'\n        },\n        query: {\n            fetchPolicy: 'no-cache'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL2Fwb2xsb0NsaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZEO0FBQ0c7QUFDeEI7QUFFeEMsTUFBTUksU0FBUyxJQUFJSix3REFBWUEsQ0FBQztJQUM5QkssS0FBS0YsaURBQVdBO0lBQ2hCRyxPQUFPLElBQUlMLHlEQUFhQSxDQUFDO1FBQ3ZCTSxjQUFjO1lBQ1pDLE9BQU87Z0JBQ0xDLFFBQVE7b0JBQ05DLE9BQU9SLDhFQUFvQkE7b0JBQzNCUyxjQUFjVCw4RUFBb0JBO29CQUNsQ1UsaUJBQWlCViw4RUFBb0JBO2dCQUN2QztZQUNGO1FBQ0Y7SUFDRjtJQUNBVyxnQkFBZ0I7UUFDZEMsWUFBWTtZQUNWQyxhQUFhO1FBQ2Y7UUFDQUMsT0FBTztZQUNMRCxhQUFhO1FBQ2Y7SUFDRjtBQUNGO0FBRUEsaUVBQWVYLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5pc3RyeW9mbWVkaWEvRG9jdW1lbnRzL0dJVC90d2dDQy91dGlscy9hcG9sbG9DbGllbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHJlbGF5U3R5bGVQYWdpbmF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzJztcbmltcG9ydCB7IEdSQVBIUUxfVVJMIH0gZnJvbSAnLi9nbG9iYWxzJztcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogR1JBUEhRTF9VUkwsXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICBRdWVyeToge1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBwb3N0czogcmVsYXlTdHlsZVBhZ2luYXRpb24oKSxcbiAgICAgICAgICBwdWJsaWNhdGlvbnM6IHJlbGF5U3R5bGVQYWdpbmF0aW9uKCksXG4gICAgICAgICAgY2xpbmljYWxTdHVkaWVzOiByZWxheVN0eWxlUGFnaW5hdGlvbigpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbiAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICB3YXRjaFF1ZXJ5OiB7XG4gICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICB9LFxuICAgIHF1ZXJ5OiB7XG4gICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwicmVsYXlTdHlsZVBhZ2luYXRpb24iLCJHUkFQSFFMX1VSTCIsImNsaWVudCIsInVyaSIsImNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJwb3N0cyIsInB1YmxpY2F0aW9ucyIsImNsaW5pY2FsU3R1ZGllcyIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwicXVlcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/apolloClient.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/createEmotionCache.tsx":
/*!**************************************!*\
  !*** ./utils/createEmotionCache.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// prepend: true moves MUI styles to the top of the <head> so they're loaded first.\n// It allows developers to easily override MUI styles with other styling solutions,\n// like CSS modules.\nconst createEmotionCache = ()=>(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: 'css',\n        prepend: true\n    });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEmotionCache);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL2NyZWF0ZUVtb3Rpb25DYWNoZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFFekMsbUZBQW1GO0FBQ25GLG1GQUFtRjtBQUNuRixvQkFBb0I7QUFDcEIsTUFBTUMscUJBQXFCLElBQU1ELDBEQUFXQSxDQUFDO1FBQUVFLEtBQUs7UUFBT0MsU0FBUztJQUFLO0FBRXpFLGlFQUFlRixrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5pc3RyeW9mbWVkaWEvRG9jdW1lbnRzL0dJVC90d2dDQy91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5cbi8vIHByZXBlbmQ6IHRydWUgbW92ZXMgTVVJIHN0eWxlcyB0byB0aGUgdG9wIG9mIHRoZSA8aGVhZD4gc28gdGhleSdyZSBsb2FkZWQgZmlyc3QuXG4vLyBJdCBhbGxvd3MgZGV2ZWxvcGVycyB0byBlYXNpbHkgb3ZlcnJpZGUgTVVJIHN0eWxlcyB3aXRoIG90aGVyIHN0eWxpbmcgc29sdXRpb25zLFxuLy8gbGlrZSBDU1MgbW9kdWxlcy5cbmNvbnN0IGNyZWF0ZUVtb3Rpb25DYWNoZSA9ICgpID0+IGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJywgcHJlcGVuZDogdHJ1ZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW1vdGlvbkNhY2hlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5IiwicHJlcGVuZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/createEmotionCache.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/globals.tsx":
/*!***************************!*\
  !*** ./utils/globals.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   CMS_URL: () => (/* binding */ CMS_URL),\n/* harmony export */   CONTACT_FORM_ID: () => (/* binding */ CONTACT_FORM_ID),\n/* harmony export */   GRAPHQL_URL: () => (/* binding */ GRAPHQL_URL),\n/* harmony export */   REVALIDATE_PAGES: () => (/* binding */ REVALIDATE_PAGES)\n/* harmony export */ });\nconst REVALIDATE_PAGES = 10; // 24 hours in seconds\nconst BASE_URL = 'https://capricare.kinsta.cloud';\nconst CMS_URL = 'https://capricare.kinsta.cloud';\nconst GRAPHQL_URL = `${CMS_URL}/graphql`;\n// Forms\nconst CONTACT_FORM_ID = 1;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL2dsb2JhbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsbUJBQW1CLEdBQUcsQ0FBQyxzQkFBc0I7QUFDbkQsTUFBTUMsV0FBVyxpQ0FBaUM7QUFDbEQsTUFBTUMsVUFBVSxpQ0FBaUM7QUFDakQsTUFBTUMsY0FBYyxHQUFHRCxRQUFRLFFBQVEsQ0FBQyxDQUFDO0FBRWhELFFBQVE7QUFDRCxNQUFNRSxrQkFBa0IsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21pbmlzdHJ5b2ZtZWRpYS9Eb2N1bWVudHMvR0lUL3R3Z0NDL3V0aWxzL2dsb2JhbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRVZBTElEQVRFX1BBR0VTID0gMTA7IC8vIDI0IGhvdXJzIGluIHNlY29uZHNcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2NhcHJpY2FyZS5raW5zdGEuY2xvdWQnO1xuZXhwb3J0IGNvbnN0IENNU19VUkwgPSAnaHR0cHM6Ly9jYXByaWNhcmUua2luc3RhLmNsb3VkJztcbmV4cG9ydCBjb25zdCBHUkFQSFFMX1VSTCA9IGAke0NNU19VUkx9L2dyYXBocWxgO1xuXG4vLyBGb3Jtc1xuZXhwb3J0IGNvbnN0IENPTlRBQ1RfRk9STV9JRCA9IDE7XG4iXSwibmFtZXMiOlsiUkVWQUxJREFURV9QQUdFUyIsIkJBU0VfVVJMIiwiQ01TX1VSTCIsIkdSQVBIUUxfVVJMIiwiQ09OVEFDVF9GT1JNX0lEIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/globals.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/gqls/imageGql.tsx":
/*!*********************************!*\
  !*** ./utils/gqls/imageGql.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IMAGE_GQL_WITHOUT_NODE: () => (/* binding */ IMAGE_GQL_WITHOUT_NODE),\n/* harmony export */   IMAGE_WITH_DETAILS_GQL: () => (/* binding */ IMAGE_WITH_DETAILS_GQL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst IMAGE_WITH_DETAILS_GQL = `\n  node {\n    altText\n    sourceUrl\n    mediaDetails {\n      height\n      width\n    }\n  }\n`;\nconst IMAGE_GQL_WITHOUT_NODE = `\n  altText\n  sourceUrl\n`;\nconst IMAGE_GQL = `\n  node {  \n    ${IMAGE_GQL_WITHOUT_NODE}\n  }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IMAGE_GQL);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL2dxbHMvaW1hZ2VHcWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLHlCQUF5QixDQUFDOzs7Ozs7Ozs7QUFTdkMsQ0FBQyxDQUFDO0FBRUssTUFBTUMseUJBQXlCLENBQUM7OztBQUd2QyxDQUFDLENBQUM7QUFFRixNQUFNQyxZQUFZLENBQUM7O0lBRWYsRUFBRUQsdUJBQXVCOztBQUU3QixDQUFDO0FBRUQsaUVBQWVDLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5pc3RyeW9mbWVkaWEvRG9jdW1lbnRzL0dJVC90d2dDQy91dGlscy9ncWxzL2ltYWdlR3FsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSU1BR0VfV0lUSF9ERVRBSUxTX0dRTCA9IGBcbiAgbm9kZSB7XG4gICAgYWx0VGV4dFxuICAgIHNvdXJjZVVybFxuICAgIG1lZGlhRGV0YWlscyB7XG4gICAgICBoZWlnaHRcbiAgICAgIHdpZHRoXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSU1BR0VfR1FMX1dJVEhPVVRfTk9ERSA9IGBcbiAgYWx0VGV4dFxuICBzb3VyY2VVcmxcbmA7XG5cbmNvbnN0IElNQUdFX0dRTCA9IGBcbiAgbm9kZSB7ICBcbiAgICAke0lNQUdFX0dRTF9XSVRIT1VUX05PREV9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IElNQUdFX0dRTDtcbiJdLCJuYW1lcyI6WyJJTUFHRV9XSVRIX0RFVEFJTFNfR1FMIiwiSU1BR0VfR1FMX1dJVEhPVVRfTk9ERSIsIklNQUdFX0dRTCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/gqls/imageGql.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/gqls/linkGql.tsx":
/*!********************************!*\
  !*** ./utils/gqls/linkGql.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst LINK_GQL = `\n  title\n  url\n  target\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LINK_GQL);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL2dxbHMvbGlua0dxbC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVcsQ0FBQzs7OztBQUlsQixDQUFDO0FBRUQsaUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5pc3RyeW9mbWVkaWEvRG9jdW1lbnRzL0dJVC90d2dDQy91dGlscy9ncWxzL2xpbmtHcWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExJTktfR1FMID0gYFxuICB0aXRsZVxuICB1cmxcbiAgdGFyZ2V0XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMSU5LX0dRTDtcbiJdLCJuYW1lcyI6WyJMSU5LX0dRTCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/gqls/linkGql.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/menus.tsx":
/*!*************************!*\
  !*** ./utils/menus.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FOOTER_MENU: () => (/* binding */ FOOTER_MENU),\n/* harmony export */   HEADER_MENU: () => (/* binding */ HEADER_MENU)\n/* harmony export */ });\nconst HEADER_MENU = 'Header';\nconst FOOTER_MENU = 'Footer';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL21lbnVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGNBQWMsU0FBUztBQUM3QixNQUFNQyxjQUFjLFNBQVMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW5pc3RyeW9mbWVkaWEvRG9jdW1lbnRzL0dJVC90d2dDQy91dGlscy9tZW51cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEhFQURFUl9NRU5VID0gJ0hlYWRlcic7XG5leHBvcnQgY29uc3QgRk9PVEVSX01FTlUgPSAnRm9vdGVyJztcbiJdLCJuYW1lcyI6WyJIRUFERVJfTUVOVSIsIkZPT1RFUl9NRU5VIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/menus.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/queries/getMenu.tsx":
/*!***********************************!*\
  !*** ./utils/queries/getMenu.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apolloClient */ \"(pages-dir-node)/./utils/apolloClient.tsx\");\n\n\nconst GET_MENU = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)`\n  query GET_MENU($id: ID!) {\n    menu(id: $id, idType: NAME) {\n      id\n      name\n      menuItems(first: 100) {\n        nodes {\n          id\n          title\n          url\n          description\n          label\n          parentId\n        }\n      }\n    }\n  }\n`;\nconst getMenu = async (input)=>{\n    const { data } = await _apolloClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query({\n        query: GET_MENU,\n        variables: input\n    });\n    return data.menu;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenu);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL3F1ZXJpZXMvZ2V0TWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNBO0FBR3JDLE1BQU1FLFdBQVdGLG1EQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyQixDQUFDO0FBVUQsTUFBTUcsVUFBVSxPQUFPQztJQUNyQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1KLDJEQUFZLENBQWtCO1FBQ25ESyxPQUFPSjtRQUNQSyxXQUFXSDtJQUNiO0lBRUEsT0FBT0MsS0FBS0csSUFBSTtBQUNsQjtBQUVBLGlFQUFlTCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbWluaXN0cnlvZm1lZGlhL0RvY3VtZW50cy9HSVQvdHdnQ0MvdXRpbHMvcXVlcmllcy9nZXRNZW51LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2Fwb2xsb0NsaWVudCc7XG5pbXBvcnQgeyBNZW51TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvTWVudU1vZGVsJztcblxuY29uc3QgR0VUX01FTlUgPSBncWxgXG4gIHF1ZXJ5IEdFVF9NRU5VKCRpZDogSUQhKSB7XG4gICAgbWVudShpZDogJGlkLCBpZFR5cGU6IE5BTUUpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBtZW51SXRlbXMoZmlyc3Q6IDEwMCkge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHVybFxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBwYXJlbnRJZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSW5wdXQge1xuICBpZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVzcG9uc2Uge1xuICBtZW51OiBNZW51TW9kZWw7XG59XG5cbmNvbnN0IGdldE1lbnUgPSBhc3luYyAoaW5wdXQ6IElucHV0KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5PFJlc3BvbnNlLCBJbnB1dD4oe1xuICAgIHF1ZXJ5OiBHRVRfTUVOVSxcbiAgICB2YXJpYWJsZXM6IGlucHV0LFxuICB9KTtcblxuICByZXR1cm4gZGF0YS5tZW51O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVudTtcbiJdLCJuYW1lcyI6WyJncWwiLCJjbGllbnQiLCJHRVRfTUVOVSIsImdldE1lbnUiLCJpbnB1dCIsImRhdGEiLCJxdWVyeSIsInZhcmlhYmxlcyIsIm1lbnUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/queries/getMenu.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/queries/getNavigationContent.tsx":
/*!************************************************!*\
  !*** ./utils/queries/getNavigationContent.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET_NAVIGATION: () => (/* binding */ GET_NAVIGATION),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gqls_imageGql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gqls/imageGql */ \"(pages-dir-node)/./utils/gqls/imageGql.tsx\");\n/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apolloClient */ \"(pages-dir-node)/./utils/apolloClient.tsx\");\n/* harmony import */ var _gqls_linkGql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gqls/linkGql */ \"(pages-dir-node)/./utils/gqls/linkGql.tsx\");\n\n\n\n\nconst GET_NAVIGATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)`\n  query GET_NAVIGATION {\n    globals {\n      globalContent {\n        navigationContent {\n          logo {\n            ${_gqls_imageGql__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\n          }\n          headerContent {\n            featuredLink {\n              ${_gqls_linkGql__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\n            }\n          }\n          footerContent {\n            description\n            copyright\n            statement\n            featuredPage {\n              title\n              description\n              link {\n                ${_gqls_linkGql__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\nconst getNavigationContent = async ()=>{\n    const { data } = await _apolloClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"].query({\n        query: GET_NAVIGATION\n    });\n    return data.globals.globalContent.navigationContent;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNavigationContent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL3F1ZXJpZXMvZ2V0TmF2aWdhdGlvbkNvbnRlbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDSTtBQUVKO0FBQ0U7QUFFaEMsTUFBTUksaUJBQWlCSixtREFBRyxDQUFDOzs7Ozs7WUFNdEIsRUFBRUMsc0RBQVNBLENBQUM7Ozs7Y0FJVixFQUFFRSxxREFBUUEsQ0FBQzs7Ozs7Ozs7Ozs7Z0JBV1QsRUFBRUEscURBQVFBLENBQUM7Ozs7Ozs7O0FBUTNCLENBQUMsQ0FBQztBQVFGLE1BQU1FLHVCQUF1QjtJQUMzQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1KLDJEQUFZLENBQVc7UUFDNUNLLE9BQU9IO0lBQ1Q7SUFDQSxPQUFPRSxLQUFLRSxPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsaUJBQWlCO0FBQ3JEO0FBRUEsaUVBQWVMLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL21pbmlzdHJ5b2ZtZWRpYS9Eb2N1bWVudHMvR0lUL3R3Z0NDL3V0aWxzL3F1ZXJpZXMvZ2V0TmF2aWdhdGlvbkNvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBJTUFHRV9HUUwgZnJvbSAnLi4vZ3Fscy9pbWFnZUdxbCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGVudE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL05hdmlnYXRpb25Nb2RlbCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2Fwb2xsb0NsaWVudCc7XG5pbXBvcnQgTElOS19HUUwgZnJvbSAnLi4vZ3Fscy9saW5rR3FsJztcblxuZXhwb3J0IGNvbnN0IEdFVF9OQVZJR0FUSU9OID0gZ3FsYFxuICBxdWVyeSBHRVRfTkFWSUdBVElPTiB7XG4gICAgZ2xvYmFscyB7XG4gICAgICBnbG9iYWxDb250ZW50IHtcbiAgICAgICAgbmF2aWdhdGlvbkNvbnRlbnQge1xuICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgJHtJTUFHRV9HUUx9XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgZmVhdHVyZWRMaW5rIHtcbiAgICAgICAgICAgICAgJHtMSU5LX0dRTH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9vdGVyQ29udGVudCB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGZlYXR1cmVkUGFnZSB7XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICR7TElOS19HUUx9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBSZXNwb25zZSB7XG4gIGdsb2JhbHM6IHtcbiAgICBnbG9iYWxDb250ZW50OiB7IG5hdmlnYXRpb25Db250ZW50OiBOYXZpZ2F0aW9uQ29udGVudE1vZGVsIH07XG4gIH07XG59XG5cbmNvbnN0IGdldE5hdmlnYXRpb25Db250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeTxSZXNwb25zZT4oe1xuICAgIHF1ZXJ5OiBHRVRfTkFWSUdBVElPTixcbiAgfSk7XG4gIHJldHVybiBkYXRhLmdsb2JhbHMuZ2xvYmFsQ29udGVudC5uYXZpZ2F0aW9uQ29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE5hdmlnYXRpb25Db250ZW50O1xuIl0sIm5hbWVzIjpbImdxbCIsIklNQUdFX0dRTCIsImNsaWVudCIsIkxJTktfR1FMIiwiR0VUX05BVklHQVRJT04iLCJnZXROYXZpZ2F0aW9uQ29udGVudCIsImRhdGEiLCJxdWVyeSIsImdsb2JhbHMiLCJnbG9iYWxDb250ZW50IiwibmF2aWdhdGlvbkNvbnRlbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/queries/getNavigationContent.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/queries/globals/getInstagramSection.tsx":
/*!*******************************************************!*\
  !*** ./utils/queries/globals/getInstagramSection.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET_INSTAGRAM_SECTION: () => (/* binding */ GET_INSTAGRAM_SECTION),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apolloClient */ \"(pages-dir-node)/./utils/apolloClient.tsx\");\n/* harmony import */ var _gqls_linkGql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gqls/linkGql */ \"(pages-dir-node)/./utils/gqls/linkGql.tsx\");\n\n\n\nconst GET_INSTAGRAM_SECTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)`\n  query GET_INSTAGRAM_SECTION {\n    globals {\n      globalContent {\n        instagramSection {\n          visibility\n          caption\n          heading\n          link {\n            ${_gqls_linkGql__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\n          }\n          widgetId\n        }\n      }\n    }\n  }\n`;\nconst getInstagramSection = async ()=>{\n    const { data } = await _apolloClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query({\n        query: GET_INSTAGRAM_SECTION\n    });\n    return data.globals.globalContent.instagramSection;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInstagramSection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL3F1ZXJpZXMvZ2xvYmFscy9nZXRJbnN0YWdyYW1TZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFDRztBQUVFO0FBRW5DLE1BQU1HLHdCQUF3QkgsbURBQUcsQ0FBQzs7Ozs7Ozs7O1lBUzdCLEVBQUVFLHFEQUFRQSxDQUFDOzs7Ozs7O0FBT3ZCLENBQUMsQ0FBQztBQVFGLE1BQU1FLHNCQUFzQjtJQUMxQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1KLDJEQUFZLENBQVc7UUFDNUNLLE9BQU9IO0lBQ1Q7SUFDQSxPQUFPRSxLQUFLRSxPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsZ0JBQWdCO0FBQ3BEO0FBRUEsaUVBQWVMLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL21pbmlzdHJ5b2ZtZWRpYS9Eb2N1bWVudHMvR0lUL3R3Z0NDL3V0aWxzL3F1ZXJpZXMvZ2xvYmFscy9nZXRJbnN0YWdyYW1TZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2Fwb2xsb0NsaWVudCc7XG5pbXBvcnQgeyBJbnN0YWdyYW1TZWN0aW9uTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvc2VjdGlvbnMvSW5zdGFncmFtU2VjdGlvbk1vZGVsJztcbmltcG9ydCBMSU5LX0dRTCBmcm9tICcuLi8uLi9ncWxzL2xpbmtHcWwnO1xuXG5leHBvcnQgY29uc3QgR0VUX0lOU1RBR1JBTV9TRUNUSU9OID0gZ3FsYFxuICBxdWVyeSBHRVRfSU5TVEFHUkFNX1NFQ1RJT04ge1xuICAgIGdsb2JhbHMge1xuICAgICAgZ2xvYmFsQ29udGVudCB7XG4gICAgICAgIGluc3RhZ3JhbVNlY3Rpb24ge1xuICAgICAgICAgIHZpc2liaWxpdHlcbiAgICAgICAgICBjYXB0aW9uXG4gICAgICAgICAgaGVhZGluZ1xuICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgJHtMSU5LX0dRTH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2lkZ2V0SWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIFJlc3BvbnNlIHtcbiAgZ2xvYmFsczoge1xuICAgIGdsb2JhbENvbnRlbnQ6IHsgaW5zdGFncmFtU2VjdGlvbjogSW5zdGFncmFtU2VjdGlvbk1vZGVsIH07XG4gIH07XG59XG5cbmNvbnN0IGdldEluc3RhZ3JhbVNlY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5PFJlc3BvbnNlPih7XG4gICAgcXVlcnk6IEdFVF9JTlNUQUdSQU1fU0VDVElPTixcbiAgfSk7XG4gIHJldHVybiBkYXRhLmdsb2JhbHMuZ2xvYmFsQ29udGVudC5pbnN0YWdyYW1TZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5zdGFncmFtU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJncWwiLCJjbGllbnQiLCJMSU5LX0dRTCIsIkdFVF9JTlNUQUdSQU1fU0VDVElPTiIsImdldEluc3RhZ3JhbVNlY3Rpb24iLCJkYXRhIiwicXVlcnkiLCJnbG9iYWxzIiwiZ2xvYmFsQ29udGVudCIsImluc3RhZ3JhbVNlY3Rpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/queries/globals/getInstagramSection.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./utils/routes.tsx":
/*!**************************!*\
  !*** ./utils/routes.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ABOUT_US_PAGE: () => (/* binding */ ABOUT_US_PAGE),\n/* harmony export */   BLOG_HUB_PAGE: () => (/* binding */ BLOG_HUB_PAGE),\n/* harmony export */   BREASTFEEDING_PAGE: () => (/* binding */ BREASTFEEDING_PAGE),\n/* harmony export */   CLINICAL_STUDIES_PAGE: () => (/* binding */ CLINICAL_STUDIES_PAGE),\n/* harmony export */   CLINICAL_STUDY_PATH: () => (/* binding */ CLINICAL_STUDY_PATH),\n/* harmony export */   CONTACT_US_PAGE: () => (/* binding */ CONTACT_US_PAGE),\n/* harmony export */   COOKIE_POLICY_PAGE: () => (/* binding */ COOKIE_POLICY_PAGE),\n/* harmony export */   FAQ_PAGE: () => (/* binding */ FAQ_PAGE),\n/* harmony export */   HEALTHCARE_PROFESSIONALS: () => (/* binding */ HEALTHCARE_PROFESSIONALS),\n/* harmony export */   HOME_PAGE: () => (/* binding */ HOME_PAGE),\n/* harmony export */   MEDICAL_RESOURCE_HUB_PAGE: () => (/* binding */ MEDICAL_RESOURCE_HUB_PAGE),\n/* harmony export */   OUR_PRODUCTS_PAGE: () => (/* binding */ OUR_PRODUCTS_PAGE),\n/* harmony export */   OUR_SCIENCE_PAGE: () => (/* binding */ OUR_SCIENCE_PAGE),\n/* harmony export */   PRIVACY_POLICY_PAGE: () => (/* binding */ PRIVACY_POLICY_PAGE),\n/* harmony export */   PRODUCT_PATH: () => (/* binding */ PRODUCT_PATH),\n/* harmony export */   PUBLICATIONS_PAGE: () => (/* binding */ PUBLICATIONS_PAGE),\n/* harmony export */   STAGES_PAGE: () => (/* binding */ STAGES_PAGE),\n/* harmony export */   STOCKISTS_PAGE: () => (/* binding */ STOCKISTS_PAGE),\n/* harmony export */   WHY_CAPRICARE_PAGE: () => (/* binding */ WHY_CAPRICARE_PAGE)\n/* harmony export */ });\n// Commercial sites\nconst HOME_PAGE = '/';\nconst WHY_CAPRICARE_PAGE = '/why-capricare';\nconst ABOUT_US_PAGE = '/about-us';\nconst BLOG_HUB_PAGE = '/parent-support-hub';\nconst BREASTFEEDING_PAGE = '/breastfeeding';\nconst HEALTHCARE_PROFESSIONALS = '/healthcare-professionals';\nconst CONTACT_US_PAGE = '/contact-us';\nconst PRIVACY_POLICY_PAGE = '/privacy-policy';\nconst COOKIE_POLICY_PAGE = '/cookie-policy';\nconst FAQ_PAGE = '/faq';\nconst STOCKISTS_PAGE = '/stockists';\nconst OUR_PRODUCTS_PAGE = '/our-products';\nconst PRODUCT_PATH = '/product';\n// Professional sites\nconst MEDICAL_RESOURCE_HUB_PAGE = '/healthcare-professionals';\nconst OUR_SCIENCE_PAGE = `${MEDICAL_RESOURCE_HUB_PAGE}/our-science`;\nconst PUBLICATIONS_PAGE = `${MEDICAL_RESOURCE_HUB_PAGE}/publications`;\nconst CLINICAL_STUDIES_PAGE = '/clinical-studies';\nconst CLINICAL_STUDY_PATH = '/clinical-study';\nconst STAGES_PAGE = '/stages';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3V0aWxzL3JvdXRlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1CQUFtQjtBQUNaLE1BQU1BLFlBQVksSUFBSTtBQUN0QixNQUFNQyxxQkFBcUIsaUJBQWlCO0FBQzVDLE1BQU1DLGdCQUFnQixZQUFZO0FBQ2xDLE1BQU1DLGdCQUFnQixzQkFBc0I7QUFDNUMsTUFBTUMscUJBQXFCLGlCQUFpQjtBQUM1QyxNQUFNQywyQkFBMkIsNEJBQTRCO0FBQzdELE1BQU1DLGtCQUFrQixjQUFjO0FBQ3RDLE1BQU1DLHNCQUFzQixrQkFBa0I7QUFDOUMsTUFBTUMscUJBQXFCLGlCQUFpQjtBQUM1QyxNQUFNQyxXQUFXLE9BQU87QUFDeEIsTUFBTUMsaUJBQWlCLGFBQWE7QUFDcEMsTUFBTUMsb0JBQW9CLGdCQUFnQjtBQUMxQyxNQUFNQyxlQUFlLFdBQVc7QUFFdkMscUJBQXFCO0FBQ2QsTUFBTUMsNEJBQTRCLDRCQUE0QjtBQUM5RCxNQUFNQyxtQkFBbUIsR0FBR0QsMEJBQTBCLFlBQVksQ0FBQyxDQUFDO0FBQ3BFLE1BQU1FLG9CQUFvQixHQUFHRiwwQkFBMEIsYUFBYSxDQUFDLENBQUM7QUFDdEUsTUFBTUcsd0JBQXdCLG9CQUFvQjtBQUNsRCxNQUFNQyxzQkFBc0Isa0JBQWtCO0FBQzlDLE1BQU1DLGNBQWMsVUFBVSIsInNvdXJjZXMiOlsiL1VzZXJzL21pbmlzdHJ5b2ZtZWRpYS9Eb2N1bWVudHMvR0lUL3R3Z0NDL3V0aWxzL3JvdXRlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29tbWVyY2lhbCBzaXRlc1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRSA9ICcvJztcbmV4cG9ydCBjb25zdCBXSFlfQ0FQUklDQVJFX1BBR0UgPSAnL3doeS1jYXByaWNhcmUnO1xuZXhwb3J0IGNvbnN0IEFCT1VUX1VTX1BBR0UgPSAnL2Fib3V0LXVzJztcbmV4cG9ydCBjb25zdCBCTE9HX0hVQl9QQUdFID0gJy9wYXJlbnQtc3VwcG9ydC1odWInO1xuZXhwb3J0IGNvbnN0IEJSRUFTVEZFRURJTkdfUEFHRSA9ICcvYnJlYXN0ZmVlZGluZyc7XG5leHBvcnQgY29uc3QgSEVBTFRIQ0FSRV9QUk9GRVNTSU9OQUxTID0gJy9oZWFsdGhjYXJlLXByb2Zlc3Npb25hbHMnO1xuZXhwb3J0IGNvbnN0IENPTlRBQ1RfVVNfUEFHRSA9ICcvY29udGFjdC11cyc7XG5leHBvcnQgY29uc3QgUFJJVkFDWV9QT0xJQ1lfUEFHRSA9ICcvcHJpdmFjeS1wb2xpY3knO1xuZXhwb3J0IGNvbnN0IENPT0tJRV9QT0xJQ1lfUEFHRSA9ICcvY29va2llLXBvbGljeSc7XG5leHBvcnQgY29uc3QgRkFRX1BBR0UgPSAnL2ZhcSc7XG5leHBvcnQgY29uc3QgU1RPQ0tJU1RTX1BBR0UgPSAnL3N0b2NraXN0cyc7XG5leHBvcnQgY29uc3QgT1VSX1BST0RVQ1RTX1BBR0UgPSAnL291ci1wcm9kdWN0cyc7XG5leHBvcnQgY29uc3QgUFJPRFVDVF9QQVRIID0gJy9wcm9kdWN0JztcblxuLy8gUHJvZmVzc2lvbmFsIHNpdGVzXG5leHBvcnQgY29uc3QgTUVESUNBTF9SRVNPVVJDRV9IVUJfUEFHRSA9ICcvaGVhbHRoY2FyZS1wcm9mZXNzaW9uYWxzJztcbmV4cG9ydCBjb25zdCBPVVJfU0NJRU5DRV9QQUdFID0gYCR7TUVESUNBTF9SRVNPVVJDRV9IVUJfUEFHRX0vb3VyLXNjaWVuY2VgO1xuZXhwb3J0IGNvbnN0IFBVQkxJQ0FUSU9OU19QQUdFID0gYCR7TUVESUNBTF9SRVNPVVJDRV9IVUJfUEFHRX0vcHVibGljYXRpb25zYDtcbmV4cG9ydCBjb25zdCBDTElOSUNBTF9TVFVESUVTX1BBR0UgPSAnL2NsaW5pY2FsLXN0dWRpZXMnO1xuZXhwb3J0IGNvbnN0IENMSU5JQ0FMX1NUVURZX1BBVEggPSAnL2NsaW5pY2FsLXN0dWR5JztcbmV4cG9ydCBjb25zdCBTVEFHRVNfUEFHRSA9ICcvc3RhZ2VzJztcbiJdLCJuYW1lcyI6WyJIT01FX1BBR0UiLCJXSFlfQ0FQUklDQVJFX1BBR0UiLCJBQk9VVF9VU19QQUdFIiwiQkxPR19IVUJfUEFHRSIsIkJSRUFTVEZFRURJTkdfUEFHRSIsIkhFQUxUSENBUkVfUFJPRkVTU0lPTkFMUyIsIkNPTlRBQ1RfVVNfUEFHRSIsIlBSSVZBQ1lfUE9MSUNZX1BBR0UiLCJDT09LSUVfUE9MSUNZX1BBR0UiLCJGQVFfUEFHRSIsIlNUT0NLSVNUU19QQUdFIiwiT1VSX1BST0RVQ1RTX1BBR0UiLCJQUk9EVUNUX1BBVEgiLCJNRURJQ0FMX1JFU09VUkNFX0hVQl9QQUdFIiwiT1VSX1NDSUVOQ0VfUEFHRSIsIlBVQkxJQ0FUSU9OU19QQUdFIiwiQ0xJTklDQUxfU1RVRElFU19QQUdFIiwiQ0xJTklDQUxfU1RVRFlfUEFUSCIsIlNUQUdFU19QQUdFIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./utils/routes.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=styled,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js":
/*!*******************************************************************************************************!*\
  !*** __barrel_optimize__?names=styled,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styled: () => (/* reexport safe */ _Users_ministryofmedia_Documents_GIT_twgCC_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.styled),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_ministryofmedia_Documents_GIT_twgCC_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _Users_ministryofmedia_Documents_GIT_twgCC_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"(pages-dir-node)/./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMediaQuery */ \"(pages-dir-node)/./node_modules/@mui/material/node/useMediaQuery/index.js\");\n\"use client\";\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPXN0eWxlZCx1c2VNZWRpYVF1ZXJ5LHVzZVRoZW1lIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUU4RztBQUNwRCIsInNvdXJjZXMiOlsiL1VzZXJzL21pbmlzdHJ5b2ZtZWRpYS9Eb2N1bWVudHMvR0lUL3R3Z0NDL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5leHBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiL1VzZXJzL21pbmlzdHJ5b2ZtZWRpYS9Eb2N1bWVudHMvR0lUL3R3Z0NDL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL3N0eWxlcy9pbmRleC5qc1wiXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiLi91c2VNZWRpYVF1ZXJ5XCJcbmV4cG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi9Vc2Vycy9taW5pc3RyeW9mbWVkaWEvRG9jdW1lbnRzL0dJVC90d2dDQy9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=styled,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ "@mui/base":
/*!****************************!*\
  !*** external "@mui/base" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base");

/***/ }),

/***/ "@mui/base/composeClasses":
/*!*******************************************!*\
  !*** external "@mui/base/composeClasses" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/base/composeClasses");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@react-spring/web":
/*!************************************!*\
  !*** external "@react-spring/web" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@react-spring/web");;

/***/ }),

/***/ "@react-three/drei":
/*!************************************!*\
  !*** external "@react-three/drei" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-three/drei");

/***/ }),

/***/ "@use-gesture/react":
/*!*************************************!*\
  !*** external "@use-gesture/react" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@use-gesture/react");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-elfsight-widget":
/*!****************************************!*\
  !*** external "react-elfsight-widget" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-elfsight-widget");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@mui","vendor-chunks/@babel","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();