import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-center text-gray-500 mt-20">
            <hr className="h-px my-8 bg-gray-500"/>
            <Link href="https://github.com/Abelkrijgtalles/WoordMaster">GitHub</Link>
            <p>Deze website heeft <Link
                href="https://raw.githubusercontent.com/Abelkrijgtalles/WoordMaster/main/LICENSE">de GNU GPL v3
                Licentie</Link>.</p>
        </div>
    )
}