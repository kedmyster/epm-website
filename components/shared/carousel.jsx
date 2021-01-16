import Image from "next/image";

export function SliderCustomPreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} block z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src="/img/icons/arrow_left.svg"
        width="16"
        height="28"
        alt="Previous"
      />
    </div>
  );
}

export function SliderCustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} block z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src="/img/icons/arrow_right.svg"
        width="16"
        height="28"
        alt="Previous"
      />
    </div>
  );
}