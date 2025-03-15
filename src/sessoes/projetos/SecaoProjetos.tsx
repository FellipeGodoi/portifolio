import ImageSlider from "../../componentes/slider/Slider.tsx";

import GeppaIdentidade from "../../imagens/imagensGeppa/GEPPA-identidade-visual.png"
import GeppaLogin from "../../imagens/imagensGeppa/Geppa-login.png"
import GeppaAdmin from "../../imagens/imagensGeppa/Geppa-admin.png"
import GeppaInicial from "../../imagens/imagensGeppa/Geppa-pagina-inicial.png"
import GeppaBoletim from "../../imagens/imagensGeppa/geppa-boletim.png"


export default function SecaoProjetos(){
    const Geppa = [
        { url: GeppaIdentidade, label: "Protótipo" },
        { url: GeppaLogin, label: "Sistema" },
        { url: GeppaAdmin, label: "Sistema" },
        { url: GeppaInicial, label: "Sistema" },
        { url: GeppaBoletim, label: "Sistema" }
    ];

    const BlueCore = [
        { url: GeppaIdentidade, label: "Protótipo" },
        { url: GeppaLogin, label: "Sistema" },
        { url: GeppaAdmin, label: "Sistema" },
        { url: GeppaInicial, label: "Sistema" },
        { url: GeppaBoletim, label: "Sistema" }
    ];

    const GeppaTags = [
        { tag: "Html", cor: "#E44D25", fonteCor: "white" },
        { tag: "Css", cor: "#1B81C2", fonteCor: "white" },
        { tag: "React", cor: "#61DAFB", fonteCor: "white" },
        { tag: "Typescript", cor: "#2F74C0", fonteCor: "white" },
        { tag: "Figma", cor: "#F34E1E", fonteCor: "white" },
        { tag: "Bootstrap", cor: "#6C429D", fonteCor: "white" }
    ]

    const BlueCoreTags = [
        { tag: "Html", cor: "#E44D25", fonteCor: "white" },
        { tag: "Css", cor: "#1B81C2", fonteCor: "white" },
        { tag: "React", cor: "#61DAFB", fonteCor: "white" },
        { tag: "Typescript", cor: "#2F74C0", fonteCor: "white" },
        { tag: "Figma", cor: "#F34E1E", fonteCor: "white" },
        { tag: "Bootstrap", cor: "#6C429D", fonteCor: "white" },
        { tag: "Java", cor: "#1F868D", fonteCor: "white" },
        { tag: "SpringBoot", cor: "#6DB33F", fonteCor: "white" }
    ]


    return (
        <div className="container d-flex row gap-2 mb-1">
            <h2 style={{ color:"var(--azul-principal)" }}
                className="projeto-titulo d-flex flex-column text-start">Projetos</h2>
            <ImageSlider
                nomeProjeto="GEPPA - Sistema de gerenciamento de boletins informativos"
                descricao="Esse é um sistema de gerenciamento de boletins informativos para auxiliar as publicações do grupo estudantil GEPPA"
                tarefas="Fiquei responsavel pela criação de uma identidade visual, prototipação e desenvolvimento do front-end"
                images={Geppa}
                status={"Finalizado"}
                tags={GeppaTags}
            />
            {/*<ImageSlider*/}
            {/*    nomeProjeto="BlueCore"*/}
            {/*    descricao="Um e-commerce ficticio de processadores, possui um crud completo de cliente, sistema de venda / devolução e chatbot com ia de recomendação de produto "*/}
            {/*    tarefas="Estou responsavel por Todo o sistema (Identidade visual, prototipo, Back-end e Front-end)"*/}
            {/*    images={BlueCore}*/}
            {/*    status={"Em desenvolvimento, previsão 06/25"}*/}
            {/*    tags={BlueCoreTags}*/}
            {/*/>*/}
        </div>
    )
}