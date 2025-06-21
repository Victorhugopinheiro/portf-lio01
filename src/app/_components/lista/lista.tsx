import Link from "next/link";
import { IconType } from "react-icons";


interface ListaProps{
    name:React.ReactNode
}

export function Lista({name}:ListaProps) {
    return (

        <Link className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100" href={"#home"}>
            <li className=" list-none">
                {name}
            </li>
        </Link >

    )
}