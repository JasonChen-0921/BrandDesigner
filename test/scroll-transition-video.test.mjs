import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('the profile-to-project transition loops the 120fps video independently of scrolling', async () => {
  const transition = await readFile(new URL('../src/components/ScrollTransition.tsx', import.meta.url), 'utf8')

  assert.match(transition, /profile-to-project-120fps\.mp4/)
  assert.match(transition, /muted\s+playsInline\s+preload="auto"\s+autoPlay\s+loop/)
  assert.doesNotMatch(transition, /currentTime|addEventListener|requestAnimationFrame|handleWheel/)
})
