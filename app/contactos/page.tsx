"use client";

import React, { useState, FormEvent } from 'react';
import Footer from "../../components/Footer"; // Caminho relativo para o Footer

// Definindo o tipo para os dados do formulário
interface FormData {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
    });

    // Estado para erro (string) e sucesso (boolean)
    const [formError, setFormError] = useState<string>('');
    const [formSuccess, setFormSuccess] = useState<boolean>(false);

    // Função de mudança de dados no formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Função de envio do formulário
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Verificando se os campos obrigatórios estão preenchidos
        if (!formData.nome || !formData.email) {
            setFormError('Os campos Nome e Email são obrigatórios.');
            setFormSuccess(false); // Se houver erro, o sucesso é false
            return;
        }

        // Simulando o envio bem-sucedido
        setFormSuccess(true);
        setFormError(''); // Limpa a mensagem de erro
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' }); // Limpa o formulário após envio
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-12 mt-25 flex-grow">
                <h1 className="text-3xl font-bold text-blue-950 text-center mb-6">Fale Conosco</h1>
                <p className="text-lg text-center text-blue-950 mb-12">
                    Tem dúvidas, sugestões ou deseja marcar uma consulta? Estamos aqui para ajudar! Escolha a melhor forma de falar connosco.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-950">Formulário de Contacto</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Exibindo a mensagem de sucesso ou erro */}
                        {formSuccess && <div className="bg-green-100 text-green-800 p-4 rounded-md">Mensagem enviada com sucesso!</div>}
                        {formError && <div className="bg-red-100 text-red-800 p-4 rounded-md">{formError}</div>}

                        <div>
                            <label htmlFor="nome" className="block text-lg font-medium mb-2 text-blue-950">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium mb-2 text-blue-950">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="assunto" className="block text-lg font-medium mb-2 text-blue-950">Assunto:</label>
                            <input
                                type="text"
                                id="assunto"
                                name="assunto"
                                value={formData.assunto}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="mensagem" className="block text-lg font-medium mb-2 text-blue-950">Mensagem:</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer fixado abaixo */}
            <Footer />
        </div>
    );
}
