// components/NavBar.js
import { Link } from 'react-router-dom';

export function NavBar() {
    return <nav className="flex flex-row justify-between p-3 bg-cyan-950 font-medium items-center">
            <span className="basis-1/4 mx-1 text-4xl">Madadis</span>
            <ul className="basis-2/4 flex flex-row gap-5 justify-end mx-1 p-2">
                <li className="rounded hover:bg-cyan-600 px-4 py-2">
                    <Link to="/home">Home</Link>
                </li>
                <li className="rounded hover:bg-cyan-600 px-4 py-2">
                    <Link to="/products">Products</Link>
                </li>
                <li className="rounded hover:bg-cyan-600 px-4 py-2">
                    <Link to="/categories">Categories</Link>
                </li>
                <li className="rounded hover:bg-cyan-600 px-4 py-2">
                    <Link to="/shopping">Cart</Link>
                </li>
                <li className="rounded hover:bg-cyan-600 px-4 py-2">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="rounded hover:bg-cyan-600 px-4 py-2">
                    <Link to="/auth">Account</Link>
                </li>
            </ul>
        </nav>
}
