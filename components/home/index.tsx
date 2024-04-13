import React from 'react';
import Category from './category';
import Product from './product';
import NewProduct from './newProduct';


export default function Homes() {
  return (
    <div className='container mx-auto px-5'>
      <Category />
      {/* <Product /> */}
      <NewProduct />
    </div>
  )
}
