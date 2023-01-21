import Link from 'next/link';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 10,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const db = new PocketBase(process.env.POCKETBASE_SERVER)

export default async function Woorden() {
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);
    const collection = await db.collection('latijnse_woorden').getFullList(200 /* batch size */, {
        sort: '-latijn'
    });
    const woorden = collection.reverse()
    return (
        <>
            <h1>Alle woorden:</h1>
            {woorden.map((woord) => {
                return <Link key={woord.id} href={'/woorden/' + woord.id + "/"}><h1>{woord.latijn} - {woord.nederlands}</h1></Link>
            })}
        </>
    )
}