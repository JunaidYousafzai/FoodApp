import { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

export const MealContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch data from the API
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        if (!response.ok) { // Check if response is successful
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(responseData => {
        setData(responseData.categories); // Set data state
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error); // Set error state
      });
  }, []);

  return (
    <MealContext.Provider value={{ data, setData, error }}>
      {children}
    </MealContext.Provider>
  );
};
