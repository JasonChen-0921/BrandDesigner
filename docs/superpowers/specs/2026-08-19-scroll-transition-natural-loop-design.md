# Scroll Transition Natural Loop Design

## Goal

Replace the scroll-scrubbed profile-to-project transition with a naturally playing looping video.

## Behavior

- Keep the existing transition section and its current layout.
- Use `E:\工作\作品集网页\7月20日.mp4` as the replacement transition asset.
- Start playback automatically when the video can play.
- Keep playback muted, inline, and looping so it works in modern browsers.
- Remove all scroll, wheel, animation-frame, and media-seeking logic.
- Scrolling passes through the section normally and never alters video playback position.

## Scope

- Modify only `src/components/ScrollTransition.tsx` and its focused test.
- Preserve the existing `profile-to-project.mp4` asset and add the replacement as a new project asset.

## Verification

- A focused test verifies the video has `autoPlay` and `loop` and that scroll-seeking code is absent.
- Production build succeeds.
