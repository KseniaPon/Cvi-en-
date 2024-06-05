import { useEffect, useRef } from "react";

interface LyricsProps {
    lines: string;
    currentLineIndex: boolean;
}

export const Lyrics = ({lines, currentLineIndex}: LyricsProps) => {
    const lineRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        lineRef.current?.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          });
    }, [currentLineIndex])

    return (
        <p ref={currentLineIndex ? lineRef : null} className={currentLineIndex ? "current-line" : ""}>{lines}</p>
    )
}