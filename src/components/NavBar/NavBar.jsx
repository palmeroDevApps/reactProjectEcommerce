import React from "react";
import Cart from "./Cart/Cart";

//import { StyledNavBar } from "./NavBarStyles";

const NavBar = (props) => {
    console.log(props);


    return(
        <div>
            <div className="navbar-start">
                <h1>{props.nombreDeLaTienda}</h1>
                <ul className="categories">
                    <li className="category-item">Home</li>
                    <li className="category-item">Sponsors</li>
                    <li className="category-item">Products</li>
                    <li className="category-item">Categoria4</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;