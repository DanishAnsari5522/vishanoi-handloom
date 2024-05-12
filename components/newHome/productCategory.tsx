import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button, Image } from "@nextui-org/react";
import axios from 'axios';


export default function ProductCategory() {

    const [data, setData]: any = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]: any = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://vishnoi-handloom-api.vercel.app/v1/category/getAllcategory');
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
            <div className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

                    {
                        data &&
                        data.map((item: any, index: any) => (
                            <Card
                                className="py-4 shadow-none"
                                key={index}

                            >
                                <CardBody className=" py-2 w-full">
                                    <Image
                                        isZoomed
                                        alt="Card background"
                                        className=" rounded-lg ease-in-out duration-700 delay-500 h-[400px]"
                                        src={item.coverURL}

                                    />
                                </CardBody>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    <p className="text-tiny uppercase font-bold text-center">{item.category}</p>
                                </CardHeader>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>

    );
}