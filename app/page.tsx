import Image from "next/image";
// import { navItems } from "@/data";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto 
    sm:px-10 px-5"><div className="max-w-7xl w-full"><h1>hello , portfolio</h1>
    {/* <FloatingNav navItems={navItems} /> */}
    <Hero />
    <Grid />
    </div></main>
  );
}