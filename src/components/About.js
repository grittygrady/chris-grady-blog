const About = () => {
  return (
    <div className='bg-drowningPic bg-center md:min-h-screen bg-cover py-16 '>
      <section className='container px-2 mx-auto flex  '>
        <div className='bg-pink-500 bg-opacity-75 rounded p-4 mx-4 mt-0 '>
          <div className='flex flex-col'>
            <h1 className='decorative bg-gray-900 bg-opacity-90 rounded-lg text-blue-400 text-3xl text-center p-3 md:text-8xl'>
              Chris <span className='decorative text-pink-600'>GraDy</span>
            </h1>

            <p className='text-gray-900 p-6 text-lg md:text-3xl'>
              90s obsessed. Retro gaming. Punk rock. Jazz. Coding. Guitar.
              Sampling. Howling disguised as "singing". Vices include but are
              not limited to:{' '}
            </p>
            <ul className='ml-2  text-md md:text-2xl px-8'>
              <li className='py-1 md:py-3'>A case of sparkling water a day.</li>
              <li className='py-1 md:py-3'>
                The Simpsons. Even the bad episodes.
              </li>
              <li className='py-1 md:py-3'>Raspberry Pi.</li>
              <li className='py-1 md:py-3'>
                Graphic novels - don't you{' '}
                <span className='font-bold'>dare</span> call them comic books
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
