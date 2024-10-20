import React from 'react'
import '../Global.css'
import { Logo } from './Image'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <section className='navbarSection'>
                <div className="container d-flex">
                    <div className="col-sm-4 LogoDiv">
                       <NavLink to='/docmeds'><img src={Logo} alt="Logo" />
                       DocMeds</NavLink>
                    </div>
                    <div className="col-sm-8 navMenuList">
                        <NavLink to="/appointment">Appointment</NavLink>
                        <NavLink to="/shop">Medicine</NavLink>
                        <NavLink to="/shop">Surgical Kit</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <button><span class="material-symbols-outlined">
                            account_circle
                        </span>LogIn</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
