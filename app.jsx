/* eslint-disable */
/* virgIA · App root */

function App() {
  return (
    <>
      <Header />
      <main>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
