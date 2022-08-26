import React from "react";
import { useRouter } from "next/router";

import categoryData from "../../__mocks__/category.data";

const segmentOptions = [
  { label: "All", key: "all" },
  { label: "Photos", key: "photos" },
  { label: "Videos", key: "videos" }
];
const Workspace = () => {
  const router = useRouter();
  const [workspaceData, setWorkspaceData] = React.useState(null);
  const [selectedFilter, updateFilter] = React.useState(segmentOptions[0].key);

  const fetchWorkSpaceData = (key) => {
    const currWorkspaceData = categoryData.find((data) => data.key === key);
    setWorkspaceData(currWorkspaceData);
  };

  const onFilterSelection = (filter) => {
    updateFilter(filter);
  };

  React.useEffect(() => {
    const query = router.query.key;
    fetchWorkSpaceData(query);
    updateFilter(segmentOptions[0].key);
  }, [router.query.key]);

  return (
    <>
      <style jsx>
        {`
          .header-banner {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 48px;
          }
          .workspace-title {
            font-size: 24px;
            color: #fff;
            font-weight: 500;
            letter-spacing: 4px;
            text-transform: uppercase;
          }
          .workspace-description {
            padding-top: 8px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
          }
          .segment-filters {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 16px;
          }
          .segment-menus {
            text-transform: uppercase;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 30px;
            padding: 16px 24px;
            cursor: pointer;
          }
          .selected-filter {
            color: rgba(255, 255, 255, 1);
          }
          @media (min-width: 981px) {
            .workspace-title {
              font-size: 48px;
            }
            .workspace-description {
              padding-top: 8px;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.7);
            }
          }
        `}
      </style>
      <div className="work-space-page-container">
        <div className="header-banner">
          <div className="workspace-title">{workspaceData?.label}</div>
          <div className="segment-filters">
            {segmentOptions.map((option) => (
              <span
                className={`segment-menus ${
                  option.key === selectedFilter ? "selected-filter" : ""
                }`}
                onClick={() => onFilterSelection(option.key)}
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace;
