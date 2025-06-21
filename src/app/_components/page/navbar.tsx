import { FaLinkedin } from "react-icons/fa";
import { Lista } from "../lista/lista";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export function NavBar() {
    return (
        <nav className="flex fixed z-10 top-0 bg-black/70 px-16 justify-between w-full py-6  items-center border-b  border-gray-600 md:justify-evenly">
            <div>
                <Link href={"#home"} className="
                bg-gradient-to-r from-blue-100 to to-blue-800 opacity-80 bg-clip-text text-transparent
                font-semibold transition-all text-3xl duration-300 hover:opacity-100
                "
                >Victor</Link>
            </div>

            <div className="hidden md:flex gap-6 justify-center items-center text-white">

                <Lista name="Home" />

                <Lista name="Tech" />

                <Lista name="Project" />

                <Lista name="Contact" />
            </div>



            <div className="hidden md:flex gap-6 justify-center items-center">

                <Lista name={<BsLinkedin color="blue" className="hover:text-blue-600" size={22} />} />

                <Lista name={<BsGithub color="purple" className="hover:text-purple-900" size={26} />} />
                <Lista name={<BsYoutube color="red" className="hover:text-red-600" size={22} />} />
                <Lista name={<BsInstagram color="pink" className="hover:" size={22} />} />
            </div>

            <div className="flex text-white  md:hidden">
                <Sheet>
                    <SheetTrigger className="md:hidden"><Menu /></SheetTrigger>
                    <SheetContent className="max-w-1/2  text-white bg-black border-l-1 border-gray-800 md:hidden">
                        <SheetHeader>
                            <SheetTitle className="text-white"></SheetTitle>

                        </SheetHeader>


                        <div className="flex flex-col mb-10 gap-6 justify-center items-center md:hidden">

                            <Lista name="Home" />

                            <Lista name="Tech" />

                            <Lista name="Project" />

                            <Lista name="Contact" />
                        </div>


                        <div className="flex gap-6 justify-center items-center md:hidden">

                            <Lista name={<BsLinkedin color="blue" className="hover:text-blue-600" size={22} />} />

                            <Lista name={<BsGithub color="purple" className="hover:text-purple-900" size={26} />} />
                            <Lista name={<BsYoutube color="red" className="hover:text-red-600" size={22} />} />
                            <Lista name={<BsInstagram color="pink" className="hover:" size={22} />} />
                        </div>
                    </SheetContent>
                </Sheet>

            </div>

        </nav>
    )
}