// import Image from "next/image";
import React, { useState } from 'react';
import { Inter } from "next/font/google";
import Homes from "@/components/home";
import { Card, CardBody, CardFooter, CardHeader, Button,Image } from "@nextui-org/react";
// import Bedsheet1 from "../../public/assets/Images/Bedsheet1.webp"
import Bedsheet2 from "../../public/assets/Images/Bedsheet4.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Product() {

    const [hovered, setHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const handleHover = () => {
        setHovered(!hovered);
    };
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 4;

    const handlePrev = () => {
        console.log("handlePrev");
        
        setStartIndex(prevIndex => Math.max(0, prevIndex - cardsPerPage));
    };

    const handleNext = () => {
        console.log("handleNext");

        setStartIndex(prevIndex => Math.min(data.length - cardsPerPage, prevIndex + cardsPerPage));
    };
    const data = [{
        title: "Bedsheet",
        img: "/assets/Images/Bedsheet4.jpg",
        price: "$5.50",
    },
    {
        title: "Blanket",
        img: "/assets/Images/Bedsheet1.webp",
        price: "$3.00",
    },
    {
        title: "Duvet covers",
        img: "/assets/Images/Bedsheet2.webp",
        price: "$10.00",
    },
    {
        title: "Bedcovers",
        img: "/assets/Images/Bedsheet3.webp",
        price: "$5.30",
    },
    {
        title: "BedsheetPillow",
        img: "/assets/Images/Bedsheet1.webp",
        price: "$15.50",
    },
    {
        title: "Blanket BedsheetPillow",
        img: "/assets/Images/Bedsheet1.webp",
        price: "$3.00",
    },
    {
        title: "Duvet covers BedsheetPillow",
        img: "/assets/Images/Bedsheet2.webp",
        price: "$10.00",
    },
    {
        title: "Bedcovers BedsheetPillow",
        img: "/assets/Images/Bedsheet3.webp",
        price: "$5.30",
    }]
    return (
        < div  style={{ padding: '0px' }}>
            {/* <Homes /> */}
           

            <div className="my-8">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>BEDSHEET</div>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
                </div>

            </div>
            <div>
                <Button
                    onClick={handlePrev}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === 0 ? 'text-black' : ''}`}
                >
                    {'<'}
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
                        <Card
                            className="py-4"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(null)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Your card content */}
                            <CardBody className="overflow-visible py-2 ">
                                <Image    
                                   isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500"
                                    src={item.img}
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{item.title}</p>
                                <small className="text-default-500">{item.price}</small>
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <Button
                    onClick={handleNext}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === cardsPerPage - 1 ? 'text-black' : ''
                        }`}
                >
                    {'>'}
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Button className={`custom-button ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>View all</Button>
            </div>
            <div className="my-8">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>DEWAN SET!</div>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
                </div>

            </div>
            <div>
                <Button
                    onClick={handlePrev}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === 0 ? 'text-black' : ''}`}
                >
                    {'<'}
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
                        <Card
                            className="py-4"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(null)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Your card content */}
                            <CardBody className="overflow-visible py-2 ">
                                <Image    
                                   isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500"
                                    src={item.img}
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{item.title}</p>
                                <small className="text-default-500">{item.price}</small>
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <Button
                    onClick={handleNext}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === cardsPerPage - 1 ? 'text-black' : ''
                        }`}
                >
                    {'>'}
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Button className={`custom-button ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>View all</Button>
            </div>
            <div className="my-8">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>PILLOW COVER!</div>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
                </div>

            </div>
            <div>
                <Button
                    onClick={handlePrev}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === 0 ? 'text-black' : ''}`}
                >
                    {'<'}
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
                        <Card
                            className="py-4"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(null)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Your card content */}
                            <CardBody className="overflow-visible py-2 ">
                                <Image    
                                   isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500"
                                    src={item.img}
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{item.title}</p>
                                <small className="text-default-500">{item.price}</small>
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <Button
                    onClick={handleNext}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === cardsPerPage - 1 ? 'text-black' : ''
                        }`}
                >
                    {'>'}
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Button className={`custom-button ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>View all</Button>
            </div>
            <div className="my-8">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>CUSHION COVER!</div>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
                </div>

            </div>
            <div>
                <Button
                    onClick={handlePrev}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === 0 ? 'text-black' : ''}`}
                >
                    {'<'}
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
                        <Card
                            className="py-4"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(null)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Your card content */}
                            <CardBody className="overflow-visible py-2 ">
                                <Image    
                                   isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500"
                                    src={item.img}
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{item.title}</p>
                                <small className="text-default-500">{item.price}</small>
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <Button
                    onClick={handleNext}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === cardsPerPage - 1 ? 'text-black' : ''
                        }`}
                >
                    {'>'}
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Button className={`custom-button ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>View all</Button>
            </div>
            <div className="my-8">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>BOLSTER COVER!</div>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
                </div>

            </div>
            <div>
                <Button
                    onClick={handlePrev}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === 0 ? 'text-black' : ''}`}
                >
                    {'<'}
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
                        <Card
                            className="py-4"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(null)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Your card content */}
                            <CardBody className="overflow-visible py-2 ">
                                <Image    
                                   isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500"
                                    src={item.img}
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{item.title}</p>
                                <small className="text-default-500">{item.price}</small>
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <Button
                    onClick={handleNext}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === cardsPerPage - 1 ? 'text-black' : ''
                        }`}
                >
                    {'>'}
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Button className={`custom-button ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>View all</Button>
            </div>
            <div className="my-8">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>MATTRESS COVER!</div>
                    <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
                </div>

            </div>
            <div>
                <Button
                    onClick={handlePrev}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === 0 ? 'text-black' : ''}`}
                >
                    {'<'}
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
                        <Card
                            className="py-4"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(null)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Your card content */}
                            <CardBody className="overflow-visible py-2 ">
                                <Image    
                                   isZoomed
                                    alt="Card background"
                                    className="object-cover rounded-lg ease-in-out duration-700 delay-500"
                                    src={item.img}
                                    width={270}
                                    height={270}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <p className="text-tiny uppercase font-bold">{item.title}</p>
                                <small className="text-default-500">{item.price}</small>
                                {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <Button
                    onClick={handleNext}
                    className={`bg-gray-200 px-2 py-1 rounded-md ${hoveredIndex === cardsPerPage - 1 ? 'text-black' : ''
                        }`}
                >
                    {'>'}
                </Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Button className={`custom-button ${hovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>View all</Button>
            </div>
        </div>
    );
}
