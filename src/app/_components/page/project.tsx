"use client"

import image1 from "../../../../public/1.png"
import image2 from "../../../../public/2.png"
import image3 from "../../../../public/3.png"
import image4 from "../../../../public/4.png"
import image5 from "../../../../public/5.png"
import { motion } from "framer-motion"
import { CardProject } from "../card/cardProject"



const ScrollRevel = ({ children }: { children: React.ReactNode }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            //viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >


            {children}
        </motion.div>
    )

}

const projectData = [
    {
        image: image1,
        title: "PizzaForDev",
        description: "Projeto feito com diversas tecnologias para resolução de problemas",
        technologies: ["HTML", "CSS", "Typescript", "Node.js", "React.js"]
    },
    {
        image: image2,
        title: "Agendagora",
        description: "Projeto feito com diversas tecnologias para resolução de problemas",
        technologies: ["HTML", "CSS", "Typescript", "Node.js", "React.js"]
    },
    {
        image: image3,
        title: "Management",
        description: "Projeto feito com diversas tecnologias para resolução de problemas",
        technologies: ["HTML", "CSS", "Typescript", "Node.js", "React.js"]
    }
]

export function Project() {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-26">
            <ScrollRevel>
                <h1 className="text-4xl font-light text-white md:text-6xl">Meus Projetos</h1>
            </ScrollRevel>

            <div className="flex w-full max-w-[1000px flex-col gap-16 text-white]">
                {projectData.map((project, index) => (
                    <div key={index}>
                        <ScrollRevel>
                            <CardProject description={project.description} img={project.image}
                                tecnologies={project.technologies} title={project.title} key={index} />
                        </ScrollRevel>
                    </div>

                ))}
            </div>
        </div>
    )
}