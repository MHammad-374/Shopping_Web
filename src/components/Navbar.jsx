import React from 'react'
import '../App.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="brand-search">
                    <h1 className="navbar-brand app-name" >My Store</h1>
                    <form className="searchform d-flex " role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn searchBtn" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}