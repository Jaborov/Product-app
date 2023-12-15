import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';

export function Navbar({expand, setExpand}) {
	const items = useSelector((s) => s.cart.items);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<nav
			className={`${
				isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
			} fixed w-full z-10 transition-all`}
		>
			<div className="container mx-auto flex items-center justify-between h-full">
				{/* Logo */}
				<NavLink to={'/'}>
					<div>
						<img className="w-[40px]" src={'/logo.svg'} alt="logo" />
					</div>
				</NavLink>
				{/* cart */}
				<div onClick={() => setExpand(!expand)} className="cursor-pointer flex relative">
					<BsBag className="text-2xl" />
					<div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
						{items.reduce((acc, item) => (acc += item.count), 0)}
					</div>
				</div>
			</div>
		</nav>
	);
}