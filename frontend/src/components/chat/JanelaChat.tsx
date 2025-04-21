"use client"
import { IconReload, IconMessages, IconSend } from "@tabler/icons-react";
import useChat from "@/hooks/useChat";
import { useEffect, useRef, useState } from "react";
import BalaoMensagem from "./BalaoMensagem";
import Image from "next/image";

export default function BotaoChat() {
    const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
    const [texto, setTexto] = useState("")
    const fimChatRef = useRef<HTMLDivElement>(null)

    function enviarMensagem() {
        adicionarMensagem(texto)
        setTexto("")
    }

    useEffect(() => {
        fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [mensagens])

    return (
        <div className="flex flex-col bg-zin-300 rounded-2xl text-black overflow-hidden">
            <div className="flex justify-between items-center bg-white p-4">
                <h2 className="text-xl font-bold">Olá Visitante</h2>
                <IconReload size={24} className="text-black cursor-pointer"
                    onClick={limparMensagens}
                />
            </div>
            {mensagens.length === 0 ? (
                <div className="flex flex-col justify-center items-center min-h-[400px]  bg-zinc-300">
                    <IconMessages size={230} stroke={0.2} className="text-black/30" />
                    <span>Vamos conversar?</span>
                </div>
            ) : (
                <div className="bg-zinc-300 p-2 gap-2 min-h-[300px] sm:min-h-[400px] max-h-[400px] sm:max-h-[500px] overflow-y-scroll">
                    {mensagens.map((mensagem, i) => {
                        const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor
                        return <BalaoMensagem key={mensagem.id} mensagem={mensagem} omitirAutor={mesmoAutor}/>
                    })}
                    {pensando && ( 
                        <Image src="/pensando.gif" alt="pensando" width={50} height={50}/>
                    )}
                    <div ref={fimChatRef}/>
                </div>
            )}
            <div className="h-[1px] bg-zinc-700"></div>
            <div className="flex items-center gap-2 p-1 h-14 bg-zinc-300">
                <input 
                    type="text" 
                    value={texto} 
                    className="flex-1 border-3 rounded-2xl outline-none pl-3 bg-white"
                    onChange={(e: any) => {
                        setTexto(e.target.value)
                    }}
                    onKeyDown={(e: any) => {
                        if (e.key === "Enter") enviarMensagem()
                    }}  
                />
                <button className="flex justify-center items-center min-h-8 min-w-8 bg-red-500 rounded-2xl size-9"
                    onClick={enviarMensagem}
                >
                    <IconSend className="text-white" size={25} />
                </button>
            </div>
        </div>
    )
}