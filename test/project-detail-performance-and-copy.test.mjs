import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('project detail pages label the year correctly and lazy-load gallery images', async () => {
  const [projectPage, otherWorkPage] = await Promise.all([
    readFile(new URL('../src/pages/ProjectPage.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/pages/OtherWorkDetailPage.tsx', import.meta.url), 'utf8'),
  ])

  for (const page of [projectPage, otherWorkPage]) {
    assert.doesNotMatch(page, /TEAR:/)
    assert.match(page, /YEAR:/)
  }

  assert.match(projectPage, /<img src=\{image\} loading="lazy" decoding="async"/)
  assert.match(otherWorkPage, /<img src=\{image\} loading="lazy" decoding="async"/)
  assert.match(projectPage, /<HlsVideo src="\/media\/jubao-hls-v2\/index\.m3u8" \/>/)
  assert.match(projectPage, /<HlsVideo src="\/media\/xiduoduo-hls\/index\.m3u8" \/>/)
})
