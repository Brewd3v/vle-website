import React from "react"
import { Link } from "gatsby"
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'

const CustomNavbar = ({ pageInfo, logo }) => {
  const [toggle, settoggle] = useState(false);


  return (
    <>
      <div className="d-flex flex-row flex-md-row align-items-center justify-content-between text-center p-3 px-md-4 border-bottom box-shadow" >

          {logo}          
          <nav className="my-2 my-md-0 mr-md-3 d-none d-lg-block main-nav">
              <Link to="/"          className="p-2 text-dark">Home</Link>
              <Link to="/miramonti" className="p-2 text-dark">Olive Oil</Link>
              <Link to="/beer"      className="p-2 text-dark">Beer Garden</Link>
              <Link to="/wine"      className="p-2 text-dark">Wine</Link>
              <Link to="/cars"      className="p-2 text-dark">Cars</Link>
              <Link to="/equipment" className="p-2 text-dark">Equipment</Link>
              <Link to="/contact"   className="p-2 text-dark">Contact Us</Link>
          </nav>

          <div className="d-lg-none">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 10.3125H33.75C34.4404 10.3125 35 9.75289 35 9.0625V5.9375C35 5.24711 34.4404 4.6875 33.75 4.6875H1.25C0.559609 4.6875 0 5.24711 0 5.9375V9.0625C0 9.75289 0.559609 10.3125 1.25 10.3125ZM1.25 22.8125H33.75C34.4404 22.8125 35 22.2529 35 21.5625V18.4375C35 17.7471 34.4404 17.1875 33.75 17.1875H1.25C0.559609 17.1875 0 17.7471 0 18.4375V21.5625C0 22.2529 0.559609 22.8125 1.25 22.8125ZM1.25 35.3125H33.75C34.4404 35.3125 35 34.7529 35 34.0625V30.9375C35 30.2471 34.4404 29.6875 33.75 29.6875H1.25C0.559609 29.6875 0 30.2471 0 30.9375V34.0625C0 34.7529 0.559609 35.3125 1.25 35.3125Z" fill="black"/>
            </svg>
          </div>

      </div>      
    </>
  )
}

export default CustomNavbar