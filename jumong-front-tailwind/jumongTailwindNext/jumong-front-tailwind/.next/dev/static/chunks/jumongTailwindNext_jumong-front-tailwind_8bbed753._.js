(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jumongTailwindNext/jumong-front-tailwind/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
    // 🔄 Loading Skeleton
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
                            lineNumber: 28,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-200 mb-2 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-200 w-1/2 mb-3 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 bg-gray-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // ❌ Error State
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-red-500",
            children: "Failed to load products"
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 40,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 📭 Empty State
    if (!items?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "p-6 text-gray-500",
            children: "No products available"
        }, void 0, false, {
            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
            lineNumber: 45,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-6 p-6",
        children: items.map((product)=>{
            const productId = product._id;
            // ✅ Correct field (images array)
            const rawImage = product.images?.[0];
            const primaryImage = rawImage && (rawImage.startsWith("http://") || rawImage.startsWith("https://") || rawImage.startsWith("/")) ? rawImage : "/d.jpg";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/product/${productId}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border rounded-lg p-4 hover:shadow-md transition flex flex-col cursor-pointer",
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
                                lineNumber: 70,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-medium text-sm line-clamp-2 min-h-[40px]",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 81,
                            columnNumber: 15
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
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.preventDefault(); // 🚨 STOP navigation
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$jumongTailwindNext$2f$jumong$2d$front$2d$tailwind$2f$store$2f$slices$2f$cartSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])({
                                    id: productId,
                                    name: product.name,
                                    price: product.price,
                                    image: primaryImage,
                                    quantity: 1
                                }));
                            },
                            className: "mt-auto w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition text-black py-2 rounded font-medium",
                            children: "Add to Cart"
                        }, void 0, false, {
                            fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, productId, false, {
                fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
                lineNumber: 65,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/jumongTailwindNext/jumong-front-tailwind/components/products/ProductGrid.tsx",
        lineNumber: 49,
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

//# sourceMappingURL=jumongTailwindNext_jumong-front-tailwind_8bbed753._.js.map