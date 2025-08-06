import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { PiWarningOctagon } from "react-icons/pi";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Store from '../../UseUserStore';
import { Trash2 } from 'lucide-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaGift } from "react-icons/fa";


function Finalcart() {
    const { addtocartlist, removeItem, increaseQuantity, decreaseQuantity, totalQuantity, totalPrice } = Store();
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        const fetchCartData = async () => {
            const token = Cookies.get('generatedtoken');
            if (!token) {
                navigate('/');
            }
        };

        fetchCartData();

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <Header totalQuantity={totalQuantity} totalPrice={totalPrice} />
            <div className='bg-gray-300 flex flex-col justify-center items-center py-5'>
                <h4>Your Cart</h4>
                <h5>Home/<span className='text-gray-400'>Cart</span></h5>
            </div>
            <div className='flex bg-blue-200 justify-center p-3 my-4'>
                <PiWarningOctagon className='text-red-500 text-3xl' />
                <p>Please, hurry! Someone has placed an order on one of the items you have in the cart. Products are limited, checkout within <span className='text-red-500 font-bold'>{formatTime(timeLeft)}s</span></p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        <hr />
                        <div className='row'>
                            <div className='col-md-5'>
                                <h5>PRODUCT</h5>
                            </div>
                            <div className='col-md-3'>
                                <h5>QUANTITY</h5>
                            </div>
                            <div className='col-md-3'>
                                <h5>SUBTOTAL:</h5>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            {addtocartlist.map((item) => (
                                <div className='row' key={item._id}>
                                    <div className='col-md-5'>
                                        <div className='d-flex'>
                                            <img className='h-[100px]' src={item.imgurl || 'fallback-image-url.jpg'} alt="Product" />
                                            <div>
                                                <p className='text-sm'>{item.title || 'Untitled Product'}</p>
                                                <p>₹{item.price || 0}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='d-flex align-items-center'>
                                            <button className='px-2 py-1 bg-gray-200' onClick={() => decreaseQuantity(item._id)}>
                                                -
                                            </button>
                                            <span className='mx-4'>{item.quantity || 0}</span>
                                            <button className='px-2 py-1 bg-gray-200' onClick={() => increaseQuantity(item._id)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>₹{(item.price || 0) * (item.quantity || 0)}</div>
                                    <div className='col-md-1'>
                                        <button onClick={() => removeItem(item._id)}>
                                            <Trash2 />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between my-3 text-white'>
                            <button className='bg-black p-2'>Continue Shopping</button>
                            <button className='bg-black p-2'>Continue Shopping</button>

                        </div>
                        <hr />
                        <div className='flex items-center'>
                            <FaGift className='text-2xl' /><h6>Do you want a Gift Wrap</h6>
                        </div>
                        <button className='bg-black p-2 text-white'>Add a Gift Wrap</button>
                        <div className='mt-6'>
                            <h6>Add Order Note</h6>
                            <textarea className='border p-3 w-full' rows='5' placeholder='How can we help you'></textarea>
                        </div>
                    </div>

                    <div className='col-md-3 border-2 border-orange-300'>
                        <h5 ><span className='text-green-600' >Order Total:</span>{totalPrice}</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Finalcart;
