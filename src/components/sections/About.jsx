export const AboutSection = () => {
    return (
        <section id="about" className="!my-24">
                <div className="section-container flex flex-col-reverse lg:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col gap-7">
                        <div className="inline-block text-center">
                            <h1 className="typing">OI, ME CHAMO GUSTAVO <br /> SOU UM <br /> <span className="primary-span">DESENVOLVEDOR</span> <br className="block md:hidden"/> <span className="primary-span">WEB FULLSTACK</span></h1>
                        </div>
                    <div className="text-center">
                            <a href="#contacts" className="btn-primary">contatos</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}