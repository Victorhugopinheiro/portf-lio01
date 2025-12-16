"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaClipboardCheck } from "react-icons/fa";
import { VscArrowUp } from "react-icons/vsc";


interface buttonProps {
    href: string,
    text: string,
    icon: React.ReactNode,
    gsapHandle: boolean
}




export function LinkButton({ href, text, icon, gsapHandle }: buttonProps) {

    useGSAP(() => {
        gsap.fromTo("#link", {
            opacity: 0,
            y: -50,
            yoyo: true,

        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: {
                ease: "bounce.out",
                yoyo: true
            }
        }),

            gsap.fromTo("#click",
                {
                    x: 370
                },

                {
                    x: 520,
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut",
                    duration: 2
                }
            )


    }, [])

    return (
        <>
            {gsapHandle
                ?
                <>

                    <Link id="link" href={href}>
                        <Button id="button" className="w-40 h-10 shadow-sm shadow-slate-800 transition-all duration-300 hover:shadow-lg hover:bg-slate-900 hover:shadow-slate-800">
                            {icon}
                            {text}
                        </Button>
                    </Link>

                    <VscArrowUp id='click' />
                </>


                :
                <Link id="link" href={href}>
                    <Button id="button" className="w-40 h-10 shadow-sm shadow-slate-800 transition-all duration-300 hover:shadow-lg hover:bg-slate-900 hover:shadow-slate-800">
                        {icon}
                        {text}
                    </Button>
                </Link>}
        </>
    )
}