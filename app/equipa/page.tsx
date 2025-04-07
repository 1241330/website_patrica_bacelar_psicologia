"use client";

import React from "react";
import Footer from "../../components/Footer";

const areas = [
    "Psicologia Cognitivo-Comportamental",
    "Terapias de casal",
    "Terapias familiares",
    "Terapias da Terceira Geração",
    "Terapia da Aceitação e Compromisso",
    "Terapia Focada na Compaixão",
    "Terapia Comportamental Dialética",
    "Terapia Cognitiva Baseada em Mindfulness",
    "Terapia para Adultos",
    "Terapia para Adolescentes",
    "Terapia Cognitiva para Crianças dos 7 aos 12 anos",
    "Psicoeducação e Reestruturação Cognitiva",
    "Auto monitorização e Resolução de Problemas",
    "Estratégias de Gestão do Stresse e da Ansiedade",
    "Treino de Habilidades Sociais",
    "Estratégias Experienciais",
    "Avaliação da deterioração cognitiva",
];

const EquipaPage = () => (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 text-gray-900 mt-25">
        {/* Psicóloga Section */}
        <section className="flex flex-col md:flex-row items-center bg-white p-10 rounded-xl shadow-xl mx-8 md:mx-auto my-12 max-w-5xl transform hover:scale-105 transition-all">
            <img
                src="/pb.png"
                alt="Psicóloga Patrícia Bacelar"
                className="w-56 h-56 rounded-full object-cover shadow-md border-4 border-blue-900"
            />
            <div className="text-left space-y-4 md:ml-8 md:w-3/4">
                <h2 className="text-4xl font-semibold text-blue-900">Dra. Patrícia Bacelar</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Psicóloga Clínica especializada em terapia individual, de casal e dinâmicas terapêuticas para adolescentes e adultos.
                    Trabalha com dedicação para ajudar cada pessoa a encontrar equilíbrio e bem-estar emocional.
                </p>
                <p className="text-md text-gray-500 font-medium">
                    Membro Efetivo da Ordem dos Psicólogos Portugueses, Cédula Profissional nº <span className="font-bold text-blue-900">10944</span>
                </p>
            </div>
        </section>

        {/* Sobre Nós */}
        <section className="bg-blue-100 py-12 px-6 text-center shadow-md">
            <h2 className="text-4xl font-semibold text-blue-900 mb-6">Sobre Nós</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
                O espaço Patrícia Bacelar, Psicologia Clínica tem na sua origem e essência o trabalho desenvolvido pela psicóloga Patrícia Bacelar na área da Psicologia Clínica, individual e de grupo, terapia de casal e dinâmicas de grupo com jovens, adolescentes e adultos.
                É um espaço situado no coração da cidade de Viana do Castelo com características ímpares na área do acompanhamento psicoterapêutico, onde impera a intenção de acolher com carinho, disponibilidade e profissionalismo. O ambiente especialmente concebido a partir de conceitos de conforto e bom gosto, pretende que quem o procura se sinta “em casa” e à vontade, promovendo estados de confiança e bem-estar para que seja encontrada paz interior e harmonia.
            </p>
        </section>

        {/* Missão e Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 my-12 max-w-5xl mx-auto">
            <section className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-blue-900">
                <h2 className="text-3xl font-semibold text-blue-900 mb-3">Qual é a nossa missão</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Contribuir para a realização do melhor potencial do ser humano, procurando melhorar a qualidade de vida, bem-estar e equilíbrio das pessoas que nos procuram,
                    integrando na sua matriz original, profissionalismo e ética.
                </p>
            </section>
            <section className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-blue-900">
                <h2 className="text-3xl font-semibold text-blue-900 mb-3">Qual é a nossa visão</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Ser uma referência na área da psicologia, contribuindo para que cada ser humano possa resgatar a sua tranquilidade, paz interior e realização pessoal.
                    Buscamos o florescimento harmonioso de todos os seres.
                </p>
            </section>
        </div>

        {/* Áreas de Intervenção */}
        <section className="bg-gray-50 p-10 rounded-xl shadow-md mx-6 md:mx-auto my-12 max-w-5xl">
            <h2 className="text-4xl font-semibold text-blue-900 mb-6 text-center">Áreas de Intervenção</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
                {areas.map((area, index) => (
                    <li
                        key={index}
                        className="flex items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-900 hover:bg-blue-50 transition-all"
                    >
                        {area}
                    </li>
                ))}
            </ul>
        </section>

        {/* Footer corrigido */}
        <div className="mt-auto">
            <Footer />
        </div>
    </div>
);

export default EquipaPage;
