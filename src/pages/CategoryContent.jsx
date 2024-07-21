import CardProduct from "../components/CardProduct.jsx";
import {GetGategoryContent} from "../components/get/GetCategoryContent";
import GetValueOfParamInUrl from "../script/GetValueOfParamInUrl.jsx";
import {MainTitle} from "../components/MainTitle.jsx";

export function CategoryContent() {

    const categoryName = GetValueOfParamInUrl('category');

    return <>
        <MainTitle title={'Content of the ' + categoryName + ' category'}/>
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