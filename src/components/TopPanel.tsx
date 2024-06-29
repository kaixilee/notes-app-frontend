// src/components/TopPanel.tsx
import React from "react";
import BannerImg from "../images/banner.jpg"

const TopPanel: React.FC = () => {
  return (
    <div className="top-panel">
      <img
        src={BannerImg}
        alt="Panorama"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default TopPanel;
