"use client"
import { BiLogoNodejs, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion"

export function Tech() {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div id="tech" className="flex w-full text-white  min-h-[70vh]  flex-col gap-16 justify-center items-center md:gap-32 ">
            <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4 }}
                className="text-4xl font-light md:text-7xl">Tecnologias
            </motion.h1>


            <motion.div

                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4 }}
                className="flex gap-6">

                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.4 }}
                    className="flex justify-center items-center">
                    <BiLogoTypescript color="blue" className="text-blue-50 text-[80px] 
                    sm:text-[100px] md:text-[120px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>

                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.4 }}
                    className="flex justify-center items-center">
                    <BiLogoNodejs color="green" className="text-blue-50 text-[80px] 
                    sm:text-[100px] md:text-[120px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>


                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.4 }}
                    className="flex justify-center items-center">
                    <BiLogoReact className="text-blue-400 text-[80px] 
                    sm:text-[100px] md:text-[120px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>


                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.4 }}
                    className="flex justify-center items-center">
                    <RiNextjsFill color="slate" className="text-blue-50 text-[80px] 
                    sm:text-[100px] md:text-[120px] transition-all duration-300 hover:-translate-y-5"/>
                </motion.div>




            </motion.div>
        </div>
    )
}