import React from 'react'

import styles from './Content.module.scss'

const Content = () => (
    <div className={styles.root}>
        <div className={styles.productName}>Nike Air <br/>Zoom Pegasus 36</div>
        <div className={styles.productDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div className={styles.btnBuyWrapper}>
            <button className={styles.btnBuy}>Buy Now</button>
            <div className={styles.productPrice}>$150</div>
        </div>
    </div>
)

export default Content