import React, { useState, useEffect } from 'react';
import { X, Trash2 } from 'lucide-react';
import Store from '../../UseUserStore';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEventNote } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { RiCoupon5Fill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import Cookies from 'js-cookie';

function Cart({ close, e }) {
    const { setnum, setPrice } = Store();
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(e.price);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('generatedtoken');
        if (!token) {
            navigate('/');
        }
        setnum(quantity);
        setPrice(total);
    }, [total, quantity, setnum, setPrice]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setTotal(e.price * newQuantity);
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                setTotal(e.price * newQuantity);
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    const handleCheckout = () => {
        navigate('/checkout');
    }

    const removeItem = () => {
        console.log("Remove item");
    };

    return (
        <div className='fixed inset-0 z-30 bg-opacity-10 backdrop-blur-sm'>
            <div className='flex justify-end md:w-full'>
                <div className='bg-white w-full md:w-[40vw]'>
                    <div className='flex justify-between p-2 bg-gray-400 items-center mb-4'>
                        <h5 className='max-sm:text-sm'>Shopping Cart</h5>
                        <button onClick={close} className='md:p-2'>
                            <X />
                        </button>
                    </div>

                    <div className='container'>
                        <div className='row flex items-center'>
                            <div className='col-md-3'>
                                <img src={e.imgurl} alt="Product" className='md:h-30 h-20 w-auto' />
                            </div>
                            <div className='col-md-7'>
                                <h6 className='max-sm:text-sm'>{e.title}</h6>
                                <p>Price: ₹{e.price}</p>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <button className='px-2 py-1 bg-gray-200' onClick={decreaseQuantity}>
                                            -
                                        </button>
                                        <span className='mx-4'>{quantity}</span>
                                        <button className='px-2 py-1 bg-gray-200' onClick={increaseQuantity}>
                                            +
                                        </button>
                                    </div>

                                    <button onClick={removeItem} className='md:hidden'>
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-2 hidden md:block'>
                                <button onClick={removeItem}>
                                    <Trash2 />
                                </button>
                            </div>
                        </div>
                        <hr />
                        <h4 className='max-sm:text-sm'>Congrats! You've got Free Shopping</h4>
                        <div className='flex justify-around md:text-xl my-5 max-sm:hidden'>
                            <MdOutlineEventNote />
                            <FaGift />
                            <RiCoupon5Fill />
                            <FaBoxOpen />
                        </div>

                    </div>
                    <div className='bg-gray-200 p-3'>
                        <div className='flex justify-between font-bold md:my-3'>
                            <p>SubTotal:</p>
                            <p>₹{total}</p>
                        </div>
                        <div className='flex flex-col gap-3 md:my-4'>
                            <button className='btn btn-warning'>View Cart</button>
                            <button className='btn btn-primary' onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;
