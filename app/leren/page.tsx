import Link from 'next/link';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 10,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const db = new PocketBase('https://minerva-online.pockethost.io');

async function getDingen() {
    await db.admins.authWithPassword('abelvanhulst@gmail.com', '7g#Z5iVbQ&yTd8Not0tccSIwn5iwVRlDi45?$BtW');
    const collection = await db.collection('woorden_te_leer').getFullList(200 /* batch size */, {
        sort: '-hoofdstuk,-na_hoofdstuk'
    });
    return collection.reverse()
}

export default async function Leren() {
    const dingen = await getDingen()
    return (
        <><h1>hi</h1>
            {dingen.map((ding) => {
                return <Link key={ding.id} href={'/leren/' + ding.id}><h1>{ding.hoofdstuk}{ding.na_hoofdstuk}</h1></Link>
            })}
        </>
    )
}