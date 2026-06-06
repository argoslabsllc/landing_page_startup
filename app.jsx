/* eslint-disable */
/* ArgosIA · App root */

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <MetricsMarquee />
        <Capabilities />
        <ProductsSection />
        <Process />
        <CaseStudy />
        <Stack />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
