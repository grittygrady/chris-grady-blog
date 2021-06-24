import React from 'react';
import BGImg from '../images/bwp-wall.jpeg';

const Home = () => {
  return (
    <main>
      <img
        src={BGImg}
        alt='brick wall with black white and pink paint'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center md:justify-center items-start xl:justify-start min-h-screen pt-12 pl-4 lg:pl-24 pr-16 '>
        <h1 className='absolute text-5xl md:text-8xl lg:text-9xl text-pink-500 font-bold leading-none md:leading-snug bg-gray-900 h-28 md:h-72 lg:h-auto rounded md:rounded-2xl w-48  md:w-7/12 decorative'>
          <span className='decorative '>Oh mY BLoG!</span>
        </h1>
      </section>
    </main>
  );
};

export default Home;
