"use client";
import { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";

interface Member {
    department: string;
    name: string;
    role: string;
    img: string;
    linkedin: string;
    email: string;
}

const CountUpAnimation = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (count < target) {
                setCount(prev => prev + 1);
            } else if (count > target) {
                setCount(prev => prev - 1);
            }
        }, 30);

        return () => clearTimeout(interval);
    }, [target, count]);

    return (
        <div className="text-center mt-8 max-w-2xl mx-auto">
            <span className="text-8xl text-cyan-400">{count}</span>
            <p className="text-xl text-gray-600">membros no total</p>
        </div>
    );
};

const MemberCard = ({ member, isFlipped, toggleFlip }: { member: Member; isFlipped: boolean; toggleFlip: () => void }) => {
    return (
        <div className="relative w-70 h-96 cursor-pointer perspective mx-4" onClick={toggleFlip}>
            <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute w-full h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4 backface-hidden">
                    <div className="w-full h-full mb-4 relative">
                        <Image src={`/members/${member.img}`} alt={member.name} fill className="absolute top-0 left-0 rounded-lg object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                    <p className="text-gray-500 text-center">{member.role}</p>
                </div>
                <div className="absolute w-full h-full bg-cyan-50 shadow-lg rounded-lg flex flex-col items-center justify-center p-4 rotate-y-180 backface-hidden">
                    <h3 className="text-lg font-semibold mb-2 text-center">{member.name}</h3>
                    <p className="text-sm mb-4 text-center">{member.role}</p>
                    <div className="flex gap-4">
                        {member.email && <a href={`mailto:${member.email}`} className="hover:text-cyan-400"><Mail className="w-6 h-6" /></a>}
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Linkedin className="w-6 h-6" /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamSection = ({ department, members }: { department: string; members: Member[] }) => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    return (
        <section id={department} className="p-8 mt-2 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-10">{department}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-fit mx-auto">
                {members.map((member, index) => (
                    <MemberCard
                        key={member.name}
                        member={member}
                        isFlipped={flippedIndex === index}
                        toggleFlip={() => setFlippedIndex(flippedIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default function TeamPage() {
    const [teams, setTeams] = useState<[string, Member[]][]>([]);

    useEffect(() => {
        const loadMembers = async () => {
            const response = await fetch("/members.csv");
            const text = await response.text();

            Papa.parse<Member>(text, {
                header: true,
                skipEmptyLines: true,
                complete: ({ data }) => {
                    const groupedMembers = data.reduce((acc, member) => {
                        acc[member.department] = acc[member.department] || [];
                        acc[member.department].push(member);
                        return acc;
                    }, {} as Record<string, Member[]>);

                    setTeams(Object.entries(groupedMembers));
                },
            });
        };

        loadMembers();
    }, []);

    const totalMembers = useMemo(() => teams.reduce((sum, [, members]) => sum + members.length, 0), [teams]);

    return (
        <div>
            <Navbar departments={teams.map(([dept]) => dept)}/>
            <div className="max-w-6xl mx-auto px-4 mt-40">
                <h2 className="text-4xl font-bold text-left mb-6">Quem somos</h2>
                <p className="text-gray-500 text-lg mb-6"> O NEI-ISEP, Núcleo de Estudantes de Informática do Instituto Superior de Engenharia do Porto, é um
                    Núcleo criado por estudantes de Engenharia Informática do mesmo, que pretende enriquecer a experiência dos diversos estudantes do ISEP
                    durante a sua permanência no instituto a vários níveis relacionados com a nossa área de intervenção – Informática, as TIC e Novas Tecnologias. </p>
                <p className="text-gray-500 text-lg mb-6"> O NEI-ISEP pretende cultivar um espírito de comunidade e entreajuda, bem como estabelecer ligações com
                    o mercado empresarial, além de proporcionar experiências que permitam enriquecer diversas competências associadas à nossa área de intervenção.</p>
                <p className="text-gray-500 text-lg mb-6"> É objetivo do NEI-ISEP ser um órgão que pretende apoiar e representar os estudantes de Engenharia Informática do ISEP.</p>
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-15">
                <CountUpAnimation target={totalMembers}/>
                <div className="border-b border-gray-300 my-8 mt-15"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-15">
                <h2 className="text-4xl font-bold text-left">A equipa</h2>
            </div>
            {teams.map(([department, members]) => (
                <TeamSection key={department} department={department} members={members}/>
            ))}
        </div>
        );
}
