"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";

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
            // Aqui você pode adicionar a lógica para enviar os dados para um servidor
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Conteúdo principal */}
            <main className="flex-grow max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md mt-40 mb-10 w-full md:max-w-2xl lg:max-w-3xl">
                <h1 className="text-2xl font-bold text-center mb-4 text-blue-950">Marque a sua consulta</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium" htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${formErrors.nome ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        />
                        {formErrors.nome && <p className="text-red-500 text-xs">Por favor, insira seu nome.</p>}
                    </div>
                    <div>
                        <label className="block font-medium" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        />
                        {formErrors.email && <p className="text-red-500 text-xs">Por favor, insira um email válido.</p>}
                    </div>
                    <div>
                        <label className="block font-medium" htmlFor="telefone">Telefone:</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${formErrors.telefone ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        />
                        {formErrors.telefone && <p className="text-red-500 text-xs">Por favor, insira seu telefone.</p>}
                    </div>
                    <div>
                        <label className="block font-medium">Tipo de Consulta:</label>
                        <div className="space-y-1">
                            {["psicologia", "terapia", "online"].map((option, index) => (
                                <label key={index} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="opcao"
                                        value={option}
                                        checked={formData.opcao === option}
                                        onChange={handleChange}
                                    />
                                    {option === "psicologia"
                                        ? "Consulta de Psicologia"
                                        : option === "terapia"
                                            ? "Consulta de Terapia de Casal/Familiar"
                                            : "Consulta de Psicologia Online"}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium" htmlFor="dataConsulta">Data Preferencial:</label>
                        <input
                            type="date"
                            id="dataConsulta"
                            name="dataConsulta"
                            value={formData.dataConsulta}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md ${formErrors.dataConsulta ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        />
                        {formErrors.dataConsulta && <p className="text-red-500 text-xs">Por favor, selecione uma data.</p>}
                    </div>
                    <div>
                        <label className="block font-medium" htmlFor="motivo">Motivo da consulta:</label>
                        <textarea
                            id="motivo"
                            name="motivo"
                            value={formData.motivo}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                            rows={3}
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Selecione uma opção:</label>
                        <div className="space-y-1">
                            {["primeira", "seguimento"].map((option, index) => (
                                <label key={index} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="tipoConsulta"
                                        value={option}
                                        checked={formData.tipoConsulta.includes(option)}
                                        onChange={handleChange}
                                    />
                                    {option === "primeira" ? "Primeira Consulta" : "Consulta de Seguimento"}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900 font-bold">
                        Marcar Agora
                    </button>
                </form>
            </main>

            {/* Footer fixado abaixo */}
            <Footer />
        </div>
    );
};

export default Marcacoes;
