import ProfileCard from "../profile-card";
import Menu from "../menu";

function Sidebar() {
  return (
    <>
      <style jsx>
        {`
          .sidebar {
            width: 50%;
            height: 100%;
            border-right: 1px solid #D1D5DB;
            display: flex;
            flex-direction: column;
            padding: 0 16px;
            overflow: hidden;
            background: #FFFF;
          }
          @media (max-width: 981px) {
            .sidebar {
              width: 100%;
              overflow: auto;
              height: unset;
              flex-shrink: 0;
            }
          }
        `}
      </style>
      <div className="sidebar">
        <ProfileCard />
        <Menu />
      </div>
    </>
  )
}

export default Sidebar