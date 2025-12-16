import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"

interface ProjectProps {
    title: string,
    description: string,
    img: StaticImport | StaticImageData,
    tecnologies: string[]
    repoTag: { tag: string, link: string }[]

}




export function CardProject({ description, img, tecnologies, title, repoTag }: ProjectProps) {



    return (

        <div className="flex  flex-col items-center justify-center gap-8 md:flex-row  md:gap-8 ">



            <div className=" w-full max-w-[300px]">
                <Image className=" cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" alt="Imagem do projeto"
                    src={img} />
            </div>



            <div className="flex  flex-col gap-6 justify-center items-center ">

                <div className="text-xl flex flex-col justify-center  items-center text-white font-semibold">
                    <p className="">{title}</p>
                    <p className="text-gray-400">{description}</p>
                </div>

                <div className="grid grid-cols-4 gap-6 md:grid-cols-2 lg:flex">
                    {tecnologies.map((tecnologies, index) => (
                        <div className="flex col lg:flex-row md:flex-row md:justify-between flex-col gap-2" key={index}>

                            <span className="rounded-md select-none bg-black p-2 shadow shadow-slate-700 
                         text-white transition-all duration-300 hover:shadow-ml hover:shadow-slate-500" key={index}>{tecnologies}</span>


                        </div>
                    ))}


                </div>

                <div className="grid grid-cols-4 gap-6 md:grid-cols-2 lg:flex">
                    {repoTag!.map((repo, index) => (
                        <div className="flex flex-col justify-center items-center gap-3" key={index}>

                            <Link href={repo.link} target="_blank" className="text-fuchsia-900 underline
                            transition-all duration-300 hover:shadow-ml hover:shadow-slate-500
                            "><BsGithub size={25} /></Link>
                            <Link href={repo.link} target="_blank" className="rounded-md select-none bg-black p-2 shadow shadow-slate-700 
                         text-white transition-all duration-300 hover:shadow-ml hover:shadow-slate-500" key={index}>{repo.tag}</Link>




                        </div>
                    ))}


                </div>



            </div>
        </div>

    )

}