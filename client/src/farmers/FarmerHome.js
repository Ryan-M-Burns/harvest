import { Link } from '@mui/material';
import React, { useState } from 'react'
import useApplicationData from '../hooks/useApplicationData';
import FarmerProductList from './FarmerProductList';
import MyFarm from './MyFarm';
import ProductForm from './ProductForm';

const FarmerHome = () => {
  const [showProductForm, setShowProductForm] = useState(false)
  const {
    state,
    setFarm,
    setProducts,
  } = useApplicationData();

  return (
    <div>
      <MyFarm farm={state.farm}/>
      <div>
        <button type='button' onClick={() => {setShowProductForm(!showProductForm)}}> Add Product </button>
      </div>
      <ul>
        {showProductForm && <li> <ProductForm/> </li> }
        <FarmerProductList state={state} products={state.products} setProducts={setProducts}/>
      </ul>
      
    </div>
  )
}

export default FarmerHome