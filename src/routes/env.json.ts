import { variables } from '$lib/variables';
import type { RequestHandler } from '@sveltejs/kit';

// This is where the mapping happens.
// Strip off all sensitive info from the variables.

export const get: RequestHandler = async () => {
	return {
		body: {
			public: variables.public
		}
	};
};
