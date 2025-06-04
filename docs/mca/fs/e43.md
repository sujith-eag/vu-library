# Question 3

Design and develop a functional component named `ThemeSelector`. 
* Provide two radio buttons: Light Mode and Dark Mode. 
* Use `useState` to track the selected theme. 
* Conditionally render a preview box styled with the appropriate theme (dark or light). 
* Use external CSS classes to apply theme-based background and text styling.

## `ThemeSelector.jsx`

```jsx
import React, { useState } from 'react';
import './ThemeSelector.css';

function ThemeSelector() {
	const [theme, setTheme] = useState('light');

	function handleThemeChange(event) {
      setTheme(event.target.value);
  }

  return (
    <div className="theme-selector">
      <h2>Select a Theme</h2>

      <div className="radio-options">
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
          />
          Light Mode
        </label>

        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
          Dark Mode
        </label>
      </div>

      <div className={`preview-box ${theme}-theme`}>
        This is a preview of {theme === 'light' ? 'Light' : 'Dark'} Mode.
      </div>
    </div>
  );
}

export default ThemeSelector;
```


## `ThemeSelector.css`

```css
.theme-selector {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fafafa;
  text-align: center;
}

.theme-selector h2 {
  margin-bottom: 20px;
  color: #333;
}

.radio-options {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.radio-options label {
  font-size: 16px;
  cursor: pointer;
}

.preview-box {
  padding: 30px;
  border-radius: 8px;
  font-size: 18px;
  transition: all 0.3s ease;
  border: 1px solid #ddd;
}

/* Light Theme Styles */
.light-theme {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #ccc;
}

/* Dark Theme Styles */
.dark-theme {
  background-color: #333333;
  color: #f9f9f9;
  border: 1px solid #555;
}
```

