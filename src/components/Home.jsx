import React, { useEffect, useState } from 'react';
import { apidata } from '../api-Data/apidata';
import '../App.css'
// import Modal from './Modal';

export default function Home({ addToCart }) {
    let [category, setCategory] = useState(null)
    let [product, setProduct] = useState(null)
    const [error, setError] = useState(null);




    useEffect(() => {
        async function fetchCategory() {
            try {
                const data = await apidata('products/categories');
                setCategory(data);
            } catch (error) {
                setError('Error fetching data');
            }
        }

        fetchCategory();
    }, []);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await apidata('products');
                setProduct(data);

            } catch (error) {
                setError('Error fetching data');
            }
        }

        fetchProduct();
    }, []);

    if (error) {
        return <h1>{error}</h1>;
    }


    if (category === null || product === null) {
        return (
            <>
                <div className="container">
                    <div className="d-flex align-items-center">
                        <h1>Loading...</h1>
                        <div className="spinner-border ms-auto" aria-hidden="true"></div>
                    </div>
                </div>
            </>
        )
    }







    return (
        <>
            <div>
                {
                    category.map((cat, index) => {
                        return (
                            <>
                                <h2 className='category-name' key={`category_${index}`}>{cat}</h2>
                                <div className="render-card">
                                    {
                                        product.filter(p => p.category === cat).map(
                                            (filteredProducts) => {
                                                return (
                                                    <>
                                                        <div className="card c-a-r-d" style={{ width: "18rem" }}>
                                                            <img src={filteredProducts.image} className="card-img-top imgInCard" alt="..." />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{filteredProducts.title}</h5>
                                                                <div className="price-addtocart">
                                                                    <h4 className="price">$ {filteredProducts.price}</h4>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => addToCart(filteredProducts)}
                                                                        className="btn addToCart"
                                                                    >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <hr />
                                                                {/* <Modal/> */}
                                                                <button type="button" className=" viewDetails" data-bs-toggle="modal" data-bs-target={`#exampleModal${filteredProducts.id}`}>
                                                                    VIEW DETAILS
                                                                </button>

                                                                <div className="modal fade" id={`exampleModal${filteredProducts.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${filteredProducts.id}`} aria-hidden="true">
                                                                    <div className="modal-dialog">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <img src={filteredProducts.image} className="card-img-top imgInModal" alt="..." />
                                                                                <h1 className="modal-title fs-5" id={`exampleModalLabel${filteredProducts.id}`}>{filteredProducts.title}</h1>
                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <p className="card-text">{filteredProducts.description}</p>
                                                                                <h4 className="price">$ {filteredProducts.price}</h4>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        )
                                    }

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}


// useEffect( async() => {
//     let data = await apidata('products/categories');
//     setProduct(data)
// }, [])



// const handleClick = async () => {
//     prod = await apidata('products');
//     console.log(prod)
//     setProd(prod)
// }