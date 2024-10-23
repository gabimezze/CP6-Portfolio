import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/categorias">CPS</Link></li>
                <li><Link href="/categorias/cad-categoria">Cadastro</Link></li>
            </ul>
        </nav>
    )
}