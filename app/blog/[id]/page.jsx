import Image from 'next/image';
import React from 'react'
const getArticle = async (id) => {
  const res =  await fetch('https://api.spaceflightnewsapi.net/v4/blogs/' + id);

  return res.json();
}

const page = async ({params}) => {
  const {id} = params

  const news = await getArticle(id);

  return (
    <main className='my-10 mx-auto max-w-2xl shadow-lg p-5'> 
      <h1 className="text-center font-bold text-3xl mb-4">
        {news.title}
      </h1>
      <h6 className="text-center font-bold text-sm mb-5"> {news.published_at} </h6>
      <Image 
        src={news.image_url}
        alt=''
        width={100}
        height={100}
        className='w-full aspect-video object-cover rounded'
      />
      <p>
        {news.summary}
      </p>
      
    </main>
  )
}

export default page
