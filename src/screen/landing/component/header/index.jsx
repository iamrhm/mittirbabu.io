import React from "react";
import { FiMail, FiMenu } from "react-icons/fi";

const Header = ({ showTitle }) => {
  const [showMenu, toggleMenu] = React.useState(false);

  const handleMenuClick = (e) => {
    toggleMenu(!showMenu);
  }

  return (
    <>
      <style jsx>
        {`
          .header-wrapper {
            padding: 24px;
            position: sticky;
            top: 0;
            box-shadow: #0a0a0a 0px 3px 8px;
            z-index: 1;
          }
          .header-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;
          }
          .scrapbook-banner {
            position: absolute;
            width: 100%;
            padding: 24px;
            display: ${showTitle ? 'flex' : 'none'};
            justify-content: center;
            align-items: center;
          }
          .title-text {
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            text-align: center;
          }
          .icon-holder {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid #fff;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          .close-icon {
            background: #fff;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .close-icon:before,
          .close-icon:after {
            content: '';
            position: absolute;
            width: 18px;
            height: 1px;
            background: rgba(0, 0, 0, 1);
            transition: all .25s ease-in-out;
          }
          .email-icon {
            border: unset !important;
            color: #fff;
          }
          .compass {
            position: relative;
            width: 32px;
            display: inline-block;
            color: #000;
            animation: compass-rotate 2.5s ease-in-out;
          }
          .compass:hover {
            animation: compass-rotate 2.5s infinite ease-in-out;
          }
          .compass-image {
            filter: drop-shadow(4px 6px 16px #2B2019);
            position: absolute;
            top: 50%;
            left: 50%;
            object-fit: contain;
            transform: translate(-50%, -50%) rotate(0deg);
            width: 42px;
          }
          @media (min-width: 981px) {
            .title-text {
              font-size: 24px;
            }
            .compass {
              position: relative;
              width: 32px;
            }
            .compass-image {
              width: 48px;
            }
          }
          @keyframes compass-rotate {
            0%   {transform:rotate(0deg);}
            10%  {transform:rotate(12deg);}
            40%  {transform:rotate(-25deg);}
            60%  {transform:rotate(20deg);}
            80%  {transform:rotate(-15deg);}
            100% {transform:rotate(0deg);}
          }
        `}
      </style>
      <style jsx>
        {`
          .close-icon:before {
            transform: ${showMenu ? 'rotate(45deg) translate(0px,0px)' : 'rotate(0deg) translate(0px,-4px)'};
          }
          .close-icon:after {
            transform: ${showMenu ? 'rotate(-45deg) translate(0px,0px);' : 'rotate(0deg) translate(0px,4px)'};
          }
        `}
      </style>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="scrapbook-banner">
            <h1 className="title-text">
              Scrapbo
              <span className="compass">
                o
                <img src="/images/banner/compass2.png" className="compass-image" />
              </span>
              k
            </h1>
          </div>
          <div className="icon-holder close-icon" onClick={handleMenuClick}>
          </div>
          <div className="icon-holder email-icon">
            <FiMail />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
