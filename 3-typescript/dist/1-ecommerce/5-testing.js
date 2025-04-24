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
Object.defineProperty(exports, "__esModule", { value: true });
const read_json_util_1 = require("./utils/read-json.util");
const _2_products_1 = require("./2-products");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const productsData = yield (0, read_json_util_1.readJsonFile)("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/products.json");
        const branData = yield (0, read_json_util_1.readJsonFile)("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/brands.json");
        //console.log(data);
        const result = yield (0, _2_products_1.analyzeProductPrices)(productsData);
        const result2 = yield (0, _2_products_1.buildProductCatalog)(productsData, branData);
        const result3 = yield (0, _2_products_1.filterProductsWithOneImage)(productsData);
        console.log("Filtered products", JSON.stringify(result3));
    });
}
main();
