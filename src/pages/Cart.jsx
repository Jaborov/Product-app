import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../helpers/API';

export function Cart() {
	const [cartProducts, setCartProducts] = useState([]);
	const items = useSelector((s) => s.cart.items);

	const getItem = async (id) => {
		const {data} = await axios.get(`${PREFIX}/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCartProducts(res);
	};

	useEffect(()=> {
		loadAllItems();
	}, [items]);

	return <>
		{items.map(i => {
			const product = cartProducts.find(p => p.id === i.id);
			if (!product) {
				return;
			}
			return <CartItem key={product.id} count={i.count} {...product} />;
		})}
	</>;
}