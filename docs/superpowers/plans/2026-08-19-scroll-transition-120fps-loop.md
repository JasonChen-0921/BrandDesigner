# 120fps Natural Loop Transition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Use the supplied 120fps transition video as an automatic, natural loop between the profile and project sections.

**Architecture:** Add the supplied H.264 video as a new project asset so the prior source remains recoverable. Simplify `ScrollTransition` to a declarative HTML video with autoplay, loop, mute, and inline playback; no effect will read or alter scroll position.

**Tech Stack:** React 18, TypeScript, Vite, Node test runner, FFmpeg asset inspection.

## Global Constraints

- Source video: `E:\工作\作品集网页\7月20日.mp4` (1920x1080, H.264, 120fps, 7.035 seconds).
- Keep the current section layout and preserve the existing transition asset.
- The replacement must auto-play muted, loop, and play inline.
- Do not attach wheel, scroll, animation-frame, or media-seeking handlers.

---

### Task 1: Replace scroll scrubbing with a 120fps natural loop

**Files:**
- Create: `src/assets/profile-to-project-120fps.mp4`
- Modify: `src/components/ScrollTransition.tsx:1-57`
- Modify: `test/scroll-transition-video.test.mjs:5-18`

**Interfaces:**
- Consumes: `src/assets/profile-to-project-120fps.mp4` as the `src` value for the transition video.
- Produces: `ScrollTransition`, a section whose video loops independently of page scrolling.

- [ ] **Step 1: Write the failing test**

```js
assert.match(transition, /profile-to-project-120fps\.mp4/)
assert.match(transition, /muted\s+playsInline\s+preload="auto"\s+autoPlay\s+loop/)
assert.doesNotMatch(transition, /currentTime|addEventListener|requestAnimationFrame|handleWheel/)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test\\scroll-transition-video.test.mjs`

Expected: FAIL because the current transition imports `profile-to-project.mp4` and uses scroll seeking.

- [ ] **Step 3: Add the supplied asset and simplify the component**

```tsx
import profileToProjectVideo from '../assets/profile-to-project-120fps.mp4'

export function ScrollTransition() {
  return (
    <section className="scroll-transition" aria-label="作品集过渡视频">
      <div className="scroll-transition-sticky">
        <video muted playsInline preload="auto" autoPlay loop>
          <source src={profileToProjectVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run focused verification**

Run: `node --test test\\scroll-transition-video.test.mjs`

Expected: PASS.

Run: `pnpm run build`

Expected: Build completes successfully and emits the new video asset.

- [ ] **Step 5: Inspect the emitted video**

Run: `Get-ChildItem dist\\assets\\*profile-to-project-120fps* | Select-Object Name,Length`

Expected: One emitted H.264 MP4 asset under the 25MiB deployment limit.

- [ ] **Step 6: Commit and push**

```powershell
git add src/assets/profile-to-project-120fps.mp4 src/components/ScrollTransition.tsx test/scroll-transition-video.test.mjs
git commit -m "Use 120fps video for natural project transition"
git push origin main
```
