import React, { useEffect, useState, useRef } from "react";
import Header from "../Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-slideshow-image/dist/styles.css"; // Import the CSS for the slideshow
import { Fade } from "react-slideshow-image";
import { TfiReload } from "react-icons/tfi";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import Footer from "../Footer/Footer";
import Cart from "../Modal/Cart";
import { useNavigate } from "react-router-dom";
import Store from "../../UseUserStore";
import { base } from "../../constants/contants";
export default function Home() {
  const {
    setarryy,
    setlaparryy,
    arryy,
    laparryy,
    addtocartlist,
    setaddtocartlist,
  } = Store();
  const [excitedealslist, setExcitedealslist] = useState([]);
  const [modalstae, setModalstae] = useState(false);
  const [largecards, setLargecards] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [deals, setDeals] = useState([]);
  const [freshitem, setFreshitem] = useState([]);
  const [products, setProducts] = useState([]);
  const [lapproducts, setLaproducts] = useState([]);
  const [shpcat, setShpcat] = useState([]);
  const [cartItem, setCartItem] = useState(null);
  console.log(addtocartlist);
  let naviate = useNavigate();
  const onSaleRef = useRef(null);
  const home = async () => {
    try {
      const url = base + "/auth/home";
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setProducts(data.productitem);
      setLaproducts(data.laptopitem);
      setLargecards(data.home[0].largecard);
      setFeatured(data.home[0].cards);
      setDeals(data.home[0].topdeal);
      setFreshitem(data.home[0].fresharrivals);
      setExcitedealslist(data.home[0].excitingdeals);
      setShpcat(data.home[0].shopbycategory);
      setarryy(data.productitem);
      setlaparryy(data.laptopitem);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(laparryy);
  useEffect(() => {
    home();
  }, []);
  // console.log(shpcat);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row ">
          <div className="col-md-9  md:-z-10">
            {largecards.length > 0 && (
              <Fade>
                {largecards.map((card, index) => (
                  <div
                    key={index}
                    className="md:flex md:p-10 text-sm md:h-[562px] p-3 h-[250px] md:flex-col md:justify-center"
                    style={{
                      backgroundImage: `url(${card.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1 style={{ color: "gray" }}>{card.name}</h1>
                    <p className="my-4">{card.para}</p>
                    <div>
                      <button className="bg-gray-400 md:px-7 md:py-3">
                        {card.buttontext}
                      </button>
                    </div>
                  </div>
                ))}
              </Fade>
            )}
          </div>
          <div className="col-md-3 mt-5">
            {featured.length > 0 && (
              <div className="h-[562px] flex   flex-col justify-between">
                <div
                  className="h-[170px] text-white p-8 border-2 duration-300 transform hover:scale-110"
                  style={{
                    backgroundImage: `url(${featured[0].imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6>{featured[0].products}</h6>
                  <h4>{featured[0].para}</h4>
                  <p>{featured[0].productsname}</p>
                </div>
                <div
                  className="h-[170px] text-white p-8 border-2 duration-300 transform hover:scale-110"
                  style={{
                    backgroundImage: `url(${featured[1].imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6>{featured[1].products}</h6>
                  <h4>{featured[1].para}</h4>
                  <p>{featured[1].productsname}</p>
                </div>
                <div
                  className="h-[170px] text-white p-8  border-2 duration-300 transform hover:scale-110"
                  style={{
                    backgroundImage: `url(${featured[2].imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6>{featured[2].products}</h6>
                  <h4>{featured[2].para}</h4>
                  <p>{featured[2].productsname}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:flex border-2 md:my-16 mt-3 justify-evenly md:col-md-12">
          <div className="flex justify-center items-center max-sm:border py-6">
            <IoRocketOutline className="text-6xl" />
            <div className="ml-3">
              <h5>Free shipping</h5>
              <p>Free shipping on all orders</p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="w-[1px] h-12  border-[1px] hidden md:block"></div>
          </div>
          <div className="flex justify-center items-center  max-sm:border py-6">
            <TfiReload className="text-6xl" />
            <div className="ml-3">
              <h5>Money Gurantee</h5>
              <p>30 Days Money Gurantee</p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="w-[1px] h-12  border-[1px] hidden md:block"></div>
          </div>
          <div className="flex justify-center items-center border py-6">
            <MdOutlineCardMembership className="text-6xl" />
            <div className="ml-3">
              <h5>Online suppoert</h5>
              <p>Technical support 24x7</p>
            </div>
          </div>
          <div className="md:flex md:items-center  ">
            <div className="w-[1px] h-12  border-[1px] hidden md:block"></div>
          </div>
          <div className="flex justify-center items-center max-sm:border py-6">
            <FaUserGroup className="text-6xl" />
            <div className="ml-3">
              <h5>Members Discount</h5>
              <p>Members Discount 40%</p>
            </div>
          </div>
        </div>
        <h4>Top Deals of the Day</h4>
        <hr />
        <div className="container-fluid">
          {deals.length > 0 && (
            <div className="row">
              {deals.map((e) => (
                <div className="col-md-6 border-2 md:h-[466px] pt-4 md:flex">
                  <div className="col-md-1 hidden">
                    <p className="text-center bg-orange-400">-{e.discount}%</p>
                  </div>
                  <div className="col-md-5 ">
                    <img className="h-[300px]" src={e.imgurl} alt="img" />
                  </div>
                  <div className="col-md-1 hidden">
                    <IoEyeSharp className="text-2xl" />
                    <CiHeart className="text-2xl" />
                    <GoStack className="text-2xl" />
                  </div>
                  <div className="col-md-5 ">
                    <h6>{e.title}</h6>
                    <div className="flex">
                      <span className="text-yellow-400 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-400 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-400 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-400 text-lg">
                        <GoStarFill />
                      </span>
                      <span className="text-yellow-400 text-lg">
                        <GoStarFill />
                      </span>
                      <p>{e.Reviewcount} Reviews</p>
                    </div>
                    <div className="flex">
                      <h5 className="text-red-500">₹{e.price}</h5>
                      <h5 className="text-gray-500 ml-2 line-through">
                        ₹{e.pricestriken}
                      </h5>
                    </div>
                    <ul className="list-disc">
                      <li>{e.liitem}</li>
                      <li>{e.liitemOne}</li>
                      <li>{e.liitemTwo}</li>
                    </ul>
                    <div
                      className="my-3"
                      style={{
                        height: "3px",
                        width: "100%",
                        background: `linear-gradient(to right, #ff7e00 ${e.soldnumber}, gray 25%)`,
                      }}
                    ></div>
                    <p>Sold:{e.soldnumber}/100</p>
                    <div className="flex  flex-col ">
                      <button
                        onClick={() => {
                          setModalstae(true);
                          setCartItem(e); // Set the cart item
                          setaddtocartlist(e);
                        }}
                        className="bg-black rounded-3xl text-gray-300 p-3 mb-3"
                      >
                        ADD To CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <h4 className="mt-3">On Sale Products</h4>
        <hr />
        {products.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // spaceBetween={10}
            // slidesPerView={6}
            navigation
            autoplay={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {products.map((e) => (
              <SwiperSlide key={e._id}>
                <div
                  onClick={() => {
                    naviate(`/detailedproduct/${e._id}`);
                  }}
                  className="flex flex-col md:h-[360px] border-2 p-2 rounded-lg mb-4  shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <p className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block">
                      {e.discounttag} %
                    </p>
                  </div>
                  <img
                    className="md:h-[150px] object-cover rounded-md"
                    src={e.imgurl}
                    alt={e._id}
                  />
                  <h6 className="text-lg font-medium text-gray-800 truncate">
                    {e.content}
                  </h6>

                  <div className="flex justify-between items-center ">
                    <div className="flex items-center">
                      {Array.from({ length: e.ratingcount }).map((_, index) => (
                        <FaStar key={index} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({e.reviewcount} Review)
                    </span>
                  </div>
                  <p className="text-xl font-bold text-red-500 mt-2">
                    ₹{e.price}
                  </p>
                  <button className="mt-auto bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="container">
          {freshitem.length > 0 && (
            <div className="row">
              {freshitem.map((e) => (
                <div
                  className="col-md-6 border-2 h-[240px] pt-4 "
                  style={{
                    backgroundImage: `url(${e.imgurl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h4>{e.title}</h4>
                  <p>{e.content}</p>
                  <h6>{e.fresharrivals}</h6>
                </div>
              ))}
            </div>
          )}
        </div>

        <h4 className="mt-3">On Sale Laptops</h4>
        <hr />
        {lapproducts.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            navigation
          >
            {lapproducts.map((e) => (
              <SwiperSlide key={e._id}>
                <div
                  onClick={() => {
                    naviate(`/detailedlap/${e._id}`);
                  }}
                  className="flex flex-col md:h-[360px] border-2 p-2 rounded-lg  shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <p className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block">
                      {e.discounttag} %
                    </p>
                  </div>
                  <img
                    className="md:h-[150px] object-cover rounded-md"
                    src={e.imgurl}
                    alt={e._id}
                  />
                  <h6 className="text-lg font-medium text-gray-800 truncate">
                    {e.content}
                  </h6>
                  <div className="flex justify-between items-center ">
                    <div className="flex items-center">
                      {Array.from({ length: e.ratingcount }).map((_, index) => (
                        <FaStar key={index} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({e.reviewcount} Review)
                    </span>
                  </div>
                  <p className="text-xl font-bold text-red-500 mt-2">
                    ₹{e.price}
                  </p>
                  <button className="mt-auto bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="row md:my-5 mt-3">
          {excitedealslist.length > 0 && (
            <div className="md:flex justify-between">
              <div
                className="col-md-8 md:p-5 text-sm p-2"
                style={{
                  backgroundImage: `url(${excitedealslist[0].imgurl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1>{excitedealslist[0].fresharrivals}</h1>
                <h4>{excitedealslist[0].content}</h4>
                <p>{excitedealslist[0].title}</p>
              </div>
              <div
                className="col-md-4 md:ml-2 md:p-5 text-sm p-2 max-sm:my-3"
                style={{
                  backgroundImage: `url(${excitedealslist[1].imgurl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1>{excitedealslist[1].fresharrivals}</h1>
                <h4>{excitedealslist[1].content}</h4>
                <p>{excitedealslist[1].title}</p>
              </div>
            </div>
          )}
        </div>

        <div className="relative pl-40 my-5  text-white p-5 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-300 transform hover:scale-110"
            style={{
              backgroundImage: `url("https://demo-morata.myshopify.com/cdn/shop/files/2_8.png?v=1700194616&width=20004")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative ">
            <h3>
              Shop Adidas <span>Original Sportswear</span>
            </h3>
            <p>Perfect Quality Brand Sports Shoes</p>
            <h4 className="underline">Discover Now</h4>
          </div>
        </div>

        <div>
          <h3>Shop by Category</h3>
          <hr />
          {shpcat.length > 0 && (
            <div className="row md:flex md:justify-around">
              <div className="col-md-2 max-sm:flex max-sm:flex-col max-sm:items-center">
                <img src={shpcat[0].imgurl} alt="jbjbjk" />
                <h5 className="mb-3">{shpcat[0].Category}</h5>
                <ul className="p-0">
                  <li>{shpcat[0].liparaone}</li>
                  <li>{shpcat[0].liparatwo}</li>
                  <li>{shpcat[0].liparathree}</li>
                  <li>{shpcat[0].liparafour}</li>
                  <li>{shpcat[0].liparafive}</li>
                  <li>{shpcat[0].liparasix}</li>
                </ul>
              </div>
              <div className="col-md-2 hidden md:block">
                <img src={shpcat[1].imgurl} />
                <h5 className="mb-3">{shpcat[0].Category}</h5>
                <ul className="p-0">
                  <li>{shpcat[0].liparaone}</li>
                  <li>{shpcat[0].liparatwo}</li>
                  <li>{shpcat[0].liparathree}</li>
                  <li>{shpcat[0].liparafour}</li>
                  <li>{shpcat[0].liparafive}</li>
                  <li>{shpcat[0].liparasix}</li>
                </ul>
              </div>
              <div className="col-md-2 hidden md:block">
                <img src={shpcat[2].imgurl} />
                <h5 className="mb-3">{shpcat[0].Category}</h5>
                <ul className="p-0">
                  <li>{shpcat[0].liparaone}</li>
                  <li>{shpcat[0].liparatwo}</li>
                  <li>{shpcat[0].liparathree}</li>
                  <li>{shpcat[0].liparafour}</li>
                  <li>{shpcat[0].liparafive}</li>
                  <li>{shpcat[0].liparasix}</li>
                </ul>
              </div>
              <div className="col-md-2 hidden md:block">
                <img src={shpcat[3].imgurl} />
                <h5 className="mb-3">{shpcat[0].Category}</h5>
                <ul className="p-0">
                  <li>{shpcat[0].liparaone}</li>
                  <li>{shpcat[0].liparatwo}</li>
                  <li>{shpcat[0].liparathree}</li>
                  <li>{shpcat[0].liparafour}</li>
                  <li>{shpcat[0].liparafive}</li>
                  <li>{shpcat[0].liparasix}</li>
                </ul>
              </div>
              <div className="col-md-2 hidden md:block">
                <img src={shpcat[4].imgurl} />
                <h5 className="mb-3">{shpcat[0].Category}</h5>
                <ul className="p-0">
                  <li>{shpcat[4].liparaone}</li>
                  <li>{shpcat[4].liparatwo}</li>
                  <li>{shpcat[4].liparathree}</li>
                  <li>{shpcat[4].liparafour}</li>
                  <li>{shpcat[4].liparafive}</li>
                  <li>{shpcat[4].liparasix}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {modalstae && (
        <Cart
          close={() => {
            setModalstae(false);
          }}
          e={cartItem}
        />
      )}
      <Footer />
    </div>
  );
}
