import Link from "next/link";

export default function Footer() {
    return (
        <>
        <br/>
        <br/>
        <Link href="https://github.com/Abelkrijgtalles/WoordMaster">GitHub</Link>
        <p>Deze website heeft <Link href="https://raw.githubusercontent.com/Abelkrijgtalles/WoordMaster/main/LICENSE">de GNU GPL v3 Licentie</Link>.</p>
        </>
    )
}