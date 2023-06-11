'use client'

import styles from './scrollUpButton.module.css'
import UpArrow from './icons/upArrow'
import { useEffect, useState } from 'react'

export default function ScrollUpButton() {

  const [visible,setVisible] = useState(false)

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <button className={`${styles.scrollUpButton} ${visible ? styles.visible : ''}`} onClick={scrollUp}>
      <UpArrow />
    </button>
  )
}