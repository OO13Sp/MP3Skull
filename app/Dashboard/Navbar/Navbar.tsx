// Navbar.tsx
import React from 'react';
import Upperbox from './Upperbox/Upperbox';
import LowerBox from './Lowerbox/LowerBox';

export default function Navbar() {
  return (
    <div className="flex flex-col h-full">
      <Upperbox />
      <LowerBox />
    </div>
  );
}
