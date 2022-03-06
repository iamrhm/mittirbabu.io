function Socials({ socialList }) {
  return (
    <>
      <style jsx>
        {`
          .socials {
            display: flex;
            padding: 24px 8px 8px 8px;
          }
          .social-icon {
            width: 28px;
            height: 28px;
            margin-right: 12px;
            border: 1px solid #535b62;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: #535b62;
            text-decoration: none;
            cursor: pointer;
          }
          .social-icon :last-of-type {
            margin-right: 0px;
          }
        `}
      </style>
      <div className="socials">
        {socialList.map((data) => {
          const Icon = data.icon;
          return (
            <div className="social-box" key={data.key}>
              <a
                className="social-icon"
                href={data.href}
              >
                <Icon />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Socials;
