export const Footer = () => {
    return (
        <footer id="contacts" className="!py-24">
            <div className="section-container">
                <div className="!mb-4">
                    <p>Tem um projeto em mente?</p>
                    <h1>Entre em <span className="primary-span">contato</span></h1>
                </div>
                <div className="!mb-4">
                    <ul id="contact-links" className="flex flex-col sm:flex-row">
                        <li className="!px-1 lg:!pl-0 ">
                            <a href="https://www.linkedin.com/in/gustavomsandoval/" target="_blank" className="btn-secondary">
                                Linkedin
                            </a>
                        </li>
                        <li className="!px-1 ">
                            <a href="#" className="btn-secondary">
                                Whatsapp
                            </a>
                        </li>
                        <li className="!px-1 ">
                            <a href="https://github.com/GustavoMSandoval" target="_blank" className="btn-secondary">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>&#169; Criado por Gustavo Moreira Sandoval </p>
                </div>
            </div>
        </footer>
    );
}