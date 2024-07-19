import {GetGategories} from "../components/get/GetCategories.jsx";
import {CategoryCard} from "../components/CategoryCard.jsx";

export function Categories() {
    return <>
        <h1 className="w10/12 text-center text-black text-2xl p-2 my-5">Categories</h1>
        <div className="container mx-auto flex flex-wrap justify-around">
            <GetGategories>
                {(categories) => (
                    categories.map(category => (
                    <CategoryCard name={category} key={category}/>
                        )
                    ))}
            </GetGategories>
        </div>
    </>
}
