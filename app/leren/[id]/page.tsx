import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 10,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const db = new PocketBase('https://minerva-online.pockethost.io');

export async function generateStaticParams() {
    await db.admins.authWithPassword('abelvanhulst@gmail.com', '7g#Z5iVbQ&yTd8Not0tccSIwn5iwVRlDi45?$BtW');
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
    await db.admins.authWithPassword('abelvanhulst@gmail.com', '7g#Z5iVbQ&yTd8Not0tccSIwn5iwVRlDi45?$BtW');
    const leerding = await db.collection('woorden_te_leer').getOne(params.id, {
        expand: 'relField1,relField2.subRelField',
    });

    return (
        <>
            <h1>Hi</h1>
            <h1>{leerding.hoofdstuk}{leerding.na_hoofdstuk}</h1>
        </>
    )
}