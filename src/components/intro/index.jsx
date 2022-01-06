function IntroPanel() {
  return (
    <>
      <style jsx>
      {`
        .intro-panel {
          padding: 12px;
          width: 50%;
          height: 100%;
        }
        .intro-panel-inner {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          border: 1px solid #D1D5DB;
          display: flex;
          flex-direction: column;
          background: #fff;
        }
        .header {
          padding: 18px 12px;
          width: 100%;
          min-height: 142px;
        }
        .intro-detail {
          display: flex;
          align-items: center;
        }
        .intro-image {
          width: 48px;
          height: 48px;
        }
        .intro-title {
          height: 24px;
          width: calc(90% - 60px);
          margin-left: 12px;
        }
        .intro-inspiration {
          height: 64px;
          width: 100%;
          margin-top: 12px;
        }
        .intro-options {
          padding: 18px 12px;
          width: 100%;
          max-height: 142px;
        }
        .intro-category {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-bottom: 12px;
        }
        .category-box {
          width: 48px;
          height: 18px;
          margin-right: 8px;
        }
        .seperator-line {
          height: 1px;
          width: 100%;
          background-color: #D1D5DB;
        }
        .info-card-holder {
          display: flex;
          flex-direction: column;
          padding: 0px 12px;
          overflow: auto;
        }
        .info-card {
          width: 100%;
          height: 120px;
          margin-bottom: 10px;
          flex-grow: 0;
          flex-shrink: 0;
        }
        @media (max-width: 981px) {
          .intro-panel {
            width: 100%;
          }
        }
      `}
      </style>
      <div className="intro-panel">
        <div className="intro-panel-inner">
          <div className="header">
            <div className="intro-detail">
              <div className="intro-image round loader">
              </div>
              <div className="intro-title rectangle loader">
              </div>
            </div>
            <div className="intro-inspiration rectangle loader">
            </div>
          </div>
          <div className="intro-options">
            <div className="intro-category">
              <div className="category-box rectangle loader" />
              <div className="category-box rectangle loader" />
            </div>
            <div className="seperator-line" />
          </div>
        <div className="info-card-holder">
          {
            [1,2,3,4].map((data) => (
              <div className="info-card rectangle loader">
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </>
  )
}

export default IntroPanel