import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/LandingPage/Hero";


export default function Home() {
  return (
    <div className="p-4 space-y-12">
      <Header />
      <section className="flex px-0 space-y-20 tablet:px-12">
        <Hero />
      </section>
    </div>
  );
}