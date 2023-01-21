import Link from 'next/link';
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
    const collection = await db.collection('latijnse_woorden').getFullList(200 /* batch size */, {
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

export default async function Woord({ params }) {
    await db.admins.authWithPassword('abelvanhulst@gmail.com', '7g#Z5iVbQ&yTd8Not0tccSIwn5iwVRlDi45?$BtW');
    const woord = await db.collection('latijnse_woorden').getOne(params.id, {
        expand: 'relField1,relField2.subRelField',
    });

    return (
        <>
            <h1>{woord.latijn}</h1>
            <h1>{woord.latijn} betekent {woord.nederlands}</h1>
            <h1>Verwanden zijn:</h1>
            {await Promise.all(woord.andere_vormen.map(async (verbandje) => {
                const verband = await db.collection('latijnse_woorden').getOne(verbandje, {
                    expand: 'relField1,relField2.subRelField',
                });
                return <Link key={verband.id} href={"/woorden/" + verband.id + "/"}><h1>{verband.latijn}</h1></Link>
            }))}
        </>
    )
}