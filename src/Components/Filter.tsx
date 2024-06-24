import "../Styles/Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <form action="">
        <div>
          <label htmlFor="organization">Organization</label>
          <select name="organization" id="" aria-placeholder="Select">
            <option value="0">Select</option>
          </select>
        </div>

        <div>
          <label htmlFor="user">Username</label>
          <input type="text" name="user" placeholder="User" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder="Email" />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="" placeholder="Date" />
        </div>

        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" name="number" id="" placeholder="Phone Number" />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select name="status" id="" aria-placeholder="Select">
            <option value="0">Select</option>
          </select>
        </div>

        <div className="buttons">
          <button className="resetBtn">Reset</button>

          <button className="filterBtn">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
