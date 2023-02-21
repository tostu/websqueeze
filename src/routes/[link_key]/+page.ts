import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';



export const load = (async ({ fetch, params }) => {
    const link_key = params.link_key

    console.log(link_key)

    const res = await fetch(`/api/db?link=${link_key}`);
    const linkData = await res.json();
    // return {
    //     link: linkData.link_old
    // }

    throw redirect(302, linkData['link_old']);


    // throw error(404, 'Not found');
  }) satisfies PageLoad;