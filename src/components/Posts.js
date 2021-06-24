import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

const Posts = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
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

  console.log(postData);

  const determineCategory = (catId) => {
    if (catId === '4853bfbe-01f8-4e10-b45d-9f5a36596c44') {
      return 'Coding';
    } else if (catId === '718899ac-399d-4712-93d2-a0557556f93a') {
      return 'Music';
    }
    return 'Random';
  };

  return (
    <main className='bg-gray-900 text-pink-100 min-h-screen p-5 md:p-12'>
      <section className='container mx-auto md:mx-18'>
        <div className='bg-blue-400 bg-opacity-80 rounded-lg lg:w-3/4 mx-auto'>
          <h1 className='text-3xl  md:text-7xl lg:text-8xl flex justify-center decorative text-gray-900 md:pb-2'>
            BLog pOsTs
          </h1>
          <h2 className='flex justify-center text-md md:text-3xl text-gray-900 mb-6 pb-2'>
            Peer Inside My Poor Brain
          </h2>
        </div>
        <div className='grid lg:grid-cols-3 gap-8 md:gap-16'>
          {postData &&
            postData.map((post, idx) => (
              <article key={post.slug.current}>
                <Link
                  to={'/posts/' + post.slug.current}
                  key={post.slug.current}
                >
                  <span
                    className='block h-40 md:h-64 relative rounded-xl md:rounded-3xl leading-snug bg-pink-200 border-blue-400'
                    key={post.slug.current}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='h-full w-full rounded object-cover absolute'
                    />
                    <span className='block relative h-full flex flex-col justify-end px-2 pb-4 mx-auto'>
                      <div className='md:mb-6'>
                        <h3 className='text-pink-100 text-lg md:text-3xl lg:text-2xl  font-bold px-2 py-1 bg-gray-900 bg-opacity-80 rounded-t-lg leading-tight'>
                          {post.title}
                        </h3>
                        <h4 className='text-pink-100 text-xs md:text-xl lg:text-lg bg-gray-900 bg-opacity-80 px-3 py-1 rounded-b-lg'>
                          {post.subtitle}
                        </h4>
                      </div>
                      <div className='relative md:mb-2'>
                        {post.categories.map((category, idx) => (
                          <span className='block my-1' key={idx}>
                            <div className='mx-1 inline-block  p-1 bg-blue-400 text-sm md:text-lg text-gray-900 rounded'>
                              {category._ref &&
                                determineCategory(category._ref).toUpperCase()}
                            </div>
                          </span>
                        ))}
                        {post.tags.map((tag, idx) => (
                          <span
                            className='inline-block mx-1 p-1 bg-pink-400 text-xs md:text-lg md:mt-2 text-gray-900 rounded'
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
