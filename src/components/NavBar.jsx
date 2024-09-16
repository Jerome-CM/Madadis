import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export function NavBar() {
    // État pour gérer l'ouverture du menu burger
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex flex-row justify-between p-3 bg-cyan-950 font-medium items-center">
            <span className="text-basic xl:text-4xl lg:text-3xl md:text-2xl">Madadis</span>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>
            </div>


            <ul className="hidden md:flex flex-row gap-5 justify-end p-2">
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

            {/* Menu mobile (burger) */}
            {menuOpen && (
                <ul className="absolute top-14 left-0 w-full bg-cyan-950 flex flex-col items-center md:hidden z-50">
                    <li className="rounded hover:bg-cyan-600 px-4 py-2 w-full text-center">
                        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="rounded hover:bg-cyan-600 px-4 py-2 w-full text-center">
                        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                    </li>
                    <li className="rounded hover:bg-cyan-600 px-4 py-2 w-full text-center">
                        <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
                    </li>
                    <li className="rounded hover:bg-cyan-600 px-4 py-2 w-full text-center">
                        <Link to="/shopping" onClick={() => setMenuOpen(false)}>Cart</Link>
                    </li>
                    <li className="rounded hover:bg-cyan-600 px-4 py-2 w-full text-center">
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>
                    <li className="rounded hover:bg-cyan-600 px-4 py-2 w-full text-center">
                        <Link to="/auth" onClick={() => setMenuOpen(false)}>Account</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
