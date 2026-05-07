(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/jumongTailwindNext/jumong-front-tailwind/store/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAppDispatch = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
};
_s(useAppDispatch, "jI3HA1r1Cumjdbu14H7G+TUj798=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jumongTailwindNext/jumong-front-tailwind/app/utils/image.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blurImage",
    ()=>blurImage,
    "optimizeImage",
    ()=>optimizeImage
]);
const optimizeImage = (url, width = 500)=>{
    if (!url) return "/placeholder.png";
    if (!url.includes("/upload/")) return url;
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
};
const blurImage = (url)=>{
    if (!url) return "/placeholder.png";
    if (!url.includes("/upload/")) return url;
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_10,e_blur:1000/");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$productSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/store/slices/productSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/store/slices/cartSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$app$2f$utils$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/app/utils/image.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ProductGrid = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { items, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ProductGrid.useAppSelector": (state)=>state.products
    }["ProductGrid.useAppSelector"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGrid.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$productSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProducts"])());
        }
    }["ProductGrid.useEffect"], [
        dispatch
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 p-6",
            children: Array.from({
                length: 8
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded shadow animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-40 bg-gray-200 rounded mb-3"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-200 mb-2 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-200 w-1/2 mb-3 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 bg-gray-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-red-500",
            children: "Failed to load products"
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!items?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500",
            children: "No products available"
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 40,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-6 p-6",
        children: items.map((product)=>{
            const productId = product._id;
            // ✅ Use first image from array
            const primaryImage = product.images?.[0] || "/placeholder.png";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border rounded-lg p-4 hover:shadow-md transition flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-40 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$app$2f$utils$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizeImage"])(primaryImage, 400),
                            alt: product.name,
                            fill: true,
                            className: "object-cover rounded",
                            placeholder: "blur",
                            blurDataURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$app$2f$utils$2f$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blurImage"])(primaryImage),
                            sizes: "(max-width: 768px) 50vw, 25vw"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-medium text-sm line-clamp-2 min-h-[40px]",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-orange-600 font-bold mt-1",
                        children: [
                            "₦",
                            Number(product.price || 0).toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])({
                                id: productId,
                                name: product.name,
                                price: product.price,
                                image: primaryImage,
                                quantity: 1
                            })),
                        className: "mt-auto w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition text-black py-2 rounded font-medium",
                        children: "Add to Cart"
                    }, void 0, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, productId, true, {
                fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                lineNumber: 53,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductGrid, "ITrZTynbauWdRFNtX2woiThTqRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = ProductGrid;
const __TURBOPACK__default__export__ = ProductGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ProductImageGallery = ({ images, alt })=>{
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const activeImage = images?.[activeIndex];
    const handleMouseMove = (e)=>{
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        setPosition({
            x,
            y
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:flex-col gap-2 order-2 md:order-1",
                children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveIndex(idx),
                        className: `border rounded-md overflow-hidden w-16 h-16 ${idx === activeIndex ? "border-yellow-500" : "border-gray-200"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: img,
                            alt: `${alt}-${idx}`,
                            width: 80,
                            height: 80,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full md:w-[500px] h-[400px] bg-white border rounded-lg overflow-hidden cursor-zoom-in",
                onMouseMove: handleMouseMove,
                onMouseEnter: ()=>setZoom(true),
                onMouseLeave: ()=>setZoom(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: activeImage,
                    alt: alt,
                    fill: true,
                    className: `object-cover transition-transform duration-200 ${zoom ? "scale-150" : "scale-100"}`,
                    style: {
                        transformOrigin: `${position.x}% ${position.y}%`
                    },
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductImageGallery, "uOlkIGkPldRy0YFj1OreSv7Q0Bw=");
_c = ProductImageGallery;
const __TURBOPACK__default__export__ = ProductImageGallery;
var _c;
__turbopack_context__.k.register(_c, "ProductImageGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$components$2f$products$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$components$2f$products$2f$ProductImageGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductImageGallery.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ProductsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-35 pb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-2 bg-white border-radius-lg shadow-md p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-3xl font-bold mb-6 text-center",
                    children: "Our Products"
                }, void 0, false, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row gap-4 mb-8 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search product...",
                            className: "border rounded-md px-4 py-2 w-full md:w-75"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "border rounded-md px-4 py-2 w-full md:w-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "All Categories"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Laptops"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Accessories"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Monitors"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$components$2f$products$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$components$2f$products$2f$ProductImageGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    images: product.images,
                    alt: product.name
                }, void 0, false, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ProductsPage;
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=jumongTailwindNext_jumong-front-tailwind_097f6801._.js.map