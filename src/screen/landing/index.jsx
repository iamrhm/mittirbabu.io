import Sidebar from "../../components/sidebar";
import IntroPanel from "../../components/intro";
import Content from "../../components/content";

function Landing() {
  return (
    <>
      <style jsx>
      {`
        .outer-box {
          width: 100%;
          height: 100%;
          background: #fafafa;
          position: relative;
        }
        .inner-box {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
        }
        .left-panel {
          display: flex;
          width: 50%;
          height: 100%;
          position: relative;
        }
        .right-panel {
          width: 50%;
          height: 100%;
          padding: 12px;
          position: relative;
          padding-left: 0px;
        }
        @media (max-width: 981px) {
          .inner-box {
            flex-direction: column;
            overflow: auto;
          }
          .left-panel {
            height: unset;
            width: 100%;
            flex-direction: column;
          }
          .right-panel {
            height: unset;
            width: 100%;
            padding-left: 12px;
          }
        }
      `}
      </style>
      <div className="outer-box">
        <div className="inner-box">
          <div className="left-panel">
            <Sidebar />
            <IntroPanel />
          </div>
          <div className="right-panel">
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing