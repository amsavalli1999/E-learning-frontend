// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { UserContextProvider } from "../context/UserContext"


// export const server = 'http://localhost:5000';
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <UserContextProvider>
//      <App />
//     </UserContextProvider>
    
//   </StrictMode>,
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext"; // fixed path
import { CourseContextProvider } from "./context/CourseContext.jsx";

export const server = "http://localhost:5000";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
      <App />
      </CourseContextProvider>
      
    </UserContextProvider>
  </StrictMode>
);
