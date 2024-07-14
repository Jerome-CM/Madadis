// src/pages/Home.jsx
import CardProduct from "../components/CardProduct.jsx";
import { useEffect, useState } from "react";

export function Home() {
    return (
        <>
            <img className="d-flex mx-auto my-6" src="src/assets/react.png" alt="React logo" />
            <GetSixProduct>
                {(products) => (
                    <div className="flex flex-wrap justify-center">
                        {products.map((product) => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </GetSixProduct>
        </>
    );
}

function GetSixProduct({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=6&select=title,thumbnail&groupBy=title&order=asc')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            });
    }, []);

    return children(products);
}
