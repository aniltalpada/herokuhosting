import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
      <Link to="/" className="">
        <span className="logo">
          {/* <img src={logo} style={{ height: "40px", width: "200px" }} alt="" /> */}
        </span>

      </Link>


      <ul className="navbar__links">

        <li>
          <Link to="/" className="">
            <span>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="/allProducts" className="">
            <span>
              Products
            </span>
          </Link>
        </li>
        <li>
          <Link to="/AddMedicine" className="">
            <span>
              Add Medicine
            </span>
          </Link>
        </li>
        <li>
          <Link to="/MedicineReport" className="">
            <span>
              Medicine Report
            </span>
          </Link>
        </li>
        <li>
          <Link to="/AddSells" className="">
            <span>
            Add Sells
            </span>
          </Link>
        </li>
        <li>
          <Link to="/SellsReport" className="">
            <span>
            Sells Report
            </span>
          </Link>
        </li>
        <li> <Link to="/login">
        <span>
              Logout
            </span>
          </Link>   
                        </li>
      </ul>

      <ul className="navbar__links">

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>

        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
