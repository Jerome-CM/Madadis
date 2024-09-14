const CardProduct = ({ product }) => {
    return (
        <a className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-white text-center" href={'/detailsProduct?idProduct=' + product.id}>
            <div className="text-black text-xl mb-2">{product.title}</div>
            <img src={product.thumbnail} alt="Picture of product"/>
        </a>
    );
};

export default CardProduct;