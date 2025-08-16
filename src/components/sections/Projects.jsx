export default function ProjectsSection() {
  return (
     <section id="projects">
            <div className="flex flex-col gap-y-64">
                <div className="flex justify-center">
                    <h2>os <span>projetos</span> que realizei ao longo de minha jornada</h2>
                </div>
                <div className="flex justify-around gap-4">
                    <div className="flex flex-col items-center gap-7 w-64 text-center">
                        <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/0KSUf6-bqmk" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                        </iframe>
                        <p>Sistema que construí com o objetivo de funcionar como um <span>PDV para a gestão</span> de produtos e colaboradores</p>
                    </div>
                    <div className="flex flex-col items-center gap-7 w-64 text-center">                  
                        <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/kdTIg2H3cbo" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                        </iframe>
                        <p>Projeto de cadastro de imóveis, realizei com o fim de ajudar uma <span>agência imobiliária</span></p>
                    </div>
                    <div className="flex flex-col items-center gap-7 w-64 text-center">                                      
                          <iframe width="560" height="315" 
                                src="https://www.youtube.com/embed/9E7Ox0l5sEA" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                        </iframe>
                        <p>Trabalho que fiz baseando me no design de uma <span>empresa de jardinagem e paisagismo</span></p>
                    </div>
                </div>
            </div>
        </section>
  )
}
