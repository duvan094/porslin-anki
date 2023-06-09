// 404.js
import Link from 'next/link'
import styles from './page.module.css'

export default function FourOhFour() {
  return (
    <main className={styles.main}>
        <section className={styles.section}>
            <h1>404 - Page Not Found :(</h1>
            <p>We couldn't find the page you were looking for...</p>
            <Link href="/">
                Go back home
            </Link>
        </section>
    </main>
  )
}