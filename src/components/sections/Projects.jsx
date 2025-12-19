import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const projects = [
        {
            id: "1",
            link: "https://www.youtube.com/embed/0KSUf6-bqmk",
            text: "Sistema que construí com o objetivo de funcionar como um <span>PDV para a gestão</span> de produtos e colaboradores"
        },
        {
            id: "2",
            link: "https://www.youtube.com/embed/kdTIg2H3cbo",
            text: "Projeto de cadastro de imóveis, realizei com o fim de ajudar uma <span>agência imobiliária</span>"
        },
        {
            id: "3",
            link: "https://www.youtube.com/embed/9E7Ox0l5sEA",
            text: "Trabalho que fiz baseando me no design de uma <span>empresa de jardinagem e paisagismo</span>"
        },
        
      
    ];

  return (
     <section id="projects">
        <div className="section-container">
            <div className="flex flex-col gap-y-24">
                <div className="flex justify-center">
                    <h2>meus <span>projetos</span> e seus impactos</h2>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl mx-auto">
                        <Slider {...settings}>
                            {projects.map((project) => (
                            <div className="flex flex-col items-center text-center">
                                <div className="iframe-wrapper">
                                        <iframe
                                            className="w-full aspect-video "
                                            src={project.link}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen>
                                    </iframe>
                                </div>
                                <p className="!mt-6" dangerouslySetInnerHTML={{ __html:project.text }}/>
                            </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}
