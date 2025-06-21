import { getProjectBySlug } from "@/app/utills/getProjectBySlug"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

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
                    <h2 className="text-2xl text-center mb-2 md:text-3xl">Teclogias utilizada:</h2>
                    <div className="flex gap-2">
                        {detailProjects.technologies.map((item, index) => (
                            <p key={index} className="mx-2">{item}</p>
                        ))}
                    </div>
                </div>


                <div>
                    <h2 className="text-2xl md:text-3xl font-light">Quais problemas o {detailProjects.title} resolve?</h2>
                    <p>{detailProjects.description}</p>
                </div>


                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    <Link className="w-56 h-24" href={""}>
                        <Button className="w-56 h-12">
                            Vercel
                            <FaGithub />
                        </Button>
                    </Link>

                   <Link className="w-56" href={""}>
                        <Button className="w-56">
                            Repositorio
                            <FaGithub />
                        </Button>
                    </Link>



                   <Link className="w-56" href={""}>
                        <Button className="w-56">
                            Video Detalhado {detailProjects.title}
                            <FaGithub />
                        </Button>
                    </Link>
                </div>
            </div>

        </>
    )
}