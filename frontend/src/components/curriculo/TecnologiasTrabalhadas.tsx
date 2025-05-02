import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
    lista: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
    return props.lista ? (
        <div className="justify-center items-center w-full p-3 bg-black border border-zinc-600 rounded-2xl">
            <div className="flex justify-center items-center pb-3">
                <span className="text-teal-500 font-bold text-2xl text-center">Experiência com as tecnologias:</span>
            </div>
            <div className="flex justify-center gap-x-3 pb-2 flex-wrap">
                {props.lista.map((tecnologia) => (
                    <div key={tecnologia.id}>
                        <span className="text-teal-500 font-bold">#</span>
                        <span>{tecnologia.nome}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null
}