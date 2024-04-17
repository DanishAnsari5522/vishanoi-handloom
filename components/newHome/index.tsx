import React from 'react';
import ProductCategory from './productCategory';
import About from './about';
import Hero from './hero';
import BottomHero from './bottomHero';



export default function NewHome() {
 return (<>
  <Hero/>
    <div className='container mx-auto px-5'>
     

<ProductCategory />
<About/>



      
    </div>
    <BottomHero/>
    </>
  )
}
