const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          See MyPract in Action
        </h2>
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://capture.navattic.com/cm3rgw34o001p03l99owbawe2"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
            allow="fullscreen"
            data-navattic-demo-id="cm3rgw34o001p03l99owbawe2"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;