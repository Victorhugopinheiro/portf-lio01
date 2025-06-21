import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectProps {
    title: string,
    description: string,
    img: StaticImport | StaticImageData,
    tecnologies: string[]
}




export function CardProject({ description, img, tecnologies, title }: ProjectProps) {



    return (

        <div className="flex  flex-col items-center justify-center gap-8 md:flex-row  md:gap-8 ">

            <Link href={`/projects/${title}`}>

                <div className=" w-full max-w-[300px]">
                    <Image className=" cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" alt="Imagem do projeto"
                        src={img} />
                </div>
            </Link>


            <div className="flex  flex-col gap-6 justify-center items-center ">

                <div className="text-xl flex flex-col justify-center  items-center text-white font-semibold">
                    <Link href={`${title}`}><p className="">{title}</p></Link>
                    <Link href={`${title}`}><p className="text-gray-400">{description}</p></Link>
                </div>

                <div className="grid grid-cols-4 gap-6 md:grid-cols-2 lg:flex">
                    {tecnologies.map((tecnologies, index) => (
                        <span className="rounded-md select-none bg-black p-3 shadow shadow-slate-700 
                         text-white transition-all duration-300 hover:shadow-ml hover:shadow-slate-500" key={index}>{tecnologies}</span>
                    ))}
                </div>

            </div>
        </div>

    )

}