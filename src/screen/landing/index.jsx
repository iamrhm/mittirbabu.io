import React from "react";

import IntroPanel from "./component/intro";
import LandingContent from "./component/content";
import Category from "./component/category";
import Header from "./component/header";

function Landing() {
  const topBannerRef = React.useRef(null);
  const startScrolling = () => {
    if (topBannerRef.current) {
      const containerBottom =
        topBannerRef.current.getBoundingClientRect().bottom;
      topBannerRef.current.scroll({
        top: containerBottom,
        left: 0,
        behavior: "smooth"
      });
    }
  };
  return (
    <>
      <style jsx>
        {`
          .outer-box {
            width: 100%;
            max-width: 1280px;
            height: 100%;
            position: relative;
            margin: 0 auto;
          }
          .inner-box {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
          }
          .left-panel {
            display: flex;
            width: 30%;
            position: relative;
            max-width: 336px;
          }
          .right-panel {
            width: 70%;
            height: 100%;
            padding: 12px;
            position: relative;
            padding-left: 0px;
          }
          .content-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            border-radius: 6px;
            background: #fff;
            overflow-y: auto;
            border: 1px solid #d1d5db;
          }
          @media (max-width: 981px) {
            .content-container {
              border: none;
            }
            .inner-box {
              flex-direction: column;
              overflow: auto;
            }
            .left-panel {
              height: unset;
              width: 100%;
              flex-direction: column;
              display: none;
            }
            .right-panel {
              width: 100%;
              padding: unset;
            }
          }
        `}
      </style>
      <div className="outer-box">
        <div className="inner-box">
          <div className="left-panel">
            <IntroPanel />
          </div>
          <div className="right-panel">
            <div className="content-container" ref={topBannerRef}>
              <Header />
              <LandingContent navigateToBook={startScrolling} />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
