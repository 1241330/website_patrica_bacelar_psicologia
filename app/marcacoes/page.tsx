"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Marcacoes = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        opcao: "",
        dataConsulta: "",
        motivo: "",
        tipoConsulta: [] as string[],
    });
    const [formErrors, setFormErrors] = useState({
        nome: false,
        email: false,
        telefone: false,
        dataConsulta: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({
                ...prev,
                tipoConsulta: checked
                    ? [...prev.tipoConsulta, value]
                    : prev.tipoConsulta.filter((item) => item !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const validateForm = () => {
        const errors = {
            nome: !formData.nome,
            email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
            telefone: !formData.telefone,
            dataConsulta: !formData.dataConsulta,
        };
        setFormErrors(errors);
        return !Object.values(errors).includes(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Consulta marcada com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen flex flex-col items-center mt-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-extrabold text-blue-900 leading-tight">Faça a sua Marcação</h1>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl space-y-6 border border-gray-200 mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {[
                    { label: "Nome", name: "nome", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Telefone", name: "telefone", type: "tel" },
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

                <div>
                    <label className="block text-blue-950 font-medium">Tipo de Marcação:</label>
                    <div className="space-y-2">
                        {[
                            { value: "psicologia", label: "Consulta de Psicologia" },
                            { value: "terapia", label: "Consulta de Terapia de Casal/Familiar" },
                            { value: "online", label: "Consulta de Psicologia Online" },
                            { value: "meditação", label: "Grupo Regular de Meditação" },
                            { value: "terapeutico", label: "Grupo Terapêutico" }
                        ].map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 text-blue-950 cursor-pointer transition-all hover:text-blue-700"
                            >
                                <input
                                    type="radio"
                                    name="opcao"
                                    value={option.value}
                                    checked={formData.opcao === option.value}
                                    onChange={handleChange}
                                    className="accent-blue-600"
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-blue-950 font-medium">Data Preferencial:</label>
                    <input
                        type="date"
                        name="dataConsulta"
                        value={formData.dataConsulta}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 ${
                            formErrors.dataConsulta ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {formErrors.dataConsulta && <p className="text-red-500 text-sm mt-1">Por favor, selecione uma data.</p>}
                </div>

                <div>
                    <label className="block text-blue-950 font-medium">Motivo da consulta:</label>
                    <textarea
                        name="motivo"
                        value={formData.motivo}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                <div>
                    <label className="block text-blue-950 font-medium">Selecione uma opção:</label>
                    <div className="space-y-2">
                        {[
                            { value: "primeira", label: "Primeira Consulta" },
                            { value: "seguimento", label: "Consulta de Seguimento" },
                        ].map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 text-blue-950 cursor-pointer transition-all hover:text-blue-700"
                            >
                                <input
                                    type="checkbox"
                                    name="tipoConsulta"
                                    value={option.value}
                                    checked={formData.tipoConsulta.includes(option.value)}
                                    onChange={handleChange}
                                    className="accent-blue-600"
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                </div>

                <motion.button
                    type="submit"
                    className="w-full bg-blue-950 text-white py-3 rounded-xl font-bold shadow-md transition-all hover:bg-blue-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    Marcar Agora
                </motion.button>
            </motion.form>

            <Footer />
        </section>
    );
};

export default Marcacoes;
