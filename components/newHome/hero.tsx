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
        <div className="overlay">
          <p className="text-[54px]">Vishnoi</p>
          <p className="text-[54px]">Handloom</p>
          <p className="text-[24px]">
            Where fashion and quality beautifies your life.
          </p>
          <Button className={`floating-button ${loaded ? 'centered' : ''}`}>
          <Link className="text-color-white" href="/newProduct">
            Product
          </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
