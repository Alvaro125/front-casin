'use client'
import Image from "next/image";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
    subsets: ["latin"],
    weight: "400",
});

export default function Navbar() {
    return (
        <nav className={`${russoOne.className} fixed flex flex-row justify-between backdrop-blur-sm p-4 text-light bg-primary/50 w-full z-50`}>
            <div>
                <Image
                    src="/logo.svg"
                    alt="Casin logo"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                />
            </div>
            <ul className="flex flex-row gap-2 items-center justify-center">
                <li>home</li>
                <li className="bg-light w-2 h-2 rounded"></li>
                <li>sobre</li>
                <li className="bg-light w-2 h-2 rounded"></li>
                <li>projetos</li>
            </ul>
            <ul className="flex flex-row gap-2 items-center justify-center">
                <li>login</li>
                <li className="bg-light w-2 h-2 rounded"></li>
                <li>cadastro</li>
            </ul>
        </nav>
    );
}
