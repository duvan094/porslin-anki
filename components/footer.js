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
        <div className={styles.siteMap}>
          <div className={`${styles.footerLinks}`}>{ links }</div>
        </div>
        <div className={styles.wrapper}>
          <small dangerouslySetInnerHTML={{__html: content.common.footerText}}></small>
          <small><b>{ content.common.footnote }</b></small>
        </div>
    </footer>
  )
}