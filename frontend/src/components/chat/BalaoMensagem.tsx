import Mensagem from "@/model/Mensagem";
import ConteudoMD from "../shared/ConteudoMD";
import Image from "next/image";

export interface BalaoMensagemProps {
    mensagem: Mensagem
    omitirAutor?: boolean
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
    return props.mensagem.lado === "esquerda" ? (
        <BalaoEsquerdo {...props} />
    ) : (
        <BalaoDireito {...props} />
    )
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
    return ( 
        <div className="flex ga-4">
            {!props.omitirAutor && (
                <Image src="./chat.svg" alt="Assistente" width={40} height={40}></Image>
            )}
            <div className={`flex flex-col ${props.omitirAutor&& "pl-16"}`}>
                {!props.omitirAutor && (
                    <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
                )}
                <div className="bg-black text-white px-7 py-4 rounded-r-3xl rounded-bl-3xl">
                    <ConteudoMD markdown={props.mensagem.texto} />
                </div>
            </div>
        </div>
    )
}

function BalaoDireito(props: BalaoMensagemProps) {
    return  <div className="flex flex-col pt-1 items-end">
                {!props.omitirAutor && (
                    <span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
                )}
                <div className="bg-red-700 text-white px-7 py-2 rounded-l-3xl rounded-br-3xl">
                    <ConteudoMD markdown={props.mensagem.texto} />
                </div>
            </div>
}
