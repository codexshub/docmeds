import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import data from '../DATA/card1.json';
import Swal from 'sweetalert2/dist/sweetalert2.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const Swiper2 = () => {
    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [quantity, setQuantity] = useState(1); 
    const [grandTotal, setGrandTotal] = useState(0);
    useEffect(() => {
        setProduct(data);
    }, []);

    const success = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Packages have been Added",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleAddToCart = (product) => {
        setSelectedProduct(product); 
        setQuantity(1); 
        setGrandTotal(product.price); 
    };

    const addMore = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setGrandTotal(selectedProduct.price * newQuantity);  
            return newQuantity;
        });
    };

    const addLess = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                setGrandTotal(selectedProduct.price * newQuantity);  
                return newQuantity;
            }
            return prevQuantity; 
        });
    };

    return (
        <>
            <section className='swiperSection'>
                <div className="container">
                    <div className="headingText">
                        Cardiac Care
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            autoplayDisableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                    >
                        {product.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="productCard">
                                    <img src={require(`../Image/Card-2/${item.image}`)} alt={item.name} />
                                    <div className="productTitle">{item.title}</div>
                                    <div className="productPrice">
                                        $ {item.price} <span><del>{item.discount}</del></span>
                                    </div>
                                    <div className="productBtn">
                                        <button
                                            data-bs-toggle="modal" data-bs-target="#addToCartModal"                                           onClick={() => handleAddToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Modal to display selected product */}
            {selectedProduct && (
                <div className="modal fade" id="addToCartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered cartModalContainer">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addToCartModalLabel">Add To Cart</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body cartModal">
                                <div className="CartImgHead col-md-6">
                                    <div className="cartImg">
                                        <img src={require(`../Image/Card-2/${selectedProduct.image}`)} alt={selectedProduct.name} />
                                    </div>
                                    <div className="cartDiscription">
                                        Lorem ipsum dolor sit amet consectetur elit. Tenetur cupiditate sit ex Itaque mollitia quisquam provident et ullam iure.
                                    </div>
                                </div>
                                <div className="cartText col-md-6">
                                    <div className="cartSubHeading">Order will be delivered to your home.</div>
                                    <div className="cartHeading">
                                        {selectedProduct.title}
                                    </div>
                                    <div className="cartPrice">
                                        $ {selectedProduct.price} <span><del>{selectedProduct.discount}</del></span>
                                    </div>
                                    <div className="addmore">
                                        <div className="addmoreText">
                                            Add more
                                        </div>
                                        <div className="addmoreBtn">
                                            <button onClick={addMore}><span className="material-symbols-outlined">add</span></button>
                                            <span>{quantity}</span>
                                            <button onClick={addLess}><span className="material-symbols-outlined">remove</span></button>
                                        </div>
                                    </div>
                                    <div className="totalAmount">
                                        <div className="totalAmountText">Grand Total</div>
                                        AMT. <span>${grandTotal.toFixed(2)}</span> {/* Display updated grand total */}
                                    </div>
                                    <div className="aadToCartBtn">
                                        <button data-bs-dismiss="modal" aria-label="Close" onClick={success}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Swiper2;
