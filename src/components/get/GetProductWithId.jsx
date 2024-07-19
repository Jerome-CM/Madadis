import { useEffect, useState } from "react";
import {getValueOfParamInUrl} from "../script/GetValueOfParamInUrl.jsx";

export function GetProductsWithId({children}) {

    const [product, setProduct] = useState([]);
    /*const urlFind = new URL(window.location.href);
    const params = new URLSearchParams(urlFind.search);
    const id = params.get('idProduct');*/
    const id = getValueOfParamInUrl('idProduct');

    console.log('Hors API : https://dummyjson.com/products/' + id);
    useEffect(() => {
        console.log('In API : https://dummyjson.com/products/' + id);
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);
    console.log("useState : " + product);
    return children(product);
}