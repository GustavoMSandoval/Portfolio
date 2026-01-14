import { useState } from "react"
import { FiAlignJustify, FiX } from "react-icons/fi";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header className="fixed w-full top-0 md:top-1 z-50">
        <nav className="md:hidden bg-white">
            <div className="flex justify-end"><button className="ml-auto text-5xl" onClick={toggleMenu}>{isOpen ? <FiX /> : <FiAlignJustify />}</button></div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#technologies">Tecnologias</a></li>
                    <li><a href="#contacts">Contatos</a></li>
                </ul>
            </div>
        </nav>
          <nav className="flex justify-center">
              <div className="nav-content bg-background/95 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <ul className="hidden md:flex justify-center items-center">
                    <li className="nav-link-item flex gap-3">
                        <img className="rounded-full w-12" src="/foto_bonita.jpg" alt="Minha foto" />
                        <div className="flex flex-col">
                            <span>Gustavo M Sandoval</span>
                            <span className="text-secondary">São Paulo, SP, Zona Sul</span>
                        </div>
                    </li>
                    <li className="nav-link-item"><a className="nav-link" href="#about">Sobre</a></li>
                    <li className="nav-link-item"><a className="nav-link" href="#projects">Projetos</a></li>
                    <li className="nav-link-item"><a className="nav-link" href="#technologies">Tecnologias</a></li>
                    <li className="nav-link-item"><a className="nav-link" href="#contacts">Contatos</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}