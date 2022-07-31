const menuOptions = [
  { label: "home", key: "home", link: "" },
  { label: "dev/science", key: "dev", link: "" },
  { label: "travel", key: "travel", link: "" },
  { label: "art", key: "art", link: "" },
  { label: "abstract", key: "abstract", link: "" }
];

function Menu({ showMenu, toggleMenu }) {
  const navigateToPage = (menuKey) => {
    toggleMenu(false);
  };
  return (
    <>
      <style jsx>
        {`
          .menu-box-wrapper {
            width: 100%;
            height: calc(100vh - 98px);
            position: fixed;
            z-index: 0;
            background: #121212;
            top: 98px;
            left: 0;
            opacity: 0;
            transition: all 0.75s cubic-bezier(0.87, 0, 0.13, 1);
            visibility: hidden;
          }
          .menu-box-wrapper.show-menu-box-wrapper {
            opacity: 1;
            z-index: 20;
            visibility: visible;
          }
          .option-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: scale(1.5);
            transition: all 0.75s cubic-bezier(0.87, 0, 0.13, 1);
            opacity: 0;
            padding-top: 120px;
          }
          .option-box.show-option-box {
            transform: scale(1);
            opacity: 1;
          }
          .option-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px;
            cursor: pointer;
          }
          .option-name {
            font-size: 24px;
            font-weight: bold;
            width: 100%;
            color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease-in;
          }
          .option-name:hover {
            color: rgba(255, 255, 255, 1);
            transform: scale(1.1);
          }
          @media (min-width: 981px) {
            .menu-box-wrapper {
              padding-top: 24px;
            }
            .option-box {
              padding-top: 120px;
            }
            .option-name {
              font-size: 32px;
            }
          }
        `}
      </style>
      <div
        className={`menu-box-wrapper ${
          showMenu ? "show-menu-box-wrapper" : ""
        }`}
      >
        <div className={`option-box ${showMenu ? "show-option-box" : ""}`}>
          {menuOptions.map((data) => (
            <div
              className="option-container"
              key={data.key}
              onClick={() => navigateToPage(data.key)}
            >
              <div className="option-name">{data.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
