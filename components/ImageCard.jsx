'use client'
import { db } from "@/app/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();


const ImageCard = (prop) => {
  
  const handleDelete = async ()=> {
    let fileName = prop.img;
      fileName = fileName.split('2F')[1].split('?')[0];

    try {


      const deleteRef = ref(storage, 'images/' + fileName);
      await deleteDoc(doc(db, "userUploads", prop.id));
      await deleteObject(deleteRef);

      alert("Image Deleted");
      location.reload();
    } catch (error) {
      alert("Error Deleting File");
      console.log(error);
    }
  }
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
        <button onClick={handleDelete} className="bg-red-600  mx-auto block my-2 px-10 rounded-lg py-2 text-white">
          Delete
        </button>
      </Link>
    </div>
  );
};

export default ImageCard;
