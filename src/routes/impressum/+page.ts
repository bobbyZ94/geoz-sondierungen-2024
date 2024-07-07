import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import PocketBase from 'pocketbase'
import type { PageLoad } from './$types'

const pb = new PocketBase(env.PUBLIC_BACKEND_URL)

export const load: PageLoad = async ({ params }) => {
	const impressum = await pb.collection('impressum').getFullList({
		sort: '-created'
	})

	if (impressum) return { impressum }
	error(404, 'Not found')
}
