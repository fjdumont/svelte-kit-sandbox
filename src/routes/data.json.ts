import { variables } from '$lib/variables';
import type { RequestHandler } from '@sveltejs/kit';

// This endpoint uses a secret variable.

export const get: RequestHandler = async () => {
	return {
		body: {
			length: variables.secret.length
		}
	};
};
