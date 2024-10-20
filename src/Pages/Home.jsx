import React from 'react'
import '../Global.css'
import Swiper1 from '../Components/Swiper1';
import Swiper2 from '../Components/Swiper3';
import Category from '../Components/Category';
import Condition from '../Components/Condition';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='homeSection'>
        <div className="container">
          <div className="homeHead">
            <div className="homeHeading">Buy Medicines and Essentials</div>
            <div className="homeInputFeald"><input type="text" placeholder='Search Medicines' /><lord-icon class="lord-icon" src="https://cdn.lordicon.com/kkvxgpti.json" trigger="hover">
            </lord-icon></div>
          </div>
        </div>
      </section>

      <section className='homeCardSection'>
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="homeCard" style={{ backgroundColor: '#e5f9f8' }}>
              <lord-icon class="lord-icon" src="https://cdn.lordicon.com/ftndcppj.json" trigger="loop" delay="2000" colors="primary:#e83a30,secondary:#ebe6ef">
              </lord-icon>
              <div className="homeCardText">
                <div className="homeCardTitle">Medical Near Me</div>
                <p>24x7 Open</p>
              </div>
            </div>
            <div className="homeCard" style={{ backgroundColor: '#ebf9ef' }}>
              <lord-icon class="lord-icon" src="https://cdn.lordicon.com/vhyuhmbl.json" trigger="loop" delay="2000">
              </lord-icon>
              <div className="homeCardText">
                <div className="homeCardTitle">Appointment</div>
                <p>Schedule Date</p>
              </div>
            </div>
            <div className="homeCard" style={{ backgroundColor: '#f1edfc' }}>
              <lord-icon class="lord-icon" src="https://cdn.lordicon.com/xbrjceiu.json" trigger="loop" delay="2000">
              </lord-icon>
              <div className="homeCardText">
                <div className="homeCardTitle">Medication</div>
                <p>Pills & Syringe</p>
              </div>
            </div>
            <div className="homeCard" style={{ backgroundColor: '#fef3d5' }}>
              <lord-icon class="lord-icon" src="https://cdn.lordicon.com/xhigzoca.json" trigger="loop" delay="2000"></lord-icon>
              <div className="homeCardText">
                <div className="homeCardTitle">Blood Tests</div>
                <p>See Reports</p>
              </div>
            </div>
            <div className="homeCard" style={{ backgroundColor: '#fcedf2' }}>
              <lord-icon class="lord-icon" src="https://cdn.lordicon.com/thvvrdbi.json" trigger="loop" delay="2000">
              </lord-icon>
              <div className="homeCardText">
                <div className="homeCardTitle">Emergency</div>
                <p>Call Ambulance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Swiper1 />
      <Swiper2 />
      <Category />
      <Swiper2 />
      <Condition />

      <section className='bannerSection'>
        <div class="container bannerContainer">
          <div class="bannerHead">
            <div className="bannerTitle">
              Manage Diabetes with DocMeds
            </div>
            <div class="bannerPara">
              Track Glucose, Blood Pressure and get instent regilary
            </div>
          </div>
          <div class="bannerBtn">
            <NavLink to="/shop"><button>Try It Now</button></NavLink>
          </div>
        </div>
      </section>


      <section className='bannerSection'>
        <div className="container">
          <div className="headingText">
            Frequently Asked Questions
          </div>
          <div className="row">
            <div class="accordion col-md-6" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="false" aria-controls="collapseZero">
                    What is Diabetes? Explained
                  </button>
                </h2>
                <div id="collapseZero" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    B.M.R Explained
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Full Form of E.C.G
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion col-md-6" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Blood Pressure Level
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Health & Nutrition
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
