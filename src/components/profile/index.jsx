import Socials from "../socials";
import ProfileData from "../../__mocks__/profile.data";

function Profile() {
  const { name, image, location, intro, work, socials } = ProfileData;
  return (
    <>
      <style jsx>
        {`
          .user-detail {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .user-image {
            width: 184px;
            height: 184px;
            background-image: url(${image});
            background-size: cover;
            background-position: bottom center;
          }
          .user-info-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            align-items: center;
          }
          .user-name {
            width: 100%;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            padding: 0 12px;
            padding-bottom: 12px;
            color: #2f363f;
          }
          .user-inspiration {
            width: 100%;
            font-size: 14px;
            text-align: center;
            padding: 0 12px;
            padding-bottom: 24px;
            color: #535b62;
          }
          .user-work {
            width: 100%;
            font-size: 14px;
            text-align: center;
            padding-bottom: 12px;
            color: #535b62;
          }
          .user-location-box {
            padding: 6px 4px;
            background: #f5f5f8;
            font-size: 14px;
            min-width: 124px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .info-cta-panel {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 48px;
          }
          .btn {
            min-width: 100px;
            padding: 8px 6px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            cursor: pointer;
          }
          .contact-btn {
            background: #151e28;
            color: #fff;
            border: 1px solid #151e28;
          }
          .portfolio-btn {
            background: #fff;
            color: #151e28;
            border: 1px solid #151e28;
          }
        `}
      </style>
      <div className="user-detail">
        <div className="user-image round"></div>
        <div className="user-info-box">
          <div className="user-name">{name}</div>
          <div className="user-inspiration">{intro}</div>
          <div className="user-location-box rectangle">{location}</div>
        </div>
        <Socials socialList={socials} />
        <div className="info-cta-panel">
          <button className="btn contact-btn rectangle">
            Contact
          </button>
          <button className="btn portfolio-btn rectangle">
            Portfolio
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
