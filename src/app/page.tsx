import Image from "next/image";
import Footer, { PreFooter } from "./Footer/footer";
import Navbar, { BlogNav } from "./Navbar/navbar";
import Hero from "./Hero/hero";
import Card from "./Card/card";
import Blog from "./Blogs/blogs";

export default function Home() {


  return (
    <main className="bg-stone-50">
      <div>
        <Navbar />
        <Hero />
        <BlogNav />
        <Card />
        <Blog />
        <PreFooter />
        <Footer />
      </div>
    </main>
  );
}
