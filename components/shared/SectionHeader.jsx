import classNames from "classnames";

function SectionHeader({ name, title }) {
  return (
    <>
      {name && (
        <div className="section-name animate opacity-0 font-title text-xs uppercase section-name">
          {name}
        </div>
      )}
      {title && (
        <div className="section-title animate opacity-0 font-title text-2xl xl:text-3xl">
          {title}
        </div>
      )}
    </>
  );
}

export default SectionHeader;
