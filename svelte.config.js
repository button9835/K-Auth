import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // 앱 디렉토리 이름을 디폴트 "_app"이 아닌 다른 이름으로 변경
    appDir: 'app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: process.env.NODE_ENV === 'development' ? '' : '/K-Auth'
    }
  }
};

export default config;