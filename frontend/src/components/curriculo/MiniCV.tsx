import Image from "next/image"

export default function MiniCV() {
    return (
        <div className="
        flex flex-col-reverse gap-6 max-w-[1135px] md:flex-row lg:flex-col-reverse xl:flex-row 
        items-center md:items-end lg:items-center xl:items-start 
        bg-black/90 border border-zinc-600 rounded-2xl px-6 pt-6
        ">
            <div className="relative min-w-70 h-64 xl:self-end">
            <Image src="/minha-imagem.png"alt="perfil" fill/>
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start ">
                    <span className="
                        text-teal-500
                        bg-clip-text text-2xl font-bold
                    ">Igor Barcelo</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">Sou desenvolvedor formado em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul (2022–2024), 
                    com sólida base em desenvolvimento web e back-end, além de experiência prática em projetos que envolvem web scraping, integrações com Power BI, e consumo de APIs REST. Tenho familiaridade 
                    com todo o ciclo de desenvolvimento, desde a criação de land-pages e aplicações front-end responsivas até a construção de serviços no back-end.
                </p>
                <p>
                    Meus projetos no <a className="underline text-teal-300 hover:text-teal-600" href="https://github.com/IgorBarcelo?tab=repositories">GitHub</a> refletem o aprendizado contínuo e a aplicação real de tecnologias modernas como React, Vue, Node.js, Vite, além de linguagens como Java, Python, JavaScript, TypeScript e C#. 
                    Em especial, aplico boas práticas de versionamento com Git, organização de código e integração entre sistemas, visando sempre soluções escaláveis e performáticas.
                </p>
            </div>
        </div>
    )
}
