import React from 'react'
import Code from './Code'

import styles from './Codes.module.scss'

const Codes = ({ codes }) => {
    return <div className={styles.container}>{codes.map((code, index) => <Code key={index} codeData={code} />)}</div>
}

export default Codes