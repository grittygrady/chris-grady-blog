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
      <section className='relative flex justify-center lg:justify-start  pt-12 pl-4 lg:pl-24 pr-16 decorative mx-auto'>
        <div className='bg-gray-900 bg-opacity-80 md:bg-opacity-100 flex flex-col'>
          <h1 className='text-3xl md:text-5xl lg:text-7xl text-blue-400 leading-none md:leading-snug   md:h-20 rounded  lg:w-64 lg:h-60 decorative'>
            Hi, I'm <span className='text-pink-500 inline'>Grady</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            dolore nam eos id, expedita iusto hic nisi minima. Dicta facilis
            tempore alias est debitis ut molestiae, nulla dignissimos labore
            tempora sed! Velit qui laborum deleniti maiores fuga distinctio!
            Praesentium quia mollitia dolor ratione molestiae possimus suscipit
            laudantium repudiandae fugiat ut!
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
