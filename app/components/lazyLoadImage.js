'use client'

import { useState, useEffect } from 'react'
import * as NextImage from 'next/image'
import styles from './mainContent.module.css'

export default function LazyLoadImage({image}) {

    const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

    useEffect(()=>{
      const img = new Image()
      console.log(img)

      img.onload = () => {
        console.log('loaded! 1')
        setLoaded(true)
      }
      
      img.src = image.src
    },[])

    return (
      <>
        <div className={styles.imageWrapper}>
          {/* <div className={`${styles.imageContainer} ${loaded ? styles.loaded : ''}`}> */}
          <div className={`${styles.imageContainer} ${styles.loaded}`}>
                <img src={'/images/'+ image?.src} alt={image?.alt} onLoad={onLoad}></img>
                {/* <NextImage
                    src={'/images/'+ image?.src}
                    alt={image?.alt}
                    width={width}
                    height={height}
                    onLoadingComplete={(img) => isLoaded(img)}
                    loading="lazy"
                /> */}
            </div>
        </div>
      </>
    )
  }