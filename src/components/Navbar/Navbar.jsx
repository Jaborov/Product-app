import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">Products</h3>
            <span>
                <NavLink to='/' className={({isActive}) => `mr-3 hover:text-sky-400 ${isActive && 'text-sky-400/75'}`}>Home</NavLink>
                <NavLink to='/Product' className={({isActive}) => `hover:text-sky-400 ${isActive && 'text-sky-400/75'}`}>Product</NavLink>
            </span>
        </nav>
    )
}