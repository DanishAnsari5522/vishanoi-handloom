import React from "react";
import { Button,Link } from "@nextui-org/react";
export default function About() {
    return (
        <>
            <div className="grid grid-cols-2 max-md:grid-cols-1 my-12">
                <p style={{ fontSize: '28px', fontWeight: '500', fontFamily: 'Cinzel' }}>ABOUT THE COMPANY</p>
                <div>
                    <p className="text-[17px] text-[#7A7A7A] font-thin">We believe to supply the products in distinguished manner to make a difference and as per customer’s requirement. Quality is and has always been our first priority when we manufacture trendy designs for your home. With superior fabric and accessories, we are engaged in offering our clients an alluring range of home furnishing products with excellence to be applauded. We visualize the current trends and design for home and offer the wide range of latest trendy designs to choose from. We strive to continually improve and enhance the quality of finished material.</p>

                    <Link href="/aboutUs">
                        <Button className="w-[200px] bg-black hover:bg-gray-900 border-danger-50  text-white font-bold py-2 px-4 rounded mt-4" >About us</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}