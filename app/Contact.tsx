import Image from 'next/image';
import ContactMe from '@/clientComponents/contactMe';

const contactData = [
  { src: '/mail.svg', text: 'cm.pablo.prog@gmail.com', link: 'mailto:cm.pablo.prog@gmail.com' },
  { src: '/github.svg', text: 'pablo179', link: 'https://github.com/pablo179' },
  { src: '/linkedin.svg', text: 'pablodcm', link: 'https://www.linkedin.com/in/pablodcm/' },
];

function Contact() {

  return (
    <div className='bg-white flex flex-row items-center justify-around h-12 w-full px-3.5 rounded-lg drop-shadow-lg my-10'>
      <ContactMe />
      {
        contactData.map(({ src, text, link}, i) => (
          <a key={i} className='flex flex-row items-center justify-center text-lg font-light hover:underline' href={link} target='blank' >
            <Image src={src} alt='logo' width={22} height={11} />
            <span className='px-1'>{text}</span>
          </a>
        ))
      }
    </div>
  );
}

export default Contact;
