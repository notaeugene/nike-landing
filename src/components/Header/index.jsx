import React from 'react'

import styles from './Header.module.scss'

import { ReactComponent as AppLogo } from '../../assets/logo.svg'
import { ReactComponent as ShapeSvg } from '../../assets/shapeTopLeft.svg'

const Header = () => (
    <header className={styles.root}>
        <AppLogo className={styles.appLogo} />
        <ShapeSvg className={styles.shapeSvg} />
        <nav>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <span className={styles.navLinkDefault}>Home</span>
                    <a href="#/" className={styles.navLinkHover}>Home</a>
                </li>
                <li className={`${styles.navItem} ${styles.navItemActive}`}>
                    <span className={styles.navLinkDefault}>Featured</span>
                    <a href="#/" className={styles.navLinkHover}>Featured</a>
                </li>
                <li className={styles.navItem}>
                    <span className={styles.navLinkDefault}>Product</span>
                    <a href="#/" className={styles.navLinkHover}>Product</a>
                </li>
                <li className={styles.navItem}>
                    <span className={styles.navLinkDefault}>About Us</span>
                    <a href="#/" className={styles.navLinkHover}>About Us</a>
                </li>
                <li className={styles.navItem}>
                    <span className={styles.navLinkDefault}>Contact Us</span>
                    <a href="#/" className={styles.navLinkHover}>Contact Us</a>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header