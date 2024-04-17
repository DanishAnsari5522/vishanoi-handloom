import React from "react";
import { Button,Image } from "@nextui-org/react";
export default function AboutCompany() {
    return (
        <>
            <div className="grid grid-cols-2 max-md:grid-cols-1 my-12">
                <div>
                    <p style={{ fontSize: '28px', fontWeight: '500' }}>ESTABLISHED IN 1990</p>
                    <Image className="w-[50%] mt-8"
                    
                    src="https://manishhandloomfactory.com/wp-content/uploads/2020/06/IMG-20200112-WA0007.jpg"
                    />
                </div>
                <div className="">
                    <p className="my-8" style={{ fontSize: '14px', color: 'gray', fontStyle: 'inherit',lineHeight:'24px' }}>Manish Handloom Factory was established in the year 1990. We are pleased to introduce ourselves as a group of seasoned handloom industry having more than 30 years of rigorous experience in handling business of handloom and home furnishing sector. We are in business of providing vast range for home furnishing items and have existing supplies in North, West and South India. Manish Handloom Factory is a venture to provide best possible and quality furnishing products in the market.</p>
                    <p style={{ fontSize: '14px', color: 'gray', fontStyle: 'inherit',lineHeight:'24px' }}>We believe to supply the products in distinguished manner to make a difference and as per customer’s requirement. Quality is and has always been our first priority when we manufacture trendy designs for your home. With superior fabric and accessories, we are engaged in offering our clients an alluring range of home furnishing products with excellence to be applauded. We visualize the current trends and design for home and offer the wide range of latest trendy designs to choose from. We strive to continually improve and enhance the quality of finished material.</p>
                  <div className="my-8">
                    <p className="text-[18px] mb-3">Manish Gupta</p>
                    <p className="text-[18px] mb-3">Vishal Gupta</p>

                  </div>
                   
                </div>
            </div>
        </>
    )
}