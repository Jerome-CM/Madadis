import {GetProductsForPagination} from "../components/get/GetProductsForPagination.jsx";
import CardProduct from "../components/CardProduct.jsx";

export function HomeBanner () {


    return <>
        <div className="w-12/12 flex justify-between items-center mb-5">
            <div className="w-8/12 rounded-lg overflow-hidden shadow-lg p-4 m-5 bg-white text-black flex flex-col justify-around items-center">
                <p className="text-7xl mb-5">Summer Sale</p>
                <p className="text-9xl italic">-50% off</p>
            </div>
            <div className="w-4/12 flex justify-center items-center">
                <GetProductsForPagination limit={1} select={'title,thumbnail'} skip={10}>
                {(products) => (
                        <div className="flex flex-wrap justify-center">
                            {products.map(product => (
                                <CardProduct key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </GetProductsForPagination>
            </div>
        </div>
    </>
}