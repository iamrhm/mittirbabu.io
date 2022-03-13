import React from "react";

function Content({ navigateToBook }) {
  return (
    <>
      <style jsx>
        {`
          .banner {
            width: 100%;
            min-height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
          }
          .image-holder {
            position: absolute;
            width: calc(100% - 4px);
            height: 100%;
            transform: rotate(180deg);
            object-fit: cover;
          }
          .title-text {
            width: 100%;
            font-size: 54px;
            height: 30%;
            font-weight: bold;
            text-transform: uppercase;
            background-color: #fff;
            color: #000;
            mix-blend-mode: screen;
            text-align: center;
            margin: 0 auto;
            padding: 0px 24px 0px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .subtitle-container {
            width: 100%;
            height: 70%;
            padding: 24px;
            padding-top: 0;
            text-align: center;
            background-color: #fff;
            position: relative;
          }
          .subtitle-text {
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            display: inline-block;
          }
          .description-text {
            display: inline-block;
            font-size: 14px;
            padding: 24px 0px;
            color: #535b62;
            width: 90%;
            font-style: italic;
          }
          .explore-btn-container {
            width: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            z-index: 1;
            margin-top: 24px;
          }
          .explore-btn {
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 12px;
            border-radius: 6px;
            color: #fff;
            background: #151e28;
            text-align: center;
            cursor: pointer;
          }
          .lower-char {
            text-transform: lowercase;
          }
          @media (min-width: 981px) {
            .subtitle-text {
              width: 70%;
            }
            .title-text {
              font-size: calc(9vw - 30%);
            }
            .description-text {
              width: 60%;
            }
          }
        `}
      </style>
      <div className="banner rectangle">
        <img src="/images/banner/banner.gif" className="image-holder" />
        <h1 className="title-text">
          Scrapb<span className="lower-char">ö</span>Ok
        </h1>
        <div className="subtitle-container">
          <span className="subtitle-text">
            A Thoughtfully curated "space" of my random ideas and memories!!
          </span>
          <span className="description-text">
            Every images are an idea in frame. <br />
            Explore coolest ideas and uncover the stories behind them.
          </span>
          <div className="explore-btn-container">
            <btn className="explore-btn" onClick={navigateToBook}>
              Explore ScrapböOk
            </btn>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
