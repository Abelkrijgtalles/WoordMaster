import Link from 'next/link';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 60,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const db = new PocketBase(process.env.POCKETBASE_SERVER)

async function getDingen() {
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);
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
                return <Link key={ding.id} href={'/leren/' + ding.id + "/"}><h1>{ding.hoofdstuk}{ding.na_hoofdstuk}</h1></Link>
            })}
        </>
    )
}