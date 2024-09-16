import {GetProductsForPagination} from "../components/get/GetProductsForPagination.jsx";
import CardProduct from "../components/CardProduct.jsx";

export function HomeBanner () {


    return <>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-5">
            <div className="w-11/12 sm:w-8/12 lg:w-7/12 text-base rounded-lg overflow-hidden shadow-lg p-4 m-5 bg-white text-black flex flex-col justify-around items-center">
                <p className="xl:text-7xl lg:text-5xl md:text-3xl text-2xl mb-5">Summer Sale</p>
                <p className="xl:text-9xl lg:text-7xl md:text-5xl text-3xl italic">-50% off</p>
            </div>
            <div className="lg:w-4/12 flex justify-center items-center">
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