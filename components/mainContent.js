'use client'

import { Fragment } from 'react'
import ImageGroup from './imageGroup'
import copy from '../content/sv.json'
import styles from './mainContent.module.css'

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
        <div className='mainWrapper'>
          { content?.title && <h1>{ content.title }</h1>}
          { content?.author && <small className={styles.authorContainer}>{copy.common.author} <span className={styles.authorTitle}>{ content.author }</span></small>}
          { content?.paragraphs && paragraphs }
        </div>
      </main>
    )
  }