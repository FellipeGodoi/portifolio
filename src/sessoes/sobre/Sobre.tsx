import "./StyleSobre.css"
import CardFlip from "../../componentes/cardFlip/CardFlip.tsx";

export default function Sobre(){
    return(
        <div className="container-lg d-flex row gap-2 gap-lg-4 sobre">
            <h2> Sobre mim...</h2>
            <div className="d-flex flex-wrap justify-content-between">
                <CardFlip icone={"ri-map-pin-line"}
                          titulo={"Localização"}
                          descricao={"Poá, São Paulo"}/>

                <CardFlip icone={"ri-graduation-cap-line"}
                          titulo={"Formação"}
                          descricao={"Atualmente cursando análise e desenvolvimento de sistema na Fatec de Mogi das Cruzes termino ( 12 - 2025 )"}/>

                <CardFlip icone={"ri-focus-2-line"}
                          titulo={"Objetivo"}
                          descricao={"Estou em busca de estagio na area de desenvolvimento de sistemas web principalmente"}/>

                <CardFlip icone={"ri-code-ai-line"}
                          titulo={"Atualmente praticando"}
                          descricao="Atualmente praticando desenvolvimento de front-end com React, TS e bibliotecas de estilização (bootstrap, chakra e tailwind)"/>
            </div>
        </div>
    )
}