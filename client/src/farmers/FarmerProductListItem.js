import axios from 'axios';
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import './FarmerProductListItem.scss';

const FarmerProductListItem = ({ product, setProducts, state, editProduct }) => {
  const [edit, setEdit] = useState(false);
  
  
  const handleChange = (event, value) => {
    const newProducts = [...state.products];
    console.log('newproducts', newProducts)
    newProducts[product.id - 1] = {
      ...product,
      [value]: event.target.value
    };
    setProducts(newProducts);
  };

  const handleSave = () => {
    setEdit(false)
  }

  return (
    !edit ? (
      <div className="li__farmer-product-item">
        <p className="farmer-product-name">{product.title}</p>
        <p className="farmer-product-price">${(product.price / 100).toFixed(2)}</p>
        <p className="farmer-product-size">{product.size}</p>
        <p className="farmer-product-category">{product.category}</p>
        <p className="farmer-product-quantity">{product.quantity}</p>
        <p><img
          src={product.image_url} alt="food"
          className="farmer-product-image"
        /></p>
        <p className="farmer-product-button">
          <button
            onClick={() => (setEdit(!edit))}
            type="button"
            >
            <p>Edit</p>
          </button>
        </p>
      </div>
    ) : (

    
    <ProductForm state={state} product={product} onSubmit={handleSave} setProducts={setProducts} editProduct={editProduct}/>
      
    )
  );

};

export default FarmerProductListItem;