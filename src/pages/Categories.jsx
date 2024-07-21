import {GetGategories} from "../components/get/GetCategories.jsx";
import {CategoryCard} from "../components/CategoryCard.jsx";
import {MainTitle} from "../components/MainTitle";

export function Categories() {
    return <>
       <MainTitle title={'Categories'}/>
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
