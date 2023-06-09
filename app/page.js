import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
    return (
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Welcome to this site!</h1>
          <p>This is a landing page. This will be a start of a site 🛠️</p>
          <Link href="/about">
            Read more about this site
          </Link>
        </section>
        <section className={styles.section}>
          <ul>
            <li>
              This template can be used to setup React pages with router quickly
            </li>
          </ul>
        </section>
      </main>
    )
}