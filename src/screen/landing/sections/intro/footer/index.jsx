import React from "react";
import Socials from "../../../../../components/socials";

const Footer = () => {
  return (
    <>
      <style jsx>
        {`
          .footer-wrapper {
            padding: 24px 0px;
            position: absolute;
            bottom: 86px;
            width: 100%;
          }
          .footer-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
          }
          .location-info {
            display: flex;
            color: #fff;
          }
          .right-panel {
            color: #fff;
          }
          .location-icon {
            padding-right: 8px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .location-icon svg {
            animation: location-rotate 2s ease-in-out infinite;
          }
          .left-panel {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (min-width: 981px) {
            .footer-wrapper {
              bottom: 0;
              padding: 24px 0;
            }
          }
          @keyframes location-rotate {
            0% {
              transform: translate(0, -2px) rotate(0deg);
            }
            75% {
              transform: translate(0, -2px) rotate(360deg);
            }
            100% {
              transform: translate(0, -2px) rotate(360deg);
            }
          }
        `}
      </style>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="left-panel">
            <div className="location-info">
              <div className="location-icon">
                <svg width="22" height="22">
                  <g
                    transform="translate(1 1)"
                    stroke="#FFF"
                    strokeWidth="1.5"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path d="M14.2 5.8l-2.1 6.3-6.3 2.1 2.1-6.3z"></path>
                    <circle cx="10" cy="10" r="10"></circle>
                  </g>
                </svg>
              </div>
              Kolkata, India
            </div>
          </div>
          <div className="right-panel">
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
