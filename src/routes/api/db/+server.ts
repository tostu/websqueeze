import type { RequestHandler } from '@sveltejs/kit';

let db: App.Platform['env']['websqueeze_db']

export const GET = (async ({ url }) => {
    
    const ps = db.prepare('SELECT * from links'); 
    const data = await ps.first();
    return new Response(data)

}) satisfies RequestHandler;