import React from "react";

const Header = () => {
  return (
    <>
      <style jsx>
        {`
          .header-container {
            height: 72px;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            position: relative;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            z-index: 1;
            position: sticky;
            top: 0;
            background: #fff;
          }
          .scrapbook-banner {
            height: 40px;
            position: relative;
            width: 100%;
          }
          .image-holder {
            position: absolute;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            left: 2px;
            top: 2px;
            transform: rotate(180deg);
            object-fit: cover;
          }
          .title-text {
            width: 100%;
            height: 100%;
            font-size: 24px;
            font-weight: bold;
            background-color: #fff;
            color: #000;
            mix-blend-mode: screen;
            text-align: left;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .mob-banner {
            display: none;
          }
          .my-image-holder {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .menu-option {
            margin-right: 12px;
          }
          @media (max-width: 981px) {
            .title-text {
              font-size: 18px;
            }
            .menu-option {
              font-size: 14px;
            }
            .mob-banner {
              display: flex;
              justify-content: space-between;
              min-width: 100px;
            }
          }
        `}
      </style>
      <div className="header-container">
        <div className="scrapbook-banner">
          <img src="/images/banner/banner.gif" className="image-holder" />
          <h1 className="title-text">
            Scrapb<span className="lower-char">ö</span>Ok
          </h1>
        </div>
        <div className="mob-banner">
          <div className="menu-option">About Me</div>
          <img
            src="/images/userData/profile.jpeg"
            className="my-image-holder round"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
