import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageCard = (prop) => {
  return (
    <div className="shadow-sm">
      <Link href={"#"}>
        <Image
          src={prop.img}
          alt="Card Image"
          width={100}
          height={100}
          className="w-full aspect-square object-contain"
        />

        <p className="font-bold text-center font-mono py-3"> 
            {prop.name}
        </p>
      </Link>
    </div>
  );
};

export default ImageCard;
