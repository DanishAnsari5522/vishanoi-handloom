import React, { useState, useEffect } from 'react';
import { Input, Card, CardBody, CardFooter, CardHeader, Button, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import router from 'next/router';


export default function ProductCategory() {

    const [data, setData]: any = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]: any = useState(null);
    const [dropdown, setDropDown] = useState(false);
    const [id, setId] = useState();
    // const [sessionData, setSessionData]: any = useState('');
    const { isOpen: deleteModalOpen, onOpen: openDeleteModal, onClose: closeDeleteModal } = useDisclosure();
    const { isOpen: editModalOpen, onOpen: openEditModal, onClose: closeEditModal } = useDisclosure();

    const [category, setCategory] = useState('');

    const [selectedFile, setSelectedFile]: any = useState(null);


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

    const deleteItem = async (id: any) => {

        let result = await fetch(`https://vishnoi-handloom-api.vercel.app/v1/category/deleteCategory?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(
            async data => {
                if (data.success == false) {
                    console.log("Error");
                } else if (data.success == true) {
                    console.log("Hello");
                    setId(undefined)
                    fetchData()
                }
            }
        )
    }



    const handleClick = async (id: any) => {
        console.log('from Child:', id);
        // setToggle(true);
        // setIdUpdate(id);

        try {
            const response = await fetch(`https://vishnoi-handloom-api.vercel.app/v1/category/getcategory?id=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (!data) {
                    console.log('Error');
                } else if (data) {
                    console.log('Fetch');
                    console.log(data.name);
                    setCategory(data.category);
                    setSelectedFile(data.coverURL);

                }
            } else {
                console.error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0]; // Access the first selected file
        setSelectedFile(file);
        // console.log("selectedFile", file);
    };


    const handleUpdate = async () => {
        console.log("Befor Api");
        const data = new FormData();
        data.append('file', selectedFile)
        data.append('upload_preset', 'Helohair')
        // setLoading(true)
        // console.log(data);


        const res = await fetch("https://api.cloudinary.com/v1_1/dbz8cdpis/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json()
        // setSelectedFile(file.url)

        if (!category) {
            setError("category Required");
        } else if (!selectedFile || !file.url) {
            setError("selectedFile Required");
        } else {

            let result = await fetch(`https://vishnoi-handloom-api.vercel.app/v1/category/updatecategory?id=${id}`, {
                method: 'PUT',
                body: JSON.stringify({ category, coverURL: file.url }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json()).then(
                async data => {
                    if (data.success == false) {
                        console.log("Error");
                    } else if (data.task) {
                        console.log("Hello");
                        router.reload();

                    }
                }
            )
        }
    }



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
                                            <DropdownItem key="new" onPress={openDeleteModal} onClick={() => setId(item._id)}>Delete Category</DropdownItem>
                                            <DropdownItem key="copy" onPress={openEditModal} onClick={() => { setId(item._id), handleClick(item._id) }}>Edit Category</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>) : null}
                                </CardBody>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    <p className="text-tiny uppercase font-bold text-center">{item.category}</p>
                                </CardHeader>
                            </Card>
                        ))
                    }
                </div>
            </div>
            <Modal isOpen={deleteModalOpen} onOpenChange={closeDeleteModal}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to delete this image?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={closeDeleteModal} onClick={() => setId(undefined)}>
                            Cancel
                        </Button>
                        <Button color="primary" onPress={closeDeleteModal} onClick={() => { deleteItem(id) }}>
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
                            {/* <p className='text-center font-bold text-size-[60px]'>Add Category</p> */}
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            </div>
                            <Input
                                type="Text"
                                label="Category"
                                variant="bordered"
                                className="w-full"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />

                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="file-upload" className="custom-file-upload text-center text-lg md:text-sm lg:text-lg xl:text-xl mb-2 md:mb-0">
                                    Upload Product Image
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden border-[2px] "
                                    onChange={handleFileChange}
                                />
                            </div>
                            <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4" type="button" onClick={() => handleUpdate()}>
                                Submit
                            </button>

                        </div>                    </ModalBody>

                </ModalContent>
            </Modal>
        </>

    );
}