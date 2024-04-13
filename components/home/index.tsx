import React from 'react';
import { useRouter } from 'next/router';
import Category from './category';
import Product from './product';
import NewProduct from './newProduct';
import Bedsheet from './BedSheet';



export default function Homes() {
  const router = useRouter();
  const { category } = router.query;
  console.log('Current category:', category);

  return (
    <div className='container mx-auto px-5'>
      <Category />
      {/* <Product /> */}
      {/* {category === 'Bedsheet' && <Bedsheet />} */}
      <NewProduct />
    </div>
  )
}
