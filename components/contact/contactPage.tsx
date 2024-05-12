import React from "react";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
export default function ContactPage() {
    return (
        <>
            <div className="grid grid-cols-2 max-md:grid-cols-1 my-12">
                <div>
                    <p className="text-[28px] mb-3">GET IN TOUCH</p>
                    <div>
                        <p className="text-[28px] mb-3 mt-4 font-semibold">Mobile Numbers</p>
                        <p className="text-[18px] mb-3 mt-4 font-thin">tel:(91)%209557770017</p>
                        <p className="text-[18px] mb-3 mt-4 font-thin">tel:(91)%208126540187 </p>
                    </div>
                    <div>
                        <p className="text-[28px] mb-3 mt-4 font-semibold">EMAIL</p>
                        <p className="text-[18px] mb-3 mt-4 font-thin">VISHNOIHANDLOOM@GMAIL.COM</p>
                        <p className="text-[18px] mb-3 mt-4 font-thin">VISHNOIHANDLOOM@GMAIL.COM </p>
                    </div>
                    <div>
                        <p className="text-[28px] mb-3 mt-4 font-semibold">BUSSINESS HOURS</p>
                        <p className="text-[18px] mb-3 mt-4 font-thin">Monday — Saturday 8 am – 5 pm</p>
                        <p className="text-[18px] mb-3 mt-4 font-thin">Sunday — Closed </p>
                    </div>


                </div>
                <div className="">
                    <p className="text-[28px] mb-3">SEND US A MESSAGE</p>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input type="Name" placeholder=" Name" />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-3">
                        <Input type="email" placeholder=" Phone Number" />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-3">
                        <Input type="email" placeholder=" Email" />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-3">
                        <Textarea
                            placeholder="Message"
                            className="max-w-2xl"
                        />
                    </div>

                    <div className="my-8">
                    <Button color="primary" variant="shadow">Submit </Button> 

                    </div>

                </div>
            </div>
            <div className="text-center" >
                <p className="text-[28px] mb-3">VISIT US</p>
                <p className="text-[18px] mb-3 mt-4 font-thin" >Opposite Block 166, Double Storey Govindpuri Modinagar ,Ghaziabad

                </p>
                <p className="text-[18px] mb-3 mt-4 font-thin">Uttar Pradesh(201201)</p>

            </div>

        </>
    )
}