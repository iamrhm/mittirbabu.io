import React from "react";

import LandingContent from "./component/intro";
import Category from "./component/category";
import Header from "./component/header";
import Footer from "./component/footer";


function Landing() {
  const innerBoxRef = React.useRef(null);
  const landingRef = React.useRef(null);
  const [showTitle, toggleHeader] = React.useState(false);

  const navigateToBook = () => {
    if (innerBoxRef.current && landingRef.current) {
      const containerBottom =
        landingRef.current.getBoundingClientRect().bottom;
      innerBoxRef.current.scroll({
        top: containerBottom - 96,
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
            height: 100%;
            position: relative;
            background: #121212;
            overflow: hidden;
          }
          .inner-box {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-y: auto;
          }
          .landing-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            position: relative;
            min-height: calc(100vh - 98px);
          }
          .category-container {
            max-width: 1280px;
            margin: 0 auto;
            width: 100%;
            min-height: 100vh;
          }
          @media (min-width: 981px) {
            .landing-container {
              max-width: 1120px;
              margin: auto;
            }
          }
        `}
      </style>
      <div className="outer-box">
        <Header showTitle={showTitle}/>
        <div className="inner-box" ref={innerBoxRef}>
          <div className="landing-container" ref={landingRef}>
            <LandingContent
              navigateToBook={navigateToBook}
              toggleHeader={toggleHeader}
            />
            <Footer />
          </div>
          <div className="category-container">
            <Category />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
