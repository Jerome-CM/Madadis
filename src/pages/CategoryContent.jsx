import CardProduct from "../components/CardProduct.jsx";
import {GetGategoryContent} from "../components/get/GetCategoryContent";
import GetValueOfParamInUrl from "../script/GetValueOfParamInUrl.jsx";

export function CategoryContent() {

    const categoryName = GetValueOfParamInUrl('category');

    return <>
        <h1 className="w10/12 text-center text-black text-2xl p-2 my-5">Content of the {categoryName} category</h1>
        <GetGategoryContent>
            {/*Faire un composant title vu qu'il y a le meme style*/}
            {(products) => (
                <div className="flex flex-wrap justify-center">
                    {products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            )}
        </GetGategoryContent>

    </>
}