// import Image from "next/image";
import { Inter } from "next/font/google";
import Homes from "@/components/home";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Bedsheet1 from "../../public/assets/Images/Bedsheet1.webp"
// import Bedsheet2 from "../../public/assets/Images/Bedsheet4.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
  const list = [
    {
      title: "Bedsheet",
      img: "assets/Images/Bedsheet3.webp",
      price: "$5.50",
    },
    {
      title: "Dewan Set",
      img: "assets/Images/Bedsheet1.webp",
      price: "$3.00",
    },
    {
      title: "Pillow Cover",
      img: "assets/Images/Bedsheet4.jpg",
      price: "$10.00",
    },
    {
      title: "Cusion Cover",
      img: "assets/Images/Bedsheet3.webp",
      price: "$5.30",
    },
    {
      title: "Pillow covers",
      img: "assets/Images/Bedsheet3.webp",
      price: "$10.00",
    },
    {
      title: "Mattress covers",
      img: "assets/Images/Bedsheet1.webp",
      price: "$5.30",
    },

  ];

  return (
    <div className="my-12">
      {/* <Homes /> */}
      <h2 style={{ fontWeight: '600', marginLeft: '20px' }}>Your home for all </h2>
      <p style={{ fontSize: '30px', fontWeight: '600', marginLeft: '20px', marginBottom: "10px" }}>Bedding essentials!</p>
      <div className="gap-4 grid grid-cols-6 max-md:grid-cols-1 max-lg:grid-cols-3">

        {list.map((item, index) => (
          <Card key={index} isPressable onPress={() => console.log("item pressed")} className="shadow-none p-0" style={{ padding: 0 }} >
            <CardBody className="flex flex-row items-center justify-center">
              <div className="flex items-center max-md:justify-center flex-col max-md:min-w-40 max-md:max-w-40">


                <Image
                  isZoomed
                  alt={item.title}
                  className="rounded-full"
                  src={item.img}
                />
                <b className="text-red-400">{item.title}</b>
                <p className="text-red-400">{item.price}</p>
              </div>
            </CardBody>

          </Card>
        ))}
      </div>


    </div>
  );
}
