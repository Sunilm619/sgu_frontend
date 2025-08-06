import React from 'react'
import './index.css'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
export default function Footer() {
    const [arrow, setArrow] = useState(true)
    const [arrow1, setArrow1] = useState(true)
    const [arrow2, setArrow2] = useState(true)

    return (
        <div className='bg-[#232f3f] text-[#93969d]'>
            <div className='container-fluid  md:h-[356px] pt-[40px] pb-[60px]'>
                <div className='row md:flex'>
                    <div className='col-md-3'>
                        <img className='h-[80px]' src="https://res.cloudinary.com/dhpkv1tec/image/upload/v1722513876/natural%20places/SGU_SHOP_LOGO_TRANSPARENT_lxgqrq.png" alt="img" />
                        <h5 className='pb-2'>HelpLine Numer</h5>
                        <p className='text-orange-400 font-bold'>1800 380 380</p>
                        <h6>Add: Kavuri Hills appart Madhapur,Hyderabad,Telangana, India</h6>
                        <p> Email:SynergyUnersal@co.in</p>
                    </div>
                    <div className='col-md-2 '>
                        <div className='max-sm:flex justify-between max-sm:bg-gray-600' onClick={() => { setArrow(!arrow) }}>
                            <p className='pl-[32px] text-slate-200 text-xl'>My Account</p>
                            {arrow ? <span className='text-xl md:hidden'><FaArrowDown /></span> : <span className='text-xl md:hidden'><FaArrowUp /></span>}
                        </div>

                        <div >

                            {arrow && <ul class="list-none">
                                <li >Product Support</li>
                                <li >Checkout</li>
                                <li >Shopping Cart</li>
                                <li >Wishlist </li>
                                <li >Custom Link</li>
                                <li >Redeem Voucher</li>
                            </ul>}
                        </div>

                    </div>

                    <div className='col-md-2 my-2'>
                        <div className='max-sm:flex justify-between max-sm:bg-gray-600' onClick={() => { setArrow1(!arrow1) }}>
                            <p className='pl-[32px] text-slate-200 text-xl'>Customer Service</p>
                            {arrow1 ? <span className='text-xl md:hidden'><FaArrowDown /></span> : <span className='text-xl md:hidden'><FaArrowUp /></span>}
                        </div>

                        <div >

                            {arrow1 && <ul class="list-none">
                                <li >Product Support</li>
                                <li >Checkout</li>
                                <li >Shopping Cart</li>
                                <li >Wishlist </li>
                                <li >Custom Link</li>
                                <li >Redeem Voucher</li>
                            </ul>}
                        </div>

                    </div>

                    <div className='col-md-2 '>
                        <div className='max-sm:flex justify-between max-sm:bg-gray-600' onClick={() => { setArrow2(!arrow2) }}>
                            <p className='pl-[32px] text-slate-200 text-xl'>Help & Support</p>
                            {arrow2 ? <span className='text-xl md:hidden'><FaArrowDown /></span> : <span className='text-xl md:hidden'><FaArrowUp /></span>}
                        </div>

                        <div >

                            {arrow2 && <ul class="list-none">
                                <li >Product Support</li>
                                <li >Checkout</li>
                                <li >Shopping Cart</li>
                                <li >Wishlist </li>
                                <li >Custom Link</li>
                                <li >Redeem Voucher</li>
                            </ul>}
                        </div>

                    </div>

                    <div className='col-md-3 hidden md:block'>
                        <h6 className='text-slate-200'>Sign Up to Newsletter</h6>
                        <p className='text-lg'>
                            Join 60.000+ subscribers and get a new discount coupon  on every Saturday.
                        </p>
                        <div className='py-3 flex'>
                            <input type="text" placeholder='Enter your email' className='w-[206px] h-[50px]  border-solid border-slate-300 focus:outline-none' />
                            <button className=' text-white w-[73px] h-[50px] bg-orange-500 bg-slate-500'>Sign Up</button>
                        </div>
                        <p>By providing email you agree to our Privacy Policy and Terms of Service</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-10 p-2 md:flex justify-between'>
                <p>Copyright © <span className='text-orange-500'>Synergy.</span> All Rights Reserved. Powered by <span className='text-orange-500'>Universal.</span></p>
                <div class="flex">
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/amazon-92e856f82cae5a564cd0f70457f11af4d58fa037cf6e5ab7adf76f6fd3b9cafe.svg" alt="amazon payments" />
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg" alt="apple pay" />
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/maestro-d2055c6b416c46cf134f393e1df6e0ba31722b623870f954afd392092207889c.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/maestro-d2055c6b416c46cf134f393e1df6e0ba31722b623870f954afd392092207889c.svg" alt="maestro" />
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" alt="master" />
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="paypal" />
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/shopify_pay-957a48d1202dc65a7890b292de764ee886f7e64cea486ae82e291e9dc824c914.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/shopify_pay-957a48d1202dc65a7890b292de764ee886f7e64cea486ae82e291e9dc824c914.svg" alt="shopify pay" />
                    <img width="45px" height="30px" src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" data-src="//demo-morata.myshopify.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="visa" />

                </div>
            </div>
        </div>

    )
}
