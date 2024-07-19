import { useEffect, useState } from "react";

export function GetGategories({children}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);
/* Boucle */
    return children(categories);
}