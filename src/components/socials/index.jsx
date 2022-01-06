function Socials() {
  return (
    <>
      <style jsx>
      {`
        .socials {
          display: flex;
          padding: 24px 8px 24px 8px;
          justify-content: space-between;
        }
        .social-icon {
          width: 24px;
          height: 24px;
        }
      `}
      </style>
      <div className="socials">
        {[1,2,3,4].map((data) => (
          <div className="social-box">
            <div className="social-icon round loader">
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Socials