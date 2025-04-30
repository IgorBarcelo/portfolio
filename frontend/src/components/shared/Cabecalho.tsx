import Image from "next/image"
import Link from "next/link"
import Container from "./Container"
import Menu from "./Menu"

export default function Cabecalho() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center h-16 bg-black/67">
            <Container className="flex-1 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.png" alt="Logo" width={150} height={0} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex items-center">
                    <Link
                        href="https://www.linkedin.com/in/igor-barcelo-631010216/"
                        target="_blank"
                        className="bg-teal-500 hover:bg-teal-800 rounded-full px-7 py-1 text-sm font-bold"
                    >
                        Perfil
                    </Link>
                </div>
            </Container>
        </header>
    )
}