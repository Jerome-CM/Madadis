import {GetProducts} from "../components/get/GetProduct.jsx";
import CardProduct from "../components/CardProduct.jsx";

export function Products() {
    return <>
        <h1 className="w10/12 text-center text-black text-2xl p-2 my-5">Products</h1>
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
