import './App.css';
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products.jsx";
import { Shopping } from "./pages/Shopping.jsx";
import { Checkout } from "./pages/Checkout.jsx";
import { Categories } from "./pages/Categories.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Home } from "./pages/Home.jsx";
import { DetailsProduct } from "./pages/DetailsProduct.jsx";
import { CategoryContent } from "./pages/CategoryContent.jsx";
import { Auth } from "./pages/Auth.jsx";
import { HelmetProvider, Helmet } from 'react-helmet-async';

export function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <NavBar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="detailsproduct/:id" element={<DetailsProduct />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categoryContent" element={<CategoryContent />} />
                <Route path="shopping" element={<Shopping />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="contact" element={<Contact />} />
                <Route path="auth" element={<Auth />} />
            </Routes>
        </HelmetProvider>
    );
}

export default App;