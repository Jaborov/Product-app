import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
export function Menu() {
	const [expandSidebar, setExpandSidebar] = useState(false);

	const hadnleClose = () => {
		setExpandSidebar(false);
	};

	return (
		<>
			<Navbar expad={expandSidebar} setExpand={setExpandSidebar} />
			<Sidebar expad={expandSidebar} hadnleClose={hadnleClose} />
			<Outlet />
			<Footer />
		</>
	);
}
