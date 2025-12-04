import { lazy, Suspense } from 'react'
import NavBar from "./components/NavBar.jsx"

// Lazy load heavy components
const Hero = lazy(() => import("./sections/Hero.jsx"))
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection.jsx"))
const ExperienceSection = lazy(() => import("./sections/ExperienceSection.jsx"))
const TechStack = lazy(() => import("./sections/TechStack.jsx"))
const Contact = lazy(() => import("./sections/Contact.jsx"))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
)

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ShowcaseSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
    </>
  )
}

export default App