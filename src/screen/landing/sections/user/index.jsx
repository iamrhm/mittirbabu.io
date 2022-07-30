import React from 'react';
import userData from '../../../../__mocks__/profile.data';

const UserSection = () => {
  return (
    <>
      <style jsx>
      {`
        .user-section {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          min-height: 100vh;
          position: relative;
        }
        .user-details {
          display: flex;
          flex-direction: column;
        }
        .user-info-container {
          width: 100%;
        }
        .user-image-container {
          width: 100%;
          position: relative;
        }
        .user-image {
          width: 90%;
        }
        .top-drop-shadow {
          width: 100%;
          top: -1px;
          left: 0px;
          height: 100%;
          position: absolute;
          background: linear-gradient(
            to bottom,
            rgba(18,18,18, 0.538) 0%,
            rgba(18,18,18, 0.438) 19%,
            rgba(18,18,18, 0.341) 34%,
            rgba(18,18,18, 0.282) 47%,
            rgba(18,18,18, 0.194) 56.5%,
            rgba(18,18,18, 0.154) 65%,
            rgba(18,18,18, 0.006) 73%,
            rgba(18,18,18, 0.001) 80.2%,
            transparent 86.1%,
            transparent 91%,
            transparent 95.2%,
            transparent 98.2%,
            transparent 100%
          );
        }
        .user-info {
          color: #fff;
          display: flex;
          flex-direction: column;
        }
        .user-name {
          font-size: 32px;
          font-weight: bolder;
        }
        .user-detail {
          font-size: 24px;
          padding: 14px 0;
        }
        .user-bio {
          font-size: 16px;
        }
        @media (min-width: 992px) {
          .user-details {
            flex-direction: row;
          }
          .user-info-container {
            width: 60%;
            padding-top: 10%;
          }
          .user-info {
            width: 80%;
          }
          .user-image-container {
            width: 40%;
          }
          .user-name {
            font-size: 48px;
            font-weight: 900;
          }
          .user-detail {
            font-size: 24px;
            padding: 14px 0;
            color: rgba(255, 255, 255, 0.7);
          }
          .user-bio {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
            font-style: italic;
          }
          .user-email {
            padding: 31px 0;
            font-size: 24px;
          }
        }
      `}
      </style>
      <section className="user-section">
        <div className="user-details">
          <div className="user-info-container">
            <div className="user-info">
              <span className="user-name">
                {userData.name}
              </span>
              <span className="user-detail">
                {userData.work}
              </span>
              <span className="user-bio">
                {userData.intro}
              </span>
              <span className="user-email">
                {userData.email}
              </span>
            </div>
          </div>
          <div className="user-image-container">
            <img className="user-image" src={userData.image} />
            <div className="top-drop-shadow" />
          </div>
        </div>
      </section>
    </>
  )
}

export default UserSection;