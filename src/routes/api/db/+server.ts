import type { RequestHandler } from '@sveltejs/kit';

export const GET = (async ({ platform }) => {

    const ps = platform.env.websqueeze_db.prepare('SELECT * from test'); 
    const data = await ps.first();
    return new Response(data)

}) satisfies RequestHandler;


