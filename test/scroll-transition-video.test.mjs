import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('the profile-to-project transition scrubs the supplied video with scroll position', async () => {
  const transition = await readFile(new URL('../src/components/ScrollTransition.tsx', import.meta.url), 'utf8')

  assert.match(transition, /profile-to-project\.mp4/)
  assert.match(transition, /useEffect/)
  assert.doesNotMatch(transition, /autoPlay/)
  assert.doesNotMatch(transition, /loop/)
  assert.match(transition, /targetTime\s*=\s*progress\s*\*\s*video\.duration/)
  assert.match(transition, /requestAnimationFrame/)
  assert.match(transition, /seeked/)
  assert.match(transition, /1\s*\/\s*60/)
  assert.match(transition, /section\.addEventListener\('wheel',\s*handleWheel,\s*\{ passive: false \}\)/)
  assert.match(transition, /event\.preventDefault\(\)/)
  assert.match(transition, /event\.deltaY\s*\*\s*0\.35/)
})
