import { useEffect, useState } from "react";
import { userDataType } from "../Pages/Dashboard";

const FetchUsers = () => {
  const [userData, setUserData] = useState<userDataType[]>();

  useEffect(() => {
    fetch("https://run.mocky.io/v3/9957350a-51c0-4ad3-8e64-2f7baca02f64")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res);
      });
  }, []);

  return {
    userData,
  };
};

export default FetchUsers;
