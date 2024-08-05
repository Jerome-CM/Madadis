import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

const CardProductDetails = ({ product }) => {
    const [tokenIsExist, setTokenIsExist] = useState(false);
    const [cart, setCart] = useState([]);
    const [messageButton, setMessageButton] = useState('Login me');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setTokenIsExist(true);
            setMessageButton('Add to cart');
        }
    }, []);

    useEffect(() => {
        // Récupérer le cookie et le convertir en tableau d'objets
        const cookieValue = Cookies.get('cart');
        if (cookieValue) {
            setCart(JSON.parse(cookieValue));
            console.log("Cookie : " + cookieValue);
        }
    }, []);

    const handleClick = () => {
        // Redirect if no auth
        if (!tokenIsExist) {
            navigate('/auth');
        } else {
            // drop the cart cookie
            const cookieValue = Cookies.get('cart');
            if (cookieValue) {
                setCart(JSON.parse(cookieValue));
                let idIsUnique = true;
                // Check this product is already exist
                cart.map(productInCookie => {
                    if(productInCookie.productId === product.id){
                        idIsUnique = false;
                    }
                });
                // Add in cookie, if the product is unique
                if(idIsUnique){
                    cart.push({productId: product.id, quantity: 1});
                    Cookies.set('cart', JSON.stringify(cart), {expires: 15});
                }
            }
           else {
               // Init first product in cookie
                cart.push({productId: product.id, quantity: 1});
                Cookies.set('cart', JSON.stringify(cart), {expires: 15});
            }
        }
    }

    return (

        <div className="w-10/12 rounded overflow-hidden shadow-lg p-4 m-5 bg-white flex-col text-black justify-center">
            <h1 className="text-2xl my-4 text-center">{product.title}</h1>
            <div className="flex justify-items-center">
                {/*div for img*/}
                <div className="basis-1/2">
                    <img className="mx-auto" src={product.thumbnail} alt="Picture of product"/>
                </div>
                {/*Div for infos*/}
                <div className="basis-1/2 flex flex-col justify-between">
                    <span className="">{product.description}</span>
                    <span className="">Category : {product.category}</span>
                    <div>
                        <ul  className="flex gap-3">
                            {product.tags && Array.isArray(product.tags) && product.tags.length > 0 ? (
                                product.tags.map((tag, index) => (
                                    <li className="bg-slate-600 py-1 px-3 text-white rounded drop-shadow-md" key={index}>#{tag}</li>
                                ))
                            ) : (
                                <li>No tags available</li>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Stock : {product.stock}</span>
                        <span className="">Price : {product.price}$</span>
                    </div>
                    <button
                        id='button'
                        className="bg-slate-600 text-center py-2 px-4 text-white rounded drop-shadow-md w-64 mx-auto"
                        onClick={handleClick}
                    >
                        {messageButton}
                    </button>
                </div>
            </div>
            {/*Div for Rating*/}
            <div className=""></div>

        </div>
    );
};

export default CardProductDetails;