import React from 'react'
import { Link } from 'react-router-dom'
import addProduct from '../assets/assets/addproduct.png';
import listProduct from '../assets/assets/productlist.png';

const Sidebar = () => {
  return (
    <div className='py-2 flex justify-center gap-x-4  w-full bg-white lg:pt-10 '>
      <div>
        <Link to={'/addproduct'}>
          <button className='flexCenter gap-2 rounded-md bg-primary h-14 w-44 medium-16'>
            <img src={addProduct} alt="Add Product" height={55} width={55} />
            <span>Add Product</span>
          </button>
        </Link>
      </div>
      <div>
        <Link to={'/listproduct'}>
          <button className="flexCenter gap-2 rounded-md bg-primary h-14 w-44 medium-16">
            <img src={listProduct} alt="List Product" height={55} width={55} />
            <span>List Product</span>
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default Sidebar;
