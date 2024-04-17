import React from 'react';
import { useRouter } from 'next/router';
import Category from './category';
import Product from './product';
import NewProduct from './newProduct';
import Bedsheet from './BedSheet';
import DiwanSet from './DiwanSet';
import PilowCover from './PilowCover';
import CusionCover from './CusionCover';
import BolsterCover from './BolsterCover';
import Mattress from './Mattress';



export default function Homes() {
  const router = useRouter();
  const { category } = router.query;
  console.log('Current category:', category);

  return (
    <div className='container mx-auto px-5'>
      <Category />
      {/* <Product /> */}
      {category === 'Bedsheet' && <Bedsheet />}
      {category === 'DiwanSet' && <DiwanSet />}
      {category === 'PilowCover' && <PilowCover />}
      {category === 'CusionCover' && <CusionCover />}
      {category === 'BolsterCover' && <BolsterCover />}
      {category === 'Mattress' && <Mattress />}





      <NewProduct />
    </div>
  )
}
