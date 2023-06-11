import MainContent from '../../components/mainContent'
import { getContent } from '../../content/getContent'
import NotFound from '../../components/notFound'
// import { useRouter } from 'next/router'

export default function Page({params}) {
    const content = getContent(params?.slug)

    return (
      <>
        {
          typeof content === 'boolean' && !content ? <NotFound></NotFound> : <MainContent content={content} />
        }        
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
    fallback: "blocking",
  };
}