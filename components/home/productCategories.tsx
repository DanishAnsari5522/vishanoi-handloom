import React from 'react'
import {Avatar ,AvatarGroup} from "@nextui-org/react";
import { Card, CardBody, CardFooter, CardHeader ,Image} from "@nextui-org/react";
import Bedsheet from "../../public/assests/Sheet1.jpg"
import {Divider} from "@nextui-org/react";
import {Tooltip, Button} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

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
export default function ProductCategories() {
  return (
   <>
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3vh' }}>
  <p style={{ fontWeight: '600', fontSize: '14px', color: 'gray', textAlign: 'center' }}>Don't miss out on these in-demand products</p>
</div>

      </div>
      
      <div className="gap-2 grid grid-cols-1 md:grid-cols-4">
        {data.map((item, index) => (
          <Card className="py-4">

            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-lg"
                // src={Bedsheet}
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
    <div className="flex flex-col justify-center items-center h-screen">
    <Image 
      isZoomed
      width={600}
      alt="NextUI Fruit Image with Zoom"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOUINO_V6rTbi910A_znz6KMJpUy2z3oMcw&s"
    />
    </div>

    <div className="max-w-md flex flex-col justify-center items-center h-screen">
      <div className="space-y-1">
        <h1 className="text-medium font-medium">Vaishnoi Handloom</h1>
        <p className="text-small text-default-400">Mixing and matching bedding is one of our favorite ways to add pattern and depth to a bedroom. Plus, all of our bedding collections are designed to go together, so no matter the combination, the final result is sure to look cohesive.

To help get you started, we gathered some tried and true tips to mix and match bedding like a pro. You’ll have a beautifully layered bed in no time!.</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-1 items-center space-x-4 text-small">
        <div>Bedsheets</div>
        <Divider orientation="vertical" />
        <div>Shofa Covers</div>
        <Divider orientation="vertical" />
        <div>Hand crafted </div>
      </div>
    </div>

    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  


    
   

   </>
  )
}
