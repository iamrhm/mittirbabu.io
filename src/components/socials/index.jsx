function Socials() {
  return (
    <>
      <style jsx>
      {`
        .socials {
          display: flex;
          padding: 24px 8px 0px 8px;
        }
        .social-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          border: 1px solid #d1d5db;
        }
      `}
      </style>
      <div className="socials">
        {[1,2,3,4].map((data) => (
          <div className="social-box">
            <div className="social-icon round">
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Socials