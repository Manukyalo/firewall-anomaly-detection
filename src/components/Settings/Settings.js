import React, { useState } from 'react';

function Settings() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme', darkTheme);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <button onClick={toggleTheme}>
        {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}

export default Settings;
