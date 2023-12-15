import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { cartActions } from '../../store/cart.slice';
import CartItem from '../CartItem/CartItem';
import { PREFIX } from '../../helpers/API';

const Sidebar = ({ expad, hadnleClose }) => {
	const [cartProducts, setCartProducts] = useState([]);
	const items = useSelector((s) => s.cart.items);
	const dispatch = useDispatch();
	const clearCart = () => {
		dispatch(cartActions.clean());
	};
	const total = items
		.map((i) => {
			const product = cartProducts.find((p) => p.id === i.id);
			if (!product) {
				return 0;
			}
			return i.count * product.price;
		})
		.reduce((acc, i) => (acc += i), 0);

	const getItem = async (id) => {
		const { data } = await axios.get(`${PREFIX}/${id}`);
		return data;
	};

	const clearAfterCheckout = () => {
		clearCart();
		hadnleClose();
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map((i) => getItem(i.id)));
		setCartProducts(res);
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return (
		<div
			className={`${
				expad ? 'right-0' : '-right-full'
			} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
		>
			<div className="flex items-center justify-between py-6 border-b">
				<div className="uppercase text-sm font-semibold">
          Shopping Bag ({items.reduce((acc, item) => (acc += item.count), 0)})
				</div>
				{/* icon */}
				<div
					onClick={hadnleClose}
					className="cursor-pointer w-8 h-8 flex justify-center items-center"
				>
					<IoMdArrowForward className="text-2xl" />
				</div>
			</div>
			<div className="flex flex-col gap-y-2 h-[520px] lg:h-[60vh] overflow-y-auto overflow-x-hidden border-b">
				{items.map((i) => {
					const product = cartProducts.find((p) => p.id === i.id);
					if (!product) {
						return;
					}
					return <CartItem key={product.id} count={i.count} {...product} />;
				})}
			</div>
			<div className="flex flex-col gap-y-3 py-4 mt-4">
				<div className="flex w-full justify-between items-center">
					{/* total */}
					<div className="uppercase font-semibold">
						<span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
					</div>
					{/* clear cart icon */}
					<div
						onClick={clearCart}
						className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
					>
						<FiTrash2 />
					</div>
				</div>
				<Link
					to={'/'}
					className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
				>
          View cart
				</Link>
				<Link
					to={'/checkout'}
					onClick={clearAfterCheckout}
					className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
				>
          Checkout
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
