"use client"

import image1 from "../../../../public/PizzaDev.png"
import image2 from "../../../../public/NailTime.png"
import image3 from "../../../../public/Ecommerce.png"
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
        title: "PizzaDev",
        description: "Pizza Dev - Ecossistema Integrado de Pedidos: Desenvolvi uma solução completa para pizzarias composta por uma API Node.js/PostgreSQL, um Dashboard Web (Next.js) para a cozinha e um App Mobile (React Native) para os garçons. O projeto foca na eliminação de processos manuais e na agilidade da comunicação interna do restaurante.",
        technologies: ["NodeJs", "NextJs", "React Native", "React.js", "PostgreSQL", "Typescript"],
        repoTag: [{ tag: "Frontend", link: "https://github.com/Victorhugopinheiro/front-end-pizzaria" },

        { tag: "Backend", link: "https://github.com/Victorhugopinheiro/back-end-pizzaria" },
        { tag: "Mobile", link: "https://github.com/Victorhugopinheiro/pizzaria-mobile" },]

    },
    {
        image: image2,
        title: "NailTime",
        description: "E-commerce/SaaS de Agendamento Fullstack: Desenvolvi um ecossistema completo para manicures, composto por NextJs, Typescript, PostgreSQL, Stripe com um Painel de Gestão para a profissional e uma Plataforma de Agendamento para clientes. O sistema automatiza horários, evita conflitos de agenda e integra pagamentos e gestão de portfólio na nuvem.",
        technologies: ["NextJs", "Typescript", "PostgreSQL", "HTML", "TailwindCSS", "Stripe"],
        repoTag: [{ tag: "FullStack Repository", link: "https://github.com/Victorhugopinheiro/AgendaBeautyy" }],

    },
    {
        image: image3,
        title: "FullEcommerce",
        description: "Backend E-commerce: API RESTful com Node.js e TypeScript. Arquitetura MVC com Services para lógica de negócio, MongoDB para dados, JWT para login seguro e Cloudinary para imagens de produtos.",
        technologies: ["Node.js", "React.js", "Typescript", "HTML", "CSS", "MongoDB", "JWT"],
        repoTag: [{ tag: "Frontend", link: "https://github.com/Victorhugopinheiro/E-commerce" },
        { tag: "Backend", link: "https://github.com/Victorhugopinheiro/E-commerce-backend" },
        { tag: "Admin", link: "https://github.com/Victorhugopinheiro/admin-ecommerce" }],
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
                                tecnologies={project.technologies} title={project.title} key={index} repoTag={project.repoTag} />
                        </ScrollRevel>
                    </div>

                ))}
            </div>
        </div>
    )
}