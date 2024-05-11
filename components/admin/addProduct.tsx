import React, { useState } from 'react';
import { Select, SelectItem, Input, Modal, ModalBody, ModalContent, ModalFooter, Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import axios from 'axios';

export default function AdminProduct() {
    const category = ["Bedsheet", "Cusion Cover", "Mattress", "Pilow Covered", "Blanket"];
    // const [selectedFile, setSelectedFile] = useState<any>(null);
    // const [productName, setProductName] = useState('');
    const [selectedCategory, setSelectedCategory]: any = useState();
    // const { isOpen, onOpen, onClose } = useDisclosure();

    // const token = sessionStorage.getItem('token');

    // const handleFileChange = (e: any) => {
    //     const file = e.target.files[0]; // Access the first selected file
    //     setSelectedFile(file);
    //     console.log("selectedFile", file);
    // };

    // const handleUpload = () => {
    //     handleOpen()
    //     const formData = new FormData();
    //     formData.append('file', selectedFile);
    //     formData.append('productName', productName);
    //     formData.append('category', selectedCategory);

    //     axios.post('https://vishnoi-handloom-api.vercel.app/v1/product/addProduct', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //         .then(response => {
    //             handleOpen()
    //             console.log('Upload successful', response);
    //         })
    //         .catch(error => {
    //             console.error('Error uploading file', error);
    //         });
    //     console.log(formData);

    // }
    // const handleOpen = () => {
    //     onOpen();
    // }

    const [productDetail, setProductDetail] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productCategori, setProductCategori] = useState('');
    const [productName, setProductName] = useState('');
    const [selectedFile, setSelectedFile]: any = useState(null);
    // const [productImage, setProductImage] = useState('');
    const [productData, setProuctData]: any = useState()
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("")
    console.log(image);
    console.log(selectedCategory);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0]; // Access the first selected file
        setSelectedFile(file);
        console.log("selectedFile", file);
    };

    const onSubmit = async () => {

        const data = new FormData();
        data.append('file', selectedFile)
        data.append('upload_preset', 'Helohair')
        setLoading(true)
        console.log(data);


        const res = await fetch("https://api.cloudinary.com/v1_1/dbz8cdpis/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json()
        console.log(file.url);
        console.log(selectedCategory);

        // setProductImage(file.url)
        console.log(productName, category[selectedCategory], file.url, 'test', productPrice);
        let productImage;
        if (file.url) {
            productImage = file.url;
            console.log("uploaded");

            // fetch('https://vishnoi-handloom-api.vercel.app/v1/product/addProduct', {
            //     method: 'POST',
            //     body: JSON.stringify({ name: productName, category: category[selectedCategory], coverURL: file.url, discription: "test", price: productPrice }),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // })
            //     .then(res => res.json()).then(
            //         data => {
            //             console.log(data);
            //             if (data.success == false) {
            //                 setError(data.success);
            //                 alert(data.success)
            //                 // alert("Select the Category");
            //             } else {
            //                 // navigation.navigate('Home');
            //                 alert("Submit successfully");
            //                 window.location.replace("/newProduct");
            //             }
            //         }
            //     )


            try {
                const response = await axios.post('https://vishnoi-handloom-api.vercel.app/v1/product/addProduct', {
                    name: productName,
                    category: category[selectedCategory],
                    coverURL: file.url,
                    discription: "test",
                    price: productPrice
                });
                const newToken = response.data;
                // setProuctData(newToken);
                // router.push('/admin');
                alert('done')
            } catch (error) {
                console.error('Login failed:', error);
            }

        } else {
            console.log("uploaded");
        }
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
                        {category.map((animal, index) => (
                            <SelectItem key={index} value={animal}>
                                {animal}
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
