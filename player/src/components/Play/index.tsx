import { useEffect, useRef, useState } from 'react'
import './index.css'

interface AudioProps {
  src: string
  onTimeUpdate: (e: number) => void
}

export const Play = ({ src, onTimeUpdate }: AudioProps) => {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null!)
  const handlePlay = () => setPlaying(!playing)

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLAudioElement>) => {
    onTimeUpdate(e.target.currentTime)
  }

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  return (
    <>
      <audio onTimeUpdate={handleTimeUpdate} ref={audioRef} src={src} />
      <button
        className={playing ? 'play-button pause' : 'play-button play'}
        onClick={handlePlay}
      ></button>
    </>
  )
}
