import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { collection, query, where, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "@/app/firebase/config";
import ImageCard from "@/components/ImageCard";
export const metadata = {
  title: "My Uploads",
};

const page = async () => {
  const { user } = await getServerSession(authOptions);
  const q = query(
    collection(db, "userUploads"),
    where("userId", "==", user.id)
  );

  const querySnapshot = await getDocs(q);
  const imageData = [];
  querySnapshot.forEach((doc) => {
    imageData.push({
        ...doc.data(),
        id: doc.id
    });
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
      {imageData.map((img) => (
        <ImageCard img={img.fileUrl} name={img.title} id={img.id} key={img.id} />
      ))}
    </div>
  );
};

export default page;
