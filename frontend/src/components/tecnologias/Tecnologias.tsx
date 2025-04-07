import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
    lista: Tecnologia[]
}

export default function Tecnologias(props: TecnologiasProps) {
    return props.lista ? (
        <div className="
            flex justify-center gap-4 
            border border-zinc-800 rounded-xl p-2 bg-zinc-900/80 
            hover:bg-zinc-800 transition duration-200 ease-in-out 
            flex-wrap">
            {props.lista.map((tecnologia) => (
                <div key={tecnologia.id} className="flex flex-col items-center gap-1">
                    <span className="relative h-11 w-11 sm:h-16 sm:w16 rounded-xl overflow-hidden">
                        <Image src={tecnologia.imagem} alt={tecnologia.nome} fill className="object-contain"/>
                    </span>
                    <span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
                </div>
            ))}
        </div>
    ) : null
}