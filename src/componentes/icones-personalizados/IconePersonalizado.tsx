import "./StyleIconePersonalizado.css"

interface IconeProps {
    titulo: string;
    imagemUrl: string;
    dominio: number;

}

const IconePersonalizado: React.FC<IconeProps> = ({imagemUrl, titulo, dominio}) => {

    const stars = Math.min(Math.max(dominio, 0), 5);

    return (
        <div className="text-center d-flex justify-content-between flex-column">
            <div className="image-container">
                <img
                    src={imagemUrl}
                    alt={titulo}
                    className="img-fluid"
                    style={{ maxHeight: '65px', objectFit: 'cover' }}
                />
            </div>
            <h5 className="mt-1 fw-bold fs-5 titulo-icone" >{titulo}</h5>

            <div className="domain-rating">
                {[...Array(stars)].map((_, index) => (
                    <i key={index} className="ri-settings-fill" title="Confiaça para desenvolver"/>
                ))}
                {[...Array(5 - stars)].map((_, index) => (
                    <i key={index + stars} className="ri-settings-line" title="Confiaça para desenvolver"/>
                ))}
            </div>
        </div>
    )
}

export default IconePersonalizado