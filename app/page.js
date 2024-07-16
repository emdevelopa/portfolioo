import AboutMe from "./components/aboutme/aboutme";
import Contacts from "./components/contacts/contactme";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import Quote from "./components/quote/quote";
import Skills from "./components/skills/skills";

export default function Home() {
  return (
    <>
      <main className="px-4 py-6 md:px-8 lg:px-14 xl:px-28">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
      </main>
      {/* <Footer /> */}
    </>
  );
}
