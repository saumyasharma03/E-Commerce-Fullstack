import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdContacts, MdCategory, MdHomeFilled, MdShop2} from 'react-icons/md'
export const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'}className={({isActive})=>isActive?"active_link":""}><div className='flexCenter gap-x-1'><MdHomeFilled />Home</div></NavLink>
        <NavLink to={'/mens'} className={({isActive})=>isActive?"active_link":""}><div className='flexCenter gap-x-1'><MdCategory />Men's</div></NavLink>
        <NavLink to={'/womens'} className={({isActive})=>isActive?"active_link":""}><div className='flexCenter gap-x-1'><MdShop2 />WOmen's</div></NavLink>
        <NavLink to={'/kids'} className={({isActive})=>isActive?"active_link":""}><div className='flexCenter gap-x-1'><MdContacts />Kid's</div></NavLink>
    </nav>
  )
}
