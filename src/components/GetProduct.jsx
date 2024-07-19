import { useEffect, useState } from "react";

export function GetProducts({ numberOfProduct, select ,children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${numberOfProduct}&select=${select}&groupBy=title&order=asc`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, [numberOfProduct]);

    return children(products);
}