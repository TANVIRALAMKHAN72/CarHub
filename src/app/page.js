import Image from "next/image";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Testimonials from "./Component/Testimonials";
import Footer from "./Component/Footer";
import FeaturedCars from "./Component/FeaturedCars";


export default function Home() {
  return (
  <main>
     <Hero></Hero>
   <About></About>
   <FeaturedCars></FeaturedCars>
   <Testimonials></Testimonials>
   
  </main>
  );
}
