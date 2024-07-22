import './App.css'
import {NavBar} from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import {Products} from "./pages/Products.jsx";
import {Shopping} from "./pages/Shopping.jsx";
import {Categories} from "./pages/Categories.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Home} from "./pages/Home.jsx";
import {DetailsProduct} from "./pages/DetailsProduct.jsx";
import {CategoryContent} from "./pages/CategoryContent.jsx";
import {Auth} from "./pages/Auth.jsx";


export function App() {
    return <>
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
                <Route path="/detailsProduct" element={<DetailsProduct/>}/>
            <Route path="/categories" element={<Categories/>}/>
                <Route path="/categoryContent" element={<CategoryContent/>}/>
            <Route path="/shopping" element={<Shopping/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>
    </>
}

export default App
