import Principal from "@/components/landing/Principal";
import Cabecalho from "@/components/shared/Cabecalho";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params
    return (
        <div className="bg-black">
        <Principal/>
        <div>Projeto {id}</div>
        </div>
    )
}