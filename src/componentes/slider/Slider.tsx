import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import"./StyleSlider.css"

interface ImageSliderProps {
    nomeProjeto: string;
    descricao: string;
    tarefas: string;
    tags: {tag: string, cor: string, fonteCor: string}[];
    images: { url: string; label: string }[];
    linkGit: string;
    status: string;

}

const ImageSlider: React.FC<ImageSliderProps> = ({nomeProjeto, descricao, tarefas, linkGit, images, tags, status}) => {
    if (images.length === 0) {
        return <p className="text-center">Nenhuma imagem disponível</p>;
    }

    const carouselId = `imageCarousel-${Math.random().toString(36).substring(7)}`;

    return (
        <div className="container d-lg-flex justify-content-between align-items-center gap-5 gap-lg-0">
            <div
                style={{ height: "380px", color: "var(--azul-principal)"}}
                className="card-projeto rounded col-12 py-3 col-lg-4 shadow container d-flex justify-content-start row"
            >
                <h5 className="text-start">{nomeProjeto}</h5>
                <p className="text-start justify">{descricao}</p>
                <p className="fw-semibold text-start ">{tarefas}</p>
                <div className=" d-flex column flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <h6
                            className="badge"
                            style={{
                                color: tag.fonteCor,
                                background: tag.cor,
                                alignSelf: "center",
                            }}
                            key={index}
                        >
                            {tag.tag}
                        </h6>
                    ))}
                </div>
                <div className="d-flex column justify-content-between align-items-center">
                    <a href={linkGit}
                       target="_blank"
                       className="ri-github-fill fs-2"
                       style={{color: "var(--azul-principal)", textDecoration: "none"}}
                    />
                    <span className="fw-semibold ">{status}</span>
                </div>
            </div>

            <div
                id={carouselId}
                className="carousel slide mt-3  mt-lg-0"
                data-bs-ride="carousel"
                style={{ maxWidth: "800px", width: "100%" }}
            >
                <div className="carousel-inner" style={{ height: "400px" }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            style={{ height: "100%" }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={image.url}
                                    className="d-block"
                                    alt={image.label}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                            <div className="carousel-caption d-none d-md-block p-md-2">
                                <span
                                    className={`rounded fw-bold position-absolute top-0 end-0 p-3 ${
                                        image.label === "Sistema"
                                            ? "carousel-img-sistema"
                                            : image.label === "Protótipo"
                                                ? "carousel-img-prototipo"
                                                : ""
                                    }`}
                                >
                                    Imagem do {image.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="prev"
                >
                    <i
                        className="ri-arrow-left-s-fill fs-1"
                        style={{ color: "var(--azul-principal)" }}
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="next"
                >
                    <i
                        className="ri-arrow-right-s-fill fs-1"
                        style={{ color: "var(--azul-principal)" }}
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;