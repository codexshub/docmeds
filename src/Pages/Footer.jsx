import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='footerSection'>
        <div className="container footerCoontainer">
          <div className="footerHead">
            <h4>About DocMeds</h4>
            <div className="footerList">
              <NavLink to="/shop">About Us</NavLink>
              <NavLink to="/shop">Our Achivements</NavLink>
              <NavLink to="/shop">Our Docters</NavLink>
              <NavLink to="/shop">Own Hospitality</NavLink>
              <NavLink to="/shop">Home Delivey</NavLink>
            </div>
          </div>
          <div className="footerHead">
            <h4>Medications</h4>
            <div className="footerList">
              <NavLink to="/shop">Syraps</NavLink>
              <NavLink to="/shop">NACO Medicines</NavLink>
              <NavLink to="/shop">Cancer Drugs</NavLink>
              <NavLink to="/shop">Priscribed Medicines</NavLink>
              <NavLink to="/shop">Syringe</NavLink>
            </div>
          </div>
          <div className="footerHead">
            <h4>Treatmennts</h4>
            <div className="footerList">
              <NavLink to="/shop">HIV Treatments</NavLink>
              <NavLink to="/shop">Dangue</NavLink>
              <NavLink to="/shop">Maleria</NavLink>
              <NavLink to="/shop">Bloog Cancer</NavLink>
              <NavLink to="/shop">Brain Hambrage</NavLink>
            </div>
          </div>
          <div className="footerHead">
            <h4>About DocMeds</h4>
            <div className="footerList">
              <NavLink to="/shop">Contact us</NavLink>
              <NavLink to="/shop">Support</NavLink>
              <NavLink to="/shop">F&Qs</NavLink>
              <NavLink to="/shop">Complain</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
