// DashboardRouter.tsx
import { Outlet } from '@remix-run/react';
import React, { useState } from 'react';
import BodySection from '~/Dashboard/BodySection/BodySection';

export const meta = () => {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'Dashboard Page' },
  ];
};

function DashboardRouter() {
  const [selectedPlaylistJson, setSelectedPlaylistJson] = useState<string | null>(null);

  const handlePlaylistSelect = (playlistJson: string) => {
    setSelectedPlaylistJson(playlistJson);
    console.log('Selected playlist:', playlistJson);
  };

  return (
    <div>
      <BodySection
        onSelectPlaylist={handlePlaylistSelect}
        selectedPlaylistJson={selectedPlaylistJson}
        
      />
      <Outlet/>
    </div>
  );
}

export default DashboardRouter;
