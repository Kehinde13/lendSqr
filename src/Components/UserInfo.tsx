import { userDataType } from "../Pages/Dashboard";
import "../Styles/UserInfo.css";

type Prop = {
  userProfile?: userDataType | null;
};

const UserInfo = ({ userProfile }: Prop) => {
  return (
    <div className="userInfo">
      <div>
        <h4>Personal Information</h4>

        <div className="personal">
          <div>
            <h6>FULL NAME</h6>
            <p>{userProfile?.name}</p>
          </div>

          <div>
            <h6>PHONE NUMBER</h6>
            <p>{userProfile?.phone}</p>
          </div>

          <div>
            <h6>EMAIL ADDRESS</h6>
            <p>{userProfile?.email}</p>
          </div>

          <div>
            <h6>BVN</h6>
            <p>{userProfile?.phone}</p>
          </div>

          <div>
            <h6>GENDER</h6>
            <p>{userProfile?.gender}</p>
          </div>

          <div>
            <h6>MARITAL STATUS</h6>
            <p>{userProfile?.marital}</p>
          </div>

          <div>
            <h6>CHILDREN</h6>
            <p>{userProfile?.children}</p>
          </div>

          <div>
            <h6>TYPE OF RECIDENCE</h6>
            <p>{userProfile?.residence}</p>
          </div>
        </div>

        <hr />
      </div>

      <div>
        <h4>Education and Employment</h4>

        <div className="education">
          <div>
            <h6>LEVEL OF EDUCATION</h6>
            <p>B.Sc</p>
          </div>

          <div>
            <h6>EMPLOYMENT STATUS</h6>
            <p>Employed</p>
          </div>

          <div>
            <h6>SECTOR OF EMPLOYMENT</h6>
            <p>Fintech</p>
          </div>

          <div>
            <h6>DURATION OF EMPLOYMENT</h6>
            <p>2 years</p>
          </div>

          <div>
            <h6>OFFICE EMAIL</h6>
            <p>
              {userProfile?.username}@{userProfile?.organization}.com
            </p>
          </div>

          <div>
            <h6>MONTHLY INCOME</h6>
            <p>$5,000 - $10,000</p>
          </div>

          <div>
            <h6>LOAN REPAYMENT</h6>
            <p>$1,000</p>
          </div>
        </div>

        <hr />
      </div>

      <div>
        <h4>Socials</h4>

        <div className="socials">
          <div>
            <h6>TWITTER</h6>
            <p>@{userProfile?.username}</p>
          </div>

          <div>
            <h6>FACEBOOK</h6>
            <p>{userProfile?.name}</p>
          </div>

          <div>
            <h6>INSTAGRAM</h6>
            <p>@{userProfile?.username}</p>
          </div>
        </div>

        <hr />
      </div>

      <div>
        <div>
          <h4>Guarantor</h4>
          {userProfile?.guarantor.map((guarantor, index) => (
            <div key={index} className="guarantor">
              <div>
                <h6>FULL NAME</h6>
                <p>{guarantor.name}</p>
              </div>

              <div>
                <h6>PHONE NUMBER</h6>
                <p>{guarantor.phone}</p>
              </div>

              <div>
                <h6>EMAIL ADDRESS</h6>
                <p>{guarantor.email}</p>
              </div>

              <div>
                <h6>RELATIONSHIP</h6>
                <p>{guarantor.relationship}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
