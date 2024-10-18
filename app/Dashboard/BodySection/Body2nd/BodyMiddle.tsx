import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type BodyMiddleProps = {
  onPlaylistSelect: (playlistJson: string) => void;
};

const BodyMiddle: React.FC<BodyMiddleProps> = ({ onPlaylistSelect }) => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  const playlists = [
    { id: 'rap-mix', title: 'Rap Mix', imageUrl: '/travis.jfif', jsonFile: '/rap.json' },
    { id: 'hindi-mix', title: 'Hindi Mix', imageUrl: '/Pritam.jpg', jsonFile: '/Hindi.json' },
    { id: 'chill-mix', title: 'Chill Mix', imageUrl: '/SEB.jpg', jsonFile: '/chillmix.json' },
    { id: 'pop-mix', title: 'Pop Mix', imageUrl: '/tweezo.jfif', jsonFile: '/popmix.json' },
    { id: 'newly-released', title: 'Newly Released', imageUrl: '/harry.jpg', jsonFile: '/newlyreleased.json' },
  ];

  const navigate = useNavigate();

  const handlePlayClick = (playlistId: string, playlistJson: string) => {
    onPlaylistSelect(playlistJson); // Call the function to set the selected playlist JSON file
    if (username) {
      navigate(`/${username}/${playlistId}`); // Navigate to the playlist route with the username
    }
  };

  return (
    <div className="body-part body-middle">
      <h2 className="text-2xl font-bold mb-4">Welcome To MP3Skull</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white w-64 min-w-[16rem]"
          >
            <img src={playlist.imageUrl} alt={playlist.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">{playlist.title}</h3>
              <button
                onClick={() => handlePlayClick(playlist.id, playlist.jsonFile)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400"
              >
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyMiddle;
