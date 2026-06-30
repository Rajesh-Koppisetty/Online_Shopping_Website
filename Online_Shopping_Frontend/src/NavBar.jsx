import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
function NavBar({ search, setSearch }) {
  return (
    <>
      <header className="border-bottom py-3">
        <div className="container-fluid px-5">
          <div className="row align-items-center justify-content-between">

            <div className="col-auto fw-bold fs-3">
              ShopEase
            </div>

            <div className="col-lg-4 d-none d-md-block">
        <div className="input-group">
          <input
  type="text"
  className="form-control rounded-start-pill"
  placeholder="Search for products"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

          <button className="btn btn-primary rounded-end-pill px-4">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      {/* ✅ show results */}


            <div className="col-auto d-none d-lg-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-phone fs-4"></i>
                <div>
                  <div className="fw-semibold">24 Support</div>
                  <div className="text-primary small">+1 212-334-0212</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-globe fs-4"></i>
                <div>
                  <div className="fw-semibold">Worldwide</div>
                  <div className="text-primary small">Free Shipping</div>
                </div>
              </div>
            </div>

            {/* <div className="col-auto">
              <Link to="/signin" className="btn btn-primary px-4">
                Sign in
              </Link>
            </div> */}

          </div>
        </div>
      </header>


      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5">
        <div className="container-fluid d-flex justify-content-between align-items-center">


          <div className="d-flex align-items-center">
            <a className="navbar-brand fw-semibold" href="#">
              All Categories
            </a>

            <button
              className="navbar-toggler ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ms-3" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/promotions">Promotions</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stores">Stores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Our Contacts</Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Delivery & Return</a>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Outlet</a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-4">

            {/* COUNTRY */}
            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                USA
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">India</a></li>
                <li><a className="dropdown-item" href="#">UK</a></li>
              </ul>
            </div>

            {/* CURRENCY */}
            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                USD
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">INR</a></li>
                <li><a className="dropdown-item" href="#">EUR</a></li>
              </ul>
            </div>

            {/* ICONS */}
            <div>
              <Link to="/signin" >
              <i className="fa-regular fa-user text-dark"></i>
              
                
              </Link>

            </div>
            
            <i className="fa-solid fa-arrow-right-arrow-left"></i>

            <i className="fa-regular fa-heart"></i>
            
            <div>
              <Link to="/cart" >
              <i className="fa-solid fa-cart-arrow-down"></i>
              
                
              </Link>

            </div>

          </div>

        </div>
      </nav>


    </>
  )
}
export default NavBar