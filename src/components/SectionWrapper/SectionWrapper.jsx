import styles from './SectionWrapper.module.scss'

const SectionWrapper = ({ children, sectionClassName = "", divClassName = "" }) => {
    return (
        <section className={`${styles.wrapper} ${styles[sectionClassName]}`}>
            <div className={`${styles.container} ${styles[divClassName]}`}>
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper