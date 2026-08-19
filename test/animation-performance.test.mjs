import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('high-frequency animations avoid unnecessary work outside active interaction', async () => {
  const [hero, otherWorks, borderGlow] = await Promise.all([
    readFile(new URL('../src/components/Hero.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/components/OtherWorks.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/components/BorderGlow.tsx', import.meta.url), 'utf8'),
  ])

  assert.match(hero, /useRef<HTMLSpanElement>/)
  assert.match(hero, /requestAnimationFrame\(updateCursorPosition\)/)
  assert.match(otherWorks, /track\.addEventListener\('wheel', handleWheel/)
  assert.match(otherWorks, /window\.requestAnimationFrame\(update\)/)
  assert.match(borderGlow, /new IntersectionObserver/)
  assert.match(borderGlow, /cancelAnimations\.forEach/)
})
