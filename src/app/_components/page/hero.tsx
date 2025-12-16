'use client'

import Image from "next/image";
import myImage from "../../../../public/image.jpg"
import minhaFoto from "../../../../public/Minha foto.png"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <div className="w-full min-h-full flex flex-col overflow-hidden justify-center  items-center px-10 py-28">
            <div className="flex flex-col w-full justify-center items-center ">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}


                    className="relative my-6">
                    
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}

                    className="flex flex-col justify-center items-center gap-3 text-white">
                    <h1 className=" bg-gradient-to-r from-blue-100 text-5xl to to-blue-800 opacity-80 bg-clip-text text-transparent
                font-light md:text-7xl select-none">Victor</h1>
                    <h3 className="bg-gradient-to-r from-blue-100 text-2xl to to-blue-800 opacity-80 bg-clip-text text-transparent
                 md:text-3xl">Full Stack developer</h3>
                    <p className="w-full max-w-[400px] text-pretty text-sm text-gray-400 md:text-base">Olá, sou o Victor, desenvolvedor full stack com experiência em Node.js e
                        TypeScript. Ao longo da minha trajetória, trabalhei
                        na criação de aplicações escaláveis e performáticas, garantindo
                        soluções eficientes tanto no backend quanto no frontend.</p>
                </motion.div>
            </div>
        </div>
    )
}