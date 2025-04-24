import { readJsonFile } from "./utils/read-json.util";
import { analyzeProductPrices,buildProductCatalog, filterProductsWithOneImage } from "./2-products";
import { Product } from "./1-types";
async function main (){
    //const data = await 
    type Data = Awaited<Promise<any>>; // => string
    const productsData: Data = await readJsonFile("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/products.json");
    const branData: Data = await readJsonFile("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/brands.json"); 
    //console.log(data);

    const result: Data = await analyzeProductPrices(productsData);
    const result2: Data = await buildProductCatalog(productsData,branData);
    const result3: Data = await filterProductsWithOneImage(productsData);
    console.log("Filtered products",JSON.stringify(result3));

}

main();