import React, { useEffect, useState } from 'react';
import data from '../DATA/condition.json'
import { NavLink } from 'react-router-dom';

const Condition = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(data);
    }, []);
    return (
        <>
            <section className='swiperSection'>
                <div className="container">
                    <div className="headingText">
                    Browse By Health Condition
                    </div>
                    <div className="conditionContainer">
                        {item.map(index => (
                            <div className="conditionCard col-sm-3">
                                 <NavLink to="/appointment">
                                <div className="conditionImg"><img src={require(`../Image/condition-card/${index.image}`)} alt={index.name} /></div>
                                <div className="conditionText">{index.title}</div>
                           </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Condition
