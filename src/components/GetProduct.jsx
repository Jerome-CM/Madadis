import { useEffect, useState } from "react";

export function GetProducts({ numberOfProduct, children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${numberOfProduct}&select=title,thumbnail&groupBy=title&order=asc`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            });
    }, [numberOfProduct]);

    return children(products);
}