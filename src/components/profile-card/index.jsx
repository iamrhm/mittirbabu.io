function ProfileCard() {
  return (
    <>
      <style jsx>
      {`
        .profile-card {
          width: 100%;
          padding-top: 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .profile-photo {
          width: 124px;
          height: 124px;
          border-radius: 50%;
        }
        .title {
          width: calc(100% - 144px);
          height: 24px;
          margin-top: 12px;
        }
        .sub-title {
          width: 100%;
          height: 64px;
          margin-top: 12px;
        }
      `}
      </style>
      <div className="profile-card">
        <div className="profile-photo loader">
        </div>
        <div className="title rectangle loader"></div>
        <div className="sub-title rectangle loader"></div>
      </div>
    </>
  )
}

export default ProfileCard