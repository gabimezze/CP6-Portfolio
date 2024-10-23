import Menu from "../Menu/Menu";
import Image from "next/image";
import imgLogo from "@/img/logo-fiap.png";

export default function Cabecalho() {
    return (
        <header className="cabecalho flex justify-between items-center text-white bg-[#05014d] bg-gradient-to-br from-blue-700 ">
            <Image src={imgLogo} alt="logo" width={100} height={100}/>
            <Menu  />
        </header>
    )
}