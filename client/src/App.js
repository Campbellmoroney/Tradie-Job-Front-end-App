import "./App.css";
import React, { useState } from "react";
import JobList from "./components/JobList";
import jobs from "./data/jobs.json";

const App = () => {
  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
};

export default App;
