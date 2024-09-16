export function CategoryCard ({name}) {
    return <>
        <div className="w-full lg:w-5/12 rounded overflow-hidden shadow-lg p-4 m-5 bg-white text-black flex justify-between items-center ">
            <h2 className="xl:ml-4 lg:ml-2">{name}</h2>
            <a className="bg-slate-600 py-1 px-3 text-white w-fit text-center rounded drop-shadow-md mr-2 lg:mr-4 ml-4 md:ml-3 " href={"/categoryContent?category="+name}>
                Show the products </a>
        </div>
    </>
}