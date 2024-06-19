// src/components/TopPanel.tsx
import React from "react";

const TopPanel: React.FC = () => {
  return (
    <div className="top-panel">
      <img
        src="/path/to/panorama.jpg"
        alt="Panorama"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default TopPanel;
