import { browser } from '$app/env';

// This module may only be imported by endpoints or hooks.
// Importing it from browser code, even through encapsulated functions,
// may expose sensitive info from environment variables.

if (browser) throw new Error('Accessing variables from client code');

export type Variables = {
	public: string;
	secret: string;
};

export const variables: Variables = {
	public: import.meta.env.VITE_PUBLIC,
	secret: import.meta.env.VITE_SECRET
};
