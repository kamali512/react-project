import React from 'react';
import "./Navbar.css"
import Logo from "../../../assets/logo.png"
function Navbar() {
  return (
    <nav className="navbar navbar-inverse navbar-expand-lg p-2 fixed-top">
      <div className="container marg">
        <a className="navbar-brand col-2" to="/"> <img src={Logo} alt="Logo" height={"55px"} /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-header col-10">
          <div className="collapse navbar-collapse text__right" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right main-menu  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" to="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Portfolios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">Knowledgebase</a>
              </li>
              <form className="d-flex">
                <button className="btn btn-danger backEffect" type="submit">Let's Talk</button>
              </form>
            </ul>
          </div>
        </div>
      </div>


      <div className="aiz-mobile-bottom-nav d-xl-none fixed-bottom bg-white shadow-lg border-top">
        <div className="d-flex justify-content-around align-items-center">
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right,'bg-soft-primary')}}">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-home"></i>
              <p className="small">Home</p>
            </span>
          </a>
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-cogs"></i>
              <p className="small">Services</p>
            </span>
          </a>
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-receipt"></i>
              <p className="small">Get Quotation</p>
            </span>
          </a>
          <a href="/" className="text-reset flex-grow-1 text-center py-3 border-right">
            <span className="d-inline-block position-relative px-2">
              <i className="fas fa-boxes"></i>
              <p className="small">Proucts</p>
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;