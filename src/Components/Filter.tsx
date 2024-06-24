import '../Styles/Filter.css'

const Filter = () => {
  return (
    <div className="filter">
      <form action="">
        <div>
          <label htmlFor="organization">Organization</label>
          <select name="organization" id="" aria-placeholder="Select"></select>
        </div>

        <div>
          <label htmlFor="user">User</label>
          <input type="text" name="user" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="" />
        </div>

        <div>
          <label htmlFor="number">Date</label>
          <input type="number" name="number" id="" />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select name="status" id="" aria-placeholder="Select"></select>
        </div>

        <div className='buttons'>
            <button className='resetBtn'>
                Reset
            </button>

            <button className='filterBtn'>
                Filter
            </button>
        </div>
        
      </form>
    </div>
  );
};

export default Filter;
