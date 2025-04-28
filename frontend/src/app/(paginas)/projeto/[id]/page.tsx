import Cabecalho from "@/components/shared/Cabecalho";
import Container from "@/components/shared/Container";
import { obterProjeto } from "@/function/projetos";
import CarroselImagens from "@/components/shared/CarroselImagens";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import { obterReadme } from "@/function/github";
import Readme from "@/components/projetos/Readme";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params
    const projeto = await obterProjeto(id)

    if (!projeto) return null

    const readme = await obterReadme(projeto?.repositorio)

    return (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
                <CarroselImagens imagens={projeto.imagens.slice(0)} />
                <div className="bg-zinc-700/80 p-4 rounded-2xl flex flex-col gap-4">
                    <Tecnologias lista={projeto.tecnologias} tamanhoMenor />
                </div>
                <Readme markdown={readme} />
            </Container>
        </div>
    )
}