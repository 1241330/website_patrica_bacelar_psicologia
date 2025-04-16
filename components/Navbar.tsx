"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Para o menu mobile
    const [isEventsOpen, setIsEventsOpen] = useState(false); // Para o dropdown "Sobre nós"
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Para o dropdown "Serviços"
    const [isEventsHovered, setIsEventsHovered] = useState(false); // Para controlar o hover de "Sobre nós"
    const [isServicesHovered, setIsServicesHovered] = useState(false); // Para controlar o hover de "Serviços"

    const menuItemClass = "text-blue-950 font-bold hover:text-blue-500 text-lg";

    // Função para lidar com a abertura e fechamento com delay
    const handleMouseEnter = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
        setTimeout(() => setOpen(true), 200); // Atraso de 200ms para evitar fechar imediatamente
    };

    const handleMouseLeave = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
        setTimeout(() => setOpen(false), 200); // Atraso de 200ms para evitar fechar imediatamente
    };

    return (
        <>
            {/* Navbar fixa no topo */}
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-6 md:px-20 py-4 z-30">
                {/* Logo alinhada à esquerda */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logotipo" width={130} height={40} priority />
                </Link>

                {/* Menu principal (Desktop) */}
                <div className="hidden md:flex space-x-12 ml-auto">
                    <Link href="/" className={menuItemClass}>Início</Link>

                    {/* Dropdown Sobre Nós */}
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(setIsEventsOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsEventsOpen)}
                    >
                        <button className="flex items-center space-x-1 text-blue-950 font-bold hover:text-blue-500 text-lg">
                            <span>Sobre nós</span>
                            <ChevronDown className="w-3 h-4" />
                        </button>
                        {(isEventsOpen || isEventsHovered) && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-max">
                                <Link href="/equipa" className="block px-6 py-3 text-blue-950 hover:bg-blue-100">Equipa</Link>
                                <Link href="/espaco" className="block px-6 py-3 text-blue-950 hover:bg-blue-100">Espaço</Link>
                            </div>
                        )}
                    </div>

                    {/* Dropdown Serviços */}
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
                        onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
                    >
                        <button className="flex items-center space-x-1 text-blue-950 font-bold hover:text-blue-500 text-lg">
                            <span>Serviços</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {(isServicesOpen || isServicesHovered) && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-max">
                                <Link href="/consultas_psicologia" className="block px-4 py-2 text-blue-950 hover:bg-blue-100">Consultas de Psicologia</Link>
                                <Link href="/terapia_familiar" className="block px-4 py-2 text-blue-950 hover:bg-blue-100">Intervenção Familiar</Link>
                                <Link href="/terapia_casal" className="block px-4 py-2 text-blue-950 hover:bg-blue-100">Intervenção de Casal</Link>
                                <Link href="/grupos_meditacao" className="block px-4 py-2 text-blue-950 hover:bg-blue-100">Grupos Regulares de Meditação</Link>
                                <Link href="/grupos_terapeuticos" className="block px-4 py-2 text-blue-950 hover:bg-blue-100">Grupos Terapêuticos</Link>
                                <Link href="/workshops_formacoes" className="block px-4 py-2 text-blue-950 hover:bg-blue-100">Workshops/Formações</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/marcacoes" className={menuItemClass}>Marcações</Link>
                    <Link href="/faq" className={menuItemClass}>FAQ's</Link>
                    <Link href="/contactos" className={menuItemClass}>Contactos</Link>
                </div>

                {/* Botão menu mobile alinhado à direita */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-blue-950 md:hidden">
                    <Menu className="w-8 h-8" />
                </button>
            </nav>

            {/* Fecha o menu ao clicar fora */}
            {isOpen && <div className="fixed inset-0" onClick={() => setIsOpen(false)}></div>}

            {/* Menu lateral mobile */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-blue-950 text-gray-300 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 md:hidden`}>
                {/* Botão para fechar o menu */}
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
                    <X className="w-8 h-8" />
                </button>

                {/* Links do menu */}
                <ul className="flex flex-col items-start mt-16 p-6 space-y-4">
                    <li><Link href="/" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>Início</Link></li>

                    {/* Dropdown Sobre nós no mobile */}
                    <li>
                        <button onClick={() => setIsEventsOpen(!isEventsOpen)}
                                className="flex items-center space-x-1 text-white font-bold text-lg"><span>Sobre Nós</span>
                            <ChevronDown className="w-4 h-4"/>
                        </button>
                        {isEventsOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <Link href="/equipa" className="block px-6 py-3 text-white hover:underline">Equipa</Link>
                                <Link href="/espaco" className="block px-6 py-3 text-white hover:underline">Espaço</Link>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown Serviços no mobile */}
                    <li>
                        <button onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center space-x-1 text-white font-bold text-lg">
                            <span>Serviços</span>
                            <ChevronDown className="w-4 h-4"/>
                        </button>
                        {isServicesOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <Link href="/consultas_psicologia" className="block px-4 py-2 text-white hover:underline">Consultas de Psicologia</Link>
                                <Link href="/servicos/intervencao_familiar" className="block px-4 py-2 text-white hover:underline">Intervenção Familiar</Link>
                                <Link href="/servicos/intervencao_casal" className="block px-4 py-2 text-white hover:underline">Intervenção de Casal</Link>
                                <Link href="/servicos/grupos_meditacao" className="block px-4 py-2 text-white hover:underline">Grupos Regulares de Meditação</Link>
                                <Link href="/servicos/grupos_terapêuticos" className="block px-4 py-2 text-white hover:underline">Grupos Terapêuticos</Link>
                                <Link href="/servicos/workshops_formacoes" className="block px-4 py-2 text-white hover:underline">Workshops/Formações</Link>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/marcacoes" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>Marcações</Link></li>
                    <li><Link href="/faq" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>FAQ's</Link></li>
                    <li><Link href="/contactos" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>Contactos</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
