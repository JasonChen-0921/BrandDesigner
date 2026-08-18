import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const expectedHashes = {
  'dekang-video-01.mp4': 'B260FF5140A7BEC4391BAE90978E1CC0086C84E3AD6DEEF1CE9F2341D7F0568B',
  'dekang-video-02.mp4': '6AA8BA12E99F3DF1661EF18087772A513EE118567B073BC38E148EF52CB57C05',
  'dekang-video-03.mp4': '1640B6B39D05F20585CB0977E0FEB6A554563C9AF7CC94F5D305CEC20D2FBBDD',
  'dekang-video-04.mp4': '0D0B1F2D7923269AB2DEBA6036C43BAFC0F004BE005021F9AB97D792FC3640C9',
  'dekang-video-05.mp4': '3E62D4BC14889674F308DB64F3DFA0625369CB0BBF2AB67359584EB7A63B2546',
  'dekang-video-06.mp4': '655753B4843B739EB15D14FAD38FF843D8A06BF753896D1116F994D936B75346',
  'dekang-video-07.mp4': '4C6FF1CE6A1C54CF5A88ACD432D97869ED8218C566F54AF1A64D00CAE234E4D3',
  'dekang-video-08.mp4': 'D4A85A7C0F302E71699894040F0063C6BE8366B1F1B567003B950783202FD134',
}

test('德康当家的八个视频已替换为最新文件', async () => {
  for (const [fileName, expectedHash] of Object.entries(expectedHashes)) {
    const file = await readFile(new URL(`../src/assets/${fileName}`, import.meta.url))
    const actualHash = createHash('sha256').update(file).digest('hex').toUpperCase()
    assert.equal(actualHash, expectedHash, `${fileName} 未替换为新视频`)
  }
})
