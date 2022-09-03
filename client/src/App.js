import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import JobList from "./components/JobList";
import JobPage from "./components/JobPage";
import jobs from "./data/jobs.json";

const App = () => {
  const [status, setStatus] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <JobList jobs={jobs} status={status} setStatus={setStatus} />
          }
        />
        <Route path="/jobpage" element={<JobPage />} />
      </Routes>
    </>
  );
};

export default App;
