import { httpGet } from "./api"
import { Projeto } from "@core"
import { Tipo } from "@core"	
 
export async function obterProjetos() {
    const projetos: Projeto[] = await httpGet("/projetos")

    return {
        todos: projetos,
        get mobile() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
        },
        get web() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
        },
        get jogo() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.JOGO)
        },
        get destaques() {
            return projetos.filter((projeto) => projeto.destaque)
        }
    }
}

export async function obterProjeto(id: string) {
    return await httpGet(`/projetos/${id}`)
}