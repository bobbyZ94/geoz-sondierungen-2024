import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import PocketBase from 'pocketbase'
import type { PageLoad } from './$types'

const pb = new PocketBase(env.PUBLIC_BACKEND_URL)

export const load: PageLoad = async ({ params }) => {
	const datenschutz = await pb.collection('datenschutz').getFullList({
		sort: '-created'
	})

	if (datenschutz) return { datenschutz }
	error(404, 'Not found')
}
