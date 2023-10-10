import React from "react";
import FormComponent from "./components/FormComponent";
import ScheduleList from "./components/ScheduleList";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left">
        <FormComponent />
      </div>
      <div className="vertical-line"></div> {/* Add this line */}
      <div className="right">
        <ScheduleList />
      </div>
    </div>
  );
}

export default App;
