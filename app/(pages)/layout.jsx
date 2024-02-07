import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import React from "react";

const layout = ({ children }) => {
  return (
    <AuthProvider>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default layout;
