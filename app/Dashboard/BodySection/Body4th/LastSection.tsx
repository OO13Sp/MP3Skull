import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaRedo, FaForward, FaStepForward } from 'react-icons/fa';

type Song = {
  id: number;
  title: string;
  artist: string;
  albumArt: string;
  file: string;
  playlist: string;
};

type LastSectionProps = {
  selectedPlaylist: string | null;
  onPlaylistSelect: (playlistJson: string) => void;
};

const LastSection: React.FC<LastSectionProps> = ({ selectedPlaylist, onPlaylistSelect }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch songs from selected playlist
  useEffect(() => {
    if (selectedPlaylist) {
      fetch(selectedPlaylist)
        .then(response => response.json())
        .then(data => {
          setSongs(data.songs || []);
          setCurrentSongIndex(0);
          setProgress(0);
          setDuration(0);
          setIsPlaying(true); // Auto-play when a new playlist is selected
        });
    }
  }, [selectedPlaylist]);

  // Play selected song and handle auto-play when the song ends
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = songs[currentSongIndex]?.file || '';
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      // Play the next song when the current song ends
      audio.addEventListener('ended', playNextSong);

      return () => {
        audio.removeEventListener('ended', playNextSong);
      };
    }
  }, [songs, currentSongIndex, isPlaying]);

  // Update progress and duration
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', () => setProgress(audio.currentTime));
      audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));

      return () => {
        audio.removeEventListener('timeupdate', () => setProgress(audio.currentTime));
        audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
      };
    }
  }, [audioRef]);

  // Handle play/pause
  const togglePlayPause = () => setIsPlaying(prev => !prev);

  // Move to the next song automatically
  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setProgress(0);
  };

  // Forward song by 10 seconds
  const forwardSong = (seconds: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(audio.currentTime + seconds, duration); // Ensures you can't forward past the song's duration
      setProgress(audio.currentTime);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 flex items-center space-x-4 shadow-lg fixed bottom-0 left-0 right-0 w-full">
      <div className="w-16 h-16">
        {songs.length > 0 && (
          <img
            src={songs[currentSongIndex]?.albumArt}
            alt="Album Art"
            className={`w-full h-full object-cover rounded-full transition-transform duration-500 ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
            style={{
              animation: isPlaying
                ? 'spin 10s linear infinite' // Inline animation
                : 'none',
            }}
          />
        )}
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <span className="block text-lg font-semibold">
            {songs.length > 0 ? songs[currentSongIndex]?.title : 'No Song Playing'}
          </span>
          <span className="block text-sm text-gray-400">
            {songs.length > 0 ? songs[currentSongIndex]?.artist : ''}
          </span>
        </div>
        <div className="h-2 bg-gray-600 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-[#082a74]" style={{ width: `${(progress / duration) * 100}%` }}></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">{Math.floor(progress / 60)}:{('0' + Math.floor(progress % 60)).slice(-2)}</span>
          <div className="flex items-center space-x-2">
            <button onClick={togglePlayPause} className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={playNextSong} className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaForward />
            </button>
            <button onClick={() => forwardSong(10)} className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaStepForward /> {/* Forward 10 seconds */}
            </button>
            <button onClick={() => {/* repeat logic */}} className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaRedo />
            </button>
          </div>
          <span className="text-sm text-gray-400">{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</span>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default LastSection;
