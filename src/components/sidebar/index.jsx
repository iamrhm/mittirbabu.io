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
            border-right: 1px solid rgba(209,213,219,.3);
            display: flex;
            flex-direction: column;
            padding: 0 16px;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            overflow: hidden;
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