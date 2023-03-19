import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vitePluginImp from 'vite-plugin-imp'

const pathUrl = 'https://xxx.com'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  server: {
    strictPort: false,
    port: 3020,
    host: true,
    proxy: {
      '/api': {
        target: pathUrl,
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      overlay: true,
    },
  },
  plugins: [
    react(),
    Icons({ autoInstall: true }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
        /\.json$/, // .json
      ],
      // global imports to register
      imports: ['react'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({ prefix: 'Icon' }),
      ],
      dts: './auto-imports.d.ts',
    }),
  ],
})
