import {deleteProductInCookie} from "../script/DeleteProductInCookie.jsx";
import {useNavigate} from "react-router-dom";

const CardProductCart = ({ product, onQuantityChange }) => {

    const increaseQuantity = () => {
        const newQuantity = product.quantity + 1;
        onQuantityChange(product.id, newQuantity);
    };

    const decreaseQuantity = () => {
        const newQuantity = product.quantity - 1;
        if(newQuantity < 1){
            deleteProductInCookie('cart', product.id);
            window.location.reload()
        } else {
            onQuantityChange(product.id, newQuantity);
        }
    };



    return (
        <div className="w-full md:w-auto flex flex-col sm:flex-row sm:justify-between lg:w-11/12 rounded overflow-hidden shadow-lg px-2 my-2 bg-white text-black items-center">
            <div className="w-full flex flex-col sm:flex-row align-items">
                <img className="w-48 sm:w-16 mx-auto lg:w-3/12" src={product.thumbnail} alt="Picture of product"/>
                <span className="w-full md:w-4/12 lg:w-4/12 text-black text-lg sm:text-sm md:text-md lg:text-lg text-center my-auto">{product.title}</span>
            </div>
            <div className="w-full flex flex-row justify-center my-4">
                <span className="md:w-1/12 lg:w-2/12 mx-auto my-auto">{product.price}$</span>
                <div className="md:w-5/12 lg:w-4/12 flex gap-4 items-center mx-auto">
                    <button onClick={decreaseQuantity} className="text-xl border rounded-full text-gray-600 w-12 h-12 hover:text-white hover:bg-black">{product.quantity > 1 ? '-' : <img className="w-5 mx-auto" src="/src/assets/trash.png"/>}</button>
                    <span className="text-lg sm:text-sm md:text-md">{product.quantity}</span>
                    <button onClick={increaseQuantity} className="text-xl border rounded-full text-gray-600 w-12 h-12 hover:text-white hover:bg-black">+</button>
                </div>
            </div>
        </div>
    );
};

export default CardProductCart;