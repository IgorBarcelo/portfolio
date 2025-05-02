import Image from "next/image";

export default function Experiencia() {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-row items-center p-6 justify-around bg-black/90 border border-zinc-600 rounded-2xl">
            <div className="relative min-w-70 h-64">
                <Image src="/habilidades.png"alt="perfil" fill/>
            </div>
            <div >
                <div>
                    <h1 className="text-teal-500 font-bold text-2xl pb-2">Habilidades Técnicas</h1>
                    <Item label1="Linguagens: " label2="Java, JavaScript, TypeScript, Python, C#" />
                    <Item label1="Frameworks e Bibliotecas:" label2="React, Vue.js, Vite, Node.js, React Native" />
                    <Item label1="Banco de Dados:" label2="MySQL, PostgreSQL" />
                    <Item label1="Ferramentas e Tecnologias:" label2="Git, APIs REST, Web Scraping, Power BI (via iFrame), Dapper (ORM para C#)" />
                    <Item label1="Integrações e Dashboards:" label2="Experiência prática com integração de dados em visualizações interativas no Power BI" />
                </div>
                <div>
                    <h1 className="text-teal-500 font-bold text-2xl pt-3 pb-2">Formação Acadêmica</h1>
                    <Item label1="Análise e Desenvolvimento de Sistemas" label3="Universidade Cruzeiro do Sul | Ago/2022 – Dez/2024" />
                    <Item label1="React Native e JavaScript – Udemy (Jan/2020 – Jun/2020)" label3="Aprendizado prático com foco em aplicações mobile híbridas." />
                    <Item label1="Python (Curso em Vídeo) – Curso em Vídeo (Jan/2018 – Jun/2018)" label3="Fundamentos da linguagem, orientação a objetos, automação e scripts." />
                    <Item label1="Node.js – Rocketseat (Fev/2024)" label3="Construção de APIs robustas, conexão com banco de dados e boas práticas." />
                </div>
            </div>
        </div>
    )
}

function Item(props: {label1: string, label2?: string, label3?: string}) {
    return (
        <div className="flex flex-col pt-2">
            <span className="text-sm font-bold">{props.label1}<span className="font-medium">{props.label2}</span></span>
            <span className="text-sm">{props.label3}</span>
        </div>
    )
}