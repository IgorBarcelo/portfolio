import { Projeto } from "@core"
import Link from "next/link"
import Image from "next/image"


export interface ItemProjetoProps {
    projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${props.projeto.id}`} className="flex flex-col gap-2 bg-white/10 rounded-3xl p-4 hover:bg-white/20 transition-all duration-300">
            <div className="
                relative  overflow-hidden border border-zinc-800
                min-w-60 min-h-64
            "
            >   
                <Image
                    src={props.projeto.imagens[0]}
                    alt={props.projeto.nome}
                    fill
                    objectFit="object-cover"
                />
            </div>
            <div className=" text-[18px] font-bold text-teal-500 text-center">{props.projeto.nome}</div> 
        </Link>
    )
}