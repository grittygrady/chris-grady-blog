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
    <main className='bg-gray-900 text-pink-100 min-h-screen p-5'>
      <section className='container mx-auto'>
        <h1 className='text-2xl flex justify-center decorative text-blue-400'>
          My ProJectS
        </h1>
        <h2 className='flex justify-center text-md text-blue-400 mb-6'>
          Learning via Error since 1983
        </h2>
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, idx) => (
              <article
                key={project.slug}
                className='relative rounded-xl shadow-xl bg-gray-900 p-8 border border-blue-400'
              >
                <h3 className='text-pink-100 hover:text-blue-400 text-lg font-bold px-3 py-1 bg-gray-900 bg-opacity-75 rounded-t-lg'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>

                <div className='text-pink-100 text-xs space-x-4'>
                  <br />
                  <span>
                    <strong className='font-bold'>Last Updated</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <br />
                  <span>
                    <strong className='font-bold'>{project.subtitle}</strong>
                  </span>
                  <br />
                  <span>
                    <strong className='font-bold'>Category</strong>:{' '}
                    {project.projectType}
                  </span>
                  <p className='my-3 md:text-lg text-pink-100 leading-relaxed'>
                    {project.tags}
                  </p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline hover:text-blue-200'
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
