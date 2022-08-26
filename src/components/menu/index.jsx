import React from "react";
import { useRouter } from "next/router";

import category from "../../__mocks__/category.data";

const menuOptions = [{ label: "home", key: "home", link: "/" }, ...category];

function Menu({ showMenu, toggleMenu }) {
  const [hoverOption, setHoveredOption] = React.useState(menuOptions[0].key);
  const router = useRouter();

  const navigateToPage = (menuKey) => {
    const url = menuKey === menuOptions[0].key ? "/" : `/workspace/${menuKey}`;
    router.push(url);
    toggleMenu(false);
  };

  const handleHover = (menuKey) => {
    setHoveredOption(menuKey);
  };

  React.useEffect(() => {
    const query = router.query.key;
    setHoveredOption(query ? query : menuOptions[0].key);
  }, [showMenu]);

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
            padding-top: 64px;
          }
          .option-box.show-option-box {
            transform: scale(1);
            opacity: 1;
          }
          .option-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 24px;
            cursor: pointer;
          }
          .option-name {
            font-size: 24px;
            font-weight: 600;
            width: 100%;
            color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease-in;
            text-transform: capitalize;
          }
          .option-name.hovered-option {
            color: rgba(255, 255, 255, 1);
            transform: scale(1.1);
          }
          @media (min-width: 981px) {
            .menu-box-wrapper {
              padding-top: 24px;
            }
            .option-box {
              padding-top: 48px;
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
              onMouseEnter={() => handleHover(data.key)}
              onMouseLeave={() => handleHover("")}
            >
              <div
                className={`option-name ${
                  hoverOption === data.key ? "hovered-option" : ""
                }`}
              >
                {data.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
