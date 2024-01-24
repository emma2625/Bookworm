import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto =  Roboto({weight: ['100','300','400'] , subsets: ['latin']});

export const metadata = {
  title: "Book worm",
  description: "This is my react app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
