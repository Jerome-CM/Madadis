// Les importations doivent toujours être au sommet du fichier, avant tout autre code
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Le composant CardProductDetails commence ici
const CardProductDetails = ({ product }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cookieValue = Cookies.get('cart');
        if (cookieValue) {
            setCart(JSON.parse(cookieValue));
            console.log("Cookie : " + cookieValue);
        }
    }, []);

    const handleClick = () => {
            let updatedCart = [...cart];
            let idIsUnique = true;

            updatedCart.forEach(productInCookie => {
                if (productInCookie.productId === product.id) {
                    idIsUnique = false;
                }
            });

            if (idIsUnique) {
                updatedCart.push({ productId: product.id, quantity: 1 });
                setCart(updatedCart);
                Cookies.set('cart', JSON.stringify(updatedCart), { expires: 15 });
                toast.success(` ${product.title} have been add in cart.`);
            } else {
                toast.warning(` ${product.title} is already in cart.`);
            }
    }

    return (
        <div className="w-10/12 rounded overflow-hidden shadow-lg p-4 m-5 bg-white flex-col text-black justify-center">
            <h1 className="text-2xl my-4 text-center">{product.title}</h1>
            <div className="flex justify-items-center">
                <div className="basis-1/2">
                    <img className="mx-auto" src={product.thumbnail} alt="Picture of product"/>
                </div>
                <div className="basis-1/2 flex flex-col justify-between">
                    <span className="">{product.description}</span>
                    <span className="">Category : {product.category}</span>
                    <div>
                        <ul className="flex gap-3">
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
                        Add to cart
                    </button>
                </div>
            </div>
            {/* Le composant ToastContainer doit être ici */}
            <ToastContainer autoClose={3000}/>
        </div>
    );
};

// Exportation du composant
export default CardProductDetails;
