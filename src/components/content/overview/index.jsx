function PostOverview() {
  return (
    <>
      <style jsx>
      {`
        .post-overview {
          display: flex;
          padding: 16px;
          flex-direction: column;
          width: 90%;
          background: #fff;
          border: 1px solid #D1D5DB;
          margin-bottom: 18px;
        }
        .header-section {
          display: flex;
          align-items: center;
          padding-bottom: 12px;
        }
        .user-image {
          width: 36px;
          height: 36px;
        }
        .user-name {
          height: 24px;
          min-width: 124px;
          margin-left: 12px;
        }
        .post-description {
          font-size: 15px;
          color: #2F363F;
          padding: 12px 0;
        }
        .post-meta-title {
          width: 320px;
          height: 24px;
        }
        .asset-overview {
          display: flex;
          flex-direction: column;
        }
        .meta-image-banner {
          width: 100%;
          height: 313px;
        }
        .meta-container {
          padding-top: 12px;
          width: 100%;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .meta-title {
          height: 24px;
          min-width: 180px;
          margin-bottom: 8px;
        }
        .meta-sub-title {
          height: 24px;
          width: 100px;
        }
        @media (max-width: 981px) {
          .post-overview {
            width: 100%;
            border-left: 0;
            border-right: 0;
            border-bottom: 0;
            border-radius: 0;
          }
        }
      `}
      </style>
      <div className="post-overview rectangle">
        <div className="header-section">
          <div className="user-image round loader"></div>
          <div className="user-name rectangle loader"></div>
        </div>
        <div className="post-description">
          <div className="post-meta-title rectangle loader"></div>
          <p className="post-content">
            Do eu sint adipisicing sunt eiusmod. Id ullamco labore cillum culpa sit do Lorem ex ad.
            Velit enim occaecat tempor fugiat nulla anim. Sint sunt Lorem ea amet eiusmod.
            Velit quis nostrud incididunt dolore et irure irure anim veniam elit commodo magna.
            Culpa non irure proident amet cupidatat eiusmod Lorem. Non magna duis id Lorem officia id.
          </p>
        </div>
        <div className="asset-overview">
          <div className="meta-image-banner rectangle loader">
          </div>
          <div className="meta-container">
            <div className="meta-title rectangle loader"></div>
            <div className="meta-sub-title rectangle loader"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostOverview