import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from '@/router/router';
import { RenderRoutes } from '@/router/RenderRoutes';
import '@/App.less';

const App: React.FC = () => {
  return (
    <Router>
      {RenderRoutes(routes)}
    </Router>
  );
};

export default App;
