import Socials from '../socials';

function Profile() {
  return (
    <>
      <style jsx>
      {`
        .user-detail {
          display: flex;
          align-items: end;
        }
        .user-image {
          width: 124px;
          height: 124px;
        }
        .user-info-box {
          width: calc(100% - 124px);
          padding-left: 12px;
          display: flex;
          flex-direction: column;
        }
        .user-name {
          width: 100%;
          height: 24px;
        }
        .user-inspiration {
          margin-top: 8px;
          height: 70px;
          width: 100%;
        }
      `}
      </style>
      <div className="user-detail">
        <div className="user-image round loader">
        </div>
        <div className="user-info-box">
          <div className="user-name rectangle loader">
          </div>
          <div className="user-inspiration rectangle loader">
          </div>
        </div>
      </div>
      <Socials />
    </>
  )
}

export default Profile