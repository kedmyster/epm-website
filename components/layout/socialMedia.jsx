import Image from "next/image";
import { useIntl } from "react-intl";

function SocialMedia() {
  const intl = useIntl();

  return (
    <>
      <div
        id="social-media"
        className="social-media fixed start-6 top-3/4 z-10"
      >
        <div className="mb-3">
          <a
            href="https://www.linkedin.com/company/epmip/"
            target="_blank"
            rel="noopener"
            className="transition-opacity duration-150 hover:opacity-70"
          >
            <Image
              src="/img/icons/linkedin-dark-gray.svg"
              width="30"
              height="30"
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://twitter.com/EPMIP"
            target="_blank"
            rel="noopener"
            className="transition-opacity duration-150 hover:opacity-70"
          >
            <Image
              src="/img/icons/twitter-dark-gray.svg"
              width="30"
              height="30"
              alt="Twitter"
            />
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://www.youtube.com/channel/UCr8mb7WyEcxGCEXIyYS0Cog"
            target="_blank"
            rel="noopener"
            className="transition-opacity duration-150 hover:opacity-70"
          >
            <Image
              src="/img/icons/youtube-dark-gray.svg"
              width="30"
              height="30"
              alt="YouTube"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
