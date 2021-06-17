import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

const Posts = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        subtitle,
        slug,
        tags,
        publishedAt,
        categories,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-gray-900 text-pink-100 min-h-screen p-5'>
      <section className='container mx-auto'>
        <h1 className='text-2xl flex justify-center decorative text-blue-400'>
          BLog pOsTs PAgE
        </h1>
        <h2 className='flex justify-center text-md text-blue-400 mb-6'>
          Peer Inside My Poor Brain
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData &&
            postData.map((post, idx) => (
              <article key={post.slug}>
                <Link
                  to={'/posts/' + post.slug.current}
                  key={post.slug.current}
                >
                  <span
                    className='block h-40 relative rounded-xl shadow-xl leading-snug bg-pink-200 border-blue-400'
                    key={idx}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='h-full w-full rounded object-cover absolute'
                    />
                    <span className='block relative h-full flex flex-col justify-end px-2 pb-4 mx-auto'>
                      <h3 className='text-pink-100 text-lg font-bold px-3 py-1 bg-gray-900 bg-opacity-75 rounded-t-lg'>
                        {post.title}
                      </h3>
                      <h4 className='text-pink-100 text-sm bg-gray-900 bg-opacity-75 px-3 py-1 rounded-b-lg'>
                        {post.subtitle}
                      </h4>

                      <div className='relative'>
                        {post.tags.map((tag, idx) => (
                          <span
                            className='inline-block mx-1 my-2 p-1 bg-pink-400 text-xs text-gray-900 rounded'
                            key={idx}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Posts;
