const CardProduct = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-white ">
            <div className="text-black text-xl mb-2">{product.title}</div>
            <img src={product.thumbnail} alt="Picture of product"/>
        </div>
    );
};

export default CardProduct;