import React, { useState, useEffect, useRef } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaUser } from "react-icons/fa";
import LoginRegiste from "../Modal/LoginRegiste";
import { ShoppingCart, X } from "lucide-react";
import store from "../../UseUserStore";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { base } from "../../constants/contants";

export default function Header() {
  const navigate = useNavigate();
  const searchval = useRef("");
  const [searchproducts, setSearchproducts] = useState([]);
  const { totalQuantity, totalPrice, resetCart, id } = store();
  const [user, setUser] = useState("xyz");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (id && id.firstname && id.email) {
      setUser(id.firstname);
      setEmail(id.email);
    } else {
      setUser("xyz");
      setEmail("xyz@gmail.com");
    }
  }, [id]);

  const search = async () => {
    let searchvalue = searchval.current.value;
    const response = await fetch(
      base + `/auth/findproduct?search=${searchvalue}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("generatedtoken")}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setSearchproducts(data);
    setSearched(true);
  };

  const handleSignOut = () => {
    Cookies.remove("generatedtoken");
    setUser("Login");
    setEmail("xyz@gmail.com");
    store.getState().clearId(); // Clear the persisted id
    resetCart();
    navigate("/");
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const clearSearch = () => {
    searchval.current.value = "";
    setSearchproducts([]);
    setSearched(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container-fluid text-secondary">
      <div className="row">
        <div
          className="flex md:items-center justify-between md:h-[40px]"
          style={{ backgroundColor: "#232f3f" }}
        >
          <div className="col-md-4 hidden md:block">
            <ul className="d-flex gap-2 list-unstyled">
              <li>About Us</li>
              <li>Order Tracking</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-md-4 hidden md:block text-center">
            <p>
              Sign up for 10% off your first order:{" "}
              <a href="/" className="text-light">
                Sign up
              </a>
            </p>
          </div>
          <div className="block md:hidden pt-3 md:pt-0 ">
            <img
              onClick={() => {
                navigate("/");
              }}
              src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1722513876/natural%20places/SGU_SHOP_LOGO_TRANSPARENT_lxgqrq.png"
              alt="Shop Logo"
              className="md:h-[79px] w-[150px]"
              style={{ paddingLeft: "12px", pt: "20px" }}
            />
          </div>
          <div className="col-md-4 flex justify-end max-sm:pt-3 md:pt-0 ">
            {user !== "Login" ? (
              <button onClick={handleSignOut} className="btn btn-outline-light">
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="btn btn-outline-light"
              >
                Sign In
              </button>
            )}
          </div>
        </div>

        <div
          className="flex items-center"
          style={{ backgroundColor: "#232f3f" }}
        >
          <div className="col-md-3 hidden md:block">
            <img
              onClick={() => {
                navigate("/");
              }}
              src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1722513876/natural%20places/SGU_SHOP_LOGO_TRANSPARENT_lxgqrq.png"
              alt="Shop Logo"
              style={{ height: "74px", paddingLeft: "12px" }}
            />
          </div>

          <div className="col-md-5 hidden md:block">
            <div className="input-group rounded-pill bg-white">
              <select className="form-select rounded-pill" name="product_type">
                {/* Add your product type options here */}
              </select>
              <input
                ref={searchval}
                className="form-control"
                type="search"
                name="q"
                placeholder="Search for products ..."
              />
              <button
                className="btn btn-warning rounded-pill"
                style={{ backgroundColor: "#f97316" }}
                type="submit"
                onClick={search}
              >
                Search
              </button>
              <button
                className="btn btn-outline-secondary rounded-pill"
                onClick={clearSearch}
              >
                Clear
              </button>
            </div>

            {/* Display search results below the search bar */}
            <div className="mt-3">
              {searched && searchproducts.length === 0 ? (
                <div className="search-results bg-white p-3 rounded">
                  <h5>Search Results:</h5>
                  <h3>No product found</h3>
                </div>
              ) : (
                searchproducts.length > 0 && (
                  <div className="search-results bg-white p-3 rounded">
                    <h5>Search Results:</h5>
                    <ul className="list-unstyled">
                      {searchproducts.map((product, index) => (
                        <li key={index} className="p-2 border-bottom">
                          <div className="d-flex align-items-center">
                            <img
                              src={product.imgurl}
                              alt={product.name}
                              style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <div>
                              <h6>{product.title}</h6>
                              <p>${product.price}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="col-md-4  flex justify-between md:justify-around md:items-center">
            <div
              className="text-2xl md:hidden"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            >
              <TiThMenu />
            </div>

            <div className="md:flex items-center  hidden">
              <FaUser size={24} />
              <div
                onClick={handleLoginClick}
                className="d-flex flex-column align-items-center"
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                <span>{user}</span>
                <span>{email}</span>
              </div>
            </div>

            <div className="flex items-center">
              <ShoppingCart size={24} />
              <span className="text-orange-400 bg-slate-200 p-1 rounded-3xl">
                {totalQuantity}
              </span>

              <div
                onClick={() => {
                  navigate("/checkout");
                }}
                className="d-flex flex-column align-items-center"
                style={{ marginLeft: "8px" }}
              >
                <span className="hidden md:block">Your Cart</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-dropdown position-absolute top-0 right-0 z-30 bg-white shadow-lg rounded">
          <div className="p-2 flex justify-end">
            <button onClick={closeMenu}>
              <X size={24} />
            </button>
          </div>
          <ul className="list-unstyled p-3">
            <li>
              {" "}
              <div
                onClick={handleLoginClick}
                className="d-flex flex-column align-items-center"
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                <span>{user}</span>
                <span>{email}</span>
              </div>
            </li>
            <li>About Us</li>
            <li>Order Tracking</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
      )}

      {isLoginModalOpen && (
        <LoginRegiste closed={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
}
