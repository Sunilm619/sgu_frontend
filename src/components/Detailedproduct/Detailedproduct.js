import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { Star } from "lucide-react";
import { Eye } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Store from "../../UseUserStore";
import Footer from "../Footer/Footer";
import { Stars } from "lucide";
import { base } from "../../constants/contants";

function Detailedproduct() {
  let navigate = useNavigate();
  const onSaleRef = useRef(null);
  const { arryy, setaddtocartlist } = Store();
  const [prodlist, setProdlist] = useState({});
  const [num, setNum] = useState(0);
  const [description, setDescription] = useState(true);
  const [addtnlinfo, setAddtnlinfo] = useState(false);
  const [shippin, setShippin] = useState(false);
  const [reviw, setReviw] = useState(false);
  const [filted, setFilted] = useState([]);
  const [addnl, setAddnl] = useState([]);
  const [shiplist, setShiplist] = useState([]);
  const [exclist, setExclist] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  let { id } = useParams();
  let url = base + `/auth/products/${id}`;

  useEffect(() => {
    const filtrdarry = arryy.filter((e) => e._id !== id);
    setFilted(filtrdarry);
  }, [arryy, id]);

  const itemsdetail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProdlist(data.product);
      console.log(data.product);
      setAddnl(data.product.addtinalinfo);
      setShiplist(data.product.shipping);
      setExclist(data.product.returnexchange);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    itemsdetail();
  }, [id]);

  // Fetch Related Products
  // useEffect(() => {
  //     const fetchRelatedProducts = async () => {
  //         try {
  //             const response = await fetch(`http://localhost:4000/auth/related-products/${id}`);
  //             const data = await response.json();
  //             console.log(data);
  //             setRelatedProducts(data.products);
  //         } catch (error) {
  //             console.error("Error fetching related products:", error);
  //         }
  //     };

  //     fetchRelatedProducts();
  // }, [id]);

  const scrollLeft = () => {
    onSaleRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    onSaleRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: "smooth",
    });
  };

  // Function to handle size selection
  const handleSizeChange = (productId, size) => {
    // Handle size change logic here
    console.log(`Product ID: ${productId}, Selected Size: ${size}`);
  };

  return (
    <div>
      <Header />
      <div className="container">
        {/* Product Details */}
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              {prodlist.imgurl && (
                <img src={prodlist.imgurl} alt={prodlist.description} />
              )}
            </div>
            <div className="col-md-7">
              <h6 className="font-bold">{prodlist.description}</h6>
              <div className="flex">
                <div className="text-yellow-200 flex">
                  {Array.from({ length: prodlist.ratingcount || 0 }).map(
                    (_, index) => (
                      <Star key={index} />
                    )
                  )}
                </div>
                <p className="gap-4 mx-4">
                  ({prodlist.reviewcount || 0} Reviews){" "}
                </p>
                <p className="font-bold">{prodlist.licontent}</p>
              </div>
              <hr />
              <div className="flex">
                <h3 className="font-bold">₹{prodlist.price}</h3>
                <h3 className="line-through font-bold text-gray-400 ml-2">
                  ₹100000
                </h3>
              </div>
              <ul className="list-disc">
                <li>{prodlist.liparaone}</li>
                <li>{prodlist.liparatwo}</li>
                <li>{prodlist.liparathree}</li>
              </ul>
              <div className="flex">
                <Eye />
                <p className="ml-2">{prodlist.lititle}</p>
              </div>
              <h5>Hurry Up, Only a few are left!</h5>
              <div className="row flex">
                <div className="col-md-3 border-2 flex rounded-2xl justify-around items-center">
                  <button
                    onClick={() => {
                      setNum(Math.max(0, num - 1));
                    }}
                  >
                    -
                  </button>
                  <span>{num}</span>
                  <button
                    onClick={() => {
                      setNum(num + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="col-md-9 flex flex-col">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setaddtocartlist({ ...prodlist, quantity: num });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="my-3">
                <input type="checkbox" />
                <span>I agree with Terms and Conditions</span>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary">Buy Now with</button>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex gap-2">
                  <CiHeart className="text-2xl" />
                  <span>Add Wishlist</span>
                  <GoStack className="text-2xl" />
                  <span>Add Compare</span>
                </div>
                <div className="flex">
                  <CiShare2 className="text-2xl" />
                  <span>Share</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex justify-center container-fluid">
            <ul className="inline-flex space-x-20">
              <li
                onClick={() => {
                  setDescription(true);
                  setReviw(false);
                  setShippin(false);
                  setAddtnlinfo(false);
                }}
                className={`cursor-pointer ${
                  description ? "text-orange-500 text-2xl underline" : ""
                }`}
              >
                Description
              </li>

              <li
                className={`cursor-pointer ${
                  addtnlinfo ? "text-orange-500 text-2xl underline" : ""
                }`}
                onClick={() => {
                  setDescription(false);
                  setReviw(false);
                  setShippin(false);
                  setAddtnlinfo(true);
                }}
              >
                Additional Information
              </li>
              <li
                className={`cursor-pointer ${
                  shippin ? "text-orange-500 text-2xl underline" : ""
                }`}
                onClick={() => {
                  setDescription(false);
                  setReviw(false);
                  setShippin(true);
                  setAddtnlinfo(false);
                }}
              >
                Shipping & Returns
              </li>
              <li
                className={`cursor-pointer ${
                  reviw ? "text-orange-500 text-2xl underline" : ""
                }`}
                onClick={() => {
                  setDescription(false);
                  setReviw(true);
                  setShippin(false);
                  setAddtnlinfo(false);
                }}
              >
                Reviews
              </li>
            </ul>
          </div>

          {description && (
            <div>
              <p className="text-2xl">{prodlist.description}</p>
              <img
                src="https://cdn.shopify.com/s/files/1/0836/9845/0750/files/img_content_1.jpg?v=1699289844"
                alt="im"
              />
              <h3>Work wonders with ease</h3>
              <p>{prodlist.workwonderswithease}</p>
              <div className="flex justify-between">
                <img src={prodlist.imgone} alt="i" className="w-[300px]" />
                <img src={prodlist.imgtwo} alt="j" className="w-[300px]" />
                <img src={prodlist.imgthree} alt="k" className="w-[300px]" />
              </div>
              <h3>Product Supreme Quality</h3>
              <p>{prodlist.productsupremequality}</p>
            </div>
          )}

          {addtnlinfo && (
            <div>
              {addnl.length > 0 && (
                <div>
                  {Object.entries(addnl[0]).map(([key, value], index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #ddd",
                        padding: "8px 0",
                      }}
                    >
                      <strong>{key}:</strong>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {shippin && (
            <div>
              {shiplist.length > 0 && (
                <div>
                  {Object.entries(shiplist[0]).map(([key, value], index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #ddd",
                        padding: "8px 0",
                      }}
                    >
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {reviw && (
            <div>
              <h3>Review Section</h3>
              {/* Add your review section content here */}
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="container my-5">
          <h3>Related Products</h3>
          <div className="row">
            {relatedProducts.map((product) => (
              <div key={product._id} className="col-md-3 mb-4">
                <div className="border p-3 rounded">
                  <img
                    src={product.imgurl}
                    alt={product.description}
                    className="img-fluid"
                  />
                  <h5 className="mt-2">{product.description}</h5>
                  <p className="font-bold">₹{product.price}</p>
                  <div>
                    <span>Select Size:</span>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        handleSizeChange(product._id, e.target.value)
                      }
                    >
                      {product.sizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() =>
                      setaddtocartlist({ ...product, quantity: 1 })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* On Sale Products */}
        <div className="container my-5">
          <div className="d-flex justify-content-between">
            <h3>On Sale Products</h3>
            <div>
              <button onClick={scrollLeft}>&lt;</button>
              <button onClick={scrollRight}>&gt;</button>
            </div>
          </div>
          <div className="d-flex overflow-auto" ref={onSaleRef}>
            {filted.map((item) => (
              <div key={item._id} className="card m-2">
                <img
                  src={item.imgurl}
                  alt={item.description}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.description}</h5>
                  <p className="card-text">₹{item.price}</p>
                  <div className="flex flex-col">
                    <button
                      className="btn btn-primary"
                      onClick={() => setaddtocartlist({ ...item, quantity: 1 })}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detailedproduct;
