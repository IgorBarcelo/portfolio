import Cabecalho from "../shared/Cabecalho";
import { Tecnologia } from "@core";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps {
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
    return (
        <div
            className="
                flex flex-col items-center justify-center h-[350px]
                bg-[url('/principal.gif')] bg-cover bg-center     
            "
        >
            <Cabecalho />
            <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-5x1 sm:text-3x1 font-bold text-center bg-black/80 rounded-full py-1 px-3" >Desenvolvedor fullstack</h2>
                <Tecnologias lista={props.tecnologias} />
            </div>
                
        </div>
    )
}