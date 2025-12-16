
import { getProjectBySlug } from "@/app/utills/getProjectBySlug"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaYoutube } from "react-icons/fa"
import { LinkButton } from "../_components/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { UsedTechlogies } from "../_components/usedTechnogies"
import { ProblemSolved } from "../_components/problemSolved"
import { RiVercelFill } from "react-icons/ri"

export default async function Clinic({ params }: { params: Promise<{ title: string }> }) {

    const { title } = await params


    const detailProjects = getProjectBySlug(title)
    
    if (!detailProjects) {
        return
    }

   

    return (
        <>

            <div className="fixed -z-10 min-h-screen w-full 
                 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


            <div className="text-white  min-h-[100vh] flex flex-col gap-6 justify-center items-center">
                <h1 className="text-center text-3xl md:text-4xl font-modern-negra">{detailProjects.title}</h1>

                <Image width={600} height={600} src={detailProjects.image} alt="Imagem do projeto" />

                <div className="flex flex-col">
                    <UsedTechlogies technologies={detailProjects.technologies}/>
                </div>


                <div>
                    <ProblemSolved 
                    description={detailProjects.description} 
                    topico1={detailProjects?.topicoFrontEnd}
                    topico2={detailProjects?.topicoBackend}
                    topico3={detailProjects.topicoMobile}
                    description2={detailProjects.description2}
                     title={detailProjects.title}/>
                </div>


                <div id="teste" className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    <LinkButton gsapHandle={false} href="/" text="GitHub" icon={<FaGithub className="text-fuchsia-950" />} />

                    <LinkButton gsapHandle={false} href="/" text="Vercel" icon={<RiVercelFill />} />

                    <LinkButton gsapHandle={true} href="/" text="Video detalhado" icon={<FaYoutube color="red"/>} />



                </div>
            </div>

        </>
    )
}