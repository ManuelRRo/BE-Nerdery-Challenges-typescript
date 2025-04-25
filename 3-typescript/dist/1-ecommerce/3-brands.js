"use strict";
/**
 *  Challenge 4: Get Countries with Brands and Amount of Products
 *
 * Create a function that takes an array of brands and products, and returns the countries with the amount of products available in each country.
 *
 * Requirements:
 * - The function should accept an array of Brand objects and an array of Product objects.
 * - Each brand should have a country property.
 * - Each product should have a brandId property that corresponds to the id of a brand.
 * - The function should return an array of objects, each containing a country and the amount of products available in that country.
 * - The amount of products should be calculated by counting the number of products that have a brandId matching the id of a brand in the same country.
 * - The return should be a type that allow us to define the country name as a key and the amount of products as a value.
 */
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
exports.getCountriesWithBrandsAndProductCount = getCountriesWithBrandsAndProductCount;
function getCountriesWithBrandsAndProductCount(brands, products) {
    return __awaiter(this, void 0, void 0, function* () {
        function toNumber(value) {
            const num = Number(value);
            if (isNaN(num)) {
                throw new Error("Invalid number");
            }
            return num;
        }
        const countryProductCountRecord = {};
        const brandIdToCountry = new Map(brands.map((brand) => {
            const parts = brand.headquarters.split(",").map(part => part.trim());
            const country = parts[1];
            return [toNumber(brand.id), country];
        }));
        brandIdToCountry.forEach((value, key) => {
            console.log(`${typeof (key)}: ${value}`);
        });
        products.forEach((product) => {
            const country = brandIdToCountry.get(product.brandId);
            if (country) {
                if (!countryProductCountRecord[country]) {
                    countryProductCountRecord[country] = 0;
                }
                countryProductCountRecord[country]++;
            }
        });
        return countryProductCountRecord;
    });
}
