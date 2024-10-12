import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ZenModeDashboard from './components/ZenModeDashboard';
import MaintenanceScreen from './components/MaintenanceScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('zenMode');

  return (
    <Container>
      <Header />
      <Navigation
        onNavigate={(screen) => setCurrentScreen(screen)}
        currentScreen={currentScreen}
      />
      {currentScreen === 'zenMode' ? <ZenModeDashboard /> : <MaintenanceScreen />}
    </Container>
  );
};

export default App;
