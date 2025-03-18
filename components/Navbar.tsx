"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const menuItemClass = "text-white font-bold hover:text-cyan-200 block text-lg md:text-xl";

    const handleMenuToggle = () => setIsOpen((prev) => !prev);
    const handleEventsToggle = () => setIsEventsOpen((prev) => !prev);
    const handleServicesToggle = () => setIsServicesOpen((prev) => !prev);

    return (
        <>
            {/* Navbar fixa no topo */}
            <nav className="fixed top-0 left-0 w-full bg-cyan-400 shadow-md flex items-center justify-between px-10 py-4 z-50">
                {/* Logo */}
                <Link href="/"><Image src="/logo.png" alt="Logotipo" width={150} height={50} priority /></Link>



                {/* Navbar extensa para PC */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/inicio" className={menuItemClass}>Início</Link>
                    <Link href="/" className={menuItemClass}>Sobre Nós</Link>

                    {/* Dropdown Eventos */}
                    <div className="relative">
                        <button onClick={handleEventsToggle} className="flex items-center space-x-1 text-white font-bold hover:text-cyan-200 text-lg">
                            <span>Eventos</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isEventsOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-cyan-400 shadow-lg rounded-lg py-2">
                                <Link href="/eventos/fallstack" className="block px-4 py-2 text-white hover:bg-cyan-500">Fallstack</Link>
                                <Link href="/eventos/gamejam" className="block px-4 py-2 text-white hover:bg-cyan-500">Game Jam</Link>
                            </div>
                        )}
                    </div>

                    {/* Dropdown Serviços */}
                    <div className="relative">
                        <button onClick={handleServicesToggle} className="flex items-center space-x-1 text-white font-bold hover:text-cyan-200 text-lg">
                            <span>Serviços</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isServicesOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-cyan-400 shadow-lg rounded-lg py-2">
                                <Link href="/servicos/antirecurso" className="block px-4 py-2 text-white hover:bg-cyan-500">Antirecurso</Link>
                                <Link href="/servicos/helpdesk" className="block px-4 py-2 text-white hover:bg-cyan-500">Help Desk</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/contactos" className={menuItemClass}>Contactos</Link>
                </div>



                {/* Botão para abrir o menu lateral em telemóveis */}
                <button onClick={handleMenuToggle} className="text-white md:hidden"><Menu className="w-8 h-8" /></button>
            </nav>

            {/* Menu lateral à direita */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-cyan-400 shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 md:hidden`}>
                {/* Botão para fechar o menu */}
                <button onClick={handleMenuToggle} className="absolute top-4 right-4 text-white"><X className="w-8 h-8" /></button>

                {/* Links do menu */}
                <ul className="flex flex-col items-start mt-16 p-6 space-y-4">
                    <li><Link href="/inicio" className={menuItemClass} onClick={handleMenuToggle}>Início</Link></li>
                    <li><Link href="/" className={menuItemClass} onClick={handleMenuToggle}>Sobre Nós</Link></li>

                    {/* Dropdown Eventos no menu lateral */}
                    <li>
                        <button onClick={handleEventsToggle} className="flex items-center space-x-1 text-white font-bold text-lg">
                            <span>Eventos</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isEventsOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <Link href="/eventos/fallstack" className="block px-4 py-2 text-white hover:bg-cyan-500">Fallstack</Link>
                                <Link href="/eventos/gamejam" className="block px-4 py-2 text-white hover:bg-cyan-500">Game Jam</Link>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown Serviços no menu lateral */}
                    <li>
                        <button onClick={handleServicesToggle} className="flex items-center space-x-1 text-white font-bold text-lg">
                            <span>Serviços</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isServicesOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                <li><Link href="/servicos/antirecurso" className="block text-white hover:text-cyan-200" onClick={handleMenuToggle}>Antirecurso</Link></li>
                                <li><Link href="/servicos/helpdesk" className="block text-white hover:text-cyan-200" onClick={handleMenuToggle}>Help Desk</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link href="/contactos" className={menuItemClass} onClick={handleMenuToggle}>Contactos</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
