import Header from './(sections)/Header';
import Contact from './(sections)/Contact';
import Projects from './(sections)/Projects';
import Experience from './(sections)/Experience';
import LangButton from '@/components/LangButton';
export default function Home() {
  return (
    <>
      {/* <LangButton /> */}
      <div className='section'>
        <Header />
        <Contact />
      </div>
        <Projects />
      <div className='flex h-80 w-full  justify-center gap-6'>
        <Experience />
      </div>
    </>
  );
}
