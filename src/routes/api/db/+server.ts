import type { RequestHandler } from '@sveltejs/kit';
import { customAlphabet } from 'nanoid'

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const nanoId = customAlphabet(ALPHABET, 8)

export const GET = (async ({ platform , request}) => {

    const searchParams = new URL(request.url).searchParams
    // console.log(searchParams)
    // console.log(searchParams.get('link'))
    const ps = platform.env.websqueeze_db.prepare('SELECT * from links where link_new = ?1').bind(searchParams.get('link'));
    const data = await ps.first();
    return new Response(JSON.stringify(data))

}) satisfies RequestHandler;

export const POST = (async ({ platform , request}) => {

    const { link_old } = await request.json()

    const link_new = nanoId()

    const db_response = (await platform.env.websqueeze_db.prepare('INSERT INTO links (link_old, link_new) VALUES (?1, ?2)').bind( link_old, link_new ).run()).meta;

    const responseJSON = {
        "link_key":link_new,
        "db_response": db_response
    }

    return new Response(JSON.stringify(responseJSON))

}) satisfies RequestHandler;


