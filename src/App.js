import React from "react";
import FormComponent from "./components/FormComponent";
import List from "./components/List";
import ScheduleList from "./components/ScheduleList";
import './App.css';

function App() {
  return (
    <div className="container">
      <FormComponent />
      <ScheduleList />
    </div>
  );
}

export default App;
