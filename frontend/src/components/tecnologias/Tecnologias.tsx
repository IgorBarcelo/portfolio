"use client"
import { Tecnologia } from "@core"
import Image from "next/image"
import { useState } from "react"

export interface TecnologiasProps {
    lista: Tecnologia[]
    tamanhoMenor?: boolean
}

function TecnologiaItem({ tecnologia, tamanhoMenor }: { tecnologia: Tecnologia, tamanhoMenor?: boolean }) {
    const [src, setSrc] = useState(tecnologia.imagem[0])

    return (
        <div className="flex flex-col items-center gap-1">
            <span className={`
                relative  rounded-xl overflow-hidden
                ${tamanhoMenor ? "h-8 w-16 sm:h-12 sm:w-18" : "h-8 w-14 sm:h-10 sm:w-16"}
            `}>
                <Image 
                    src={src} 
                    alt={tecnologia.nome} 
                    onError={() => setSrc(tecnologia.imagem[1])} 
                    fill 
                    className="object-contain" 
                />
            </span>
            <span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
        </div>
    )
}

export default function Tecnologias(props: TecnologiasProps) {
    return props.lista ? (
        <div className="flex justify-center gap-4 flex-wrap">
            {props.lista.map((tecnologia) => (
                console.log("###",props.tamanhoMenor),
                <TecnologiaItem 
                    key={tecnologia.id} 
                    tecnologia={tecnologia} 
                    tamanhoMenor={props.tamanhoMenor} 
                />
            ))}
        </div>
    ) : null
}
