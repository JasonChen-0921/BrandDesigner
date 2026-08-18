import Hls from 'hls.js'
import { useEffect, useRef } from 'react'

type HlsVideoProps = {
  src: string
}

export default function HlsVideo({ src }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return () => {
        video.removeAttribute('src')
        video.load()
      }
    }

    if (!Hls.isSupported()) return

    const hls = new Hls()
    hls.loadSource(src)
    hls.attachMedia(video)
    return () => hls.destroy()
  }, [src])

  return <video ref={videoRef} controls playsInline preload="metadata">您的浏览器不支持视频播放。</video>
}
