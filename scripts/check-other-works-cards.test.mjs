import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('其他作品仅德康当家保留品牌设计与箭头', async () => {
  const component = await readFile(new URL('../src/components/OtherWorks.tsx', import.meta.url), 'utf8')

  assert.match(component, /const isDekang = index === 0/)
  assert.match(component, /\{isDekang \? '品牌设计' : '字体设计'\}/)
  assert.match(component, /\{isDekang \? '\(2025\)' : '\(2024\)'\}/)
  assert.match(component, /\{isDekang && <span className="other-works-card__arrow"/)
})
