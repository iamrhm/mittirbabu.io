import React from "react";
import { FiExternalLink } from "react-icons/fi";

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const option = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const CategoryCard = ({ data, isOddChild }) => {
  const [cardRef,  crossedThreshold] = useIntersectionObserver({
    option,
  });

  React.useEffect(() => {
    if (!cardRef.current) return;
    if (crossedThreshold) {
      cardRef.current.classList.add('slide-in');
    }
  }, [crossedThreshold]);

  return (
    <>
      <style jsx>
        {`
          .category-card {
            border-radius: 8px;
            height: 247px;
            width: calc(50% - 10px);
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
            cursor: pointer;
          }
          .category-name,
          .category-sub-title {
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
          }
          .category-drop-shadow {
            width: 100%;
            bottom: 0;
            left: 0;
            height: 70%;
            position: absolute;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.838) 0%,
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
          .odd-card {
            opacity: 0;
            transform: translate(0, 20px);
            margin-right: 20px;
          }
          .even-card {
            opacity: 0;
            transform: translate(0, 20px);
          }
          .odd-card.slide-in {
            animation: odd-slide-in 1s cubic-bezier(0.87, 0, 0.13, 1) forwards;
          }
          .even-card.slide-in {
            animation: even-slide-in 1s cubic-bezier(0.87, 0, 0.13, 1) forwards;
          }
          @media (min-width: 991px) {
            .category-card {
              width: calc(25% - 20px);
              margin: unset;
              height: 380px;
            }
            .odd-card {
              margin: unset;
            }
            .even-card {
              margin: unset;
            }
          }
          @keyframes odd-slide-in {
            from {
              transform: translate(0, 20px);
              opacity: 0;
            }
            to {
              transform: translate(0, 0px);
              opacity: 1;
            }
          }
          @keyframes even-slide-in {
            from {
              transform: translate(0, 20px);
              opacity: 0;
            }
            to {
              transform: translate(0, -60px);
              opacity: 1;
            }
          }
        `}
      </style>
      <>
        <div
          className={`category-card ${isOddChild ? "odd" : "even"}-card`}
          ref={cardRef}
        >
          <div className="category-name">{data.label}</div>
          <div className="category-sub-title">
            <FiExternalLink />
          </div>
          <img src={data.image} className="category-background-img" />
          <div className="category-drop-shadow" />
        </div>
      </>
    </>
  );
};

export default CategoryCard;
