import Image from "next/image";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <div className="space-y-20">
            {/* Imagem de margem a margem */}
            <div className="w-full h-[600px] relative">
                <Image
                    src="/imagem_fundo.png"
                    alt="Imagem de margem a margem"
                    fill
                    className="object-cover object-top"
                />
            </div>

            {/* Linha vermelha */}
            <div className="border-t border-red-900 w-3/4 mx-auto my-5"></div>


            {/* Imagem à esquerda com frase à direita */}
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4 px-6 md:px-48 py-4 mb-4">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/img_esquerda.png"
                        alt="Imagem à esquerda"
                        width={600}
                        height={600}
                        className="object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 text-lg text-blue-950 text-center font-semibold md:text-center border-gray-700">
                    <p>“Não somos apenas o que pensamos ser.</p>
                    <p>Somos mais: somos também o que lembramos e aquilo de que nos esquecemos; somos as palavras que trocamos, os enganos que cometemos, os impulsos a que cedemos ‘sem querer’.”</p>
                    <p>- Sigmund Freud</p>
                </div>
            </div>

            {/* Linha vermelha */}
            <div className="border-t border-red-900 w-3/4 mx-auto my-5"></div>

            {/* Seção de Cards */}
            <div className="text-center my-10">
                <h2 className="text-2xl text-blue-950 font-bold">
                    Descubra as nossas consultas especializadas para cuidar do seu bem-estar.
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-6 md:px-20 py-6">
                {[
                    { title: "Consultas de Psicologia Clínica", icon: "/icon1.png" },
                    { title: "Intervenção Familiar", icon: "/icon2.png" },
                    { title: "Intervenção de Casal", icon: "/icon3.png" },
                    { title: "Grupos Regulares de Meditação", icon: "/icon4.png" },
                    { title: "Consultas de Psicologia Online", icon: "/icon5.png" }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full hover:shadow-xl transition duration-300"
                    >
                        {/* Ícone */}
                        <div className="w-20 h-20 flex justify-center">
                            <Image src={item.icon} alt={item.title} width={80} height={80} />
                        </div>

                        {/* Título */}
                        <h3 className="text-lg font-semibold text-blue-950 mt-4">
                            {item.title}
                        </h3>

                        {/* Link */}
                        <div className="mt-auto">
                            <a href="#" className="text-xs text-blue-950 mt-4 hover:underline">
                                Saber mais →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-blue-950 text-white">
                {/* Lado Esquerdo */}
                <div className="flex flex-col justify-center px-6 md:px-20 py-16">
                    <h1 className="text-4xl font-bold mb-6">
                        Cuide da sua mente como cuida do seu corpo
                    </h1>
                    <p className="text-lg mb-8">
                        Proporcionamos um ambiente acolhedor e seguro, onde encontra soluções para as suas preocupações e desafios com o apoio da nossa psicóloga, Patrícia Bacelar.
                    </p>
                    <div className="flex space-x-8 text-2xl font-semibold items-center">
                        <div>
                            <span className="block text-4xl">+500</span>
                            <span className="text-lg items-center">Consultas</span>
                        </div>
                        <div>
                            <span className="block text-4xl">+200</span>
                            <span className="text-lg ">Sorrisos</span>
                        </div>
                    </div>
                    <button className="mt-8 bg-white text-blue-950 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
                        Marcar Consulta
                    </button>
                </div>

                {/* Lado Direito - Imagem */}
                <div className="relative">
                    <Image
                        src="/img_consultas.png"
                        alt="Consultório"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Page;
