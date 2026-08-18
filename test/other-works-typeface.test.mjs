import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('typeface co-creation card links to a detail page with its title image and arrow', async () => {
  const [card, app] = await Promise.all([
    readFile(new URL('../src/components/OtherWorks.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/App.tsx', import.meta.url), 'utf8'),
  ])

  assert.match(card, /typeface-co-creation-title\.png/)
  assert.match(card, /'\/other-works\/typeface-co-creation'/)
  assert.match(card, /isTypefaceProject\) && <span className="other-works-card__arrow"/)
  assert.match(app, /path="\/other-works\/typeface-co-creation"/)
})

test('other works includes twelve cards', async () => {
  const card = await readFile(new URL('../src/components/OtherWorks.tsx', import.meta.url), 'utf8')

  assert.match(card, /Array\.from\(\{ length: 12 \}\)/)
})

test('typeface detail page renders its eight images in a two-column gallery', async () => {
  const detail = await readFile(new URL('../src/pages/OtherWorkDetailPage.tsx', import.meta.url), 'utf8')

  assert.match(detail, /const typefaceGalleryImages = \[/)
  assert.match(detail, /typefaceGalleryImages\.map/)
  assert.match(detail, /xiduoduo-gallery--two-column/)
})
