"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = ({ departments }: { departments: string[] }) => (
    <nav className="fixed top-0 left-0 w-full bg-cyan-400 shadow-md flex items-center justify-between px-10 py-4 z-50">
        <div className="flex items-center">
            <Link href="/">
                <Image src="/logo.png" alt="Logotipo" width={150} height={50} priority />
            </Link>
        </div>
        <ul className="flex items-center space-x-6 ml-auto">
            {departments.map((dept) => (
                <li key={dept}>
                    <Link href={`#${dept}`} className="font-bold text-white hover:text-cyan-100">
                        {dept}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navbar;