import SectionHeader from "../../shared/SectionHeader";

function StandardTemplate({name, title, children}) {
  return (
    <section
      id=""
      className="section bg-white lg:min-h-screen"
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
        <div className="text">
          {children}
        </div>
      </div>
    </section>
  );
}

export default StandardTemplate;
