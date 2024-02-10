import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ProfileForm from "@/components/ProfileForm";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/signin');
  }
  return (
    <section className="my-16">
      <div className="shadow-lg p-3 rounded w-full max-w-2xl mx-auto">
        <h1 className="text-center font-bold mb-5"> Profile </h1>

        <ProfileForm />
      </div>
    </section>
  );
};

export default page;
