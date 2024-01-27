import Link from 'next/link'
import React from 'react'

const BlogListItem = ({news}) => {
  return (
    <li className='p-3 border rounded border-blue-900 mb-5'>
      <Link href={"/blog/" + news.id}>
        <p className='text-sm'> {news.published_at} </p>
        <p className="font-bold text-2xl">
            {news.title}
        </p>
      </Link>
    </li>
  )
}

export default BlogListItem
