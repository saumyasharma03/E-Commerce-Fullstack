import {useState} from 'react'
import upload_area from '../assets/assets/upload_area.svg'

const AddProduct = () => {
    const [image, setImage]= useState(false);
    const [productDetails, setProductDetails]= useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })
    const imageHandler= (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }
    const Add_Product=async()=>{
        console.log(productDetails);
    }
  return (
    <div className='p-8 box-border bg-white w-full rounded-sm'> 
        <div className='mb-3'>
            <h4 className='bold-18 pb-2'>Product Title</h4>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
        </div>
        <div className='mb-3'>
            <h4 className='bold-18 pb-2'>Price:</h4>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name="name" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
        </div>
        <div className='mb-3'>
            <h4 className='bold-18 pb-2'>Offer Price: </h4>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name="name" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
        </div><div className='mb-3'>
            <h4 className='bold-18 pb-2'>Product Category</h4>
                <select value={productDetails.category} onChange={changeHandler} name="category" id="" className='bg-primary'>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Kids">Kids</option>
                </select>
        </div>
        <div>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt=""/>
            </label>
            <input type="file" name="image" id="file-input"/>
        </div>
        <button onClick={()=>Add_Product()} onChange={imageHandler} className='btn_dark_rounded mt-4 flexCenter gap-x-1'>Add Product</button>
    </div>
  )
}

export default AddProduct