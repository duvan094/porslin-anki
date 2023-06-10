// 'use client'

import MainContent from '../components/mainContent'

// import { useState, useEffect } from 'react'
import { getContent } from '../content/getContent'
import NotFound from '../components/notFound'

// Page.getInitialProps = async (ctx) => {
//   return {
//     props: {},
//   };
// }

export default function Page(params) {

//    const [content, setContent] = useState()

    // useEffect(()=>{
    //   console.log('params', params)
    //   // console.log(getContent(params.slug))
    //   // setContent(getContent(params.slug))
    // },[])

    return (
      <>
        {
          // typeof content === 'boolean' && !content ? <NotFound></NotFound> : <MainContent content={content} />
        }

        <h1>Page with slug!</h1>
        
      </>
    )
}

export async function getStaticPaths() {
  const paths = [
    {
      params: { slug: 'historia' },
    },
    {
      params: { slug: "galleri" },
    },
    {
      params: { slug: "projekt" },
    },
    {
      params: { slug: "litteratur" },
    },
    {
      params: { slug: "branning" },
    },
    {
      params: { slug: "utflykter" },
    },
    {
      params: { slug: "tekniker" },
    },
    {
      params: { slug: "farg-och-material" },
    },
  ];

  return {
    paths,
    fallback: true,
  };
}

