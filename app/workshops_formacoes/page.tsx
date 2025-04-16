'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function WorkshopsFormacoes() {
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
                        Workshops e Formações
                    </h1>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
                </motion.div>

                {/* Imagem de capa */}
                <div className="w-full max-w-5xl h-[400px] relative rounded-xl overflow-hidden mb-16 shadow-lg">
                    <Image
                        src="/workshops.jpeg" // Substituir pela imagem final
                        alt="Workshops e Formações"
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
                        Os nossos <strong className="text-blue-950">Workshops e Formações</strong> são momentos formativos e vivenciais que combinam conhecimento teórico com experiências práticas, promovendo o desenvolvimento pessoal e profissional.
                    </p>

                    <p>
                        Dirigidos a público geral, profissionais da saúde mental e áreas afins, estes eventos são construídos com base em abordagens integrativas, atualizadas e centradas na pessoa.
                    </p>

                    <p>
                        São oportunidades para aprofundar temas relevantes, adquirir novas ferramentas e conectar-se com outras pessoas num ambiente acolhedor e estimulante.
                    </p>
                </motion.div>

                {/* Cards com exemplos de temas ou áreas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">
                    {[
                        "Mindfulness na prática clínica",
                        "Regulação emocional",
                        "Comunicação consciente",
                        "Autoestima e identidade",
                        "Burnout e autocuidado",
                        "Psicologia corporal",
                        "Empatia e escuta ativa",
                        "Gestão de stress",
                        "Ferramentas para terapeutas"
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
                        href="/contactos"
                        whileHover={{ scale: 1.05 }}
                        className="bg-blue-950 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-md hover:bg-blue-900 transition duration-300"
                    >
                        Saiba mais
                    </motion.a>
                </div>
            </section>

            <Footer />
        </>
    );
}
