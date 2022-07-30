import React from "react";

import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

const intersectionOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

function Intro({ navigateToBook, toggleHeader }) {
  const [banner, crossedThreshold] = useIntersectionObserver({
    option: { ...intersectionOption },
  });

  React.useEffect(() => {
    toggleHeader(!crossedThreshold);
  }, [crossedThreshold]);

  return (
    <>
      <style jsx>
        {`
          .intro {
            top: 50%;
            left: 50%;
            transform: translate(0%, 40%);
          }
          .banner {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 0 24px;
          }
          .title-text {
            width: 100%;
            font-size: 48px;
            height: 30%;
            font-weight: 800;
            color: #fff;
            text-align: center;
            margin: 0 auto;
            padding: 0px 24px 0px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .compass-letter {
            position: relative;
            display: block;
          }
          .compass {
            width: 80px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -80%);
          }
          .compass-image {
            filter: drop-shadow(4px 6px 16px #2B2019);
            width: 80px;
            object-fit: contain;
            animation: compass-rotate 2.5s ease-in-out forwards;
          }
          .subtitle-container {
            width: 100%;
            height: 70%;
            padding: 24px;
            padding-top: 0;
            text-align: center;
            position: relative;
            color: #fff;
          }
          .description-text {
            display: inline-block;
            font-size: 14px;
            padding: 24px 0px;
            width: 90%;
            font-style: italic;
            color: rgba(255, 255, 255, 0.7);
          }
          .explore-btn-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            z-index: 1;
            margin-top: 24px;
          }
          .explore-btn {
            height: 50px;
            color: #000;
            display: inline-block;
            padding: 13px 30px 13px 30px;
            position: relative;
            font-size: 14px;
            line-height: 24px;
            text-decoration: none;
            background: #fff;
            border-radius: 25px;
            cursor: pointer;
          }
          @media (min-width: 981px) {
            .intro {
              top: 50%;
              left: 50%;
              transform: translate(0%, 20%);
            }
            .title-text {
              font-size: 138px;
            }
            .compass {
              width: 116px;
              height: 128px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -100%);
            }
            .compass-image {
              width: 116px;
            }
            .subtitle-text {
              width: 70%;
            }
            .description-text {
              width: 60%;
              font-size: 24px;
            }
            .side-padding {
              display: inline-block;
              padding-left: 8px;
            }
          }
          @keyframes compass-rotate {
            0%   {transform: rotate(-18deg);}
            10%  {transform: rotate(12deg);}
            40%  {transform: rotate(-25deg);}
            60%  {transform: rotate(20deg);}
            80%  {transform: rotate(0deg);}
            100% {transform: rotate(-18deg);}
          }
        `}
      </style>
      <section className="intro">
        <div className="banner rectangle" ref={banner}>
          <h1 className="title-text">
            m
            <span className="compass-letter">
              i
              <span className="compass">
                <img src="/images/banner/compass2.png" className="compass-image" />
              </span>
            </span>
              t
            <span className="side-padding">tirbabu</span>
          </h1>
        </div>
        <div className="subtitle-container">
            <div className="description-text">
              Every images are an idea in frame. <br />
              Explore different ideas and stories captured by <br />iamrhm
            </div>
            <div className="explore-btn-container">
              <btn className="explore-btn" onClick={navigateToBook}>
                Explore
              </btn>
            </div>
          </div>
      </section>
    </>
  );
}

export default Intro;
