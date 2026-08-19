import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('the final Xiduoduo video uses a browser-compatible H.264 asset', async () => {
  const projectPage = await readFile(new URL('../src/pages/ProjectPage.tsx', import.meta.url), 'utf8')

  assert.match(projectPage, /import xiduoduoExtraVideo from '\.\.\/assets\/xiduoduo-extra-video-web\.mp4'/)
})
