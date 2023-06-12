'use client'

import LazyLoadImage from './lazyLoadImage'
import styles from './imageGroup.module.css'

export default function ImageGroup(props) {
    
    // const columnAmountMobile = props.images.length >= 2 ? Math.round(props.images.length / 2) : props.images.length / props.images.length
    // const columnAmountDesktop = props.images.length >= 3 ? Math.round(props.images.length / 3) : props.images.length / props.images.length

    const calculateImagesPerColumn = (images, columnAmount) => {
        const imageColumns = []
        const columns = new Array(columnAmount)
        for(let i = 0; i < columns.length; i++) {
            columns[i] = []
        }

        for(let i = 0; i < images.length; i++) {
            
            for(let j = 0; j < columns.length; j++) {

                if(i % columnAmount === j) {
                    // console.log('columns', columns[j])
                    columns[j].push(images[i])
                }
            }
        }

        console.log('columns', columns)


        // for (let i = 0; i < images.length; i += columnAmount) {
        //     const imageColumn = images.slice(i, i + columnAmount);
        //     imageColumns.push(imageColumn)
        // }
        return columns
    }

    const imageColumnsDesktop = calculateImagesPerColumn(props.images, 3)
    const imageColumnsMobile = calculateImagesPerColumn(props.images, 2)

    const images = props.images && (
        <>
            <div className={`${styles.images} ${styles.desktop}` }>
                {
                    imageColumnsDesktop.map((imageColumn,index) => (
                        <div className={styles.imageColumn} key={index}>
                            { imageColumn.map((image) =>
                                <LazyLoadImage key={ image.src } image={image} />
                            )}
                        </div>
                    ))
                }
            </div>
            <div className={`${styles.images} ${styles.mobile}`}>
            {
                    imageColumnsMobile.map((imageColumn,index) => (
                        <div className={styles.imageColumn} key={index}>
                            { imageColumn.map((image) =>
                                <LazyLoadImage key={ image.src } image={image} />
                            )}
                        </div>
                    ))
                }
            </div>
        </>
    )

    return (
      <>
       { images }
      </>
    )
  }