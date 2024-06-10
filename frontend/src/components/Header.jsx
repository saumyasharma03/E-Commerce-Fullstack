import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.svg";
import logout from '../assets/logout.svg';
import user from '../assets/user.svg';
import { Navbar } from './Navbar';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { MdMenu, MdClose, MdOutlineAddShoppingCart } from 'react-icons/md';
// import {FaOpenCart} from 'react-icons/fa';
const Header = () => {
    const [menuOpened, setMenuOpenend] = useState(false);
    const toggleMenu = () => setMenuOpenend(!menuOpened)

    return (
        <header className='fixed top-0 left-0 m-auto max_padd-container w-full bg-white ring-1 ring-slate-900/5 z-10'>
            <div className='px-4 flexBetween p-3 max-xs:px-2'>
                <div>

                    <Link><img src={logo} alt="logo" height={66} width={88} /></Link>
                </div>
                <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "} />
                <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-whitw rounded-3xl shadow-md-w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-399" :
                    "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-whitw rounded-3xl shadow-md-w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`} />
                <div className='flexBetween gap-x-1 sm:gap-x-3 bold-16'>
                    {!menuOpened ? (
                        <MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
                    ) : (
                        <MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
                    )}
                    <div className='flexBetween sm:gap-x-6'>
                        <NavLink to={"cart-page"} className={"flex"}>
                            <MdOutlineAddShoppingCart className='p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full' />
                            <span className='relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2'>0</span>
                        </NavLink>
                        {/* <NavLink to={'logout'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-1 hidden"}>
                            <img src={logout} alt="logouticon" height={19} width={19} />
                            Logout
                        </NavLink> */}
                        <NavLink to={'logout'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                            <img src={user} alt="usericon" height={19} width={19} />
                            Login
                        </NavLink>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header