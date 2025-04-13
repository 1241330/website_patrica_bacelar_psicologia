"use client";

import React, { useState } from "react";
import Footer from "../../components/Footer";

const imagens = [
    "/imageminicial.jpeg",
    "/espaco2.jpg",
    "/espaco3.jpg",
    "/espaco4.jpg",
    "/espaco5.jpg",
    "/espaco6.jpg",
];

const EspacoPage = () => {
    const [imagemAtual, setImagemAtual] = useState(null);

    const fechar = () => setImagemAtual(null);

    const handleImageClick = (src) => {
        if (imagemAtual === src) {
            setImagemAtual(null); // Fecha se clicar novamente na imagem ampliada
        } else {
            setImagemAtual(src); // Abre a imagem se clicar em uma nova
        }
    };

    return (
        <div
            className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 text-gray-900 mt-25"
            onClick={fechar} // Fecha a imagem ao clicar em qualquer lugar fora da imagem ampliada
        >
            {/* Secção: O Nosso Espaço */}
            <section className="bg-white p-10 rounded-xl shadow-xl mx-6 md:mx-auto my-12 max-w-5xl">
                <h2 className="text-4xl font-semibold text-blue-900 text-center mb-6">O Nosso Espaço</h2>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-10">
                    O consultório foi desenhado para ser um lugar de conforto, serenidade e segurança emocional.
                    Desde a sala de espera até os espaços de consulta, cada detalhe transmite tranquilidade e cuidado.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {imagens.map((src, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden shadow-md border-t-4 border-blue-900 bg-white transition-transform duration-300 ${
                                imagemAtual === src ? "scale-[2] z-40" : "hover:scale-105"
                            }`}
                            onClick={(e) => {
                                e.stopPropagation(); // Impede o fechamento ao clicar na imagem
                                handleImageClick(src);
                            }}
                        >
                            <img
                                src={src}
                                alt={`Espaço ${index + 1}`}
                                className="w-full h-64 object-cover cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Zoom local - Estilo 3 */}
            {imagemAtual && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                    onClick={fechar} // Fecha a imagem ao clicar fora dela
                >
                    <img
                        src={imagemAtual}
                        alt="Imagem ampliada"
                        className="max-w-3xl max-h-[90vh] border-4 border-white shadow-2xl rounded-xl pointer-events-auto"
                    />
                </div>
            )}

            {/* Footer */}
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default EspacoPage;
