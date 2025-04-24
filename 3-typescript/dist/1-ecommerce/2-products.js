"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeProductPrices = analyzeProductPrices;
exports.buildProductCatalog = buildProductCatalog;
exports.filterProductsWithOneImage = filterProductsWithOneImage;
/**
 * Products - Challenge 1: Product Price Analysis
 *
 * Create a function that analyzes pricing information from an array of products.
 *
 * Requirements:
 * - Create a function called `analyzeProductPrices` that accepts an array of Product objects
 * - The function should return an object containing:
 *   - totalPrice: The sum of all product prices
 *   - averagePrice: The average price of all products (rounded to 2 decimal places)
 *   - mostExpensiveProduct: The complete Product object with the highest price
 *   - cheapestProduct: The complete Product object with the lowest price
 *   - onSaleCount: The number of products that are currently on sale
 *   - averageDiscount: The average discount percentage for products on sale (rounded to 2 decimal places)
 * - Prices should be manage in regular prices and not in sale prices
 * - Use proper TypeScript typing for parameters and return values
 * - Implement the function using efficient array methods
 *
 *
 **/
function analyzeProductPrices(products) {
    return __awaiter(this, void 0, void 0, function* () {
        //at the begginning both are the same
        let mostExpensiveProduct = products[0];
        let cheapestProduct = products[0];
        //console.log("cheapest at the beggining",cheapestProduct);
        if (products.length === 0) {
            throw new Error("Product list cannot be empty");
        }
        const totalPrice = products.reduce((total, product) => total + product.price, 0);
        const averagePrice = parseFloat((totalPrice / products.length).toFixed(2)); // 2 decimal
        for (const product of products) {
            if (product.price > mostExpensiveProduct.price) {
                mostExpensiveProduct = product;
            }
            if (product.price < cheapestProduct.price) {
                cheapestProduct = product;
            }
        }
        const onSaleProducts = products.filter(p => p.onSale);
        const onSaleCount = onSaleProducts.length;
        let averageDiscount = 0;
        //discountPercentage = ((price - salePrice) / price) * 100
        if (onSaleCount > 0) {
            averageDiscount = onSaleProducts.reduce((sum, p) => sum + ((p.price - p.salePrice) / p.price) * 100, 0);
        }
        return {
            totalPrice, averagePrice, mostExpensiveProduct, cheapestProduct, onSaleCount, averageDiscount
        };
    });
}
/**
 *  Challenge 2: Build a Product Catalog with Brand Metadata
 *
 * Create a function that takes arrays of Product and Brand, and returns a new array of enriched product entries.
 * Each entry should include brand details embedded into the product, under a new brandInfo property (excluding the id and isActive fields).
 *  e.g
 *  buildProductCatalog(products: Product[], brands: Brand[]): EnrichedProduct[]

  Requirements:
  - it should return an array of enriched product entries with brand details
  - Only include products where isActive is true and their corresponding brand is also active.
  - If a product’s brandId does not match any active brand, it should be excluded.
  - The brandInfo field should include the rest of the brand metadata (name, logo, description, etc.).
 */
function buildProductCatalog(products, brands) {
    return __awaiter(this, void 0, void 0, function* () {
        const EnrichedProducts = new Array();
        const activeBrands = brands.filter((brand) => brand.isActive);
        const activeProducts = products.filter((product) => product.isActive);
        activeProducts.forEach(product => {
            const brand = activeBrands.find(brand => brand.id === product.brandId); //return first element
            if (brand) {
                const { id, isActive } = brand, brandInfo = __rest(brand, ["id", "isActive"]); //remove id and isActive copy the rest to brand info
                const enrichedProduct = Object.assign(Object.assign({}, product), { brandInfo });
                EnrichedProducts.push(enrichedProduct);
            }
        });
        return EnrichedProducts;
    });
}
/**
 * Challenge 3: One image per product
 *
 * Create a function that takes an array of products and returns a new array of products, each with only one image.
 *
 * Requirements:
 * - The function should accept an array of Product objects.
 * - Each product should have only one image in the images array.
 * - The image should be the first one in the images array.
 * - If a product has no images, it should be excluded from the result.
 * - The function should return an array of Product objects with the modified images array.
 * - Use proper TypeScript typing for parameters and return values.
 */
function filterProductsWithOneImage(products) {
    return __awaiter(this, void 0, void 0, function* () {
        // Implement the function logic here
        const allProducts = products;
        const filteredProducts = allProducts.filter(product => product.images.length > 0).map((product) => {
            const [firstImage] = product.images;
            return {
                // ...product,
                images: firstImage ? [firstImage] : [],
            };
        });
        return filteredProducts;
    });
}
