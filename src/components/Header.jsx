import React, { useState } from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

export default function Header({ cartItems }) {
    return (
        <>
            <header>
                <Navbar />
                <div className="sec-navbar">
                    {/* <ul className='lists'>
                        <li className="list">HOME</li>
                        <li className="list">ABOUT</li>
                        <li className="list">PRODUCT TYPES</li>
                        <li className="list">CONTACT</li>
                    </ul> */}
                    <Cart cartItems={cartItems} />
                </div>

            </header>
        </>
    )
}