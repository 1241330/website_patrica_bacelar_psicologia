"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItemClass = "text-white font-bold hover:text-cyan-200 block text-xl";

    const handleMenuToggle = () => setIsOpen((prev) => !prev);

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
                    <Link href="/eventos" className={menuItemClass}>Eventos</Link>
                    <Link href="/contactos" className={menuItemClass}>Contacto</Link>
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
                    <li><Link href="/eventos" className={menuItemClass} onClick={handleMenuToggle}>Eventos</Link></li>
                    <li><Link href="/contactos" className={menuItemClass} onClick={handleMenuToggle}>Contacto</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
