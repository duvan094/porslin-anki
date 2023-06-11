"use client"

import Link from 'next/link'
import styles from './header.module.css'
import HamburgerButton from './hamburgerButton'
import content from '../content/sv.json'
import { useState, useRef, useEffect } from 'react'

export default function Header() {

    const [toggled, setToggled] = useState(false)

    const toggleMenu = () => {
      setToggled(!toggled)
    }

    const links = content.common.links.map((link, index) => (
      <Link href={ link.href } key={ index } onClick={toggleMenu}>
        { link.title }
      </Link>
    ))

    const wrapperRef = useRef(null);
    const button = useRef(null)

    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {

          if(button.current.contains(event.target)){
            return
          }

          setToggled(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef]);

    return (
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
            <HamburgerButton toggled={toggled} toggle={toggleMenu} ref={button} />
            <nav className={`${styles.nav} ${toggled ? styles.toggled : ''}`} ref={wrapperRef}>
                { links }
            </nav>
        </div>
      </header>
    )
  }