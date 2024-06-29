// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="profile-picture"></div>
      <Stack direction="column" spacing={2}>
          <Link to="/notes">
            <Button >Moments</Button>
          </Link>
          <Link to="/calendar">
            <Button>Calendar</Button>
          </Link>
          <Link to="/photos">
            <Button>Photos</Button>
          </Link>
      </Stack>
    </div>
  );
};

export default Sidebar;
