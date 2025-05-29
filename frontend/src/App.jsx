import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Menu from './components/menu.jsx';
import DesignerList from './components/designerList.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [showShortlistedOnly, setShowShortlistedOnly] = useState(false);

  const toggleShortlistFilter = () => {
    setShowShortlistedOnly(prev => !prev);
  };

  return (
    <>
      <Header />
      <Menu
        showShortlistedOnly={showShortlistedOnly}
        toggleShortlistFilter={toggleShortlistFilter}
      />
      <DesignerList showShortlistedOnly={showShortlistedOnly} />
      <Footer />
    </>
  );
}

export default App;
