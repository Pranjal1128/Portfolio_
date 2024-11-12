import Banner from './components/sections/banner'
import About from './components/sections/about'
import Experience from './components/sections/experience'
import Header from './components/sections/header'
import Testimonial from './components/sections/testimonial'
import Pricing from './components/sections/pricing'
import Blogs from './components/sections/blogs'
import Contact from './components/sections/contact/contact'
import Portfolio from './components/sections/portfolio'
import Footer from './components/sections/footer'
import ProgressBar from './components/ui/progressBar'

const App = () => {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      {/* <Testimonial /> */}
      <Experience />
      <Portfolio />
       {/* <Pricing />
      <Blogs /> */}
      <Contact />
      <Footer />
      <ProgressBar />
    </main>
  )
}

export default App