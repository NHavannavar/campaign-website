// After `vite build`, render the page to HTML and write it into dist/index.html.
import { readFile, writeFile, rm } from 'node:fs/promises'

const { render } = await import('../dist-ssr/entry-server.js')
const file = 'dist/index.html'
const html = await readFile(file, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in ${file}`)
await writeFile(file, html.replace(marker, `<div id="root">${render()}</div>`))
await rm('dist-ssr', { recursive: true, force: true })
console.log('prerender: wrote full page HTML to', file)
