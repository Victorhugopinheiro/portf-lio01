
import { getProjectBySlug } from "@/app/utills/getProjectBySlug"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { LinkButton } from "../_components/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { UsedTechlogies } from "../_components/usedTechnogies"

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
                <h1 className="text-center text-3xl md:text-4xl">{detailProjects.title}</h1>

                <Image width={600} height={600} src={detailProjects.image} alt="Imagem do projeto" />

                <div className="flex flex-col">
                    <UsedTechlogies technologies={detailProjects.technologies}/>
                </div>


                <div>
                    <h2 className="text-2xl md:text-3xl font-light">Quais problemas o {detailProjects.title} resolve?</h2>
                    <p>{detailProjects.description}</p>
                </div>


                <div id="teste" className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    <LinkButton href="/" text="GitHub" icon={<FaGithub />} />

                    <LinkButton href="/" text="Vercel" icon={<FaGithub />} />

                    <LinkButton href="/" text="Video detalhado" icon={<FaGithub />} />



                </div>
            </div>

        </>
    )
}