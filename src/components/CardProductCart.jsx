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
        <div className="flex justify-between rounded overflow-hidden shadow-lg py-0 px-2 m-2 bg-white text-black items-center">
            <img className="w-2/12 h-32 w-32" src={product.thumbnail} alt="Picture of product"/>
            <span className="w-5/12 text-black text-xl">{product.title}</span>
            <span className="w-2/12">{product.price}$</span>
            <div className="w-3/12 flex gap-4 items-center">
                <button onClick={decreaseQuantity} className="text-xl border rounded-full text-gray-600 w-12 h-12 hover:text-white hover:bg-black">{product.quantity > 1 ? '-' : <img className="w-5 mx-auto" src="/src/assets/trash.png"/>}</button>
                <span className="text-xl">{product.quantity}</span>
                <button onClick={increaseQuantity} className="text-xl border rounded-full text-gray-600 w-12 h-12 hover:text-white hover:bg-black">+</button>
            </div>
        </div>
    );
};

export default CardProductCart;