"use client"



interface TechnologiesProps {
    description: string
    title:string
}

export function ProblemSolved({description, title}:TechnologiesProps) {
    return (
        <>
            <h2 className="text-2xl md:text-3xl font-light">Quais problemas o {title} resolve?</h2>
            <p>{description}</p>
        </>
    )
}