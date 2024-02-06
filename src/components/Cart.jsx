import React, { useState } from 'react'
import '../App.css'


export default function Cart({ cartItems}) {

    return (
        <>
            <div className="cart">
                {cartItems.length === 0 ? (
                    <h6 style={{ visibility: 'hidden' }} className="cart-quantity">{cartItems.length}</h6>
                ) : (
                    <h6 className="cart-quantity">{cartItems.length}</h6>
                )}
                <img
                    className='cart-img'
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    src=""
                    alt=""
                    srcSet="https://cdn-icons-png.flaticon.com/512/60/60992.png"
                />

                {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                        <hr />
                    <div className="offcanvas-body">
                        {cartItems.map(item => {
                            return(
                                <>
                                    <h5 className='bg-info'>{item.title}</h5>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>



        </>
    )
}