import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

interface NavigationProps {
  onNavigate: (screen: string) => void;
  currentScreen: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentScreen }) => (
  <AppBar position="static">
    <Toolbar>
      <Button
        color="inherit"
        onClick={() => onNavigate('zenMode')}
        disabled={currentScreen === 'zenMode'}
      >
        Zen Mode
      </Button>
      <Button
        color="inherit"
        onClick={() => onNavigate('maintenance')}
        disabled={currentScreen === 'maintenance'}
      >
        Maintenance
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navigation;
