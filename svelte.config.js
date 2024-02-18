import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		typescript: {
			config: (config) => {
				config.include.push('../styled-system')
				return config
			}
		},
		// base: './',
		alias: {
			'styled-system': './styled-system/*',
			'$page/*': 'src/components/page/*',
			'$model/*': 'src/components/model/*',
			'$ui/*': 'src/components/ui/*',
			'$models/*': 'src/models/*',
			'$repositories/*': 'src/repositories/*',
			'$globalStates/*': 'src/globalStates/*'
		},
		files: {
			// clientとserverのみ
			hooks: {
				client: 'src/hooks/hooks.client.ts',
				server: 'src/hooks/hooks.server.ts'
			}
		}
	}
}

export default config
