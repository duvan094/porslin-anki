'use client'

import { useState } from 'react'
import * as NextImage from 'next/image'
import styles from './mainContent.module.css'

export default function LazyLoadImage({image}) {

    const [loaded, setLoaded] = useState(false)
    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(150)


    const isLoaded = (img) => {
      setLoaded(true)
      setWidth(img.naturalWidth)
      setHeight(img.naturalHeight)
    }

    return (
      <>
        <div className={styles.imageWrapper}>
          <div className={`${styles.imageContainer} ${loaded ? styles.loaded : ''}`}>
                <NextImage
                    src={'/images/'+ image?.src}
                    alt={image?.alt}
                    width={width}
                    height={height}
                    onLoadingComplete={(img) => isLoaded(img)}
                    loading="lazy"
                />
            </div>
        </div>
      </>
    )
  }