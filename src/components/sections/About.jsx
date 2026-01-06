export const AboutSection = () => {
    return (
        <section id="about" className="!my-24">
                <div className="section-container flex flex-col-reverse lg:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col gap-7">
                        <div className="inline-block">
                            <h1 className="typing">OI ME CHAMO GUSTAVO <br /> SOU UM <span className="primary-span">DESENVOLVEDOR</span> <br /> <span className="primary-span">WEB FULLSTACK</span></h1>
                        </div>
                        <div>
                            <a href="#contacts" className="btn-primary">contatos</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <img className="rounded-full mb-1" src="/foto_bonita.jpg" alt="" />
                        <p>São Paulo, SP, Zona Sul</p>
                    </div>
                </div>
        </section>
    )
}