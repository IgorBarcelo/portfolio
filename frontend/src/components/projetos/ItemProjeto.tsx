import { Projeto } from "@core"
import Link from "next/link"
import Image from "next/image"
 

export interface ItemProjetoProps {
    projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${props.projeto.id}`} className="flex flex-col">
            <div className="
                relative rounded-2xl overflow-hidden border border-zinc-800
                min-w-64 min-h-64
            "
        >
            <Image 
                src={props.projeto.imagens[0]}
                alt={props.projeto.nome}
                fill
                sizes="100%"
                objectFit="object-cover"
                />
        </div>
        </Link>
    )
}