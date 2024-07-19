import {GetProducts} from "../components/GetProduct.jsx";
import CardProduct from "../components/CardProduct.jsx";

export function Products() {
    return <>
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
