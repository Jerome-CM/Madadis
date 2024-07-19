export function CategoryCard ({name}) {
    return <>
        <div className="w-5/12 rounded overflow-hidden shadow-lg p-4 m-5 bg-white text-black flex justify-between">
            <h2 className="ml-4">{name}</h2>
            <a className="bg-slate-600 py-1 px-3 text-white rounded drop-shadow-md mr-4" href={"https://dummyjson.com/products/category/"+name}>
                Show the products </a>
        </div>
    </>
}