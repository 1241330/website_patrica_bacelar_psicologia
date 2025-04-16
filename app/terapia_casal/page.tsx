'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function IntervencaoCasal() {
    return (
        <>
            <section className="pt-24 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen flex flex-col items-center mt-20 px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-extrabold text-blue-900 leading-tight">
                        Intervenção de Casal
                    </h1>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
                </motion.div>

                {/* Imagem de capa */}
                <div className="w-full max-w-5xl h-[400px] relative rounded-xl overflow-hidden mb-16 shadow-lg">
                    <Image
                        src="/casal.jpeg" // Substitui pela imagem real
                        alt="Intervenção de Casal"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Texto descritivo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-5xl mx-auto text-lg text-gray-800 space-y-6 leading-relaxed"
                >
                    <p>
                        A <strong className="text-blue-950">Intervenção de Casal</strong> oferece um espaço terapêutico onde ambos os membros da relação podem refletir, comunicar e trabalhar em conjunto para fortalecer a ligação e superar dificuldades.
                    </p>

                    <p>
                        Ao longo do processo, exploramos padrões de interação, emoções não expressas, e desafios específicos como conflitos frequentes, traição, mudanças na dinâmica familiar ou ausência de intimidade.
                    </p>

                    <p>
                        Através de técnicas baseadas na empatia, na escuta ativa e no compromisso mútuo, ajudamos os casais a redescobrir caminhos de entendimento, respeito e conexão.
                    </p>
                </motion.div>

                {/* Cards de tópicos trabalhados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">
                    {[
                        "Conflitos conjugais",
                        "Problemas de comunicação",
                        "Crises de confiança",
                        "Traição e perdão",
                        "Gestão de separação",
                        "Reacender a intimidade",
                        "Educação dos filhos",
                        "Gestão de expectativas",
                        "Projetos em comum"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-6 rounded-lg shadow-md text-center text-blue-950 font-semibold text-lg"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-16 mb-16">
                    <motion.a
                        href="/marcacoes"
                        whileHover={{ scale: 1.05 }}
                        className="bg-blue-950 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-md hover:bg-blue-900 transition duration-300"
                    >
                        Agendar Sessão
                    </motion.a>
                </div>
            </section>

            <Footer />
        </>
    );
}
