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
    <main className='bg-pink-100 min-h-screen p-6'>
      <article className='container shadow-lg mx-auto bg-gray-900 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-4'>
            <div className='bg-white bg-opacity-75 rounded p-8'>
              <h1 className='decorative text-3xl lg:text-6xl mb-2'>
                {singlePost.title}
              </h1>
              <h3>{singlePost.subtitle}</h3>
              <div>
                <p>{singlePost.tags}</p>
                <p>{new Date(singlePost.publishedAt).toLocaleDateString()}</p>
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
        <div className='px-1 lg:px-48 py-1 lg:py-20 prose lg:prose-xl bg-blue-200 max-w-full'>
          <BlockContent
            blocks={singlePost.body}
            projectId='3t2agff2'
            dataset='production'
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
