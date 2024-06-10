import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/bags.svg";
import { useAuth0 } from '@auth0/auth0-react';
import { MdMenu, MdClose, MdOutlineAddShoppingCart } from 'react-icons/md';
import logoutIcon from '../assets/logout.svg';
import userIcon from '../assets/user.svg';
import Navbar from './Navbar'; // Assuming Navbar is the default export
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { cartItems, getTotalItemsInCart } = useContext(ShopContext);
  const toggleMenu = () => setMenuOpened(!menuOpened);
    console.log(user);
    const totalItemsInCart =cartItems.length;
    console.log(totalItemsInCart);
  return (
    <header className='fixed top-0 left-0 m-auto max_padd-container w-full bg-white ring-1 ring-slate-900/5 z-10'>
      <div className='px-4 flexBetween p-3 max-xs:px-2'>
        <div>
          <Link to="/"><img src={logo} alt="logo" height={66} width={88} /></Link>
        </div>
        <Navbar containerStyles="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />
        <div className='flexBetween gap-x-1 sm:gap-x-3 bold-16'>
          {!menuOpened ? (
            <MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
          ) : (
            <MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
          )}
          <div className='flexBetween sm:gap-x-6'>
            <NavLink to="cart-page" className="flex">
              <MdOutlineAddShoppingCart className='p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full' />
              <span className='relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2'>{totalItemsInCart}</span>
            </NavLink>
            {user ? (
              <button 
                className="btn_secondary_rounded flexCenter gap-x-2 medium-16" 
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <img src={logoutIcon} alt="logout icon" height={19} width={19} />
                Logout
              </button>
            ) : (
              <button 
                className="btn_secondary_rounded flexCenter gap-x-2 medium-16" 
                onClick={() => loginWithRedirect()}
              >
                <img src={userIcon} alt="user icon" height={19} width={19} />
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
