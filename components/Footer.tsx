import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-full">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Coluna 1 - Contato */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold">Contactos</h3>
                    <p className="text-gray-400 text-lg">E-mail: <a href="mailto:bacelar.p@gmail.com" className="hover:text-gray-200 transition">bacelar.p@gmail.com </a></p>
                    <p className="text-gray-400 text-lg"><a href="tel:+351926749022" className="hover:text-gray-200 transition">(+351) 926 749 022</a></p>
                    <p className="text-gray-400 text-lg"><a href="tel:+351258823415" className="hover:text-gray-200 transition">(+351) 258 823 415</a></p>
                    <p className="text-gray-400 text-lg">Rede Nacional Móvel e Fixa</p>
                    <p className="text-gray-400 text-lg">Largo dos Crúzios 17-21, 4900-343 Viana do Castelo</p>

                    {/* Redes Sociais */}
                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><FaWhatsapp size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
                    </div>
                </div>

                {/* Coluna 2 - Horário */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold">Horário de Funcionamento</h3>
                    <ul className="mt-2 space-y-2 text-gray-400 text-lg">
                        <li>Segunda-Feira: 09:00 - 20:00</li>
                        <li>Terça-Feira: 09:00 - 20:00</li>
                        <li>Quarta-Feira: 09:00 - 20:00</li>
                        <li>Quinta-Feira: 09:00 - 20:00</li>
                        <li>Sexta-Feira: 09:00 - 20:00</li>
                        <li>Sábado: 09:00 - 18:00</li>
                        <li>Domingo: Fechado</li>
                    </ul>
                </div>

                {/* Coluna 3 - Mapa */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold">Localização</h3>
                    <iframe
                        title="Mapa da Clínica"
                        src="https://maps.google.com/maps?q=Largo%20dos%20Cr%C3%BAzios%2017-21,%204900-343%20Viana%20do%20Castelo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="280"
                        className="rounded-lg shadow-md mt-2"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Rodapé Final */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
                <p>© 2025 Patrícia Bacelar Psicologia Clínica. Desenvolvido por:
                    <span className="ml-1">
                        <a href="https://www.linkedin.com/in/carlotamlemos"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-white hover:text-blue-500 transition font-semibold">
                            Carlota Lemos
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
