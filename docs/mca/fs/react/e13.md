
# Question 3

Design and develop a functional component in React-JS that 
* Displays a 5 Vehicle Info Card in a row with details like Model, Manufacturer, Year, and Fuel Type. 
* Use inline CSS to style the card layout and appearance.

## `VehicleCard.jsx`

```jsx
import React from "react";

function VehicleCard({ model, manufacturer, year, fuelType }) {
  const cardStyle = {
    width: "200px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    margin: "10px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  };

  const infoStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>Vehicle Information</h2>
      <p style={infoStyle}><strong>Model:</strong> {model}</p>
      <p style={infoStyle}><strong>Manufacturer:</strong> {manufacturer}</p>
      <p style={infoStyle}><strong>Year:</strong> {year}</p>
      <p style={infoStyle}><strong>Fuel Type:</strong> {fuelType}</p>
    </div>
  );
}

export default VehicleCard;
```

## `App.jsx`

```jsx
import React from "react";
import VehicleCard from "./VehicleCard";

function App() {
  // Sample vehicle data
  const vehicles = [
    { model: "Tesla Model S", manufacturer: "Tesla", year: 2022, fuelType: "Electric" },
    { model: "Ford Mustang", manufacturer: "Ford", year: 2021, fuelType: "Gasoline" },
    { model: "Chevrolet Bolt", manufacturer: "Chevrolet", year: 2022, fuelType: "Electric" },
    { model: "BMW 3 Series", manufacturer: "BMW", year: 2021, fuelType: "Diesel" },
    { model: "Audi A6", manufacturer: "Audi", year: 2023, fuelType: "Hybrid" },
  ];

  // Container style to align the cards in a row
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.model}
          model={vehicle.model}
          manufacturer={vehicle.manufacturer}
          year={vehicle.year}
          fuelType={vehicle.fuelType}
        />
      ))}
    </div>
  );
}

export default App;
```