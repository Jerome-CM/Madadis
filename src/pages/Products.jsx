import {GetProducts} from "../components/get/GetProduct.jsx";
import CardProduct from "../components/CardProduct.jsx";
import {MainTitle} from "../components/MainTitle.jsx";

export function Products() {
    return <>
        <MainTitle title={'Products'}/>
        <GetProducts numberOfProduct={25} select={'title,thumbnail'}>
            {(products) => (
                <div className="flex flex-wrap justify-center">
                    {products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            )}
        </GetProducts>
    </>
}
