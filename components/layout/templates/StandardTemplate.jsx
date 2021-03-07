import { useEffect } from "react";
import SectionHeader from "../../shared/SectionHeader";

function StandardTemplate({name, title, children}) {
  useEffect(() => {
    document.body.dataset.headerTheme = "dark";
  }, []);

  return (
    <section
      id="standard-template"
      className="section bg-white pt-10 lg:pt-20 lg:px-72 lg:min-h-screen"
      data-side-menu-color="dark"
      data-side-menu-visibility="visible"
      data-header-menu-visibility="hidden"
    >
      <div className="container mx-auto px-8 py-8">
        <div className="mb-6">
          <SectionHeader
            name={name}
            title={title}
          />
        </div>
        <div className="text animate opacity-0">
          {children}
        </div>
      </div>
    </section>
  );
}

export default StandardTemplate;
