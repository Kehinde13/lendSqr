import React from 'react';
import { userDataType } from '../Pages/Dashboard';
import '../Styles/UserResult.css'

type Prop = {
    userResult: userDataType | undefined;
};

const UserResult: React.FC<Prop> = ({ userResult }) => {
  return (
    <div className='userResult'>
        {userResult?.username}
    </div>
  );
};

export default UserResult;