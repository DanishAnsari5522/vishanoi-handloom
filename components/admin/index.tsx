import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import Login from './login'
import AdminProduct from './addProduct'
import AddCategory from './addCategory';
export default function Admin() {
  return (
    <div className='justify-center items-center gap-[20px] mt-[50px]'>

      <div className="flex flex-col w-full">
        <Tabs aria-label="Options" >
          <Tab key="addProduct" title="Add Product">
            <Card className='shadow-none'>
              <CardBody>
                <AdminProduct />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="addCategory" title="Add Category">
            <Card className='shadow-none'>
              <CardBody>
                <AddCategory />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      {/* <Login/> */}
    </div>
  )
}
