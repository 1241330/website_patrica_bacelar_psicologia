"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section
                className="relative w-full h-[60vh] bg-gradient-to-r from-blue-100 to-blue-100 text-white flex flex-col justify-center items-center text-center px-6 md:px-20 relative">
                <Image
                    src="/imagem_fundo.png"
                    alt="Imagem de fundo"
                    fill
                    className="top-0 left-0 object-cover w-full h-full opacity-70"
                />
            </section>

            {/* Seção Sobre a Clínica */}
            <section
                className="py-24 bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 rounded-3xl shadow-lg mx-4 md:mx-10 mt-10 mb-10">
                {/* Imagem */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
                >
                    <div className="relative w-[100%] md:w-[70%] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/imageminicial.jpeg"
                            alt="Imagem da Clínica"
                            width={500}
                            height={350}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Texto */}
                <div className="w-full md:w-1/2 text-blue-950 text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-6">Sobre a Nossa Clínica</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        O espaço Patrícia Bacelar, Psicologia Clínica tem na sua origem e essência o trabalho
                        desenvolvido pela psicóloga Patrícia Bacelar na área da Psicologia Clínica, individual e de
                        grupo, terapia de casal e dinâmicas de grupo com jovens, adolescentes e adultos.
                    </p>
                    <p className="mt-4 text-lg text-gray-700">
                        Situado no coração de Viana do Castelo, este espaço foi concebido para acolher cada paciente com
                        conforto, profissionalismo e empatia, promovendo estados de confiança e bem-estar para alcançar
                        harmonia e paz interior.
                    </p>
                    <Link href="/equipa">
                        <motion.button
                            type="button"
                            className="mt-6 px-6 py-3 bg-blue-950 text-white font-semibold text-lg rounded-full shadow-lg transition-all hover:bg-blue-900 hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Saiba mais
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* Seção Principal */}
            <section
                className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-blue-950 text-white relative overflow-hidden mb-5">
                {/* Lado Esquerdo */}
                <div className="flex flex-col justify-center px-6 md:px-20 py-16 z-10">
                    <h1 className="text-4xl font-extrabold mb-6 leading-tight">
                        Cuide da sua mente como cuida do seu corpo
                    </h1>
                    <p className="text-lg mb-8">
                        Proporcionamos um ambiente acolhedor e seguro, onde encontra soluções para as suas preocupações
                        e desafios com o apoio da nossa psicóloga, Patrícia Bacelar.
                    </p>
                    <div className="flex space-x-8 text-2xl font-semibold items-center">
                        <div>
                            <span className="block text-4xl">+500</span>
                            <span className="text-lg">Consultas</span>
                        </div>
                        <div>
                            <span className="block text-4xl">+200</span>
                            <span className="text-lg">Sorrisos</span>
                        </div>
                    </div>
                    <button
                        className="mt-8 bg-white text-blue-950 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-400 hover:text-white transition duration-300">
                        Marcar Consulta
                    </button>
                </div>

                {/* Lado Direito - Imagem */}
                <div className="relative w-full h-full z-0">
                    <Image
                        src="/img_consultas.png"
                        alt="Consultório"
                        fill
                        className="object-cover shadow-lg"
                    />
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Page;