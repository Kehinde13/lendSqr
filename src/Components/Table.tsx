import { SetStateAction, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { userDataType } from "../Pages/Dashboard";
import options from "../assets/ic-more-vert-18px.png";
import next from "../assets/Vector (6).png";
import previous from "../assets/Vector (5).png";
import filter from "../assets/filter-results-button (1).png";
import "../Styles/Table.css";
import Options from "./Options";
import Filter from "./Filter";
import Loader from "./Loader";


const Table = () => {
  const [userData]: [userDataType[]] = useOutletContext();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState<(userDataType | undefined)[]>();
  const [dropdownVisible, setDropdownVisible] = useState<string | boolean | number | undefined>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const TOTAL_VALUES_PER_PAGE = 10;

  const tableHeaders = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  const mobileHeaders = ["USERNAME", "STATUS"];

  const toggleDropdown = (id: string | number | undefined) => {
    setDropdownVisible(dropdownVisible === id ? false : id);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const goOnPrevPage = () => {
    if (currentPageNumber === 1) return;
    setCurrentPageNumber((prev) => prev - 1);
  };

  const goOnNextPage = () => {
    if (currentPageNumber === userData.length / TOTAL_VALUES_PER_PAGE) return;
    setCurrentPageNumber((prev) => prev + 1);
  };

  const handleSelectChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    const newPage = Number(e.target.value);
    setCurrentPageNumber(newPage);
  };

  const setPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = parseInt((e.target as HTMLButtonElement).value);
    setCurrentPageNumber(value)
  }

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = currentPageNumber * TOTAL_VALUES_PER_PAGE;
    setDataToDisplay(userData?.slice(start, end));
  }, [currentPageNumber, userData]);

  return (
    <div className="table">
      {dataToDisplay ? (
        <>
          <table className="desktopTable">
            <thead>
              <tr>
                {tableHeaders.map((header) => {
                  return (
                    <th key={header} className="headers">
                      {header}
                      <img src={filter} alt="filter" onClick={toggleFilter} />
                    </th>
                  );
                })}
                {showFilter && (
                  <Filter
                    userData={userData}
                    setShowFilter={setShowFilter}
                    setDataToDisplay={setDataToDisplay}
                  />
                )}
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.map((user, index) => {
                return (
                  <tr key={index} className="tableContents">
                    <td>{user?.organization}</td>
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone}</td>
                    <td>{user?.joined}</td>
                    <td
                      className={`${
                        user?.status === "Inactive"
                          ? "inactive"
                          : user?.status === "Active"
                          ? "active"
                          : user?.status === "Blacklisted"
                          ? "blacklisted"
                          : "pending"
                      }`}
                    >
                      {user?.status}
                    </td>
                    <td onClick={() => toggleDropdown(user?._id)}>
                      <img src={options} alt="options" />

                      {dropdownVisible === user?._id && (
                        <Options
                          dropdownVisible={dropdownVisible}
                          setDropdownVisible={setDropdownVisible}
                          userId={user?._id}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <table className="mobileTable">
            <thead>
              <tr>
                {mobileHeaders.map((header) => {
                  return (
                    <th key={header} className="headers">
                      {header}
                      <img src={filter} alt="filter" onClick={toggleFilter} />
                    </th>
                  );
                })}
                {showFilter && (
                  <Filter
                    userData={userData}
                    setShowFilter={setShowFilter}
                    setDataToDisplay={setDataToDisplay}
                  />
                )}
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.map((user, index) => {
                return (
                  <tr key={index} className="tableContents">
                    <td>{user?.username}</td>
                    <td
                      className={`${
                        user?.status === "Inactive"
                          ? "inactive"
                          : user?.status === "Active"
                          ? "active"
                          : user?.status === "Blacklisted"
                          ? "blacklisted"
                          : "pending"
                      }`}
                    >
                      {user?.status}
                    </td>
                    <td onClick={() => toggleDropdown(index)}>
                      <img src={options} alt="options" />

                      {dropdownVisible === index && (
                        <Options
                          dropdownVisible={dropdownVisible}
                          setDropdownVisible={setDropdownVisible}
                          userId={user?._id}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <Loader />
      )}
      {userData && (
        <div className="pagination">
          <div className="dropdown">
            Showing
            <select
              name="page-number"
              onChange={handleSelectChange}
              value={currentPageNumber}
            >
              {userData.length > 1  &&  Array.from(Array(userData.length / TOTAL_VALUES_PER_PAGE))
                .map((_e, i) => i + 1)
                .map((val) => {
                  return <option key={val}>{val}</option>;
                })}
            </select>
            out of {userData.length / TOTAL_VALUES_PER_PAGE}
          </div>
          <div className="btn-container">
            <button onClick={goOnPrevPage}>
              <img src={next} alt="" />
            </button>
            <button value={1} onClick={setPage}>1</button>
            <button value={2} onClick={setPage}>2</button>
            <button value={3} onClick={setPage}>3</button>
            ......
            <button value={15} onClick={setPage}>15</button>
            <button value={16} onClick={setPage}>16</button>
            <button onClick={goOnNextPage}>
              <img src={previous} alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
