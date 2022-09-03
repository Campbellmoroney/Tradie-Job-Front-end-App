import "./App.css";
import React, { useState } from "react";
import JobList from "./components/JobList";
import jobs from "./data/jobs.json";

const App = () => {
  const [status, setStatus] = useState([]);

  return (
    <>
      <JobList jobs={jobs} status={status} setStatus={setStatus} />
    </>
  );
};

export default App;
