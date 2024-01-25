import { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const handleBG = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const bodysize = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    margin: "0",
    height: "100vh",
    boxSizing: "border-box",
  };

  return (
    <div style={bodysize}>
      <h1>Dark and white theme</h1>
      <button onClick={handleBG}>Dark/White Mode</button>
    </div>
  );
};

export default Theme;
