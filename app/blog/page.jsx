import BlogListItem from '@/components/BlogListItem'
import React from 'react'

const getArticles = async () => {
    const res =  await fetch('https://api.spaceflightnewsapi.net/v4/blogs/?limit=10');

    return res.json();
}


const page =  async () => {
    const {results} =  await getArticles();
  return (
    <main className='p-5 md:px-52'>
        <div className="w-full shadow-lg">
            <h1 className='text-center mb-10'> My Blog </h1>

            <ul className='list-none p-5'>
                {results.map(post => {
                    return (<BlogListItem news={post} key={post.id} />)
                })}
            </ul>
        </div>
    </main>
  )
}

export default page
