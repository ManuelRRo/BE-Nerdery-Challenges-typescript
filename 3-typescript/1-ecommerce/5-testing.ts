import { readJsonFile } from "./utils/read-json.util";
import { analyzeProductPrices,buildProductCatalog, filterProductsWithOneImage } from "./2-products";
import { Product } from "./1-types";
import { getCountriesWithBrandsAndProductCount } from "./3-brands";
import { getDepartmentsWithProductCount } from "./4-departments";
async function main (){
    //const data = await 
    type Data = Awaited<Promise<any>>; // => string
    const productsData: Data = await readJsonFile("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/products.json");
    const branData: Data = await readJsonFile("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/brands.json"); 
    const departmentData: Data = await readJsonFile("/home/manu/ravn/BE-Nerdery-Challenges-typescript/3-typescript/1-ecommerce/data/departments.json");
    //console.log(data);

    const result: Data = await analyzeProductPrices(productsData);
    const result2: Data = await buildProductCatalog(productsData,branData);
    const result3: Data = await filterProductsWithOneImage(productsData);
    const result4: Data = await getCountriesWithBrandsAndProductCount(branData,productsData);
    const result5: Data = await getDepartmentsWithProductCount(departmentData,productsData);
    //const result6: Data = await getDepartmentsWithProductCount(departmentData,productsData);
    console.log("Filtered products",JSON.stringify(result4));

}

main();