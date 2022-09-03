import "./JobPage.css";
import { Link } from "react-router-dom";

const JobPage = () => {
  return (
    <div className="job_page-container">
      <Link to={"/"}>
        <button className="back-button">Home</button>
      </Link>
      <h1>Placeholder Job</h1>
      <span className="status">Completed</span>
      <p>Bob Smith</p>
      <p>bobsmith@example.com</p>
      <div>
        <form>
          <label className="notes-label" htmlFor="Notes">
            Notes
          </label>
          <textarea
            className="notes-format"
            type="textarea"
            id="notes"
          ></textarea>
        </form>
        <button className="notes-submit">Save Notes</button>
      </div>
      <div>
        <form>
          <label htmlFor="status">Change Status</label>
          <select className="filter-format" id="status" name="status">
            <option value="Scheduled">Scheduled</option>
            <option value="Active">Active</option>
            <option value="Invoicing">Invoicing</option>
            <option value="To price">To price</option>
            <option value="Completed">Completed</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default JobPage;
