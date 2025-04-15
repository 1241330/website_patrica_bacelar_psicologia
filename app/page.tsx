"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ShieldCheck, Users, HeartPulse, Brain } from "lucide-react";

const Page = () => {
    return (
        <div className="overflow-hidden font-sans bg-white text-gray-900">
            <main className="pt-20">
                {/* Sobre a Clínica */}
                <section
                    id="sobre"
                    className="relative flex flex-col md:flex-row min-h-[70vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden">
                    {/* Imagem à esquerda */}
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                        <Image
                            src="/imageminicial.jpeg"
                            alt="Imagem da Clínica"
                            fill
                            className="object-cover"/>
                    </div>
                    {/* Conteúdo à direita */}
                    <div
                        className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-16 z-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Sobre a nossa clínica
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            O espaço<span className="text-blue-400"> Patrícia Bacelar Psicologia Clínica</span>, é
                            especializado em terapias individuais e de grupo, terapia de casal e apoio psicológico para crianças, jovens e adultos.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Link href="/equipa">
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    className="text-base md:text-l px-60 md:px-60 py-2 md:py-2 bg-white text-blue-950 font-semibold rounded-full shadow-md hover:bg-gray-400 hover:text-white transition duration-300"
                                >
                                    Saiba Mais
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                </section>


                {/* Icons */}
                <section className="py-20 bg-white px-6 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            whileHover={{
                                y: -10,
                                opacity: 0.9,
                                scale: 1.1,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                                transition: {duration: 0.4, ease: "easeInOut"},
                            }}
                            className="flex flex-col items-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg transition-all ease-in-out"
                        >
                            <Brain
                                className="w-12 h-12 text-blue-950 mb-4 transition-transform duration-300 ease-in-out"/>
                            <h3 className="text-xl font-semibold mb-2">Psicologia Clínica</h3>
                            <p className="text-gray-600">
                                Atendimento personalizado para saúde mental e bem-estar emocional.
                            </p>
                        </motion.div>

                        {/* Terapia Familiar */}
                        <motion.div
                            whileHover={{
                                x: 15, // Move o icon para a direita
                                opacity: 0.8,
                                scale: 1.1, // Aumenta o tamanho
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Efeito de sombra
                                transition: {duration: 0.4, ease: "easeInOut"},
                            }}
                            className="flex flex-col items-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg transition-all ease-in-out"
                        >
                            <Users
                                className="w-12 h-12 text-blue-950 mb-4 transition-transform duration-300 ease-in-out"/>
                            <h3 className="text-xl font-semibold mb-2">Terapia Familiar</h3>
                            <p className="text-gray-600">
                                Fortalecimento de vínculos e comunicação entre familiares.
                            </p>
                        </motion.div>

                        {/* Bem-Estar Emocional */}
                        <motion.div
                            whileHover={{
                                y: 10, // Move o icon para baixo
                                opacity: 1,
                                scale: 1.1,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Sombras para profundidade
                                transition: {duration: 0.4, ease: "easeInOut"},
                            }}
                            className="flex flex-col items-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg transition-all ease-in-out"
                        >
                            <HeartPulse
                                className="w-12 h-12 text-blue-950 mb-4 transition-transform duration-300 ease-in-out"/>
                            <h3 className="text-xl font-semibold mb-2">Bem-Estar Emocional</h3>
                            <p className="text-gray-600">
                                Espaço seguro para cuidar de si com empatia e confiança.
                            </p>
                        </motion.div>

                        {/* Confidencialidade */}
                        <motion.div
                            whileHover={{
                                x: -15, // Move o icon para a esquerda
                                opacity: 0.8,
                                scale: 1.1, // Aumenta o tamanho
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", // Adiciona profundidade
                                transition: {duration: 0.4, ease: "easeInOut"},
                            }}
                            className="flex flex-col items-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg transition-all ease-in-out"
                        >
                            <ShieldCheck
                                className="w-12 h-12 text-blue-950 mb-4 transition-transform duration-300 ease-in-out"/>
                            <h3 className="text-xl font-semibold mb-2">Confidencialidade</h3>
                            <p className="text-gray-600">
                                Compromisso absoluto com a sua privacidade.
                            </p>
                        </motion.div>
                    </div>
                </section>





                {/* Secção Principal */}
                <section
                    className="relative flex flex-col md:flex-row min-h-[90vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-hidden">
                    {/* Conteúdo de texto do lado esquerdo */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-16 z-10">
                        <h3 className="text-4xl font-extrabold mb-6 leading-tight">
                            Cuide da sua <span className="text-blue-400"> mente</span> como cuida do seu <span
                            className="text-blue-200">corpo</span>
                        </h3>
                        <p className="text-lg mb-8">
                            Oferecemos um ambiente acolhedor e seguro, onde você encontra apoio especializado para suas
                            questões emocionais.
                        </p>
                        <div className="grid grid-cols-2 gap-6 text-center">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
                            >
                                <span className="block text-4xl font-bold">+500</span>
                                <span className="text-lg">Consultas</span>
                            </motion.div>
                            <motion.div
                                whileHover={{scale: 1.05}}
                                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
                            >
                                <span className="block text-4xl font-bold">+200</span>
                                <span className="text-lg">Sorrisos</span>
                            </motion.div>
                        </div>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            className="mt-10 bg-white text-blue-950 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-400 hover:text-white transition duration-300"
                        >
                            Marcar Consulta
                        </motion.button>
                    </div>

                    {/* Imagem a cobrir toda a lateral direita */}
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
                        <Image
                            src="/img_consultas.png"
                            alt="Consultório"
                            fill
                            className="object-cover"/>
                    </div>
                </section>

                {/* Grid de depoimentos */}
                <section className="py-20 bg-gray-50 px-6 md:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-950 mb-4">Depoimentos</h2>
                        <p className="text-lg text-gray-700 mx-auto max-w-3xl">
                            Veja o que os nossos clientes dizem sobre a experiência na nossa clínica, com total
                            privacidade e confiança.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Depoimento 1 */}
                        <motion.div
                            whileHover={{
                                scale: 1.05, // Aumenta o tamanho da card
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)", // Aumenta a sombra para destacar a card
                                transition: {duration: 0.3, ease: "easeInOut"},
                            }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out"
                        >
                            <p className="text-gray-600 text-lg italic">
                                "Desde a primeira consulta, percebi que a Doutora Patrícia Bacelar se importa realmente
                                com a minha saúde mental."
                            </p>
                            <div className="mt-4 text-left">
                                <span className="font-semibold text-blue-950">Cliente Anónimo</span>
                            </div>
                        </motion.div>
                        {/* Depoimento 2 */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                                transition: {duration: 0.3, ease: "easeInOut"},
                            }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out"
                        >
                            <p className="text-gray-600 text-lg italic">
                                "Atendimento maravilhoso e sem pressa. Senti que a Doutora Patrícia estava realmente
                                interessada no meu
                                bem-estar."
                            </p>
                            <div className="mt-4 text-left">
                                <span className="font-semibold text-blue-950">Cliente Anónimo</span>
                            </div>
                        </motion.div>
                        {/* Depoimento 3 */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                                transition: {duration: 0.3, ease: "easeInOut"},
                            }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ease-in-out"
                        >
                            <p className="text-gray-600 text-lg italic">
                                "Senti-me muito acolhido e compreendido. A Dra. Patrícia tem uma forma de conversar que
                                traz confiança."
                            </p>
                            <div className="mt-4 text-left">
                                <span className="font-semibold text-blue-950">Cliente Anónimo</span>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};
export default Page;