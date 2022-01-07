import Profile from '../profile';
import Breadcrumb from '../breadcrumb';

function IntroPanel() {
  return (
    <>
      <style jsx>
      {`
        .intro-panel {
          padding: 12px;
          width: 100%;
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
          padding: 24px 12px;
          width: 100%;
        }
        .intro-options {
          padding: 0 12px 18px 12px;
          width: 100%;
          max-height: 142px;
        }
        .intro-category {
          display: flex;
          align-items: center;
          padding-bottom: 12px;
          overflow-x: auto
        }
        .category-box {
          display: flex;
          flex-shrink: 0;
          width: 48px;
          height: 18px;
          margin-right: 12px;
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
          <Breadcrumb />
          <div className="header">
            <Profile />
          </div>
          <div className="intro-options">
            <div className="intro-category">
            {
              [1,2,3,4].map((data) => (
                <div className="category-box rectangle loader" />
              ))
            }
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