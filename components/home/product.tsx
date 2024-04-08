import Image from "next/image";
import { Inter } from "next/font/google";
import Homes from "@/components/home";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
// import Bedsheet1 from "../../public/assets/Images/Bedsheet1.webp"
import Bedsheet2 from "../../public/assets/Images/Bedsheet4.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Product() {
//   const list = [
//     {
//       title: "Bedsheet",
//       img: "../assets/Images/Bedsheet1.webp",
//       price: "$5.50",
//     },
//     {
//       title: "Blanket",
//       img: "/assets/Images/Bedsheet1.webp",
//       price: "$3.00",
//     },
//     {
//       title: "Duvet covers",
//       img: "/assets/Images/Bedsheet1.webp",
//       price: "$10.00",
//     },
//     {
//       title: "Bedcovers",
//       img: "/assets/Images/Bedsheet1.webp",
//       price: "$5.30",
//     },
//     {
//       title: "Pillow covers",
//       img: "/assets/Images/Bedsheet1.webp",
//       price: "$10.00",
//     },
//     {
//       title: "Mattress Protector",
//       img: "/assets/Images/Bedsheet1.webp",
//       price: "$5.30",
//     },

//   ];
  const data = [{
    title: "Bedsheet",
    img: "../assets/Images/Bedsheet1.webp",
    price: "$5.50",
  },
  {
    title: "Blanket",
    img: "/assets/Images/Bedsheet1.webp",
    price: "$3.00",
  },
  {
    title: "Duvet covers",
    img: "/assets/Images/Bedsheet1.webp",
    price: "$10.00",
  },
  {
    title: "Bedcovers",
    img: "/assets/Images/Bedsheet1.webp",
    price: "$5.30",
  }]
  return (
    < div style={{ padding: '0px' }}>
      {/* <Homes /> */}
      <h2 style={{ fontWeight: '600', marginLeft: '20px' }}>Your home for all </h2>
      <p style={{ fontSize: '30px', fontWeight: '600', marginLeft: '20px', marginBottom: "10px" }}>Bedding essentials!</p>
      {/* <div className="gap-4 grid grid-cols-1 md:grid-cols-6">

        {list.map((item, index) => (
          <Card key={index} isPressable onPress={() => console.log("item pressed")}  >
            <CardBody style={{ border: '1px solid black', borderRadius: '250px' }}>
              <Image
                //  radius={80}
                height={270}
                width={270}
                alt={item.title}
                className="object-cover rounded-xl"
                src={Bedsheet1}
              />
            </CardBody>
            <CardFooter className="text-small justify-around">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>

            </CardFooter>
          </Card>
        ))}
      </div> */}
      <div className="my-8">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
        <div style={{ margin: '0 300px', fontSize: "28px", fontWeight: '600' }}>Shop Our Bestsellers!</div>
        <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
      </div>
      <div style={{ alignItems: 'center' }}>
        <p style={{ margin: '0 510px', fontWeight: '600', fontSize: '14px', color: 'gray ' }}>Don't miss out on these in-demand products</p>
      </div>
      </div>
      
      <div className="gap-2 grid grid-cols-1 md:grid-cols-4">
        {data.map((item, index) => (
          <Card className="py-4">

            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-lg"
                src={Bedsheet2}
                width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
          </Card>
        ))}

      </div>
    </div>
  );
}
