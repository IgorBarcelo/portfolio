import Cabecalho from "../shared/Cabecalho";
import { Tecnologia } from "@core";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps {
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
    return (
        <div>
            <Cabecalho  />
            <div className="relative flex items-center flex-col justify-center pt-35 pb-20">
                <div className="border border-zinc-800 rounded-3xl p-2 bg-zinc-900/80 hover:bg-zinc-800 transition duration-200 ease-in-out">
                <h2 className="text-5x1 sm:text-4xl font-bold text-center text-zinc-200 py-1 px-3" >Desenvolvedor Full Stack</h2>
                <Tecnologias lista={props.tecnologias} />
                </div>
            </div>
        </div>
    )
}