import Principal from "@/components/landing/Principal"
import { obterTecnologias } from "@/function/tecnologias"
import Curriculo from "@/components/curriculo"
import Container from "@/components/shared/Container"
import Projetos from "@/components/projetos/Projetos"
import { obterProjetos } from "@/function/projetos"
import MiniCV from "@/components/curriculo/MiniCV"
import Experiencia from "@/components/curriculo/Experiencia"

export default async function Home() {
  const tecnologias = await obterTecnologias()
  const projetos = await obterProjetos()

  return (
    <div className="
      relative h-350 bg-[url('/principal.gif')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 
      before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,oklch(0.141_0.005_285.823)_100%)] 
      ">
      <Principal tecnologias={tecnologias.destaques} />
      <Container className="relative py-11 flex flex-col items-center gap-7">
        <MiniCV />
        <Experiencia />
        <div className="font-bold text-teal-500 text-4xl pt-20">Projetos</div>
        <Projetos titulo="Destaques" lista={projetos.destaques} />
        <Projetos titulo="Web" lista={projetos.web} />
        <Projetos titulo="Desktop" lista={projetos.desktop} />
        <Curriculo tecnologias={tecnologias.todas} />
        <div>
        </div>
      </Container>
    </div>)
}