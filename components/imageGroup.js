'use client'

import LazyLoadImage from './lazyLoadImage'
import styles from './mainContent.module.css'

export default function ImageGroup(props) {
    
    const columnAmount = props.images.length >= 3 ? props.images.length / 3 : props.images.length / props.images.length
    const imageColumns = []
    for (let i = 0; i < props.images.length; i += columnAmount) {
        const imageColumn = props.images.slice(i, i + columnAmount);
        imageColumns.push(imageColumn)
    }

    const images = props.images && (
        <div className={ styles.images }>
            {
                imageColumns.map((imageColumn,index) => (
                    <div className={styles.imageColumn} key={index}>
                        { imageColumn.map((image) =>
                            <LazyLoadImage key={ image.src } image={image} />
                        )}
                    </div>
                ))
            }
        </div>
    )

    return (
      <>
       { images }
      </>
    )
  }