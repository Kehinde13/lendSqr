import { SetStateAction, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { userDataType } from "../Pages/Dashboard";

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

  const goOnPrevPage = () => {
    if (currentPageNumber === 1) return;
    setCurrentPageNumber((prev) => prev - 1);
  };

  const goOnNextPage = () => {
    if (currentPageNumber === userData.length / TOTAL_VALUES_PER_PAGE) return;
    setCurrentPageNumber((prev) => prev + 1);
  };
  const handleSelectChange = (e: {
    target: { value: SetStateAction<number> };
  }) => {
    setCurrentPageNumber(e.target.value);
  };

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = currentPageNumber * TOTAL_VALUES_PER_PAGE;
    setDataToDisplay(userData?.slice(start, end));
  }, [currentPageNumber, userData]);

  return (
    <div>
      {dataToDisplay ? (
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header) => {
                return <th key={header}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((obj) => {
              return (
                <tr key={obj.id}>
                  <td>{obj.organization}</td>
                  <td>{obj.username}</td>
                  <td>{obj.email}</td>
                  <td>{obj.phone}</td>
                  <td>{obj.joined}</td>
                  <td>{obj.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Table;
