import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart.slice';

function Product() {
	const data = useLoaderData();
	console.log(<Await resolve={data.data}></Await>);
	const dispatch = useDispatch();
	return (
		<>
			<Suspense
				fallback={
					<section className="h-screen flex justify-center items-center">
            Loading...
					</section>
				}
			>
				<Await resolve={data.data}>
					{({ data }) => (
						<section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
							<div className="container mx-auto">
								{/* image & text wrapper */}
								<div className="flex flex-col lg:flex-row items-center">
									{/* image */}
									<div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
										<img
											className="max-w-[200px] lg:max-w-sm"
											src={data.image}
											alt="product"
										/>
									</div>
									{/* text */}
									<div className="flex-1 text-center lg:text-left">
										<h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
											{data.title}
										</h1>
										<div className="text-xl text-red-500 font-medium mb-6">
                      $ {data.price}
										</div>
										<p className="mb-8">{data.description}</p>
										<button
											onClick={() => dispatch(cartActions.add(data.id))}
											className="bg-primary py-4 px-8 text-white rounded-md"
										>
                      Add to cart
										</button>
									</div>
								</div>
							</div>
						</section>
					)}
				</Await>
			</Suspense>
		</>
	);
}

export default Product;
