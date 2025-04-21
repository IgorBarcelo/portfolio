import { httpGet } from "./api"
import { Projeto } from "@core"
import { Tipo } from "@core"	
 
export async function obterProjetos() {
    const projetos: Projeto[] = await httpGet("/projetos")

    return {
        todos: projetos,
        get web() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
        },
        get desktop() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.DESKTOP)
        },
        get destaques() {
            return projetos.filter((projeto) => projeto.destaque)
        }
    }
}

export async function obterProjeto(id: string) {
    return await httpGet(`/projetos/${id}`)
}