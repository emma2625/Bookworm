import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ProfileForm from "@/components/ProfileForm";
import UploadsForm from "@/components/UploadsForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Uploads - Book Worm",
  description: "",
};
const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <section className="my-16">
      <div className="shadow-lg p-3 rounded w-full max-w-5xl mx-auto">
        <h1 className="text-center font-bold mb-5 text-black"> Uploads </h1>
        <UploadsForm />
      </div>
    </section>
  );
};

export default page;
