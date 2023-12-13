import { Link } from 'react-router-dom';

export function Checkout() {
	return (
		<>
			<section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
				<div className="container mx-auto">
					{/* image & text wrapper */}
					<div className="flex flex-col lg:flex-row items-center">
						{/* image */}
						<div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
							<img
								className="max-w-[200px] lg:max-w-sm"
								src={'/wink.png'}
								alt="product"
							/>
						</div>
						{/* text */}
						<div className="flex-1 text-center lg:text-left">
							<h1 className="text-[26px] text-green-500 font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
								{'Your order has been placed !'}
							</h1>
							<div className="text-xl  font-medium mb-6">
								{'thank you for choosing our store'}
							</div>
							<p className="mb-8">{'you will be contacted'}</p>
							<Link
								to={'/'}
								className="bg-primary py-4 px-8 text-white rounded-md"
							>
                Do shopping
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
