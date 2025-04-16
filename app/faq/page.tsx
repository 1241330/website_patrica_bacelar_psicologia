"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Definição do tipo para as perguntas frequentes
interface FAQItem {
    question: string;
    answer: string;
}

// Dados das FAQs
const faqs: FAQItem[] = [
    { question: "Quanto tempo dura uma sessão?", answer: "Uma sessão de terapia normalmente dura 60 minutos." },
    { question: "Preciso de um diagnóstico para iniciar a terapia?", answer: "Não, qualquer pessoa pode procurar terapia para melhorar sua saúde mental e bem-estar." },
    { question: "As consultas podem ser online?", answer: "Sim, oferecemos atendimentos online com a mesma qualidade e sigilo das consultas presenciais." },
    { question: "Como funciona a confidencialidade?", answer: "Todas as informações compartilhadas em consulta são sigilosas e protegidas pelo Código de Ética Profissional." },
    { question: "Qual a frequência recomendada para a terapia?", answer: "A frequência varia para cada pessoa, mas geralmente é recomendada uma sessão por semana." }
];

// Componente de Perguntas Frequentes (FAQ)
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center">
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-extrabold text-blue-900 leading-tight mt-40">Perguntas Frequentes</h1>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
            </motion.div>

            <div className="max-w-3xl w-full px-6 md:px-12 space-y-6 mb-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-blue-950">{faq.question}</h3>
                            <span className="text-blue-900 text-2xl transition-transform duration-300">
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </div>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Página principal
const Page = () => {
    return (
        <div>
            {/* Seção FAQ */}
            <FAQSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Page;
