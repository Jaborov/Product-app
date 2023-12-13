import ProductCart from './ProductCart';

function ProductList({ products }) {

	return (
		<section className="py-16">
			<div className="container mx-auto">
				<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
					{products.map((product) => {
						return (
							<ProductCart
								key={product.id}
								id={product.id}
								category={product.category}
								title={product.title}
								price={product.price}
								description={product.description}
								rating={product.rating.rate}
								image={product.image}
							/>
						);
					})}
				</div>
			</div>
		</section>
	
	);
}

export default ProductList;
