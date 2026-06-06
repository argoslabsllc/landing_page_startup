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
        <ServicesGrid />
        <FlagshipService />
        <IndustriesSection />
        <HowWeWork />
        <CaseStudy />
        <Stack />
        <TeamSection />
        <Testimonial />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
