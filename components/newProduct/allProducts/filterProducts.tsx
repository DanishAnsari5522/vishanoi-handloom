import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardFooter, CardHeader, Button, Image } from "@nextui-org/react";

export default function FilterProducts(props: any) {



    const [data, setData]: any = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]: any = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://vishnoi-handloom-api.vercel.app/v1/product/getAllProduct');
            setData(response.data);
            // console.log(response.data);
            // console.log(data);

        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // console.log(data);

    return (
        <>
            <div className="mb-12">
                <div className="grid grid-cols-5  max-md:grid-cols-1 gap-2 max-lg:grid-cols-3">

                    {
                        data &&
                        data.map((item:any, index:any) => (
                            <Card
                                className="py-4 shadow-none"
                                key={index}

                            >
                                <CardBody className="overflow-visible py-2 ">
                                    <Image
                                        isZoomed
                                        alt="Card background"
                                        className="object-cover rounded-lg ease-in-out duration-700 delay-500 h-full min-h-[300px] max-h-[300px] w-full min-w-full"
                                        src={item.coverURL}

                                    />
                                </CardBody>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    <p className="text-tiny uppercase font-bold text-center">{item.name}</p>
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