'use client'

import LazyLoadImage from './lazyLoadImage'
import styles from './mainContent.module.css'

export default function ImageGroup(props) {
    
    const images = props.images && (
        <div className={ styles.images }>
            { props.images.map((image) =>
                <LazyLoadImage key={ image.src } image={image} />
            )}
        </div>
    )

    return (
      <>
       { images }
      </>
    )
  }