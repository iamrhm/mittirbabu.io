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
          background: linear-gradient(320deg,#f27121,#e94057,#8a2387);
          position: relative;
          padding: 16px;
        }
        .inner-box {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
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