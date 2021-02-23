import HeadObject from '../components/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <HeadObject />
      <Nav />
      <main className="mt-6 sm:mt-12 md:mt-16 flex flex-col text-white pl-12 md:pl-20">
        <section className="heading" aria-hidden="true">
          <div>Claire Wang<div className="inline opacity-50">.</div></div>
        </section>
        <section className="mt-8 md:mt-16 w-2/3 lg:w-1/2 md:text-xl">
          Hello! I’m Claire Wang, a rising high school sophomore and a lover of neuroscience, coding, comics, and design! I’m a researcher in BCIs and parallel computing and I believe in the art of making for the betterment of the world. DFTBA¹!
        </section>
        <section>
          <img className="mt-8 md:mt-12 w-1/2 sm:w-1/3 lg:w-1/4" src="/signature.png" alt="signature of claire" aria-hidden="true"/>
        </section>
      </main>
      <footer className="text-white mt-8 md:mt-16 pl-12 md:pl-20 mb-5 flex flex-col space-y-4 text-xs sm:text-sm">
        <div id="footnotes" className="font-inter">
          ¹DFTBA: Don’t forget to be awesome!
        </div>
        <div className="font-gilroy uppercase opacity-40">
          Copyright {new Date().getFullYear()} Claire Wang.
        </div>
      </footer>
    </div>
  )
}
