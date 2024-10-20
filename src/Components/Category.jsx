import React, { useEffect, useState } from 'react'
import '../Global.css'
import data from '../DATA/category.json'
import { NavLink } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setCategory(data);
    }, []);

    return (
        <>
            <section className='swiperSection'>
                <div className="container">
                    <div className="headingText">
                        Shop By Category
                    </div>
                    <div className="categoryContainer">
                        {category.map(index => (
                            <NavLink to="/shop" key={index.id}>
                                <div className="categoryCard">
                                    <div className="categoryImg"> <img src={require(`../Image/Category-img/${index.image}`)} alt={index.name} /></div>
                                    <div className="categoryText">{index.title}</div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
