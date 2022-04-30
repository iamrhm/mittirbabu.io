import React from "react";
import { FiExternalLink } from 'react-icons/fi';

import category from "../../../../__mocks__/category.data";

const Category = () => {
  return (
    <>
      <style jsx>
        {`
          .category-container {
            width: 100%;
            max-width: 1120px;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 0 24px;
          }
          .title-text {
            width: 100%;
            color: #fff;
            max-width: 1120px;
            margin: auto;
            padding: 32px 24px;
          }
          .category-card {
            border-radius: 8px;
            height: 380px;
            width: 80%;
            max-width: 280px;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 48px;
            flex-shrink: 0;
            flex-grow: 0;
            position: relative;
            box-shadow: #0a0a0a 0px 3px 8px;
          }
          .category-name, .category-sub-title {
            font-size: 24px;
            color: #fff;
            z-index: 1;
            font-weight: bolder;
            padding-top: 50%;
          }
          .category-sub-title {
            font-size: 24px;
            font-weight: bolder;
            padding: 0;
            opacity: 0.7;
          }
          .category-drop-shadow {
            width: 100%;
            bottom: 0;
            left: 0;
            height: 70%;
            position: absolute;
            background: linear-gradient(
              to top,
              black 0%,
              rgba(0, 0, 0, 0.738) 19%,
              rgba(0, 0, 0, 0.541) 34%,
              rgba(0, 0, 0, 0.382) 47%,
              rgba(0, 0, 0, 0.278) 56.5%,
              rgba(0, 0, 0, 0.194) 65%,
              rgba(0, 0, 0, 0.126) 73%,
              rgba(0, 0, 0, 0.075) 80.2%,
              rgba(0, 0, 0, 0.042) 86.1%,
              rgba(0, 0, 0, 0.021) 91%,
              rgba(0, 0, 0, 0.008) 95.2%,
              rgba(0, 0, 0, 0.002) 98.2%,
              transparent 100%
            );
            border-bottom-right-radius: 7px;
            border-bottom-left-radius: 7px;
          }
          .category-background-img {
            width: 100%;
            bottom: 0;
            left: 0;
            height: 100%;
            position: absolute;
            border-radius: 7px;
          }
          .dummy-padding {
            width: 100%;
            height: 240px;
          }
          @media (min-width: 991px) {
            .category-container {
              flex-direction: row;
              overflow-x: auto;
              padding: unset;
              align-items: flex-start;
              padding-top: 60px;
            }
            .title-text {
              padding: 32px 0;
            }
            .category-card {
              width: calc(25% - 22.5px);
              margin-top: 0;
              margin-right: 30px;
            }
            .category-card:nth-child(odd) {
              transform: translate(0, 0px);
            }
            .category-card:nth-child(even) {
              transform: translate(0, -60px);
            }
            .category-card:last-child {
              margin-right: 0px;
            }
          }
        `}
      </style>
      <>
        <h2 className="title-text">
          Pick your Book
        </h2>
        <div className="category-container">
          {category.map((data) => (
            <div
              className="category-card"
              key={data.key}
            >
              <div className="category-name">{data.label}</div>
              <div className="category-sub-title">
                <FiExternalLink />
              </div>
              <img src={data.image} className="category-background-img" />
              <div className="category-drop-shadow" />
            </div>
          ))}
        </div>
        <div className="dummy-padding" />
      </>
    </>
  );
};

export default Category;
