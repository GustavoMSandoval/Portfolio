import { useState } from "react"
import { FiAlignJustify, FiX } from "react-icons/fi";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header>
        <nav className="z-[999] md:hidden">
            <div className="flex justify-end"><button className="ml-auto text-5xl" onClick={toggleMenu}>{isOpen ? <FiX /> : <FiAlignJustify />}</button></div>
            { isOpen
            && <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#technologies">Tecnologias</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contacts">Contatos</a></li>
            </ul>}
        </nav>
        <nav>
            <ul className="hidden md:flex justify-center">
                <li><a href="#about">Sobre</a></li>
                <li><a href="#technologies">Tecnologias</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contacts">Contatos</a></li>
            </ul>
        </nav>
    </header>
  )
}