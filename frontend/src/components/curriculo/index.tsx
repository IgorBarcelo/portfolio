import { Tecnologia } from "@core"
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas"

export interface CurriculoProps {
    tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
    return (
        <div className="flex flex-row min-h-30 w-full">
            <TecnologiasTrabalhadas lista={props.tecnologias} />
        </div>
    )
}