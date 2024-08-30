import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export function GetProductsInCookie({ children, cookieName, onProductCountChange, onTotalPriceChange }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const cookie = Cookies.get(cookieName);

            console.log("get cookie:" + cookie);
            if (cookie) {
                try {
                    const parsedCookie = JSON.parse(cookie);
                    console.log("cookie parsed:" + parsedCookie);

                    const productPromises = parsedCookie.map((element) =>
                        fetch(`https://dummyjson.com/products/${element.productId}`)
                            .then((res) => res.json())
                            .then((product) => ({
                                ...product,
                                quantity: element.quantity,
                                totalProductPrice: (product.price * element.quantity).toFixed(2)
                            }))
                    );

                    const fetchedProducts = await Promise.all(productPromises);
                    console.log(fetchedProducts);
                    setProducts(fetchedProducts);

                    const totalProductCount = fetchedProducts.reduce((sum, product) => sum + product.quantity, 0);
                    if (onProductCountChange) {
                        onProductCountChange(totalProductCount);
                    }

                    const totalPrice = fetchedProducts.reduce((sum, product) => sum + parseFloat(product.totalProductPrice), 0).toFixed(2);
                    if (onTotalPriceChange) {
                        onTotalPriceChange(parseFloat(totalPrice));
                    }
                } catch (e) {
                    console.error("Failed to parse cookie content:", e);
                }
            }
        };

        fetchProducts();
    }, [cookieName, onProductCountChange, onTotalPriceChange]);

    // Fonction pour gérer le changement de quantité d'un produit
    const handleQuantityChange = (productId, newQuantity) => {
        setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) =>
                product.id === productId ? { ...product, quantity: newQuantity, totalProductPrice: (product.price * newQuantity).toFixed(2) } : product
            );

            // Mise à jour du nombre total de produits et du prix total
            const totalProductCount = updatedProducts.reduce((sum, product) => sum + product.quantity, 0);
            if (onProductCountChange) {
                onProductCountChange(totalProductCount);
            }

            const totalPrice = updatedProducts.reduce((sum, product) => sum + parseFloat(product.totalProductPrice), 0).toFixed(2);
            if (onTotalPriceChange) {
                onTotalPriceChange(parseFloat(totalPrice));
            }

            // Mise à jour du cookie
            const updatedCookie = updatedProducts.map(({ id, quantity }) => ({ productId: id, quantity }));
            Cookies.set(cookieName, JSON.stringify(updatedCookie));

            return updatedProducts;
        });
    };

    return children(products, handleQuantityChange);
}
