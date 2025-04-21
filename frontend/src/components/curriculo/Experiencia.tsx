export default function Experiencia() {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-center p-6 justify-around bg-black border border-zinc-600 rounded-2xl">
            <h1 className="text-zinc-300 text-center text-bold text-3xl">Experiência</h1>
            <Item label="API REST" />
            <Item label="PowerBI" />
            <Item label="Web Scraping" />
        </div>
    )
}

function Item(props: {label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-teal-500 text-2xl font-bold">{props.label}</span>
        </div>
    )
}