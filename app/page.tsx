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
                {/* Hero Section */}
                <section className="relative h-[80vh] bg-gradient-to-tr from-[#0F172A] to-[#1E293B] flex items-center justify-center px-6 md:px-20">
                    <div className="absolute inset-0">
                        <Image
                            src="/imagem_fundo.png"
                            alt="Imagem de fundo"
                            fill
                            className="object-cover opacity-60"
                        />
                    </div>
                    <div className="relative z-10 text-center text-white max-w-2xl">
                        <h1 className="text-4xl font-bold leading-tight mb-6">
                            Patrícia Bacelar, Psicologia Clínica
                        </h1>
                        <p className="text-lg text-gray-200 mb-8">
                            Um espaço pensado para o seu bem-estar emocional no coração de Viana do Castelo
                        </p>
                    </div>
                </section>

                {/* Sobre a Clínica */}
                <section id="sobre" className="py-24 bg-gray-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 rounded-3xl shadow-lg mx-4 md:mx-10 mt-10 mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
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

                    <div className="w-full md:w-1/2 text-blue-950 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-6">Sobre a Nossa Clínica</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            O espaço Patrícia Bacelar, Psicologia Clínica, é especializado em terapias individuais e de grupo,
                            terapia de casal e apoio psicológico para jovens, adolescentes e adultos.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            Situado no coração de Viana do Castelo, nossa clínica oferece conforto e profissionalismo,
                            proporcionando um ambiente acolhedor e seguro para nossos pacientes.
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

                {/* Valores e Destaques */}
                <section className="py-20 bg-white px-6 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <Brain className="w-10 h-10 text-blue-950 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Psicologia Clínica</h3>
                            <p className="text-gray-600">Atendimento personalizado para saúde mental e bem-estar emocional.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Users className="w-10 h-10 text-blue-950 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Terapia Familiar</h3>
                            <p className="text-gray-600">Fortalecimento de vínculos e comunicação entre familiares.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HeartPulse className="w-10 h-10 text-blue-950 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Bem-Estar Emocional</h3>
                            <p className="text-gray-600">Espaço seguro para cuidar de si com empatia e confiança.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="w-10 h-10 text-blue-950 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Confidencialidade</h3>
                            <p className="text-gray-600">Compromisso absoluto com a sua privacidade.</p>
                        </div>
                    </div>
                </section>

                {/* Seção Principal */}
                <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-blue-950 text-white relative overflow-hidden mb-5">
                    <div className="flex flex-col justify-center px-6 md:px-20 py-16 z-10">
                        <h1 className="text-4xl font-extrabold mb-6 leading-tight">
                            Cuide da sua mente como cuida do seu corpo
                        </h1>
                        <p className="text-lg mb-8">
                            Oferecemos um ambiente acolhedor e seguro, onde você encontra apoio especializado para suas questões emocionais.
                        </p>
                        <div className="grid grid-cols-2 gap-6 text-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
                            >
                                <span className="block text-4xl font-bold">+500</span>
                                <span className="text-lg">Consultas</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
                            >
                                <span className="block text-4xl font-bold">+200</span>
                                <span className="text-lg">Sorrisos</span>
                            </motion.div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-10 bg-white text-blue-950 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-400 hover:text-white transition duration-300"
                        >
                            Marcar Consulta
                        </motion.button>
                    </div>

                    <div className="relative w-full h-full z-0">
                        <Image
                            src="/img_consultas.png"
                            alt="Consultório"
                            fill
                            className="object-cover shadow-lg"
                        />
                    </div>
                </section>
            </main>

            <footer id="contacto">
                <Footer />
            </footer>
        </div>
    );
};

export default Page;