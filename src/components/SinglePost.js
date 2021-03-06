import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        subtitle,
        _id,
        slug,
        categories,
        tags,
        body,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          },
          alt,
        },
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className='bg-gray-900 min-h-screen p-6'>
      <article className='container shadow-lg mx-auto bg-gray-900 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-2'>
            <div className='bg-white bg-opacity-80 md:bg-opacity-80 md:w-5/6 rounded p-2'>
              <h1 className='decorative text-2xl md:text-5xl lg:text-7xl mb-1 md:mb-2 lg:ml-16'>
                {singlePost.title}
              </h1>
              <h3 className='md:text-xl lg:text-2xl md:mb-2 lg:ml-16'>
                {singlePost.subtitle}
              </h3>
              <div className='lg:ml-16'>
                {singlePost.tags.map((tag, idx) => (
                  <span
                    className='mx-1 px-1 bg-pink-400 text-xs md:text-lg text-gray-900 rounded '
                    key={idx}
                  >
                    {tag}
                  </span>
                ))}

                <p className='mx-2 text-sm md:text-lg md:mt-2'>
                  {new Date(singlePost.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <img
            src={urlFor(singlePost.mainImage).url()}
            alt={singlePost.mainImage.alt}
            className='w-full object-cover rounded-t'
            style={{ height: '400px' }}
          />
        </header>
        <div className='px-2 lg:px-36 py-2 lg:py-20 prose md:prose-xl lg:prose-2xl bg-blue-400 rounded-b border-t-2 border-gray-900 max-w-full '>
          <BlockContent
            blocks={singlePost.body}
            projectId='3t2agff2'
            dataset='production'
            className='md:w-3/4 mx-auto'
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
