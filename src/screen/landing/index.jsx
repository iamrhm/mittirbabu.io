import React from "react";

import LandingContent from "./sections/intro";
import Category from "./sections/category";
import Header from "./sections/header";
import Footer from "./sections/intro/footer";
import UserSection from './sections/user';

function Landing() {
  const innerBoxRef = React.useRef(null);
  const categoryRef = React.useRef(null);
  const [showTitle, toggleHeader] = React.useState(false);

  const navigateToBook = () => {
    if (innerBoxRef.current && categoryRef.current) {
      const containerBottom =
        categoryRef.current.getBoundingClientRect().top;
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
          <section className="landing-container">
            <LandingContent
              navigateToBook={navigateToBook}
              toggleHeader={toggleHeader}
            />
            <Footer />
          </section>
          <section className="category-container" ref={categoryRef}>
            <Category />
          </section>
          <UserSection />
        </div>
      </div>
    </>
  );
}

export default Landing;
