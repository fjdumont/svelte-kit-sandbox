/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	interface Stuff {
		env: {
			public: string;
		};
	}
}

interface ImportMetaEnv {
	readonly VITE_PUBLIC: string;
	readonly VITE_SECRET: string;
}
