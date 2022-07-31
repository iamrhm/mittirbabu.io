import React from "react";

import LandingContent from "./sections/intro";
import Category from "./sections/category";
import Header from "./sections/header";
import Footer from "./sections/intro/footer";
import UserSection from "./sections/user";
import MenuModal from "../../components/menu";

function Landing() {
  const [showTitle, toggleHeader] = React.useState(false);
  const [showMenu, toggleMenu] = React.useState(false);
  const innerBoxRef = React.useRef(null);
  const categoryRef = React.useRef(null);
  const isFirstRender = React.useRef(true);

  const navigateToBook = () => {
    if (innerBoxRef.current && categoryRef.current) {
      const containerBottom = categoryRef.current.getBoundingClientRect().top;
      innerBoxRef.current.scroll({
        top: containerBottom - 96,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);

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
            padding: 0 16px;
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
            max-width: 1120px;
            margin: auto;
            width: 100%;
          }
          @media (min-width: 981px) {
            .landing-container {
              max-width: 1120px;
              margin: auto;
            }
            .inner-box {
              padding: 0 24px;
            }
          }
        `}
      </style>
      <div className="outer-box">
        <Header
          showTitle={showTitle}
          toggleMenu={toggleMenu}
          showMenu={showMenu}
        />
        <div className="inner-box" ref={innerBoxRef}>
          <section className="landing-container">
            <LandingContent
              navigateToBook={navigateToBook}
              toggleHeader={(headerState) =>
                toggleHeader(headerState && !isFirstRender.current)
              }
            />
            <Footer />
          </section>
          <section className="category-container" ref={categoryRef}>
            <Category />
          </section>
          <UserSection />
        </div>
        <MenuModal showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </>
  );
}

export default Landing;
