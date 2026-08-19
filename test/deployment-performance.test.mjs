import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('Cloudflare caches fingerprinted assets for repeat visits', async () => {
  const headers = await readFile(new URL('../public/_headers', import.meta.url), 'utf8')

  assert.match(headers, /\/assets\/\*/)
  assert.match(headers, /max-age=31536000, immutable/)
})

test('opening the contact card freezes and later restores the background page', async () => {
  const source = await readFile(new URL('../src/components/ContactFooter.tsx', import.meta.url), 'utf8')

  assert.match(source, /document\.body\.classList\.add\('is-contact-modal-open'\)/)
  assert.match(source, /video\.pause\(\)/)
  assert.match(source, /document\.body\.classList\.remove\('is-contact-modal-open'\)/)
})
