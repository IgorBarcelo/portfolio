import Principal from "@/components/landing/Principal"
import { obterTecnologias } from "@/function/tecnologias"
import Curriculo from "@/components/curriculo"
import Container from "@/components/shared/Container"
import Projetos from "@/components/projetos/Projetos"
import { obterProjetos } from "@/function/projetos"

export default async function Home() {
  const tecnologias = await obterTecnologias()
  const projetos = await obterProjetos()

  return (
    <div>
      <Principal tecnologias={tecnologias.destaques} />
      <Container className="py-11 flex flex-col items-center gap-7">
        <Projetos titulo="Destaque" lista={projetos.destaques} />
        <Projetos titulo="Web" lista={projetos.web} />
        <Projetos titulo="Desktop" lista={projetos.desktop} />
        <Curriculo tecnologias={tecnologias.todas} />
        <div>
        </div>
      </Container>
    </div>)
}