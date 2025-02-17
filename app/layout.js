import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PizzaHub - Delicious Pizza Delivered to Your Door",
  description: "Order delicious, handcrafted pizzas made with the finest ingredients. Fast delivery and excellent customer service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
