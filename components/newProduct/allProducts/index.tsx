import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, AccordionItem } from "@nextui-org/react";
import FilterProducts from "./filterProducts";

export default function AllProducts() {
  
  const [data, setData]: any = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]: any = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://vishnoi-handloom-api.vercel.app/v1/category/getAllcategory');
      setData(response.data);
      // console.log(response.data);
      // console.log(data);

    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(data);


  return (
    <Accordion>
      {
        data &&
        data.map((item: any, index: any) => (
          <AccordionItem key={item.id} title={item.category}>
            <FilterProducts title={item.category} />
          </AccordionItem>
        ))}
    </Accordion>
  );
}
