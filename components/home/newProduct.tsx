import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


export default function NewProduct() {
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
        <>
            <div className="my-12">
                <div className="my-8">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                        <div>
                            <p className="text-2xl text-primary text-center">BEDSHEET</p>
                            <p >Don&apos;t miss out on these in-demand products</p>

                        </div>
                        <div style={{ flex: 1, height: '2px', backgroundColor: '#e8c463' }} />
                    </div>
                </div>

                <div style={{ padding: '0px' }}>
                    <h2 style={{ fontWeight: '600', marginLeft: '20px' }}>Your home for all </h2>
                    <p style={{ fontSize: '30px', fontWeight: '600', marginLeft: '20px', marginBottom: "10px" }}>Bedding essentials!</p>
                    <div className="gap-4 grid grid-cols-6 max-md:grid-cols-1 max-lg:grid-cols-3">

                        {list.map((item, index) => (
                            <Card key={index} isPressable onPress={() => console.log("item pressed")} className="shadow-none" >
                                <CardBody className="flex flex-row  justify-center p-0" style={{ padding: 0 }}>
                                    <div className="flex items-center max-md:justify-center flex-col max-md:min-w-44 max-md:max-w-44">


                                        <Image
                                            isZoomed
                                            height="200px"
                                            alt={item.title}
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
            </div>
        </>

    );
}
