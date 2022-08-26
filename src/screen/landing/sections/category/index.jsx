import React from "react";
import { useRouter } from "next/router";

import SliderCard from "../../../../components/slider-card";
import category from "../../../../__mocks__/category.data";

const Category = () => {
  const router = useRouter();

  const navigateToCategory = (categoryOptions) => {
    router.push(categoryOptions.link);
  };

  return (
    <>
      <style jsx>
        {`
          .category-container {
            width: 100%;
            max-width: 1120px;
            margin: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding-bottom: 24px;
          }
          .title-text {
            width: 100%;
            color: #fff;
            max-width: 1120px;
            margin: auto;
            padding: 32px 0px;
          }
          :global(.category-card:last-child) {
            margin-right: 0px;
          }
          @media (min-width: 991px) {
            .category-container {
              flex-direction: row;
              overflow: hidden;
              overflow-x: auto;
              padding: unset;
              align-items: flex-start;
              justify-content: space-between;
              padding-top: 60px;
              height: 100%;
            }
            .title-text {
              padding: 32px 0;
            }
            :global(.category-card:last-child) {
              margin: unset;
            }
          }
        `}
      </style>
      <>
        <h2 className="title-text">Pick your space</h2>
        <div className="category-container">
          {category.map((data, index) => (
            <SliderCard
              data={data}
              key={data.key}
              isOddChild={ (index + 1) % 2 }
              isLink
              onClick={navigateToCategory}
            />
          ))}
        </div>
      </>
    </>
  );
};

export default Category;
