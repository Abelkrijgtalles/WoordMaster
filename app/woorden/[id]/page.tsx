import Link from 'next/link';
import PocketBase from 'pocketbase';

export const revalidate = 60

const db = new PocketBase(process.env.POCKETBASE_SERVER)

export async function generateStaticParams() {
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);
    const collection = await db.collection('latijnse_woorden').getFullList(200 /* batch size */, {
    });
    db.authStore.clear();

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
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);

    const woord = await db.collection('latijnse_woorden').getOne(params.id, {
        expand: 'relField1,relField2.subRelField',
    });
    
    db.authStore.clear();

    return (
        <>
            <h1>{woord.latijn}</h1>
            <p>{woord.id}</p>
            <h1>{woord.latijn} betekent {woord.nederlands}</h1>
        </>
    )
}