import { SetStateAction, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { userDataType } from "../Pages/Dashboard";
import options from "../assets/ic-more-vert-18px.png";
import next from "../assets/Vector (6).png";
import previous from "../assets/Vector (5).png";
import filter from "../assets/filter-results-button (1).png";
import "../Styles/Table.css";
import Options from "./Options";

const Table = () => {
  const [userData]: [userDataType[]] = useOutletContext();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState<userDataType[]>();
  const TOTAL_VALUES_PER_PAGE = 10;

  const tableHeaders = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  const toggleDropdown = (e) => {
    console.log(e.target.key);
   
  }

  const goOnPrevPage = () => {
    if (currentPageNumber === 1) return;
    setCurrentPageNumber((prev) => prev - 1);
  };

  const goOnNextPage = () => {
    if (currentPageNumber === userData.length / TOTAL_VALUES_PER_PAGE) return;
    setCurrentPageNumber((prev) => prev + 1);
  };
  const handleSelectChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    const newPage = Number(e.target.value);
    setCurrentPageNumber(newPage)
  };

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = currentPageNumber * TOTAL_VALUES_PER_PAGE;
    setDataToDisplay(userData?.slice(start, end));
  }, [currentPageNumber, userData]);

  return (
    <div className="table">
      {dataToDisplay ? (
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header) => {
                return (
                  <th key={header} className="headers">
                    {header}
                    <img src={filter} alt="" />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((user) => {
              return (
                <tr key={user.id} className="tableContents" onClick={toggleDropdown}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.joined}</td>
                  <td
                    className={`${
                      user.status === "Inactive"
                        ? "inactive"
                        : user.status === "Active"
                        ? "active"
                        : user.status === "Blacklisted"
                        ? "blacklisted"
                        : "pending"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td>
                    <img src={options} alt="options" />
                  </td>
                 {/*  {  <Options />} */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
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
              {Array.from(Array(userData.length / TOTAL_VALUES_PER_PAGE))
                .map((_e, i) => i + 1)
                .map((val) => {
                  return <option key={val}>{val}</option>;
                })}
            </select>
            out of {userData.length / TOTAL_VALUES_PER_PAGE}
          </div>
          <div id="btn-container">
            <button onClick={goOnPrevPage}>
              <img src={next} alt="" />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            ......
            <button>15</button>
            <button>16</button>
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
