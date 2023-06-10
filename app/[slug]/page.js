'use client'

import MainContent from '../components/mainContent'

import { useState, useEffect } from 'react'
import { getContent } from '../content/getContent'
import NotFound from '../components/notFound'


export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'projekt' } }, { params: { id: 'historia' } }, { params: { id: 'tekniker' } }, { params: { id: 'historia' } }],
    fallback: false,
  };
}

Page.getInitialProps = async (ctx) => {
  return {
    props: {},
  };
}

export default function Page(params) {

    const [content, setContent] = useState()

    useEffect(()=>{
      console.log('params', params)
      // console.log(getContent(params.slug))
      // setContent(getContent(params.slug))
    },[])

    return (
      <>
        {
          // typeof content === 'boolean' && !content ? <NotFound></NotFound> : <MainContent content={content} />
        }

        <h1>Page with slug!</h1>
        
      </>
    )
}
