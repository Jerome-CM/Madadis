import {GetProductsWithId} from "../components/get/GetProductWithId.jsx";
import CardProductDetails from "../components/CardProductDetails.jsx";

export function DetailsProduct() {
    return (
        <GetProductsWithId>
            {(product) => (
                <div className="flex flex-wrap justify-center">
                    <CardProductDetails key={product.id} product={product} />
                </div>
            )}
        </GetProductsWithId>
    );
}



