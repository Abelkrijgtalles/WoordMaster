import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/leren/"><h1>Hier moet je leren</h1></Link>
            <Link href="/woorden/"><h1>Lijst van alle woorden</h1></Link>
        </>
    )
}