import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    Startsida
                </Link>
            </nav>
        </div>
      </header>
    )
  }