import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pages/integrantes">Integrantes</Link></li>
            </ul>
        </nav>
    )
}