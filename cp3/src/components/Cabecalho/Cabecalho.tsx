import Menu from "../Menu/Menu";
import Image from "next/image";
import imgLogo from "@/img/logo-fiap.png"

export default function Cabecalho() {
    return (
        <header className="cabecalho text-white h-32 bg-gradient-to-r from-my-gradient-100 to-my-gradient-50 p-96 flex justify-between items-center px-4 py-2">
            <Image src={imgLogo} alt="logo" width={150}/>
            <Menu />
        </header>
    )
}