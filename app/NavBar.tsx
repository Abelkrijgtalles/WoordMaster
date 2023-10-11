import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <Link href="/"><h1>Home</h1></Link>
            <Link href="/woorden"><h1>Woorden</h1></Link>
        </>
    )
}