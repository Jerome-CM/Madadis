import { MainTitle } from "../components/MainTitle.jsx";
import { GetProductsInCookie } from "../components/get/GetProductInCookie.jsx";
import CardProductCart from "../components/CardProductCart";
import { useState } from "react";

export function Shopping() {
    const [productCount, setProductCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleProductCountChange = (count) => {
        console.log("Product count updated:", count);
        setProductCount(count);
    };

    const handleTotalPriceChange = (price) => {
        console.log("Total price updated:", price);
        setTotalPrice(price);
    };

    return (
        <>
            <MainTitle title={'Cart'} />

            <GetProductsInCookie
                cookieName={'cart'}
                onProductCountChange={handleProductCountChange}
                onTotalPriceChange={handleTotalPriceChange}
            >
                {(products, handleQuantityChange) => {
                    if (products && Array.isArray(products)) {
                        // Ici on sait que productCount a été mis à jour par GetProductsInCookie
                        return productCount < 1 ? (
                            <div className="flex w-12/12 justify-center">
                                <div className="flex flex-col items-center">
                                    <div className="text-black text-xl flex flex-col items-center">
                                        Your cart is empty
                                        <img className="w-48 my-5" src="/src/assets/sad.png" alt="Smiley sad"/>
                                        <a className="bg-slate-600 text-center py-2 px-4 text-white rounded drop-shadow-md w-64 mx-auto" href="/products">
                                            Add product in your cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col lg:flex-row w-11/12 mx-auto">
                                <div className="w-full lg:w-9/12 flex flex-col">
                                    {products.map((product) => (
                                        <CardProductCart key={product.id} product={product} onQuantityChange={handleQuantityChange} />
                                    ))}
                                </div>
                                <div className="w-full flex flex-row lg:w-3/12 lg:flex-col text-black rounded overflow-hidden shadow-lg p-4 my-2 mx-auto bg-white text-center lg:h-64 justify-between">
                                    <h2 className="hidden sm:block sm:text-2xl md:align-items antialiased underline my-auto">Cart resume</h2>
                                    <span className="my-auto">{productCount} products</span>
                                    <span className="my-auto">{totalPrice}$</span>
                                    <a href="/checkout" className="form-input px-4 py-3 m-2 rounded border-none text-white text-center drop-shadow-md bg-cyan-950 hover:bg-cyan-600 transition">
                                        Checkout
                                    </a>
                                </div>
                            </div>
                        );
                    }
                }}
            </GetProductsInCookie>
        </>
    );
}
