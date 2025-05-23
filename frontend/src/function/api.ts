const API_URL = process.env.NEXT_PUBLIC_API_URL || "localhost:4000"

export async function httpGet(url: string) {
    const response = await fetch(normalizarUrl(`${API_URL}${url}`))
    return response.json()
}

function normalizarUrl(url: string) {
    const protocolo = url.split("://")[0]
    const restante = url.split("://")[1]
    return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}