'use client'

import { useState, useEffect } from 'react'
import styles from './mainContent.module.css'

export default function LazyLoadImage({image}) {

    const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

    useEffect(()=>{
      const img = new Image()

      img.onload = () => {
        setLoaded(true)
      }
      
      img.src = '/images/' + image.src
    },[])

    return (
      <>
        <div className={styles.imageWrapper}>
          <div className={`${styles.imageContainer} ${loaded ? styles.loaded : ''}`}>
                <img src={'/images/'+ image?.src} alt={image?.alt} onLoad={onLoad}></img>
            </div>
        </div>
      </>
    )
  }