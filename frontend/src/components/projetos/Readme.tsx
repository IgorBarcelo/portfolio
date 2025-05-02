import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
    markdown: string
}

export default function Readme(props: ReadmeProps) {
    return (
        <div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl min-w-[330px] max-w-3/4">
            <div className="text-[10px] sm:text-[18px] prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
                <ConteudoMD markdown={props.markdown}></ConteudoMD>
            </div>
        </div>
    )
}