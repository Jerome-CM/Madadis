import { useEffect, useState } from "react";
import getValueOfParamInUrl from "../../script/GetValueOfParamInUrl";
export function GetGategoryContent({children}) {

    const [products, setProducts] = useState([]);
    const category = getValueOfParamInUrl('category');
    console.log("categoryGet : " + category);
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/'+category)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);
/* Boucle */
    return children(products);
}