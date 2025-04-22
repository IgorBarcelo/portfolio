import { Carousel, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { CarouselContent, CarouselItem } from "../ui/carousel" 
import Image from "next/image"

export interface CarroselImagensProps {
    imagens: string[]
}

export default function CarroselImagens(props: CarroselImagensProps) {
    return (
        <Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12" >
            <CarouselContent>
                {props.imagens.map((imagem) => (
                    <CarouselItem key={imagem} className="relative h-120 lg:h-140 xl:h-240">
                        <Image src={imagem} alt="imagem" fill className="flex" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}