'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function GruposTerapeuticos() {
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
                        Grupos Terapêuticos
                    </h1>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
                </motion.div>

                {/* Imagem de capa */}
                <div className="w-full max-w-5xl h-[400px] relative rounded-xl overflow-hidden mb-16 shadow-lg">
                    <Image
                        src="/grupos-terapeuticos.jpeg" // Substituir pela imagem adequada
                        alt="Grupos Terapêuticos"
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
                        Os <strong className="text-blue-950">Grupos Terapêuticos</strong> oferecem um espaço seguro e confidencial onde os participantes podem explorar vivências, emoções e desafios em conjunto, com o apoio de um(a) terapeuta e do grupo.
                    </p>

                    <p>
                        A partilha de experiências entre pessoas com percursos semelhantes potencia a empatia, o acolhimento e a identificação, promovendo o crescimento individual e coletivo.
                    </p>

                    <p>
                        Estes grupos podem ser temáticos (autoestima, ansiedade, luto, entre outros) ou mais abertos, e funcionam como complemento ou alternativa à terapia individual.
                    </p>
                </motion.div>

                {/* Cards de temáticas possíveis */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">
                    {[
                        "Autoestima",
                        "Ansiedade social",
                        "Relacionamentos",
                        "Gestão emocional",
                        "Luto e perdas",
                        "Burnout e stress",
                        "Identidade e pertença",
                        "Expressão emocional",
                        "Processo terapêutico em grupo"
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
                        Participar no grupo
                    </motion.a>
                </div>
            </section>

            <Footer />
        </>
    );
}
