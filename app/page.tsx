import Header from './Header';
import Contact from './Contact';
import MyProjects from './MyProjects';
export default function Home() {
  return (
    <div className='p-14 w-full' >
      <Header />
      <Contact />
      <div className='w-full flex justify-center  gap-6' >
        <MyProjects />
        <MyProjects />
      </div>
    </div>
  );
}
