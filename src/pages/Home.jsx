// src/pages/Home.jsx
import CardProduct from "../components/CardProduct.jsx";
import {GetProducts} from "../components/get/GetProduct.jsx";
import {MainTitle} from "../components/MainTitle.jsx";

export function Home() {
    return (
        <>
            <MainTitle title={'Welcome'}/>
            <img className="d-flex mx-auto my-6" src="src/assets/react.png" alt="React logo" />
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