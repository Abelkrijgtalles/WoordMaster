import Link from 'next/link';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 60,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const db = new PocketBase(process.env.POCKETBASE_SERVER)

export async function generateStaticParams() {
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);
    const collection = await db.collection('woorden_te_leer').getFullList(200 /* batch size */, {
        sort: '-hoofdstuk,-na_hoofdstuk'
    });

    return collection.map((ding) => ({
        id: ding.id.toString(),
    }));
}

// async function getLeerDing(leerId) {
//     // console.log(leerId)

//     console.log(record1.id)
//     return record1
// }

export default async function LeerInfo({ params }) {
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);
    const leerding = await db.collection('woorden_te_leer').getOne(params.id, {
        expand: 'relField1,relField2.subRelField',
    });

    return (
        <>
            <h1>Hi</h1>
            <h1>{leerding.hoofdstuk}{leerding.na_hoofdstuk}</h1>
            {await Promise.all(leerding.woorden.map(async (woord) => {
                const woordje = await db.collection('latijnse_woorden').getOne(woord, {
                    expand: 'relField1,relField2.subRelField',
                });
                return <Link key={woordje.id} href={"/woorden/" + woordje.id + "/"}><h1>{woordje.latijn} - {woordje.id}</h1></Link>
            }))}
        </>
    )
}