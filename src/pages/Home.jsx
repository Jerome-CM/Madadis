// src/pages/Home.jsx
import CardProduct from "../components/CardProduct.jsx";
import {GetProducts} from "../components/GetProduct.jsx";

export function Home() {
    return (
        <>
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