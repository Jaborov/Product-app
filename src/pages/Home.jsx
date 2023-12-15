import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import ProductList from '../components/Product/ProductList';
import Banner from '../components/Banner/Banner';

function Home() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	console.log(products.products);
	useEffect(() => {
		getProduct();
	}, []);
	const getProduct = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
			console.log(import.meta.env.VITE_BASE_URL);
			setProducts(data?.products);
			console.log(data.products);
			setIsLoading(false);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	return (
		<div>
			<Banner />
			{error && <>{error}</>}
			{!isLoading && products.length > 0 && <ProductList products={products} />}
			{isLoading && (
				<section className="h-screen flex justify-center items-center">
          Loading...
				</section>
			)}
			{!isLoading && products.length === 0 && (
				<section className="h-screen flex justify-center items-center">
          Product matching your requirement was not found
				</section>
			)}
		</div>
	);
}

export default Home;
