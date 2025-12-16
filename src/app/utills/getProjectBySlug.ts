
import image1 from "../../../public/1.png"
import image2 from "../../../public/2.png"
import image3 from "../../../public/3.png"
import image4 from "../../../public/4.png"
import image5 from "../../../public/5.png"

export const projects = [
    {
        image: image1,
        title: "PizzaForDev",
        description:"Este projeto foi desenvolvido para otimizar o atendimento em uma pizzaria, reduzindo o tempo entre o pedido e a entrega ao cliente. A solução é composta por:",
        topicoFrontEnd:"Construído com Next.js, permite a visualização em tempo real dos pedidos e mesas abertas pela equipe da cozinha.",
        topicoBackend:"API robusta com Node.js, garantindo um login com segurança utilizando tokens e uma comunicação eficiente entre os dispositivos.",
        topicoMobile:" Desenvolvido em React Native, usado pelos garçons para abrir mesas e registrar pedidos diretamente no salão.",
        description2:"O fluxo é simples e eficiente: o garçom abre uma mesa pelo app, adiciona os pedidos e envia. Imediatamente, os dados chegam à cozinha em um monitor web, acelerando a preparação dos pedidos e evitando falhas de comunicação.",

        
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
