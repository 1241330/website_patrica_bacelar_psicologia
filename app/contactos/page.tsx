"use client";

import React, { useState, FormEvent } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });
    const [formErrors, setFormErrors] = useState({
        nome: false,
        email: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {
            nome: !formData.nome,
            email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
        };
        setFormErrors(errors);
        return !Object.values(errors).includes(true);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Mensagem enviada com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen flex flex-col items-center mt-20">
            {/* Título e Linha abaixo do Título */}
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-extrabold text-blue-900 leading-tight">Fale connosco</h1>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 mb-7 rounded-full"></div>

                <h2 className="text-xl text-center text-blue-950 mb-0">
                    Tem dúvidas, sugestões ou deseja marcar uma consulta? Estamos aqui para ajudar! Escolha a melhor
                    forma de falar connosco.</h2>
            </motion.div>

            {/* Formulário de Contato */}
            <motion.form

                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl space-y-6 border border-gray-200 mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Campos de Nome e Email */}
                {[
                    { label: "Nome", name: "nome", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                ].map((field, index) => (
                    <div key={index}>
                        <label className="block text-blue-950 font-medium">{field.label}:</label>
                        <input
                            type={field.type}
                            name={field.name}
                            value={(formData as any)[field.name]}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 ${
                                formErrors[field.name as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {formErrors[field.name as keyof typeof formErrors] && (
                            <p className="text-red-500 text-sm mt-1">Por favor, insira um {field.label.toLowerCase()} válido.</p>
                        )}
                    </div>
                ))}

                {/* Campo de Assunto */}
                <div>
                    <label className="block text-blue-950 font-medium">Assunto:</label>
                    <input
                        type="text"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Campo de Mensagem */}
                <div>
                    <label className="block text-blue-950 font-medium">Mensagem:</label>
                    <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                {/* Botão de Enviar */}
                <motion.button
                    type="submit"
                    className="w-full bg-blue-950 text-white py-3 rounded-xl font-bold shadow-md transition-all hover:bg-blue-900"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    Enviar
                </motion.button>
            </motion.form>

            <Footer />
        </section>
    );
};

export default ContactPage;
