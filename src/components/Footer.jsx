import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer>
            <div>
                <p>Tem um projeto em mente?</p>
                <h1>Entre em <span>contato</span></h1>
            </div>
            <div>
                <ul id="contact-links" className="text-1xl flex gap-1">
                    <li>
                        <a href="#">
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Whatsapp
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <p>&#169; Criado por Gustavo Moreira Sandoval </p> 
            </div>
        </footer>
    );
}