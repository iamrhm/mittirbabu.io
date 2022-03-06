import Profile from "../profile";
import Breadcrumb from "../breadcrumb";

function IntroPanel() {
  return (
    <>
      <style jsx>
        {`
          .intro-panel {
            padding: 12px;
            width: 100%;
          }
          .intro-panel-inner {
            width: 100%;
            height: 100%;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            background: #fff;
          }
          .header {
            padding: 24px 12px;
            width: 100%;
          }
          @media (min-width: 981px) {
            .intro-panel {
              width: 100%;
            }
            .intro-panel-inner {
              border: 1px solid #d1d5db;
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
        </div>
      </div>
    </>
  );
}

export default IntroPanel;
