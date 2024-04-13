// import Image from "next/image";
import { Inter } from "next/font/google";
import Homes from "@/components/home";
import { useRouter } from 'next/router';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Bedsheet1 from "../../public/assets/Images/Bedsheet1.webp"
// import Bedsheet2 from "../../public/assets/Images/Bedsheet4.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Category() {
    const router = useRouter();

  const list = [
    {
      title: "Bedsheet",
      img: "https://i5.walmartimages.com/asr/eec21a03-4627-4d99-8c75-89348f0016be.868789475ea23a887a8293e4b0521767.jpeg",
      price: "$5.50",
    },
    {
      title: "Dewan Set",
      img: "https://i.etsystatic.com/26473799/r/il/6334d2/2732230518/il_1588xN.2732230518_eh10.jpg",
      price: "$3.00",
    },
    {
      title: "Pillow Cover",
      img: "https://tse4.mm.bing.net/th?id=OIP.jHRZTyoHpiss3iC4-kH4zAHaIJ&pid=Api&P=0&h=180https://www.jaipurfabric.com/uploads/jaipurfabric/products/delicacy-568428_l.jpeg",
      price: "$10.00",
    },
    {
      title: "Cusion Cover",
      img: "https://suggestedproducts.in/wp-content/uploads/2020/10/Cotton-Bedsheet.jpg",
      price: "$5.30",
    },
    {
      title: "Pillow covers",
      img: "https://jnf.com.ph/wp-content/uploads/2019/10/1-scaled.jpg",
      price: "$10.00",
    },
    {
      title: "Mattress covers",
      img: "https://www.kritarthhandicrafts.com/wp-content/uploads/2022/08/DSC_6499..jpg",
      price: "$5.30",
    },

  ];
  console.log("title",list[5].title);
  const ab = list[0].title;
  const handleCategoryClick = (ab) => {
    const url = `/category/${encodeURIComponent(ab.toLowerCase().replace(/\s+/g, '-'))}`;
    console.log('Navigating to:', url);
    router.push(url);
  };
  

  return (
    <div className="my-12">
      {/* <Homes /> */}
      <h2 style={{ fontWeight: '600', marginLeft: '20px' }}>Your home for all </h2>
      <p style={{ fontSize: '30px', fontWeight: '600', marginLeft: '20px', marginBottom: "10px" }}>Bedding essentials!</p>
      <div className="gap-4 grid grid-cols-6 max-md:grid-cols-1 max-lg:grid-cols-3">

        {list.map((item, index) => (
          <Card key={index} isPressable onPress={() => ((console.log("item clicked",JSON.stringify(item.title))
          ), handleCategoryClick(item.title))} className="shadow-none p-0" style={{ padding: 0 }} >
            <CardBody className="flex flex-row items-center justify-center">
              <div className="flex items-center max-md:justify-center flex-col max-md:min-w-40 max-md:max-w-40">
               <Image
                width={250}
                height={250}
                  isZoomed
                  alt={item.title}
                  className="rounded-full"
                  src={item.img}
                />
                <b className="text-black-400">{item.title}</b>
                <p className="text-black-400">{item.price}</p>
              </div>
            </CardBody>

          </Card>
        ))}
      </div>


    </div>
  );
}
