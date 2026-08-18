import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('header uses AnimatedContent for its three top clusters', async () => {
  const header = await readFile(new URL('../src/components/SiteHeader.tsx', import.meta.url), 'utf8')

  assert.match(header, /import AnimatedContent from '\.\/AnimatedContent'/)
  assert.equal((header.match(/<AnimatedContent/g) ?? []).length, 3)
})
