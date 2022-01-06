import PostOverview from "../post-overview";

function Content() {
  return (
    <>
      <style jsx>
      {`
        .content-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: #fff;
          border-radius: 8px;
          border-bottom-right-radius: 16px;
          padding: 14px;
          padding-bottom: 18px;
        }
        .header {
          width: 100%;
          height: 240px;
          margin-bottom: 32px;
        }
        .image-holder {
          position: relative;
        }
        .timeline-image {
          width: 100%;
          height: 220px;
        }
        .image-box {
          width: 68px;
          height: 68px;
          position: absolute;
          left: 16px;
          bottom: -32px;
          border: 2px solid #ffff;
          background-color: #ecf1ff;
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
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          color: rgba(0,0,0,.84);
          word-break: break-word;
          display: flex;
          flex-direction: column;
          align-items: center;
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
        </div>
        <div className="input-box-container rectangle">
          <div className="user-img round loader"></div>
          <div className="input-box">
            What do you have in mind?
          </div>
        </div>
        <div className="dummy-text-box">
          {
            [1,2,3,4].map((data) => (
              <PostOverview />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Content