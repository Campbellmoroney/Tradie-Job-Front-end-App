import "./FilterForm.css";
import jobs from "../data/jobs.json";

const FilterForm = ({ status, setStatus = [] }) => {
  return (
    <div className="form-container">
    <form className="form-format">
      <label htmlFor="status">Filter by Status:</label>
      <select
        className="filter-format"
        id="status"
        name="status"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value === "All" ? undefined : e.target.value);
        }}
      >
        <option value={undefined}>All</option>
        {jobs.map((j) => (
          <option key={j.id} value={j.status}>
            {j.status}
          </option>
        ))}
      </select>
    </form>
    </div>
  );
};

export default FilterForm;
