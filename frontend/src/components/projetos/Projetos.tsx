import { Projeto } from "@core"
import ItemProjeto from "./ItemProjeto"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../ui/carousel"

export interface ProjetoProps {
    titulo: string
    lista: Projeto[]
}

export default function Projetos(props: ProjetoProps) {
    return (
        <div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-9/10 gap-2">
            <h3 className="text-2xl font-bold text-white/70 pt-8">{props.titulo}</h3>
            <Carousel
                opts={{
                    align: 'center',
                    loop: true
                }}
                className="w-full"
            >
                <CarouselContent className="flex">
                    {props.lista.map((projeto) => (
                        <CarouselItem 
                            key={projeto.id} 
                            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                            <ItemProjeto projeto={projeto}/>    
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}