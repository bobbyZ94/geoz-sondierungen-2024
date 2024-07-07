import { error } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import PocketBase from 'pocketbase'
import type { PageLoad } from './$types'

const pb = new PocketBase(env.PUBLIC_BACKEND_URL)

export const load: PageLoad = async ({ params }) => {
	const leistungen = await pb.collection('leistungen').getFullList({
		sort: '+rank'
	})
	const was_machen_wir = await pb.collection('was_machen_wir').getFullList({
		sort: '-created'
	})
	const wo_sind_wir_im_einsatz = await pb.collection('wo_sind_wir_im_einsatz').getFullList({
		sort: '-created'
	})
	const kontakt = await pb.collection('kontakt').getFullList({
		sort: '-created'
	})
	return { leistungen, was_machen_wir, wo_sind_wir_im_einsatz, kontakt }
}
