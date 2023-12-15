import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';

function ProductCard(product) {
	const dispatch = useDispatch();
	console.log(product);
	const add = (e) => {
		e.preventDefault();
		dispatch(cartActions.add(product.id));
	};
	return (
		<Link to={`/product/${product.id}`}>
			<div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden mb-4 m-2">
				<div className="m-2 h-[250px] mb-4 overflow-hidden group transition">
					<div className="h-full flex justify-center items-center">
						<div>
							<img
								src={product.image[0]}
								className="h-[160px] mx-auto my-auto group-hover:scale-110 transition duration-300"
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center mt-1 justify-between pr-8 ">
					<span className="text-xl font-bold ml-5">{product.price}&nbsp;₽</span>
					<div className="flex">
						<img src="/star-icon.svg" alt="star" width={20} />
						<span className="text-cs ml-2 text-gray-500">{product.rating}</span>
					</div>
				</div>
				<div className="p-5 flex flex-col gap-3">
					<div className="flex items-center gap-3">
						<span className="px-3 py-1 text-xs rounded-full bg-gray-100">
							{product.category}
						</span>
					</div>
					<h2 className="font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
						{product.title}
					</h2>
					<div className="mt-5 flex gap-2">
						<button
							onClick={add}
							className="bg-yellow-500/80 hover:bg-yellow-500/90 active:bg-red-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition"
						>
              Add to cart
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
