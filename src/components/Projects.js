import React, { useEffect, useState } from 'react';

import sanityClient from '../client.js';

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        subtitle,
        slug,
        link,
        tags,
        date,
        projectType,
        mainImage{
          asset->{
            _id,
            url
          },
          alt,
        }
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-gray-900 text-gray-900 min-h-screen p-5 md:p-12'>
      <section className='container mx-auto md:mx-18'>
        <div className='bg-blue-400 bg-opacity-80 rounded-lg lg:w-3/4 mx-auto'>
          <h1 className='text-3xl  md:text-7xl lg:text-8xl flex justify-center decorative text-gray-900 md:pb-2'>
            My ProJectS
          </h1>
          <h2 className='flex justify-center text-md md:text-3xl text-gray-900 mb-6 lg:mb-12 pb-2'>
            Learning via Error since 1983
          </h2>
        </div>
        <section className='grid lg:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, idx) => (
              <article
                key={project.slug}
                className='relative rounded-xl bg-gray-900 p-4 lg:p-6 bg-blue-400'
              >
                <h3 className=' text-gray-900 hover:text-pink-500 text-2xl lg:text-5xl font-bold py-1 '>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>

                <div className='text-gray-900 text-sm lg:text-xl'>
                  <p className='py-1'>
                    <strong className='font-bold'>{project.subtitle}</strong>
                  </p>
                  <p className='py-1'>
                    <strong className='font-bold'>Last Updated</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </p>

                  <p className='py-1'>
                    <strong className='font-bold'>Category</strong>:{' '}
                    {project.projectType}
                  </p>
                  <p className='my-1 text-lg md:text-lg leading-relaxed'>
                    Tags:{' '}
                    {project.tags.map((tag, idx) => (
                      <span
                        className='text-sm mx-1 px-1.5 bg-pink-400 bg-opacity-90 text-gray-900 rounded-xl'
                        key={idx}
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                  <span role='img' aria-label='rocket ship' className='mr-4'>
                    🚀
                  </span>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline hover:underline hover:text-pink-500 text-lg'
                  >
                    Check it out!
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
