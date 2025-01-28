import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/LandingPage/Hero";


export default function Home() {
  return (
    <div className="p-4 space-y-20">
      <Header />
      <section className="flex p-0 space-y-20">
        <Hero />
      </section>
    </div>
  );
}
