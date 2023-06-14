import styles from './guestbook.module.css'

export default function Guestbook({content}) {

    const posts = content.map((post, index)=>(
        <div key={index} className={styles.post}>
            
            <div>
                <span className={styles.author}>{post.author}</span>
                <span className={styles.date}>{post.date}</span>
                {/* <div>
                    <small>{post.email}</small>
                    <small>{post.website}</small>
                </div> */}
            </div>
            <p dangerouslySetInnerHTML={{__html: post.text}} className={styles.content}></p>
            
        </div>
    ))

    return(
        <div className={styles.posts}>
            { posts }    
        </div>
    )
}