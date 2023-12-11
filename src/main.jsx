import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Product from './pages/Product';
import { Error } from './pages/Error';
import { Menu } from './Layout/Menu';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css';
import axios from 'axios';
import { PREFIX } from './helpers/API';
import { Cart } from './pages/Cart.jsx';

const Home = lazy(() => import('./pages/Home'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu />,
		children: [
			{
				path: '/',
				element: (
					<Suspense
						fallback={
							<section className="h-screen flex justify-center items-center">
                Loading...
							</section>
						}
					>
						<Home />
					</Suspense>
				)
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: axios
							.get(`${PREFIX}/${params.id}`)
							.then((data) => data)
							.catch((e) => e)
					});
				}
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
