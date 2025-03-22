"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const menuItemClass = "text-blue-950 font-bold hover:text-blue-500 text-lg";

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
                    <div className="relative">
                        <button onClick={() => setIsEventsOpen(!isEventsOpen)} className="flex items-center space-x-1 text-blue-950 font-bold hover:text-blue-500 text-lg">
                            <span>Sobre nós</span>
                            <ChevronDown className="w-3 h-4" />
                        </button>
                        {isEventsOpen && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-max">
                                <Link href="/equipa" className="block px-6 py-3 text-blue-950 hover:bg-neutral-100">Equipa</Link>
                                <Link href="/servicos" className="block px-6 py-3 text-blue-950 hover:bg-neutral-100">Serviços</Link>
                                <Link href="/espaco" className="block px-6 py-3 text-blue-950 hover:bg-neutral-100">Espaço</Link>
                            </div>
                        )}
                    </div>

                    {/* Dropdown Serviços */}
                    <div className="relative">
                        <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1 text-blue-950 font-bold hover:text-blue-500 text-lg">
                            <span>Serviços</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isServicesOpen && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-max">
                                <Link href="/servicos/consultas_psicologia" className="block px-4 py-2 text-blue-950 hover:bg-neutral-100">Consultas de Psicologia</Link>
                                <Link href="/servicos/intervencao_familiar" className="block px-4 py-2 text-blue-950 hover:bg-neutral-100">Intervenção Familiar</Link>
                                <Link href="/servicos/grupos_terapêuticos" className="block px-4 py-2 text-blue-950 hover:bg-neutral-100">Grupos Terapêuticos</Link>
                                <Link href="/servicos/workshops_formacoes" className="block px-4 py-2 text-blue-950 hover:bg-neutral-100">Workshops/Formações</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/marcacoes" className={menuItemClass}>Marcações</Link>
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
                    <li><Link href="/inicio" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>Início</Link></li>

                    {/* Dropdown Sobre nós no mobile */}
                    <li>
                        <button onClick={() => setIsEventsOpen(!isEventsOpen)} className="flex items-center space-x-1 text-white font-bold text-lg">
                            <span>Sobre Nós</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isEventsOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <Link href="/equipa" className="block px-6 py-3 text-white hover:underline">Equipa</Link>
                                <Link href="/servicos" className="block px-6 py-3 text-white hover:underline">Serviços</Link>
                                <Link href="/espaco" className="block px-6 py-3 text-white hover:underline">Espaço</Link>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown Serviços no mobile */}
                    <li>
                        <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1 text-white font-bold text-lg">
                            <span>Serviços</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isServicesOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <Link href="/servicos/consultas_psicologia" className="block px-4 py-2 text-white hover:underline">Consultas de Psicologia</Link>
                                <Link href="/servicos/intervencao_familiar" className="block px-4 py-2 text-white hover:underline">Intervenção Familiar</Link>
                                <Link href="/servicos/grupos_terapêuticos" className="block px-4 py-2 text-white hover:underline">Grupos Terapêuticos</Link>
                                <Link href="/servicos/workshops_formacoes" className="block px-4 py-2 text-white hover:underline">Workshops/Formações</Link>
                            </ul>
                        )}
                    </li>

                    <li><Link href="/contactos" className="text-white font-bold text-lg" onClick={() => setIsOpen(false)}>Contactos</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
