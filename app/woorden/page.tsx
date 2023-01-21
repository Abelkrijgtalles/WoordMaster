import Link from 'next/link';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 10,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const db = new PocketBase('https://minerva-online.pockethost.io')

export default async function Woorden() {
    await db.admins.authWithPassword('abelvanhulst@gmail.com', '7g#Z5iVbQ&yTd8Not0tccSIwn5iwVRlDi45?$BtW');
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