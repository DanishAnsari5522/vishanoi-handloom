// import Image from "next/image";
import { Inter } from "next/font/google";
import Homes from "@/components/home";
import { Card, CardBody, CardFooter,Image } from "@nextui-org/react";
import Bedsheet1 from "../../public/assets/Images/Bedsheet1.webp"
// import Bedsheet2 from "../../public/assets/Images/Bedsheet4.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const list = [
    {
      title: "Bedsheet",
      img: "../assets/Images/Bedsheet2.webp",
      price: "$5.50",
    },
    {
      title: "Dewan Set",
      img: "/assets/Images/Bedsheet1.webp",
      price: "$3.00",
    },
    {
      title: "Pillow Cover",
      img: "/assets/Images/Bedsheet4.jpg",
      price: "$10.00",
    },
    {
      title: "Cusion Cover",
      img: "/assets/Images/Bedsheet3.webp",
      price: "$5.30",
    },
    {
      title: "Pillow covers",
      img: "/assets/Images/Bedsheet2.webp",
      price: "$10.00",
    },
    {
      title: "Mattress covers",
      img: "/assets/Images/Bedsheet1.webp",
      price: "$5.30",
    },

  ];

  return (
    < div style={{ padding: '0px' }}>
      {/* <Homes /> */}
      <h2 style={{ fontWeight: '600', marginLeft: '20px' }}>Your home for all </h2>
      <p style={{ fontSize: '30px', fontWeight: '600', marginLeft: '20px', marginBottom: "10px" }}>Bedding essentials!</p>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-6">

        {list.map((item, index) => (
          <Card key={index} isPressable onPress={() => console.log("item pressed")}   >
            <CardBody style={{  borderRadius: '250px',padding:'0px'}}>
              <Image
                //  radius={80}
                isZoomed
                height={200}
                width={200}
                alt={item.title}
                className="object-cover rounded-lg"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-around">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>

            </CardFooter>
          </Card>
        ))}
      </div>
      
     
    </div>
  );
}
