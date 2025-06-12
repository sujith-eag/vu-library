# Question 1

Develop a React-JS application using a functional component that 
* Renders a list of countries with their capitals using `.map()`.
* Each list item must have a unique key
* List should be styled using an external CSS file.

## `CountryList.jsx`

```jsx
import React from "react";
import "./country.css";

function CountryList() {
  const countries = [
    { name: "India", capital: "New Delhi" },
    { name: "United States", capital: "Washington, D.C." },
    { name: "Canada", capital: "Ottawa" },
    { name: "Germany", capital: "Berlin" },
    { name: "Australia", capital: "Canberra" },
    { name: "Japan", capital: "Tokyo" },
  ];

// Using Direct Destructuring in map({})
  return (
    <div className="country-list-container">
      <h2>Countries and Their Capitals</h2>
      <ul className="country-list">
        {countries.map( ({ name, capital }) => (
          <li key={name} className="country-item">
            <strong>{name}</strong>: {capital}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
```

Using Usual Object Dot notation and index as key
```jsx
<ul className="country-list">
{countries.map((country, index) => (
  <li 
	  key={index} 
	  className="country-item"
>
	<strong>{country.name}</strong>
	: {country.capital}
  </li>
  ))}
</ul>
```


## `Country.css`

```css
/* Container styling */

.country-list-container {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }

  /* List styling */
  .country-list {
    list-style-type: none;
    padding: 0;
  }

  /* Individual list item styling */
  .country-item {
    font-size: 18px;
    color: #333;
    margin: 8px 0;
  }
```


