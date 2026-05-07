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
"[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$productSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/store/slices/productSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/store/slices/cartSlice.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// 🔥 helper (you can move to utils later)
const optimizeImage = (url, width = 500)=>{
    if (!url) return "/placeholder.png";
    return url.includes("/upload/") ? url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`) : url;
};
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
    // 🔥 Loading Skeleton (better UX than plain text)
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-6 p-6",
            children: Array.from({
                length: 8
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-40 bg-gray-200 rounded mb-3"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-200 rounded mb-2"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-200 w-1/2 rounded mb-3"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 bg-gray-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // ❌ Error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-red-500",
            children: "Failed to load products. Try again."
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // ⚠️ Empty state
    if (!items?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500",
            children: "No products available."
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-6 p-6",
        children: items.map((product)=>{
            const productId = product._id; // ✅ fixed
            const imageSrc = optimizeImage(product.image, 400);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border rounded-lg p-4 hover:shadow-md transition flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageSrc,
                        alt: product.name,
                        className: "h-40 w-full object-cover mb-3 rounded",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-medium text-sm line-clamp-2 min-h-[40px]",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 81,
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
                        lineNumber: 85,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])({
                                id: productId,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                quantity: 1
                            })),
                        className: "mt-auto w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition text-black py-2 rounded font-medium",
                        children: "Add to Cart"
                    }, void 0, false, {
                        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, productId, true, {
                fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                lineNumber: 70,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
        lineNumber: 64,
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
"[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$components$2f$products$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx [app-client] (ecmascript)");
"use client";
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
                    lineNumber: 14,
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
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "border rounded-md px-4 py-2 w-full md:w-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "All Categories"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Laptops"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Accessories"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Monitors"
                                }, void 0, false, {
                                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$components$2f$products$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/app/product/page.tsx",
        lineNumber: 9,
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

//# sourceMappingURL=jumongTailwindNext_jumong-front-tailwind_a8d3065c._.js.map