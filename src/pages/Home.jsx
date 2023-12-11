import { useEffect, useState } from 'react';
import ProductList from '../components/Product/ProductList';
// import { products } from '../data/products';
import { PREFIX } from '../helpers/API';
import axios, { AxiosError } from 'axios';
import Banner from '../components/Banner/Banner';

function Home() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		getProduct();
	}, []);
	const getProduct = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${PREFIX}`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
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
          Не найдено товар по вашему требованию
				</section>
			)}
		</div>
	);
}

export default Home;
