import CardProduct from "../components/CardProduct.jsx";
import {GetProducts} from "../components/get/GetProduct.jsx";
import {HomeBanner} from "../components/HomeBanner.jsx";
import {MainTitle} from "../components/MainTitle.jsx";

export function Home() {
    return (
        <>
            <MainTitle title={'Welcome'}/>
            <HomeBanner/>
            <div className="text-black text-center text-3xl my-9">New collection</div>
            <GetProducts numberOfProduct={6} select={'title,thumbnail'}>
                {(products) => (
                    <div className="flex flex-wrap justify-center">
                        {products.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </GetProducts>
        </>
    );
}