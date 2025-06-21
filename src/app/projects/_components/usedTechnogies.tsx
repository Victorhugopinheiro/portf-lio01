"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


interface TechnologiesProps {
    technologies: string[]
}

export function UsedTechlogies({ technologies }: TechnologiesProps) {

    useGSAP(() => {
        gsap.to("#text", {
            y: 0,
            opacity: 1,
            ease: "power1.inOut"
        }),


            gsap.fromTo("#tech", {
                opacity: 0,
                y: -20,

            },
                {
                    opacity: 1,
                    y: 0,
                    delay: 1,
                    stagger: 0.1

                }
            )
    }, [])

    return (
        <>
            <h2 id="text" className="text-2xl text-center mb-2 md:text-3xl opacity-0 -translate-y-10">Teclogias utilizada:</h2>
            <div className="flex gap-2">
                {technologies.map((item, index) => (
                    <p id="tech" key={index} className="mx-2">{item}</p>
                ))}
            </div>
        </>
    )
}