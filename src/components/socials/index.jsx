import profileData from '../../__mocks__/profile.data';

function Socials({ socialList = profileData.socials }) {
  return (
    <>
      <style jsx>
        {`
          .socials {
            display: flex;
          }
          .social-icon {
            width: 28px;
            height: 28px;
            margin-right: 24px;
            border: 1px solid #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
          }
          .social-box:last-child :global(.social-icon) {
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
