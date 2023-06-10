'use client'

import MainContent from '../components/mainContent'

import { useState } from 'react'
import { getContent } from '../content/getContent'
import NotFound from '../components/notFound'


Page.getInitialProps = async (ctx) => {
  return {
    props: {},
  };
}

export default function Page({ params }) {

    const [content, setContent] = useState(getContent(params.slug))

    return (
      <>
        {
          content ? <MainContent content={content} /> : <NotFound></NotFound>
        }
        
      </>
    )
}
