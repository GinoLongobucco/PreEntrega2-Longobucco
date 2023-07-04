import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <h4>Comision 43290</h4>

        <ul className="categories">
          <li>Todas</li>
          <li>Deportivas</li>
          <li>Urbanas</li>
        </ul>

        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
