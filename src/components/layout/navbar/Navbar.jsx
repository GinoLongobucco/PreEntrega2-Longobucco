import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={"containerNavbar"}>
			<Link to="/">Tienda Cip</Link>

			<ul className="categories">
				<Link to="/">Todas</Link>
				<Link to="/category/juego">Juegos</Link>
				<Link to="/category/libro">Libros</Link>
			</ul>

			<CartWidget />
		</div>
	);
};

export default Navbar;
