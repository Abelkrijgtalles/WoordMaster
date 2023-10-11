import Link from 'next/link';
import PocketBase from 'pocketbase';

export const revalidate = 60

const db = new PocketBase(process.env.POCKETBASE_SERVER)

export async function generateStaticParams() {
    await db.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL, process.env.POCKETBASE_ADMIN_PASSWORD);
    const collection = await db.collection('woorden').getFullList(200 /* batch size */, {
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

    const woord = await db.collection('woorden').getOne(params.id, {
        expand: 'taal1,taal2',
    });
    
    db.authStore.clear();

    return (
        <>
            <h1>{woord.eerste_taal}</h1>
            <p><i>Id: {woord.id}</i></p>
            <table>
                <tr>
                    <th>{woord.expand.taal1.naam}</th>
                    <th>{woord.expand.taal2.naam}</th>
                </tr>
                <tr>
                    <th>{woord.eerste_taal}</th>
                    <th>{woord.andere_taal}</th>
                </tr>
            </table>
        </>
    )
}