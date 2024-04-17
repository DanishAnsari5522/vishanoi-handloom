import React, { useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button, Image } from "@nextui-org/react";


export default function FilterProducts(props:any) {
 

   

   
    const list = [{
        title: "Bedsheet",
        img: "https://i5.walmartimages.com/asr/eec21a03-4627-4d99-8c75-89348f0016be.868789475ea23a887a8293e4b0521767.jpeg",
        price: "$6.50",
    },
    {
        title: "Blanket",
        img: "https://i.etsystatic.com/26473799/r/il/6334d2/2732230518/il_1588xN.2732230518_eh10.jpg",
        price: "$3.00",
    },
    {
        title: "Duvet covers",
        img: "https://tse4.mm.bing.net/th?id=OIP.jHRZTyoHpiss3iC4-kH4zAHaIJ&pid=Api&P=0&h=180https://www.jaipurfabric.com/uploads/jaipurfabric/products/delicacy-568428_l.jpeg",
        price: "$10.00",
    },
    {
        title: "Bedcovers",
        img: "https://suggestedproducts.in/wp-content/uploads/2020/10/Cotton-Bedsheet.jpg",
        price: "$5.30",
    },
    {
        title: "BedsheetPillow",
        img: "https://jnf.com.ph/wp-content/uploads/2019/10/1-scaled.jpg",
        price: "$15.50",
    },
    {
        title: "Blanket",
        img: "https://www.kritarthhandicrafts.com/wp-content/uploads/2022/08/DSC_6499..jpg",
        price: "$3.00",
    }]

    return (
        <>
            <div className="my-12">
                <p>{props.title}</p>
                <div className="grid grid-cols-5  max-md:grid-cols-2 gap-2 max-lg:grid-cols-3">
                 
                    {list.map((item, index) => (
                        <Card
                            className="py-4 shadow-none"
                            key={index}
                           
                        >
                            <CardBody className="overflow-visible py-2 ">
                                <Image
                                    isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500 h-full min-h-[300px] max-h-[300px] w-full min-w-full"
                                    src={item.img}

                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <p className="text-tiny uppercase font-bold text-center">{item.title}</p>
                                {/* <small className="text-default-500">{item.price}</small> */}
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </>

    );
}