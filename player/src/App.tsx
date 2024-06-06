import './App.css'
import { Play } from './components/Play'
import sound from "./assets/lemon-tree.mp3";
import { Lyrics } from './components/Lyrics';
import lyricsLines from './lyrics-lines';
import { useState } from 'react';

function App() {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(-1)
  const handleTimeUpdate = (time: number) => {  
    if (currentLineIndex - (lyricsLines.findIndex(lyric => (time < lyric.time)) - 1) !== 0) {
      setCurrentLineIndex(lyricsLines.findIndex(lyric => (time < lyric.time)) - 1)
      console.log(time)
      console.log(currentLineIndex)
    }
    
  }
  
  return (
    <div className='container'>
      <h1>Fools Garden: Lemon Tree</h1>
      <Play src={sound} onTimeUpdate={handleTimeUpdate}/>
      <div className="lyrics">
        {lyricsLines.map((lyric, i) => <Lyrics key={i} lines={lyric.text} currentLineIndex={i === currentLineIndex}/>)}  
            
      </div>
    </div>
  )
}

export default App
