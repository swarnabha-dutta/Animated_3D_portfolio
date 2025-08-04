import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import Hero from "./sections/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"
import Contact from "./sections/Contact.jsx"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection />
      <ExperienceSection />
      <TechStack />
      <Contact />
      {/* <Footer/> */}
    </>
  )
}

export default App
