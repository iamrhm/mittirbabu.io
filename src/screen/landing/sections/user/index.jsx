import React from 'react';

import userData from '../../../../__mocks__/profile.data';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

const option = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const UserSection = () => {
  const [cardRef,  crossedThreshold] = useIntersectionObserver({
    option,
  });

  React.useEffect(() => {
    if (!cardRef.current) return;
    if (crossedThreshold) {
      cardRef.current.classList.add('slide-in');
    }
  }, [crossedThreshold]);

  return (
    <>
      <style jsx>
      {`
        .user-section {
          max-width: 1120px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          padding: 84px 0;
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
          display: flex;
          justify-content: center;
          padding-top: 18px;
        }
        .user-image {
          border-radius: 8px;
          height: 320px;
          opacity: 0;
          transform: translate(0, 40px);
        }
        .user-image.slide-in {
          animation: slide-in 1s cubic-bezier(0.87, 0, 0.13, 1) forwards;
        }
        .user-info {
          color: #fff;
          display: flex;
          flex-direction: column;
        }
        .user-name {
          font-size: 32px;
          font-weight: bold;
        }
        .user-detail {
          font-size: 20px;
          padding: 14px 0;
          color: rgba(255, 255, 255, 0.7);
        }
        .user-bio {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
        .user-email {
          padding: 18px 0;
          font-size: 18px;
        }
        .dummy-padding {
          width: 100%;
          height: 64px;
        }
        @media (min-width: 992px) {
          .user-section {
            padding: 128px 0;
            padding-bottom: 64px;
          }
          .user-details {
            flex-direction: row;
            align-items: center;
          }
          .user-info-container {
            width: 60%;
          }
          .user-info {
            width: 80%;
          }
          .user-image-container {
            width: 40%;
            justify-content: flex-end;
            padding: unset;
            height: 420px;
          }
          .user-image {
            height: 420px;
          }
          .user-name {
            font-size: 48px;
          }
          .user-detail {
            padding: 24px 0;
          }
          .user-email {
            padding: 31px 0;
            font-size: 24px;
          }
          .dummy-padding {
            height: 128px;
          }
        }
        @keyframes slide-in {
          from {
            transform: translate(0, 40px);
            opacity: 0;
          }
          to {
            transform: translate(0, 0px);
            opacity: 1;
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
            <img className="user-image" src={userData.image} ref={cardRef} />
          </div>
        </div>
        <div className="dummy-padding" />
      </section>
    </>
  )
}

export default UserSection;