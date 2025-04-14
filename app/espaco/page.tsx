"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Marcacoes from "@/app/marcacoes/page"; // ← Ajusta este caminho se necessário

export default function GaleriaConsultorio() {
    const imagens = [
        "/img_1.jpeg",
        "/img_2.jpeg",
        "/img_3.jpeg",
        "/img_4.jpeg",
        "/img_5.jpeg",
        "/img_8.jpeg",
        "/img_9.jpeg",
        "/img_10.jpeg",
        "/img_11.jpeg",
        "/img_12.jpeg",
    ];

    return (
        <>
            <section className="py-24 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen flex flex-col items-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
                        Conheça o nosso consultório
                    </h1>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-6 md:px-20">
                    {imagens.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full h-64 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Foto do consultório ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}