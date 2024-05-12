import { Button,Link} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <>
      <div className="homeHero">
        <div className="overlay" >
          <p className="text-[54px]" style={{fontFamily:'font-thin'}}> Vishnoi</p>
          <p className="text-[54px]" style={{fontFamily:'font-thin'}}>Handloom</p>
          <p className="text-[24px]">
            Where fashion and quality beautifies your life.
          </p>
          <Button className="w-[200px] bg-black hover:bg-gray-900 border-danger-50  text-white tracking-widest font-light py-2 px-4 rounded mt-12" >Product </Button>
        </div>
      </div>
    </>
  );
}
