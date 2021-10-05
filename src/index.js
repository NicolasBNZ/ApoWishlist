// Import packages/modules
import React from 'react';
import { render } from 'react-dom';

// Import Router
import { BrowserRouter as Router} from 'react-router-dom';

// Import components
import App from 'src/components/App';

// Component
const rootReactElement = (
    <Router>
      <App />
    </Router>
  );

// Target
const target = document.getElementById('root');

// Render
render(rootReactElement, target);
