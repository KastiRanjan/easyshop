import React from "react";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <button className="navbar-menu-icon">
            <i className="navbar-icon-bar">{hamburger}</i>
          </button>
        </div>
        {/* <div className="navbar-middle">
          <div className="nav-item">
            <a href="" className="nav-link">
              Men{" "}
            </a>
          </div>
          <div className="nav-item">
            <a href="" className="nav-link">
              Women
            </a>
          </div>
          <div className="nav-item">
            <a href="" className="nav-link">
              Kids
            </a>
          </div>
        </div> */}
        <div className="navbar-middle">
          <form action="">
            <input className="search-input" type="text" placeholder="Try search for product " />
            <button className="search-btn">
              <img src="https://img.icons8.com/material/24/000000/search.png" />
            </button>
          </form>
        </div>
        <div className="navbar-right">
          <a href="">Hello, Sign in</a>
          <div className="basket">
            <div className="cart-icon">
              {cartIcon}
              {/* <div className="badge"></div> */}
            </div>
            <span>My Cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
const cartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="28"
    height="28"
    viewBox="0 0 172 172"
    style={{ fill: "#000000" }}
  >
    <g transform="translate(4.73,4.73) scale(0.945,0.945)">
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="none"
        strokeLinecap="butt"
        strokeLinejoin="none"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: " normal" }}
      >
        <g fill="#000000" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round">
          <path d="M37.625,28.66667h105.69434c2.537,0 4.89685,1.34151 6.18685,3.52734c1.29,2.193 1.32382,4.90301 0.08399,7.12467l-25.8252,46.47135c-2.52267,4.54367 -7.3175,7.37663 -12.52767,7.37663h-53.52604l-8.42643,13.49349l0.46191,0.83985h86.41992v14.33333h-86.41992c-5.40367,0 -10.38058,-2.93374 -13.00358,-7.65657c-2.623,-4.72283 -2.47474,-10.51652 0.39193,-15.10319l8.5804,-13.73145l-23.61361,-56.64746l-14.83724,0.06999l-0.06999,-14.33333l24.43945,-0.12598zM58.52311,78.83333h52.71419l19.9043,-35.83333h-87.55371zM64.5,143.33333c0,7.91608 -6.41725,14.33333 -14.33333,14.33333c-7.91608,0 -14.33333,-6.41725 -14.33333,-14.33333c0,-7.91608 6.41725,-14.33333 14.33333,-14.33333c7.91608,0 14.33333,6.41725 14.33333,14.33333zM136.16667,143.33333c0,7.91608 -6.41725,14.33333 -14.33333,14.33333c-7.91608,0 -14.33333,-6.41725 -14.33333,-14.33333c0,-7.91608 6.41725,-14.33333 14.33333,-14.33333c7.91608,0 14.33333,6.41725 14.33333,14.33333z"></path>
        </g>
        <path
          d="M0,172v-172h172v172z"
          fill="none"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
        ></path>
        <g fill="#666666" stroke="none" strokeWidth="1" strokeLinejoin="miter">
          <path d="M31.63411,14.30534l-24.43945,0.12598l0.06999,14.33333l14.83724,-0.06999l23.61361,56.64746l-8.5804,13.73145c-2.86667,4.58667 -3.01493,10.38036 -0.39193,15.10319c2.623,4.72283 7.59991,7.65657 13.00358,7.65657h86.41992v-14.33333h-86.41992l-0.46191,-0.83985l8.42643,-13.49349h53.52604c5.21017,0 10.005,-2.83296 12.52767,-7.37663l25.8252,-46.47135c1.23983,-2.22167 1.20601,-4.93167 -0.08399,-7.12467c-1.29,-2.18583 -3.64985,-3.52734 -6.18685,-3.52734h-105.69434zM43.58789,43h87.55371l-19.9043,35.83333h-52.71419zM50.16667,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333zM121.83333,129c-7.91608,0 -14.33333,6.41725 -14.33333,14.33333c0,7.91608 6.41725,14.33333 14.33333,14.33333c7.91608,0 14.33333,-6.41725 14.33333,-14.33333c0,-7.91608 -6.41725,-14.33333 -14.33333,-14.33333z"></path>
        </g>
        <path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path>
      </g>
    </g>
  </svg>
);
const hamburger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="32"
    height="32"
    viewBox="0 0 172 172"
    style={{ fill: "#000000" }}
  >
    <g
      fill="none"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{ mixBlendMode: "normal" }}
    >
      <path d="M0,172v-172h172v172z" fill="none"></path>
      <path d="M0,172v-172h172v172z" fill="#fff "></path>
      <g fill="#000000">
        <path d="M24.1875,46.44v4.945h123.625v-4.945zM24.1875,83.5275v4.945h123.625v-4.945zM24.1875,120.615v4.945h123.625v-4.945z"></path>
      </g>
    </g>
  </svg>
);
