"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const caminho=usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"} >
                Início
            </MenuItem>
            <MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")} >
                Projetos
            </MenuItem>
            <MenuItem 
                href="http://api.whatsapp.com/send?phone=5511997223126&text=Oi, gostaria de saber mais sobre o seu trabalho!" 
                selecionado={false}
                novaAba={true}
            >
                Contato
            </MenuItem>
        </nav>
    )
}

function MenuItem(props: {
    href: string
    children: React.ReactNode
    selecionado: boolean
    novaAba?: boolean
}) {
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
            <span
                className={`flex items-center gap-2 text-sm border-teal-500 hover:text-white
                ${props.selecionado ? "border-b-4 text-white" : "text-gray-500"}
                `}
            >
                {props.children}
            </span>
        </Link>
    )
}