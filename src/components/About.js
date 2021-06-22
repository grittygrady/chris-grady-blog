import profilePic from '../images/profilecandyskull.jpg';
import drowningBackground from '../images/drowning.jpg';

const About = () => {
  return (
    <main>
      <img
        src={drowningBackground}
        alt='Drowning'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center lg:justify-start min-h-screen pt-12 pl-4 lg:pl-24 pr-16 decorative'>
        <h1 className='text-5xl lg:text-7xl text-pink-500 font-bold leading-none md:leading-snug bg-gray-900 h-28 md:h-20 rounded w-48 lg:w-64 lg:h-60 decorative'>
          Oh mY BLoG!
        </h1>
      </section>
    </main>
  );
};

export default About;
