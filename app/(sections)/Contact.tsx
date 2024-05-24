import Image from 'next/image';
import LabelComponent from '@/components/LabelComponent';

const contactData = [
  {
    src: '/assets/mail.svg',
    text: 'cm.pablo.prog@gmail.com',
    link: 'mailto:cm.pablo.prog@gmail.com',
  },
  {
    src: '/assets/github.svg',
    text: 'pablo179',
    link: 'https://github.com/pablo179',
  },
  {
    src: '/assets/linkedin.svg',
    text: 'pablodcm',
    link: 'https://www.linkedin.com/in/pablodcm/',
  },
];

function Contact() {
  return (
    <div className='has-background-white columns rounded-lg px-3.5 drop-shadow-lg'>
      <p className='column text-xl font-semibold is-one-fifth'>
        <LabelComponent label='contact-me' />
      </p>
      <div className='column' >
        <div className='flex flex-row items-center justify-around flex-wrap' >
        {contactData.map(({ src, text, link }, i) => (
          <a
            key={i}
            className='text-lg font-light text-black hover:underline flex flex-row mx-1'
            href={link}
            target='blank'
          >
            <Image
              src={src}
              alt='logo'
              width={22}
              height={11}
            />
            <p className='pl-3'>{text}</p>
          </a>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
