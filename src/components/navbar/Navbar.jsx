import { act, useState } from 'react';

import './navbar.css'

import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState("navBar");

    const showNav = () => {
        setActive("navBar activeNavbar");
    }
    const hideNav = () => {
        setActive("navBar");
    }
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdTravelExplore className="icon" /> Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Packages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Shop
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                About
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Pages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                News
                            </a>
                        </li>

                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={hideNav} className="closeNavbar">
                        <IoMdCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
}

export default Navbar;
