import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
            <Link href="/">
                Logo
            </Link>
            <nav className={styles.nav}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>
        </div>
      </header>
    )
  }