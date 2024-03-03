import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit(),
		mode === 'analyze' &&
			visualizer({
				open: true,
				emitFile: true,
				filename: 'stats.html',
				gzipSize: true,
				brotliSize: true
			})
	],
	server: {
		fs: {
			/**
			 * 参考 https://ja.vitejs.dev/config/server-options.html#server-fs-allow
			 * プロジェクトのルート外からの特定のファイルやディクレトリを許可するための設定？
			 * このオプションを使用して特定の場所からのインポートを許可することが可能。
			 */
			allow: ['styled-system']
		}
	}
}))
