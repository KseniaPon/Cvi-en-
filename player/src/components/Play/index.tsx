import { useEffect, useRef, useState } from "react";
import './index.css'

interface AudioProps {
    src: string;
}

export const Play = ({src} : AudioProps) => {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null!)
    const handlePlay = () => {setPlaying(!playing); console.log('I am playing!!!')}

    useEffect(() => {
        playing ? audioRef.current.play() : audioRef.current.pause()
    }, [playing])

    return (
        <>
        <audio ref={audioRef} src={src}/>
        <button className={playing ? 'play-button pause' : 'play-button play'} onClick={handlePlay}></button>
        </>
    )

}