import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer, WhatsAppFloat } from "@/components/portfolio/Layout";
import { About, Contact, Education, Experience, Hero, Process, Projects, Services, Skills, Why } from "@/components/portfolio/Sections";

const title = "Ayesha Ferdous | Shopify Developer";
const description =
  "Professional Shopify Developer specializing in Shopify store design, theme customization, Liquid development, custom sections, and e-commerce solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Process />
        <Why />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
