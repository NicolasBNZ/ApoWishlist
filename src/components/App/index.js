// Import packages/modules
import React from 'react';

// Import components
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

// Import style-sheet
import './styles.scss';

// Component
const App = () => (

  <div className="app">
    <div className="app-border">
      <Page />
      <Footer />
    </div>
  </div>
);

// Export component
export default App;
