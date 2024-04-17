import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FilterProducts from "./filterProducts";

export default function AllProducts() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const data = [
    {
      id: '1',
      title: 'Bedsheet',
      
    },
    {
      id: '2',
      title: 'Cushion cover'
    },
    {
      id: '3',
      title: 'Mattress'
    },
    {
      id: '4',
      title: 'Diwan set'
    },
    {
      id: '5',
      title: 'Blanket'
    },
    {
      id: '6',
      title: 'Sofa Cover'
    },
  ];

  return (
    <Accordion>
      {data.map((item, index) => (
        <AccordionItem key={item.id} title={item.title}>
          <FilterProducts title={item.title}/>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
