import Image from "next/image"

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row 
        items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-600 rounded-2xl px-6 pt-6">
            <div className="relative min-w-70 h-64 xl:self-end">
            <Image src="/minha-imagem.png"alt="perfil" fill/>
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start ">
                    <span className="
                        bg-gradient-to-r from-teal-600 via-teal-500 to-white
                        text-transparent bg-clip-text text-2xl font-bold
                    ">Igor Barcelo</span>
                    <span>Desenvolvedor FullStack</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">Desenvolvedor Full Stack com sólida base acadêmica em
                    Análise e Desenvolvimento de Sistemas, experiência prática
                    com Java, JavaScript, React, Vue, APIs REST, MySQL e C#. Já
                    atuei em projetos reais como freelancer e colaborador em
                    empresas, com foco em integração de sistemas,
                    desenvolvimento de aplicações web e automação de
                    processos. Tenho projetos disponíveis no GitHub e estou
                    constantemente aprimorando minhas habilidades técnicas e
                    o idioma inglês.
                </p>
            </div>
        </div>
    )
}
