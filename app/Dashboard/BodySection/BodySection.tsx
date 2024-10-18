// BodySection.tsx
import React, { useState } from 'react';
import BodyTop from './Body1dt/BodyTop';
import BodyMiddle from './Body2nd/BodyMiddle';
import LastSection from './Body4th/LastSection';
import BodyMiddle2nd from './Body3rd/BodyMiddle2nd';

type BodySectionProps = {
  username: string;
};

const BodySection: React.FC<BodySectionProps> = ({ username }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);

  const handlePlaylistSelect = (playlistJson: string) => {
    setSelectedPlaylist(playlistJson);
  };

  return (
    <div className="pb-20"> {/* Add bottom padding to accommodate LastSection */}
    
      <BodyMiddle username={username} onPlaylistSelect={handlePlaylistSelect} />
      {/* Include LastSection at the bottom, it will be fixed */}
      <BodyMiddle2nd  username={username} onPlaylistSelect={handlePlaylistSelect}/>
      <LastSection selectedPlaylist={selectedPlaylist} onPlaylistSelect={handlePlaylistSelect} />
    </div>
  );
};

export default BodySection;
