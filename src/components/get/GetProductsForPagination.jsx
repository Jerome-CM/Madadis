import { useEffect, useState } from "react";

export function GetProductsForPagination({ limit, select, skip, children }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}&select=${select}`)

            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, [skip]);

    return children(products);
}