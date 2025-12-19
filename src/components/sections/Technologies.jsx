import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TechnologiesSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500,
                    infinite: true,
                    dots: true
                }
            },
            {
                
                breakpoint: 930,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed:500,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const technologies = [
        { id: "1", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", alt: "Laravel ", text: "Laravel no backend <br /> um <span>framework robusto e escalável</span>" },
        { id: "2", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", text: "ReactJS para a criação de sites <span>dinâmicos e responsivos</span>" },
        { id: "3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", alt: "Sqlite", text: "Sqlite <span>banco de dados rápido e leve</span> " },
        { id: "4", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL", text: "<span>Manipulação de dados</span> com MySQL" },
        { id: "5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java", text: "Criação de <span>APIs robustas</span> com Java" },
        { id: "6", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg", alt: "Django", text: "Sistema de <span>reconhecimento facial e autenticação</span> com Django" },
        { id: "7", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filezilla/filezilla-original.svg", alt: "FileZilla", text: "Filezilla para <span>transferência de arquivos </span> <br> de maneira <span> rápida e segura</span>" },
    ]

    return (
        <section id="technologies" className="!my-24">  
                <div className="section-container">    
                    <div className="flex flex-col gap-y-64">
                        <div className="flex justify-center">
                            <h2><span>Tecnologias</span> que utilizo em meus projetos</h2>
                        </div>
                            <Slider {...settings} >
                                {technologies.map((technlogy) => (
                                    <div key={technlogy.id} className="flex flex-col items-center text-center">
                                        <img className="technology-img" src={technlogy.img} alt={`logo ${technlogy.alt}`} width={256}/>
                                        <p dangerouslySetInnerHTML={{ __html: technlogy.text }} />
                                    </div>
                                ))}
                            </Slider>
                    </div>
                </div> 
        </section>
    )
}