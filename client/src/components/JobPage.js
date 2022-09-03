import "./JobPage.css";

const JobPage = () => {
  return (
    <>
      <h1>Placeholder Job</h1>
      <span className="status">Completed</span>
      <p>Bob Smith</p>
      <p>bobsmith@example.com</p>
      <div className="form-container">
        <form className="form-format">
          <label htmlFor="Notes">Notes</label>
          <input className="notes-format" type="textarea" id="notes"></input>
        </form>
      </div>
      <div className="form-container">
        <form className="form-format">
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
    </>
  );
};

export default JobPage;
