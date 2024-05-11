import React, { useState } from 'react';
import { Select, SelectItem, Input, Modal, ModalBody, ModalContent, ModalFooter, Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import axios from 'axios';

export default function AddCategory() {
    // const category = ["Bedsheet", "Cusion Cover", "Mattress", "Pilow Covered", "Blanket"];
    const [selectedFile, setSelectedFile] = useState<any>(null);
    // const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const token = sessionStorage.getItem('token');

    const handleFileChange = (e: any) => {
        const file = e.target.files[0]; // Access the first selected file
        setSelectedFile(file);
        console.log("selectedFile", file);
    };

    const handleUpload = () => {
        handleOpen()
        const formData = new FormData();
        formData.append('file', selectedFile);
        // formData.append('productName', productName);
        // formData.append('category', selectedCategory);

        axios.post('YOUR_API_ENDPOINT', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                handleOpen()
                console.log('Upload successful', response);
            })
            .catch(error => {
                console.error('Error uploading file', error);
            });
    }
    const handleOpen = () => {
        onOpen();
    }

    return (
        <div className='flex flex-col justify-center items-center gap-[20px] mt-[50px] '>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-[20px] md:w-1/4 max-md-w-1/4 border-[1px]">
                <p className='text-center font-bold text-size-[60px]'>Add Category</p>
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
                    {selectedFile && (
                        <p className="ml-4">Selected file: {selectedFile.name}</p>
                    )}
                </div>
                <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4" type="button" onClick={handleUpload}>
                    Submit
                </button>
                <Modal
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
                </Modal>
            </div>
        </div>
    )
}
