import React from 'react';

type BodyMiddle2ndProps = {
  onPlaylistSelect: (playlistJson: string) => void;
};

const BodyMiddle2nd: React.FC<BodyMiddle2ndProps> = ({ onPlaylistSelect }) => {
  const playlists = [
    { id: 'All Anuv', title: 'Hit it', imageUrl: '/Marshmellow.webp ', jsonFile: '/hitit.json' },
    { id: 'jazz-mix', title: 'Anuv Jain Mix', imageUrl: '/Anuv.jfif', jsonFile: '/anuv.json' },
    { id: 'classical-mix', title: 'All About You', imageUrl: '/You.jfif', jsonFile: '/you.json' },
    { id: 'hiphop-mix', title: 'Party Anthem', imageUrl: '/Party anthem.jpg', jsonFile: '/party.json' },
    { id: 'edm-mix', title: '2010 Hits', imageUrl: '/2010.jpg', jsonFile: '/2010.json' },
  ];

  return (
    <div className="body-part body-middle-2nd p-4">
      <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>
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
                onClick={() => onPlaylistSelect(playlist.jsonFile)} // Call the function to set the selected playlist JSON file
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

export default BodyMiddle2nd;
