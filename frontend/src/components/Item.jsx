import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdSearch } from 'react-icons/md';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
      <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
        <Link to={`/product/${id}`} className='h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
        <MdSearch className='scale-125 hover:rotate-90 hover:scale-125 transition-all duration-200'/>
        </Link>
        <img onClick={window.scrollTo(0,0)}src={image} alt='productImage' className='w-full block object-cover group-hover:scale-110 transition-all duration-1000'/>
      </div>
      <div className='p-4 overflow-hidden'>
        <h4 className='my-[6px] medium-16 line-clamp-2 text-gray-30'>{name}</h4>
        <div className='flex gap-5'>
        <p className='bold-16'>Old Price: ${old_price.toFixed(2)}</p>
        <p className='text-secondary bold-16 line-through'>New Price: ${new_price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
