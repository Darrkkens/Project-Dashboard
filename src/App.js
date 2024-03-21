import React, { useEffect, useState } from 'react';
import Investments from './componets/leaftside/leaft';
import Middle from './componets/middle/middle';
import Navbar from './componets/navbar/navbar';
import Sidebar from './componets/slidebar/slidebar';
import './main.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const themeBtn = document.querySelector('.theme-btn');

    const toggleTheme = () => {
      setIsDarkTheme(prevTheme => !prevTheme);
    };

    themeBtn.addEventListener('click', toggleTheme);

    return () => {
      themeBtn.removeEventListener('click', toggleTheme);
    };
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Navbar onOpenSidebar={handleOpenSidebar} />
      <main>
        <Sidebar isOpen={isSidebarOpen} onCloseSidebar={handleCloseSidebar} />
        <Middle />
        <Investments />
      </main>
    </div>
  );
}

export default App;
