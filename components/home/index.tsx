import React from 'react'
import {Avatar} from "@nextui-org/react";
import { Navbar } from '@nextui-org/react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import ProductCategories from './productCategories';


export default function Homes() {
  return (
    <>
    <p className='text-xl'>Home Page </p>
    <Navbar></Navbar>
    <ProductCategories></ProductCategories>

   
    </>
  )
}
