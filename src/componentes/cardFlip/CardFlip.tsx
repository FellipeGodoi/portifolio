import "./StyleCardFlip.css"
import {useState} from "react";

interface CardFlipProps {
    icone: string;
    titulo: string;
    descricao: string;
    link?:string;

}

const CardFlip: React.FC<CardFlipProps> = ({ icone, titulo, descricao, link }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-container mb-2" onClick={handleFlip}>
            <div className={`card-flip ${isFlipped ? "flipped" : ""}`}>
                <div className="cardS front d-flex flex-column align-items-center justify-content-center">
                    <i className={icone} style={{ fontSize: "3rem" }}></i>
                    <h5 className="mt-3">{titulo}</h5>
                </div>

                <div className="cardS back d-flex flex-column align-items-center justify-content-between py-2">
                    <div className="card-title d-flex w-75 justify-content-end fw-medium">
                        <i className={icone} style={{ fontSize: "2rem" }}></i>
                    </div>
                    <p className="text-center px-3 fw-medium">{descricao}</p>
                    {link ? (
                        <a href={link} className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">
                            Ir para
                        </a>
                    ) : (
                        <div/>
                        )}
                </div>
            </div>
        </div>
    );
};

export default CardFlip;