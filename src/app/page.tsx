import Image from "next/image";
import { NavBar } from "./_components/page/navbar";
import { Hero } from "./_components/page/hero";
import { Tech } from "./_components/page/tech";
import { Project } from "./_components/page/project";
import { Contact } from "./_components/page/contact";

export default function Home() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full 
   bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>






      <main className="flex flex-col min-h-svh ">
        <NavBar />
        <Hero />
        <Tech />
        <Project />
        <Contact />
      </main>
    </>

  );
}
