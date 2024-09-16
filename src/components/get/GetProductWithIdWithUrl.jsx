import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import getValueOfParamInUrl from "../../script/GetValueOfParamInUrl.jsx";

export function GetProductsWithId({children}) {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    console.log('Hors API : https://dummyjson.com/products/' + id);
    useEffect(() => {
        console.log('In API : https://dummyjson.com/products/' + id);
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]);
    console.log("useState : " + product);
    return children(product);
}