import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import PocketBase from 'pocketbase'
import type { PageLoad } from './$types'

const pb = new PocketBase(env.PUBLIC_BACKEND_URL)

export const load: PageLoad = async ({ params }) => {
	const leistung = await pb.collection('leistungen').getFirstListItem(`slug="${params.slug}"`, {})
	if (leistung) return leistung
	error(404, 'Not found')
}
