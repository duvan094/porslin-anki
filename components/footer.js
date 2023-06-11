'use client'

import styles from './footer.module.css'
import content from '../content/sv.json'
import Link from 'next/link'

export default function Footer() {

  const links = content.common.links.map((link, index) => (
    <Link href={ link.href } key={ index }>
      { link.title }
    </Link>
  ))




  return (
    <footer className={styles.footer}>
        <div className={styles.footerLinks}>{ links }</div>
        <small>{ content.common.footnote }</small>
    </footer>
  )
}