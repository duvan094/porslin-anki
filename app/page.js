'use client'

import MainContent from './components/mainContent'

import { useState, useEffect } from 'react'
import { getContent } from './content/getContent'
import NotFound from './components/notFound'


Page.getInitialProps = async (ctx) => {
  return {
    props: {},
  };
}

export default function Page({searchParams}) {

    const [content, setContent] = useState(getContent(searchParams?.path?.length ? searchParams?.path[0] : null))

    return (
      <>
        {
          content ? <MainContent content={content} /> : <NotFound></NotFound>
        }
        
      </>
    )
}
