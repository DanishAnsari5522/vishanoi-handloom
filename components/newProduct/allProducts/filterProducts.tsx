import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Input,Select, SelectItem, Card, CardBody, CardFooter, CardHeader, Button, Image,  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

export default function FilterProducts(props: any) {



    const [data, setData]: any = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]: any = useState(null);
    const [dropdown, setDropDown] = useState(false);
    const [categoryData, setcategoryData]: any = useState();
    const { isOpen: deleteModalOpen, onOpen: openDeleteModal, onClose: closeDeleteModal } = useDisclosure();
    const { isOpen: editModalOpen, onOpen: openEditModal, onClose: closeEditModal } = useDisclosure();
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
    const Auth = () => {
        const authCheck = window.sessionStorage.getItem('token');
        if (authCheck) {
            console.log("Login ");
            setDropDown(true);

        } else {
            console.log("logout");
            setDropDown(false);

        }
    }

    useEffect(() => {
        Auth();
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
                        data.map((item: any, index: any) => (
                            item.category === props.title &&
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
                                    {dropdown === true ? (<Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                variant="bordered"
                                            >
                                                Open Menu
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            aria-label="Action event example"
                                        >
                                            <DropdownItem key="new" onPress={openDeleteModal}>Delete Category</DropdownItem>
                                            <DropdownItem key="copy" onPress={openEditModal}>Edit Category</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>) : null}
                                    {/* <small className="text-default-500">{item.price}</small> */}
                                    {/* <h4 className="font-bold text-large">{item.img}</h4> */}
                                </CardHeader>
                            </Card>
                        ))}
                </div>
            </div>
            <Modal isOpen={deleteModalOpen} onOpenChange={closeDeleteModal}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to delete this image?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={closeDeleteModal}>
                            Cancel
                        </Button>
                        <Button color="primary" onPress={closeDeleteModal}>
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={editModalOpen} onOpenChange={closeEditModal}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Edit Category</ModalHeader>
                    <ModalBody>
                        {/* Add your edit category form here */}
                        <div className="bg-white p-6 rounded-lg  flex flex-col gap-[20px] md:w-full max-md-w-full ">
                <p className='text-center font-bold text-size-[60px]'>Add Product</p>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Select a Category"
                        className="max-w-xs"
                        value=''
                        // onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {/* {categoryData && categoryData.map((item: any, index: any) => ( */}
                            <SelectItem key='a' value=''>
                                a
                            </SelectItem>
                            <SelectItem key='b' value=''>
                                b
                            </SelectItem>
                            <SelectItem key='c' value=''>
                                c
                            </SelectItem>
                            <SelectItem key='d' value=''>
                                d
                            </SelectItem>
                         {/* ))} */}

                    </Select>
                </div>
                <Input
                    type="Text"
                    label="Product Name"
                    variant="bordered"
                    className="w-full"
                    value=''
                    // onChange={(e) => setProductName(e.target.value)}
                />
                <div className="flex items-center justify-center">
                    <label htmlFor="file-upload" className="custom-file-upload text-center text-lg md:text-sm lg:text-lg xl:text-xl mb-2 md:mb-0">
                        Upload Product Image
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        className="hidden border-[2px]"
                        // onChange={handleFileChange}
                    />
                    {/* {selectedFile && (
                        <p className="ml-4">Selected file: {selectedFile.name}</p>
                    )} */}
                </div>
                <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4" type="button" >
                    Upload
                </button>
               
            </div>  
                  </ModalBody>

                </ModalContent>
            </Modal>
        </>

    );
}