import React from 'react';
import dotenv from 'dotenv';
import MainTabBar from './navigation/main_tab_bar';

dotenv.config({ silent: true });

// disable really annoying in app warnings
console.disableYellowBox = true;

const App = (props) => {
  return <MainTabBar />;
};

export default App;
