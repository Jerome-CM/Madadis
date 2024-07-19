const CardProductDetails = ({ product }) => {
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
                    <span className="bg-slate-600 text-center py-2 px-4 text-white rounded drop-shadow-md w-64 mx-auto">Add to cart</span>
                </div>
            </div>
            {/*Div for Rating*/}
            <div className=""></div>

        </div>
    );
};

export default CardProductDetails;