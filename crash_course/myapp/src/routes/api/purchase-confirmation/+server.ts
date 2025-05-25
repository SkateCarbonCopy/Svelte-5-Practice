import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const requestBody = await request.json();

    console.log(requestBody);

    // Business logic... -> send email to the customer, sending the bought ebook

    return json({ message: 'All good.' });
}
