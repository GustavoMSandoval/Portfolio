import { useState } from "react"
import { FiAlignJustify, FiX } from "react-icons/fi";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header className="fixed w-full bg-white top-0 z-50 shadow-2xs">
        <nav className="md:hidden">
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
        <nav>
            <ul className="hidden md:flex justify-center">
                <li><a className="nav-link" href="#about">Sobre</a></li>
                <li><a className="nav-link" href="#projects">Projetos</a></li>
                <li><a className="nav-link" href="#technologies">Tecnologias</a></li>
                <li><a className="nav-link" href="#contacts">Contatos</a></li>
            </ul>
        </nav>
    </header>
  )
}