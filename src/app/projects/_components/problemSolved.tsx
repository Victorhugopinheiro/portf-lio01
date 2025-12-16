"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"



interface TechnologiesProps {
    description: string,
    topico1?: string,
    topico2?: string,
    topico3?: string,
    title: string,
    description2?: string
}

export function ProblemSolved({ description, title, topico1, topico2, topico3, description2 }: TechnologiesProps) {

    useGSAP(() => {

        gsap.fromTo("#descAndTitle", {
            opacity: 0,
            x: -20,

        },
            {
                opacity: 1,
                x: 0,
                delay: 1,
                stagger: 1


            }
        )
    }, [])

    return (

        <div className="flex flex-col items-center justify-center  ">
            <h2 id="descAndTitle" className="text-2xl text-center my-6 mb-3 md:text-3xl font-light font-modern-negra">Quais problemas o {title} resolve?</h2>
            <span id="descAndTitle" className="mb-2 text-start w-full  max-w-[400px] lg:max-w-[600px]">{description}</span>
            <ul className="my-2  text-start w-full max-w-[400px] lg:max-w-[600px]">
                <li id="descAndTitle"> <span className="font-semibold">Frontend Web: </span>{topico1}</li>
                <li id="descAndTitle"> <span className="font-semibold">Backend: </span>{topico2}</li>
                <li id="descAndTitle"> <span className="font-semibold">Aplicativo Mobile: </span>{topico3}</li>
            </ul>
            <span id="descAndTitle" className="my-2  text-start w-full max-w-[400px] lg:max-w-[600px]">{description2}</span>
        </div>

    )
}