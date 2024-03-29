import Image from "next/image";
import { useIntl } from "react-intl";

export function SliderCustomPreviousArrow(props) {
  const { className, style, onClick, color } = props;
  const intl = useIntl();
  let path;

  if (color === "light") {
    path = "/img/icons/arrow_left.svg";
  } else if (color === "dark") {
    path = "/img/icons/arrow_left_dark.svg";
  } else if (color === "gray") {
    path = "/img/icons/arrow_left_light_gray.svg";
  }

  return (
    <div
      className={`${className} block z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={path}
        width="16"
        height="28"
        alt={intl.formatMessage({
          id: "common.previous",
          defaultMessage: "Previous",
        })}
      />
    </div>
  );
}

export function SliderCustomNextArrow(props) {
  const { className, style, onClick, color } = props;
  const intl = useIntl();
  let path;

  if (color === "light") {
    path = "/img/icons/arrow_right.svg";
  } else if (color === "dark") {
    path = "/img/icons/arrow_right_dark.svg";
  } else if (color === "gray") {
    path = "/img/icons/arrow_right_light_gray.svg";
  }

  return (
    <div
      className={`${className} block z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={path}
        width="16"
        height="28"
        alt={intl.formatMessage({
          id: "common.next",
          defaultMessage: "Next",
        })}
      />
    </div>
  );
}
