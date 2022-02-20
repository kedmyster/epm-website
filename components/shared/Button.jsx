import classNames from "classnames";
import Link from "next/link";

const STYLE_LIGHT = "light";
const STYLE_DARK = "dark";

function Button({
  href,
  className = [],
  extendedClassNames = "",
  onClick,
  children,
  style = "light",
  target = null,
  rel = null,
}) {
  if (className.length === 0) {
    className = classNames(
      "cursor-pointer",
      "inline-block",
      "w-full",
      "md:w-52",
      "font-title",
      "text-base",
      "text-center",
      "uppercase",
      "border-3",
      "rounded-3xl",
      "select-none",
      "transition-all",
      "duration-150",
      "lg:px-10",
      "px-8",
      "py-2",
      "hover:bg-epm-yellow",
      "hover:border-epm-yellow",
      "hover:text-epm-gray-700",
      { "border-epm-gray-700 text-epm-gray-700": style === STYLE_DARK },
      { "border-white text-white": style === STYLE_LIGHT },
      extendedClassNames
    );
  }

  if (target === "_blank") {
    rel = "noopener noreferrer";
  }

  const settings = {
    className,
    target,
    rel,
  };

  return (
    <a href={href} onClick={onClick} {...settings}>
      {children}
    </a>
  );
}

export default Button;
