import PostOverview from "./overview";
import InputBox from '../inputbox';

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
          border-radius: 4px;
          border: 1px solid #D1D5DB;
          background: #fff;
        }
        .header {
          width: 100%;
          max-height: 240px;
          margin-bottom: 32px;
        }
        .image-holder {
          position: relative;
        }
        .timeline-image {
          width: 100%;
          height: 132px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        .image-box {
          width: 120px;
          height: 120px;
          position: absolute;
          left: 16px;
          bottom: -100px;
          border: 2px solid #ffff;
        }
        .content-intro {
          width: 100%;
          min-height: 74px;
          padding-left: 148px;
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }
        .content-title {
          min-width: 184px;
          height: 18px;
        }
        .content-sub-title {
          min-width: 100px;
          height: 18px;
        }
        .padded-box {
          padding: 0 14px;
        }
        .input-box-container {
          height: 60px;
          width: 100%;
          margin-top: 24px;
          padding: 10px 16px 10px 16px;
          border: 1px solid #D1D5DB;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .user-img {
          width: 36px;
          height: 36px;
        }
        .input-box {
          padding: 0 12px;
          color: #81878C;
          width: calc(100% - 36px);
        }
        .dummy-text-box {
          width: 100%;
          min-height: 120px;
          margin-top: 24px;
          overflow: auto;
          font-size: 16px;
          color: rgba(0,0,0,.84);
          word-break: break-word;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .content-category {
          width: 120px;
          height: 24px;
        }
      `}
      </style>
      <div className="content-container">
        <div className="header">
          <div className="image-holder">
            <div className="timeline-image rectangle loader">
            </div>
            <div className="image-box round loader" />
          </div>
          <div className="content-intro">
            <div className="content-title rectangle loader"></div>
            <div className="content-sub-title rectangle loader"></div>
          </div>
        </div>
        <div className="padded-box">
          <div className="input-box-container rectangle">
            <div className="user-img round loader"></div>
            <div className="input-box">
              <InputBox />
            </div>
          </div>
        </div>
        <div className="dummy-text-box">
          {
            [1,2,3,4].map((data, index) => (
              <PostOverview key={index} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Content