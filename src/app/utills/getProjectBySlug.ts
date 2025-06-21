
import image1 from "../../../public/1.png"
import image2 from "../../../public/2.png"
import image3 from "../../../public/3.png"
import image4 from "../../../public/4.png"
import image5 from "../../../public/5.png"

export const projects = [
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
];

export function getProjectBySlug(title: string) {
    return projects.find((project) => project.title === title);
}
