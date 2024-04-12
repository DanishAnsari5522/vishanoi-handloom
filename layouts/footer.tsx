import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Bedsheet from "../../public/assests/Sheet1.jpg"
import { Divider } from "@nextui-org/react";
import { Tooltip, Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
export const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: '#e2e8f0', height: '800px' }}>
        <Table aria-label="Example static collection table" >
          <TableHeader >
            <TableColumn >Bedroom Decor</TableColumn>
            <TableColumn>Living Room Decor</TableColumn>
            <TableColumn>Home Decorations</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="lg:ml-64 lg:mt-20 mt-10 flex justify-center"> {/* Adjust the margins for responsiveness */}
          <Tooltip showArrow={true} content="ORDER NOW!">
            <Button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
              VISHNOI HANDLOOM
            </Button>
          </Tooltip>
        </div>

        <div style={{ marginTop: '20px' }}>
          <AvatarGroup isBordered isDisabled>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>

          <div className="ml-4">
            {/* <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-lg hover:text-blue-800 mx-1 transition duration-300 ease-in-out transform hover:scale-110" />
          <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-lg hover:text-pink-800 mx-1 transition duration-300 ease-in-out transform hover:scale-110" />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-lg hover:text-blue-600 mx-1 transition duration-300 ease-in-out transform hover:scale-110" />
          <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-lg hover:text-red-800 mx-1 transition duration-300 ease-in-out transform hover:scale-110" />
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-800 text-lg hover:text-blue-900 mx-1 transition duration-300 ease-in-out transform hover:scale-110" /> */}
          </div>

          <div style={{ marginTop: '400px' }} className="container mx-auto">
            <div className="container mx-auto flex justify-center">

              <ul style={{ marginBottom: '10px' }} className="flex space-x-4">
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Exchange Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <p className="text-center text-gray-600">© 2024 Your Copyright House of Vishnoi Handloom all rights reserved.</p>
          </div>


        </div>
      </div>
    </>
  );
};
