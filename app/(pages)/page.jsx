import ImageCard from "@/components/ImageCard";
import React from "react";

const Home = () => {
  return (
    <main>
      <section>
        <div className="h-96 bg-gradient-to-tr from-blue-200 to-emerald-300 flex justify-center items-center">
          <h1 className="text-5xl text-blue-900 text-center">
            Get High Quality Images &nbsp;
            <br className="max-sm:hidden" />
            For Your Projects
          </h1>
        </div>
      </section>

      <section className="my-10 p-5">

        <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
          <ImageCard img={"/images/image-1.jpg"} name={"John Doe"} />
          <ImageCard img={"/images/1.jpg"} name={"John Doe"} />
          <ImageCard img={"/images/2.jpg"} name={"John Doe"} />
          <ImageCard img={"/images/3.jpg"} name={"John Doe"} />
          <ImageCard img={"/images/4.jpg"} name={"John Doe"} />
        </div>
      </section>
    </main>
  );
};

export default Home;
