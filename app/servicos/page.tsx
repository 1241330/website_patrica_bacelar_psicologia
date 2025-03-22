"use client";

import Image from "next/image";


const Page = () => {
    return (
        <div className="space-y-20">
            {/* Imagem de margem a margem com altura maior e corte na parte inferior */}
            <div className="w-full h-128 relative">
                <Image
                    src="/imagem_fundo.png" // Coloque o caminho correto para a imagem
                    alt="Imagem de margem a margem"
                    layout="fill"
                    objectFit="cover"  // Vai cobrir o container mantendo a proporção
                    objectPosition="top" // Foco na parte superior da imagem
                />
            </div>

            {/* Linha vermelha */}
            <div className="border-t border-red-900 w-3/4 mx-auto my-5"></div>

            {/* Imagem à esquerda com frase à direita */}
            <div className="flex items-center space-x-4 px-48 py-4 mb-4">
                <div className="w-1/2">
                    <Image
                        src="/img_esquerda.png" // Coloque o caminho correto para a imagem
                        alt="Imagem à esquerda"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                </div>
                <div className="w-1/2 text-lg text-red-900 text-center font-bold">
                    <p>“Não somos apenas o que pensamos ser. </p>
                    <p>Somos mais: somos também o que lembramos e aquilo de que nos esquecemos; somos as palavras que trocamos, os enganos que cometemos, os impulsos a que cedemos ‘sem querer’. ”</p>
                    <p>Sigmund Freud</p>
                </div>
            </div>

            {/* Linha vermelha */}
            <div className="border-t border-red-900 w-3/4 mx-auto my-5"></div>

            {/* Texto centralizado */}
            <div className="text-center px-10 py-6">
                <p className="text-xl text-gray-800">
                    Aqui vai um texto centralizado explicando mais sobre o conteúdo da
                    página. Este texto pode ser uma introdução ou uma breve descrição
                    sobre os itens que você está apresentando.
                </p>
            </div>

            {/* 5 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-10 py-6">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow-lg"
                    >
                        <div className="w-full h-48 relative">
                            <Image
                                src="/imagem-card.jpg" // Coloque o caminho correto para a imagem
                                alt="Imagem do Card"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-center text-xl text-gray-800 mb-4">
                                Título do Card {index + 1}
                            </h3>
                            <p className="text-center text-gray-600 mb-4">
                                Um pequeno texto explicando o conteúdo do card.
                            </p>
                            <div className="text-center">
                                <a
                                    href="#"
                                    className="text-red-500 hover:text-red-300 font-bold"
                                >
                                    Saber mais →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
