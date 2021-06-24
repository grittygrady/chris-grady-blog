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
    <main className='bg-gray-900 text-pink-100 min-h-screen p-5 md:p-12'>
      <section className='container mx-auto md:mx-18'>
        <div className='bg-blue-400 bg-opacity-80 rounded-lg lg:w-3/4 mx-auto'>
          <h1 className='text-3xl  md:text-7xl lg:text-8xl flex justify-center decorative text-gray-900 md:pb-2'>
            My ProJectS
          </h1>
          <h2 className='flex justify-center text-md md:text-3xl text-gray-900 mb-6 pb-2'>
            Learning via Error since 1983
          </h2>
        </div>
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, idx) => (
              <article
                key={project.slug}
                className='relative rounded-xl shadow-xl bg-gray-900 p-8 border border-blue-400'
              >
                <h3 className='text-pink-100 hover:text-blue-400 text-lg font-bold py-1 bg-gray-900 bg-opacity-75 rounded-t-lg'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>

                <div className='text-pink-100 text-xs '>
                  <p className='py-1'>
                    <strong className='font-bold'>Last Updated</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </p>

                  <p className='py-1'>
                    <strong className='font-bold'>{project.subtitle}</strong>
                  </p>

                  <p className='py-1'>
                    <strong className='font-bold'>Category</strong>:{' '}
                    {project.projectType}
                  </p>
                  <p className='my-1 md:text-lg text-pink-100 leading-relaxed'>
                    Tags:
                    {project.tags.map((tag, idx) => (
                      <span
                        className='mx-1 px-1 bg-blue-200 text-gray-900 rounded-xl'
                        key={idx}
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline hover:text-blue-200 text-lg'
                  >
                    Check it out!
                  </a>
                  <span role='img' aria-label='rocket ship'>
                    🚀
                  </span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;
