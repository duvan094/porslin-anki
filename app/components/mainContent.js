'use client'

import { Fragment } from 'react'
import ImageGroup from './imageGroup'

export default function MainContent({ content }) {
    
    const paragraphs = content?.paragraphs?.map((paragraph, index) => (
        <Fragment key={index}>  
            { paragraph?.subHeading && <h2>{paragraph.subHeading}</h2>}
            { paragraph?.text && <p dangerouslySetInnerHTML={{__html: paragraph.text}}></p>}
            { paragraph.images && <ImageGroup images={ paragraph.images } />}
            { paragraph?.footnote && <small>{ paragraph.footnote }</small>}
        </Fragment>
    ));

    return (
      <main>
        { content?.title && <h1>{ content.title }</h1>}
        { content?.paragraphs && paragraphs }
      </main>
    )
  }