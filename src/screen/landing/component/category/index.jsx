import React from "react";

const Category = () => {
  return (
    <>
      <style jsx>
        {`
          .category-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-grow: 0;
            overflow-x: auto;
          }
          .category-card {
            border-radius: 6px;
            margin-right: 14px;
            height: 248px;
            width: 184px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-grow: 0;
          }
        `}
      </style>
      <div className="category-container">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
          <div className="category-card loader"></div>
        ))}
      </div>
    </>
  );
};

export default Category;
