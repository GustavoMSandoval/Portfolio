export const AboutSection = () => {
    return (
        <section id="about">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6.5">
                    <div>
                        <h2 className="text-5xl">OI ME CHAMO GUSTAVO <br /> SOU UM <span>DESENVOLVEDOR</span> <br /> <span>WEB FULLSTACK</span></h2>
                    </div>
                    <div className="w-[35vw]">
                        <img className="rounded-full" src="/foto_bonita.jpg" alt="" />
                    </div>
                </div>
        </section>
    )
}