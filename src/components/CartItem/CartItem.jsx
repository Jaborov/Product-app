import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';

function CartItem(product) {
	const dispatch = useDispatch();

	const increase = () => {
		dispatch(cartActions.add(product.id));
	};

	const descrease = () => {
		dispatch(cartActions.remove(product.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(product.id));
	};
	return (
		<div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
			<div className="w-full min-h-[150px] flex items-center gap-x-4">
				{/* image */}

				<Link to={`/product/${product.id}`}>
					<img className="max-w-[80px]" src={product.image} alt="" />
				</Link>
				<div className="w-full flex flex-col">
					{/* title && remove icon */}
					<div className="flex justify-between mb-2">
						{/* title */}
						<Link
							to={`/product/${product.id}`}
							className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
						>
							{product.title}
						</Link>

						{/* remove icon */}
						<div onClick={remove} className="text-xl cursor-pointer">
							<IoMdClose className="text-gray-500 hover:text-red-500 transition" />
						</div>
					</div>
					<div className="flex gap-x-2 h-[36px] text-sm">
						{/* qty */}
						<div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
							{/* minus icon */}
							<div
								onClick={descrease}
								className="flex-1 flex justify-center items-center cursor-pointer  h-full"
							>
								<IoMdRemove />
							</div>
							{/* amount */}
							<div className="h-full flex justify-center items-center px-2">
								{product.count}
							</div>
							{/* plus icon */}
							<div
								onClick={increase}
								className="flex-1 flex justify-center items-center cursor-pointer h-full"
							>
								<IoMdAdd />
							</div>
						</div>
						{/* item price */}
						<div className="flex-1 flex items-center justify-around">
              $ {product.price}
						</div>
						{/* final price */}
						{/* make the price at 2 decimals */}
						<div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${
							product.price * product.count
						}`}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
