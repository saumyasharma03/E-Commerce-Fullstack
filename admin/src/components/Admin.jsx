import React from 'react'
import Sidebar from './Sidebar'
import {Routes, Route} from 'react-router-dom'
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
const Admin = () => {
  return (
    <div>
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct />}/>
            <Route path='/listproduct' element={<ListProduct />} />
            
        </Routes>
    </div>
  )
}

export default Admin