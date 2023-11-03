import React, {useState, useEffect} from 'react';
import Player from "./Player";
//import {CurrentStreamTime} from "./CurrentStreamTime";

function App() {
  const [songs] = useState([
    {
      title: "Next Level",
      artist: "Aespa",
      img_src: "./Images/Screen Shot 2021-05-17 at 5.08.27 PM.webp",
      src: "./Music/Next Level.mp3"
    },
    {
      title: "Bleach Number One",
      artist: " Shirō Sagisu",
      img_src: "./Images/mqdefault.jpg",
      src: "./Music/bleachNumberOne.mp3"
    },
    {
      title: "Believer",
      artist: "Imagine Dragons",
      img_src: "./Images/Imagine-Dragons-Believer-art.jpg",
      src: "./Music/Imagine Dragons - Believer (feat. Lil Wayne).mp3"
    },
    {
      title: "Bleach Memories of nobody",
      artist: "Shiro Sagisu",
      img_src: "./Images/Bleach_memories_cover.jpg",
      src: "./Music/bleach-soundtrack_memories-of-nobody-ed-mp3.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  //const[currentTime2, setCurrentTime2] = useState('00:00');

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
      
    </div>
  );
}

export default App;
