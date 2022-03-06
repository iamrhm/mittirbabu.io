function Content() {
  return (
    <>
      <style jsx>
        {`
          .content-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background: #fff;
            padding: 4px;
            overflow-y: auto;
          }
          .header {
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
            line-height: 200%;
            height: 40%;
            font-size: 54px;
            font-weight: bold;
            text-transform: uppercase;
            background-color: #fff;
            color: #000;
            mix-blend-mode: screen;
            text-align: center;
            margin: 0 auto;
            padding: 64px 24px 0px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .subtitle-container {
            width: 100%;
            height: 60%;
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
            .content-container {
              border: 1px solid #d1d5db;
            }
            .title-text {
              height: 50%;
            }
            .subtitle-container {
              height: 50%;
            }
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
      <>
        <div className="content-container">
          <div className="header rectangle">
            <img src="/images/banner/banner.gif" className="image-holder" />
            <h1 className="title-text">
              Scrapb<span className="lower-char">ö</span>ok
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
                <btn className="explore-btn">Explore ScrapböOk</btn>
              </div>
            </div>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </div>
        </div>
      </>
    </>
  );
}

export default Content;
