import styles from './hamburgerButton.module.css'
import { forwardRef } from 'react';

export default forwardRef(function HamburgerButton({toggled, toggle}, ref){

    return (
        <button className={`${styles.hamburgerButton} ${toggled ? styles.toggled : ''}`} onClick={toggle} ref={ref}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )

})