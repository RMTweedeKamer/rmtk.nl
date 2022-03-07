import { defineConfig } from 'vite'
import { resolve } from 'path'
import RubyPlugin, { projectRoot } from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
  resolve: {
    alias: [
      { find: 'components', replacement: resolve(__dirname, 'app/javascript/components') }
    ]
  }
})
