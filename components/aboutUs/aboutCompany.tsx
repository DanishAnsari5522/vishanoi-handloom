import React from "react";
import { Button,Image } from "@nextui-org/react";
export default function AboutCompany() {
    return (
        <>
            <div className="grid grid-cols-2 max-md:grid-cols-1 my-12">
                <div>
                    <p style={{ fontSize: '28px', fontWeight: '500',fontFamily:'Overpass' }}>Welcome to Vishnoi Handloom!</p>
                    <Image className="w-[50%] mt-8"
                    
                    src="https://manishhandloomfactory.com/wp-content/uploads/2020/06/IMG-20200112-WA0007.jpg"
                    />
                </div>
                <div className="">
                    <p className="my-8" style={{ fontSize: '14px', color: 'gray', fontStyle: 'Briem Hand',lineHeight:'24px' }}>At Vishnoi Handloom, we take pride in crafting exquisite home textiles that add comfort, style, and elegance to your living spaces. Established with a passion for quality craftsmanship and a dedication to excellence, we specialize in the manufacturing of a wide range of premium bedding and home decor essentials, including bedsheets, sofa covers, mattress covers, pillow covers, and cushion covers.</p>
                    <p style={{ fontSize: '14px', color: 'gray', fontStyle: 'inherit',lineHeight:'24px' }}>Our journey began with a vision to redefine the standards of home textiles by blending traditional artistry with modern innovation. Each piece in our collection is meticulously crafted by skilled artisans, utilizing premium quality materials and intricate designs to ensure utmost comfort, durability, and aesthetic appeal.</p>
                  <div className="my-8">
                    <p className="text-[18px] mb-3">Rashi</p>
                    <p className="text-[18px] mb-3">Rashi Handloom</p>

                  </div>
                   
                </div>
            </div>
        </>
    )
}