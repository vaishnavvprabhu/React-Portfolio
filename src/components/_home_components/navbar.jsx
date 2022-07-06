import React from "react";
import Link from "next/Link";
import appData from "../../data/app.json";
import {handleDropdown, handleMobileDropdown} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
    return (
        <nav
        ref={nr}
        className={`navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}
        `}>
            <div className="container">
                <Link href = "/">
                    <a className="logo">
                    {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
        className="navbar-toggler"
        type="button"
        onClick={handleMobileDropdown}
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        ></button>
            </div>
        </nav>
    );
};

export default Navbar;