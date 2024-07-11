// components/NavBar.js
import { Link } from 'react-router-dom';

export function NavBar() {
    return <nav className="flex flex-row justify-between p-3 bg-cyan-950 font-medium items-center">
            <span className="basis-1/4 mx-1 text-4xl">Madadis</span>
            <ul className="basis-2/4 flex flex-row gap-6 justify-end mx-1 p-2">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/products">Produits</Link>
                </li>
                <li>
                    <Link to="/categories">Catégories</Link>
                </li>
                <li>
                    <Link to="/shopping">Panier</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
}
