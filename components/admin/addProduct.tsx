import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Input, Modal, ModalBody, ModalContent, ModalFooter, Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import router from 'next/router';

export default function AdminProduct() {
    const category = ["Bedsheet", "Cusion Cover", "Mattress", "Pilow Covered", "Blanket"];
    const [selectedCategory, setSelectedCategory]: any = useState();
    const [productName, setProductName] = useState('');
    const [selectedFile, setSelectedFile]: any = useState(null);
    const [loading, setLoading] = useState(false);
    const [categoryData, setcategoryData]: any = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]: any = useState(null);
    // console.log(image);
    // console.log(selectedCategory);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0]; // Access the first selected file
        setSelectedFile(file);
        // console.log("selectedFile", file);
    };

    const onSubmit = async () => {

        const data = new FormData();
        data.append('file', selectedFile)
        data.append('upload_preset', 'Helohair')
        setLoading(true)
        // console.log(data);


        const res = await fetch("https://api.cloudinary.com/v1_1/dbz8cdpis/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json()
        // console.log(file.url);
        // console.log(selectedCategory);

        // setProductImage(file.url)
        // console.log(productName, category[selectedCategory], file.url, 'test', productPrice);
        let productImage;
        if (file.url) {
            productImage = file.url;
            console.log("uploaded");

            let result = fetch('https://vishnoi-handloom-api.vercel.app/v1/product/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productName,
                    category: categoryData[selectedCategory].category,
                    coverURL: file.url,
                    discription: "It madeup of pure fabric",
                    price: 100

                }),
            }).then(res => res.json()).then(
                async data => {
                    if (data.success == false) {
                        // console.log("Error");
                        alert('error')

                    } else if (data.success == true) {
                        router.push('/');
                    }
                }
            )

        } else {
            console.log("uploaded");
        }
    }




    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://vishnoi-handloom-api.vercel.app/v1/category/getAllcategory');
            setcategoryData(response.data);
            console.log(response.data);
            console.log(categoryData);

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


    return (
        <div className='flex flex-col justify-center items-center gap-[20px] mt-[50px] '>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-[20px] md:w-1/4 max-md-w-full border-[1px]">
                <p className='text-center font-bold text-size-[60px]'>Add Product</p>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Select a Category"
                        className="max-w-xs"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categoryData && categoryData.map((item: any, index: any) => (
                            <SelectItem key={index} value={item.category}>
                                {item.category}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <Input
                    type="Text"
                    label="Product Name"
                    variant="bordered"
                    className="w-full"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <div className="flex items-center justify-center">
                    <label htmlFor="file-upload" className="custom-file-upload text-center text-lg md:text-sm lg:text-lg xl:text-xl mb-2 md:mb-0">
                        Upload Product Image
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden border-[2px]"
                        onChange={handleFileChange}
                    />
                    {/* {selectedFile && (
                        <p className="ml-4">Selected file: {selectedFile.name}</p>
                    )} */}
                </div>
                <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4" type="button" onClick={onSubmit}>
                    Upload
                </button>
                {/* <Modal
                    size={"xs"}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Uploaded Successfull</ModalHeader>
                                <ModalBody>
                                    <p>
                                        Your Image has been uploaded
                                    </p>

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        ok
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal> */}
            </div>
        </div>
    )
}
