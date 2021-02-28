import classNames from "classnames";

function SectionHeader({ name, title }) {
  return (
    <>
      {name && (
        <div className="section-name animate font-title text-xs uppercase section-name">
          {name}
        </div>
      )}
      {title && (
        <div className="section-title animate font-title text-2xl lg:text-3xl">
          {title}
        </div>
      )}
    </>
  );
}

export default SectionHeader;
